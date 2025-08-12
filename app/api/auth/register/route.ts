import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/database'
import { registerSchema, validateRequest } from '@/lib/validation'
import { sanitizeInput, sanitizeEmail } from '@/lib/security'
import { handleApiError, ConflictError } from '@/lib/errors'
import { rateLimit } from '@/lib/rate-limit'
import { sendEmail, generateWelcomeEmail } from '@/lib/email'
import bcrypt from 'bcryptjs'


export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitResult = rateLimit(request, 3, 300000) // 3 attempts per 5 minutes
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Demasiados intentos de registro. Intenta de nuevo en 5 minutos.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const validatedData = validateRequest(registerSchema, body)

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(validatedData.name),
      email: sanitizeEmail(validatedData.email),
      company: validatedData.company ? sanitizeInput(validatedData.company) : null,
      password: validatedData.password
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: sanitizedData.email }
    })

    if (existingUser) {
      throw new ConflictError('El usuario ya existe')
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(sanitizedData.password, 12)

    // Create user
    const user = await prisma.user.create({
      data: {
        name: sanitizedData.name,
        email: sanitizedData.email,
        company: sanitizedData.company,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        company: true,
        role: true,
        createdAt: true,
      }
    })

    // Log user creation
    await prisma.auditLog.create({
      data: {
        userId: user.id,
        action: 'USER_CREATED',
        entity: 'User',
        entityId: user.id,
        details: { email: user.email, name: user.name }
      }
    })

    // Send welcome email (async, don't wait)
    sendEmail({
      to: user.email,
      subject: 'Bienvenido a Karedesk',
      html: generateWelcomeEmail(user.name)
    }).catch(error => console.error('Failed to send welcome email:', error))

    return NextResponse.json(
      { message: 'Usuario creado exitosamente', user },
      { status: 201 }
    )
  } catch (error) {
    const { message, statusCode } = handleApiError(error)
    return NextResponse.json({ error: message }, { status: statusCode })
  }
}