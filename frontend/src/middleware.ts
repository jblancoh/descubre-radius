import { NextRequest, NextResponse } from 'next/server'

const USA_PATH = '/us'
const MASTERCLASS_PATH = '/masterclass/road-to-ai'
const PRIVACY_PATH = '/privacy-policy'

const protectedPaths = [USA_PATH, MASTERCLASS_PATH, PRIVACY_PATH]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (protectedPaths.includes(pathname)) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL(USA_PATH, request.url))
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'], // Protect all routes except necessary ones
}
