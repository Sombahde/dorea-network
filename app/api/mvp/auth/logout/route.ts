import { NextResponse } from 'next/server'
import { clearSessionCookie } from '@/lib/auth'
import { ok } from '@/lib/types'

export async function POST() {
  const response = NextResponse.json(ok({ message: 'Signed out.' }))
  clearSessionCookie(response)
  return response
}
