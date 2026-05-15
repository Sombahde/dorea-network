import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { db } from '@/lib/db'
import { ok, err } from '@/lib/types'
import type { RequestType, UrgencyLevel, VisibilityLevel } from '@/lib/types'

const VALID_REQUEST_TYPES: RequestType[] = [
  'prayer_request',
  'emotional_support',
  'practical_need',
  'escalation',
]

const VALID_URGENCY_LEVELS: UrgencyLevel[] = ['low', 'medium', 'high', 'urgent']

const VALID_VISIBILITY_LEVELS: VisibilityLevel[] = ['private', 'leaders', 'community']

// POST /api/mvp/requests
// Creates a request and immediately acknowledges it in a single DB transaction.
// Acknowledgment is synchronous — no queue, no async — ensuring <60s SLA.
export async function POST(req: NextRequest) {
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

  try {
    const body = await req.json()
    const {
      request_type,
      title,
      description,
      urgency_level = 'medium',
      visibility_level = 'leaders',
    } = body

    // Validate
    if (!request_type || !VALID_REQUEST_TYPES.includes(request_type)) {
      return NextResponse.json(
        err('INVALID_REQUEST_TYPE', 'Please select a valid request type.'),
        { status: 400 }
      )
    }

    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      return NextResponse.json(
        err('MISSING_TITLE', 'Request title is required.'),
        { status: 400 }
      )
    }

    if (title.trim().length > 200) {
      return NextResponse.json(
        err('TITLE_TOO_LONG', 'Please keep the title under 200 characters.'),
        { status: 400 }
      )
    }

    if (description && typeof description === 'string' && description.length > 2000) {
      return NextResponse.json(
        err('DESCRIPTION_TOO_LONG', 'Please keep your message under 2000 characters.'),
        { status: 400 }
      )
    }

    if (!VALID_URGENCY_LEVELS.includes(urgency_level)) {
      return NextResponse.json(
        err('INVALID_URGENCY', 'Invalid urgency level.'),
        { status: 400 }
      )
    }

    if (!VALID_VISIBILITY_LEVELS.includes(visibility_level)) {
      return NextResponse.json(
        err('INVALID_VISIBILITY', 'Invalid visibility level.'),
        { status: 400 }
      )
    }

    const now = new Date()

    // Single transaction: create request + immediately acknowledge + audit events
    const request = await db.$transaction(async (tx) => {
      const created = await tx.request.create({
        data: {
          community_id: session.communityId,
          member_id: session.memberId,
          request_type,
          title: title.trim(),
          description: description?.trim() || null,
          urgency_level,
          visibility_level,
          status: 'open',
          // Acknowledge synchronously — this is the SLA guarantee
          acknowledgment_status: 'acknowledged',
          acknowledged_at: now,
        },
      })

      // Audit: request created
      await tx.auditEvent.create({
        data: {
          community_id: session.communityId,
          request_id: created.id,
          member_id: session.memberId,
          event_type: 'request_created',
          event_data: JSON.stringify({ request_type, urgency_level, visibility_level }),
        },
      })

      // Audit: request acknowledged
      await tx.auditEvent.create({
        data: {
          community_id: session.communityId,
          request_id: created.id,
          member_id: session.memberId,
          event_type: 'request_acknowledged',
          event_data: JSON.stringify({ acknowledged_at: now.toISOString(), method: 'automatic' }),
        },
      })

      return created
    })

    return NextResponse.json(
      ok({
        request: {
          id: request.id,
          community_id: request.community_id,
          member_id: request.member_id,
          request_type: request.request_type,
          title: request.title,
          description: request.description,
          urgency_level: request.urgency_level,
          visibility_level: request.visibility_level,
          status: request.status,
          acknowledgment_status: request.acknowledgment_status,
          assigned_member_id: request.assigned_member_id,
          created_at: request.created_at,
          acknowledged_at: request.acknowledged_at,
          resolved_at: request.resolved_at,
          last_follow_up_at: request.last_follow_up_at,
        },
        message: 'Your request has been received. You are not alone.',
      }),
      { status: 201 }
    )
  } catch (e) {
    console.error('Create request error:', e)
    return NextResponse.json(
      err('INTERNAL_ERROR', 'Something went wrong. Please try again.'),
      { status: 500 }
    )
  }
}

// GET /api/mvp/requests — returns requests visible to the current user
export async function GET(req: NextRequest) {
  const session = await getSession()
  if (!session) {
    return NextResponse.json(err('UNAUTHENTICATED', 'Not signed in.'), { status: 401 })
  }

  const activeMember = await db.member.findUnique({
    where: { id: session.memberId },
    select: { status: true },
  })
  if (!activeMember || activeMember.status !== 'active') {
    return NextResponse.json(err('UNAUTHENTICATED', 'Not signed in.'), { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const status = searchParams.get('status')
  const assigned_to_me = searchParams.get('assigned_to_me') === 'true'

  const where: Record<string, unknown> = {
    community_id: session.communityId,
  }

  // Members see only their own requests; volunteers/pastors/admins see assigned or all
  if (session.role === 'member') {
    where.member_id = session.memberId
  } else if (assigned_to_me) {
    where.assigned_member_id = session.memberId
  }

  if (status) where.status = status

  const requests = await db.request.findMany({
    where,
    orderBy: { created_at: 'desc' },
    take: 100,
  })

  return NextResponse.json(ok({ requests }))
}
