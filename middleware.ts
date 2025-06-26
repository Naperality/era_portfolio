import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const isStudio = url.pathname.startsWith('/studio')

  const token = request.cookies.get('studio-auth')?.value
  const secret = process.env.STUDIO_SECRET

  // Protect /studio route
  if (isStudio && token !== secret) {
    const loginUrl = new URL('/studio-login', request.url)
    loginUrl.searchParams.set('redirect', url.pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/studio/:path*'],
}
