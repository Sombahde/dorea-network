import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { db } from '@/lib/db'
import { ok, err } from '@/lib/types'

// GET /api/mvp/requests/:id
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getSession()
  if (!session) {
    return NextResponse.json(err('UNAUTHENTICATED', 'Not signed in.'), { status: 401 })
  }

  // Verify the member still exists and is active (catches deactivated accounts within JWT TTL)
  const activeMember = await db.member.findUnique({
    where: { id: session.memberId },
    select: { status: true },
  })
  if (!activeMember || activeMember.status !== 'active') {
    return NextResponse.json(err('UNAUTHENTICATED', 'Not signed in.'), { status: 401 })
  }

  const { id } = await params

  const request = await db.request.findUnique({ where: { id } })

  if (!request) {
    return NextResponse.json(err('NOT_FOUND', 'Request not found.'), { status: 404 })
  }

  // Members can only view their own requests
  if (session.role === 'member' && request.member_id !== session.memberId) {
    return NextResponse.json(err('FORBIDDEN', 'Access denied.'), { status: 403 })
  }

  // Volunteers are community-scoped. Community isolation is the hard gate — assignment
  // does not grant cross-community access to sensitive requests.
  if (session.role === 'volunteer' && request.community_id !== session.communityId) {
    return NextResponse.json(err('FORBIDDEN', 'Access denied.'), { status: 403 })
  }

  if (
    (session.role === 'pastor' || session.role === 'admin') &&
    request.community_id !== session.communityId
  ) {
    return NextResponse.json(err('FORBIDDEN', 'Access denied.'), { status: 403 })
  }

  const followUps = await db.auditEvent.findMany({
    where: { request_id: id },
    orderBy: { created_at: 'asc' },
    select: { id: true, event_type: true, member_id: true, event_data: true, created_at: true },
  })

  return NextResponse.json(
    ok({
      request,
      follow_ups: followUps,
      escalation: null, // Moment 2+ will populate this
    })
  )
}
