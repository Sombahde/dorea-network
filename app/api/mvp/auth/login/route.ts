import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { db } from '@/lib/db'
import { signSession, setSessionCookie } from '@/lib/auth'
import { ok, err } from '@/lib/types'

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json(
        err('MISSING_FIELDS', 'Email and password are required.'),
        { status: 400 }
      )
    }

    const member = await db.member.findUnique({
      where: { email: email.toLowerCase().trim() },
    })

    // Constant-time check even on miss to prevent timing attacks
    const hash = member?.password_hash ?? '$2a$12$invalidhashpadding000000000000000000000000000000000'
    const valid = await bcrypt.compare(password, hash)

    if (!member || !valid || member.status !== 'active') {
      return NextResponse.json(
        err('INVALID_CREDENTIALS', 'Email or password is incorrect.'),
        { status: 401 }
      )
    }

    const token = await signSession({
      memberId: member.id,
      communityId: member.community_id,
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
    console.error('Login error:', e)
    return NextResponse.json(
      err('INTERNAL_ERROR', 'Something went wrong. Please try again.'),
      { status: 500 }
    )
  }
}
