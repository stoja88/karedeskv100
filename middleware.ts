import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Public routes that don't require authentication
  const publicRoutes = [
    '/',
    '/login',
    '/register',
    '/servicios',
    '/api/contact',
    '/api/service-plans',
    '/api/sitemap',
    '/api/payments/webhook'
  ]

  // Check if route is public or starts with public path
  const isPublicRoute = publicRoutes.some(route => 
    pathname === route || pathname.startsWith('/servicios/') || pathname.startsWith('/api/auth/')
  )

  if (isPublicRoute) {
    return NextResponse.next()
  }

  // Protected routes - check for authentication
  const token = request.cookies.get('auth-token')?.value

  if (!token) {
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }
    return NextResponse.redirect(new URL('/login', request.url))
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET!)
    return NextResponse.next()
  } catch (error) {
    // Invalid token
    const response = pathname.startsWith('/api/')
      ? NextResponse.json({ error: 'Token inválido' }, { status: 401 })
      : NextResponse.redirect(new URL('/login', request.url))
    
    // Clear invalid token
    response.cookies.delete('auth-token')
    return response
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|logo.png|logo.svg).*)',
  ],
}