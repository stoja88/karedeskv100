import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/database'
import { loginSchema, validateRequest } from '@/lib/validation'
import { verifyPassword } from '@/lib/security'
import { createToken } from '@/lib/auth'
import { handleApiError, AuthenticationError } from '@/lib/errors'
import { rateLimit } from '@/lib/rate-limit'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitResult = rateLimit(request, 5, 300000) // 5 attempts per 5 minutes
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Demasiados intentos de login. Intenta de nuevo en 5 minutos.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { email, password } = validateRequest(loginSchema, body)

    // Find user
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() }
    })

    if (!user) {
      throw new AuthenticationError('Credenciales inválidas')
    }

    if (!user.isActive) {
      throw new AuthenticationError('Cuenta desactivada')
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      throw new AuthenticationError('Credenciales inválidas')
    }

    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() }
    })

    // Create JWT token
    const token = createToken(user)

    // Create response
    const response = NextResponse.json(
      { 
        message: 'Login exitoso',
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          company: user.company,
          role: user.role,
        }
      },
      { status: 200 }
    )

    // Set HTTP-only cookie
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/',
    })

    // Log successful login
    await prisma.auditLog.create({
      data: {
        userId: user.id,
        action: 'LOGIN_SUCCESS',
        entity: 'User',
        entityId: user.id,
        details: { email: user.email }
      }
    })

    return response
  } catch (error) {
    const { message, statusCode } = handleApiError(error)
    return NextResponse.json({ error: message }, { status: statusCode })
  }
}