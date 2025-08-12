import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/database'
import { getAuthUser } from '@/lib/auth'
import { profileUpdateSchema, validateRequest } from '@/lib/validation'
import { handleApiError } from '@/lib/errors'
import { sanitizeInput } from '@/lib/security'


export async function GET(request: NextRequest) {
  try {
    const user = getAuthUser(request)

    const user = await prisma.user.findUnique({
      where: { id: user.userId },
      select: {
        id: true,
        name: true,
        email: true,
        company: true,
        phone: true,
        address: true,
        city: true,
        country: true,
        postalCode: true,
        taxId: true,
        role: true,
        createdAt: true,
        lastLogin: true
      }
    })

    if (!userData) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 })
    }

    // Update last login
    await prisma.user.update({
      where: { id: user.userId },
      data: { lastLogin: new Date() }
    })

    return NextResponse.json(userData)
  } catch (error) {
    const { message, statusCode } = handleApiError(error)
    return NextResponse.json({ error: message }, { status: statusCode })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const user = getAuthUser(request)

    const body = await request.json()
    const validatedData = validateRequest(profileUpdateSchema, body)

    // Sanitize inputs
    const sanitizedData = Object.fromEntries(
      Object.entries(validatedData).map(([key, value]) => [
        key,
        typeof value === 'string' ? sanitizeInput(value) : value
      ])
    )

    const updatedUser = await prisma.user.update({
      where: { id: user.userId },
      data: {
        ...sanitizedData,
        updatedAt: new Date()
      },
      select: {
        id: true,
        name: true,
        email: true,
        company: true,
        phone: true,
        address: true,
        city: true,
        country: true,
        postalCode: true,
        taxId: true,
        createdAt: true,
        updatedAt: true
      }
    })

    // Log audit
    await prisma.auditLog.create({
      data: {
        userId: user.userId,
        action: 'PROFILE_UPDATED',
        entity: 'User',
        entityId: user.userId,
        details: { updatedFields: Object.keys(validatedData) }
      }
    })

    return NextResponse.json(updatedUser)
  } catch (error) {
    const { message, statusCode } = handleApiError(error)
    return NextResponse.json({ error: message }, { status: statusCode })
  }
}