import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/server/utils'

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  const session = await getSession(req)

  if (pathname.startsWith('/app')) {
    if (!session) {
      return NextResponse.redirect(new URL('/login', req.url))
    }

    return NextResponse.next()
  }

  if (
    pathname.startsWith('/login') ||
    pathname.startsWith('/register') ||
    pathname.startsWith('/')
  ) {
    if (session) {
      return NextResponse.redirect(new URL('/app', req.url))
    }

    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/login', '/register', '/', '/app/:path*']
}
