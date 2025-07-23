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
    
    // Set cookie with explicit domain for production
    const cookieOptions = {
      httpOnly: false,
      sameSite: 'lax' as const,
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/'
    }
    
    response.cookies.set('hero-variant', variant, cookieOptions)
  } else {
    console.log('[Middleware] Existing variant:', variant)
  }
  
  // Also set the variant in response headers for debugging
  response.headers.set('X-Hero-Variant', variant || 'none')
  
  return response
}

export const config = {
  matcher: '/',
}