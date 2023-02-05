import { NextRequest, NextResponse } from 'next/server'
import { apiRedirect, getSession } from '@/utils'

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/register')) {
    const session = await getSession(req)

    if (session) {
      return apiRedirect(req, '/')
    }

    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/login', '/register']
}
