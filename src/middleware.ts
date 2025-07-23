import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Only process the home page
  if (request.nextUrl.pathname !== '/') {
    return NextResponse.next()
  }
  
  console.log('[Middleware] Processing home page')
  
  const response = NextResponse.next()
  
  // Check for existing variant
  let variant = request.cookies.get('hero-variant')?.value
  
  if (!variant) {
    // Simple random assignment
    const variants = ['A', 'B', 'C']
    variant = variants[Math.floor(Math.random() * variants.length)]
    
    console.log('[Middleware] Setting new variant:', variant)
    
    // Set cookie
    response.cookies.set('hero-variant', variant, {
      httpOnly: false,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30 // 30 days
    })
  } else {
    console.log('[Middleware] Existing variant:', variant)
  }
  
  return response
}

export const config = {
  matcher: '/',
}