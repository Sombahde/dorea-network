import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { db } from '@/lib/db'
import { signSession, setSessionCookie } from '@/lib/auth'
import { ok, err } from '@/lib/types'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, password, inviteCode } = body

    if (!firstName || !lastName || !email || !password || !inviteCode) {
      return NextResponse.json(
        err('MISSING_FIELDS', 'All fields are required.'),
        { status: 400 }
      )
    }

    if (password.length < 8) {
      return NextResponse.json(
        err('WEAK_PASSWORD', 'Password must be at least 8 characters.'),
        { status: 400 }
      )
    }

    // Validate invite code
    const community = await db.community.findUnique({
      where: { invite_code: inviteCode.trim() },
    })

    if (!community || community.status !== 'active') {
      return NextResponse.json(
        err('INVALID_INVITE_CODE', 'That invite code is not recognised. Please check with your pastor or leader.'),
        { status: 400 }
      )
    }

    // Check email not already taken
    const existing = await db.member.findUnique({ where: { email: email.toLowerCase() } })
    if (existing) {
      return NextResponse.json(
        err('EMAIL_TAKEN', 'An account with that email already exists. Try signing in.'),
        { status: 409 }
      )
    }

    const passwordHash = await bcrypt.hash(password, 12)

    const member = await db.member.create({
      data: {
        community_id: community.id,
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        email: email.toLowerCase().trim(),
        password_hash: passwordHash,
        role: 'member',
        onboarding_accepted: true,
      },
    })

    const token = await signSession({
      memberId: member.id,
      communityId: community.id,
      role: member.role,
      email: member.email,
      firstName: member.first_name,
    })

    const response = NextResponse.json(
      ok({ member: { id: member.id, email: member.email, firstName: member.first_name } })
    )
    setSessionCookie(response, token)
    return response
  } catch (e) {
    console.error('Register error:', e)
    return NextResponse.json(
      err('INTERNAL_ERROR', 'Something went wrong. Please try again.'),
      { status: 500 }
    )
  }
}
