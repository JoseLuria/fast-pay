import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/utils'

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith('/app')) {
    const session = await getSession(req)

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
    const session = await getSession(req)

    if (session) {
      return NextResponse.redirect(new URL('/app', req.url))
    }

    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/login', '/register', '/', '/app/:path*']
}
