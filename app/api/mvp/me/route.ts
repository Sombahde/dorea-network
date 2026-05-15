import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { db } from '@/lib/db'
import { ok, err } from '@/lib/types'

export async function GET() {
  const session = await getSession()
  if (!session) {
    return NextResponse.json(err('UNAUTHENTICATED', 'Not signed in.'), { status: 401 })
  }

  const member = await db.member.findUnique({
    where: { id: session.memberId },
    select: {
      id: true,
      community_id: true,
      first_name: true,
      last_name: true,
      email: true,
      phone: true,
      role: true,
      status: true,
      notification_sms: true,
      notification_email: true,
      notification_push: true,
    },
  })

  if (!member) {
    return NextResponse.json(err('NOT_FOUND', 'Member not found.'), { status: 404 })
  }

  if (member.status !== 'active') {
    return NextResponse.json(err('UNAUTHENTICATED', 'Not signed in.'), { status: 401 })
  }

  return NextResponse.json(
    ok({
      member: {
        id: member.id,
        community_id: member.community_id,
        first_name: member.first_name,
        last_name: member.last_name,
        email: member.email,
        phone: member.phone,
        role: member.role,
        status: member.status,
        notification_preferences: {
          sms: member.notification_sms,
          email: member.notification_email,
          push: member.notification_push,
        },
      },
    })
  )
}
