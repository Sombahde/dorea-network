// Dorea Network — Route protection middleware
// Runs on Edge runtime — uses `jose` directly (no Node.js bcrypt here)

import { NextRequest, NextResponse } from 'next/server'
import { getSessionFromRequest } from '@/lib/auth'

// Routes that require authentication
const PROTECTED_PREFIXES = ['/request']

// Routes that should redirect authenticated users away (login, register)
const AUTH_ONLY_PATHS = ['/login', '/register']

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  const isProtected = PROTECTED_PREFIXES.some((p) => pathname.startsWith(p))
  const isAuthOnly = AUTH_ONLY_PATHS.some((p) => pathname === p)

  const session = await getSessionFromRequest(req)

  if (isProtected && !session) {
    const loginUrl = new URL('/login', req.url)
    loginUrl.searchParams.set('from', pathname)
    return NextResponse.redirect(loginUrl)
  }

  if (isAuthOnly && session) {
    return NextResponse.redirect(new URL('/request/new', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/request/:path*', '/login', '/register'],
}
