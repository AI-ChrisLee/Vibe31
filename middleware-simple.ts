import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('MIDDLEWARE IS RUNNING!')
  const response = NextResponse.next()
  response.cookies.set('test-cookie', 'it-works')
  return response
}

export const config = {
  matcher: '/:path*',
}