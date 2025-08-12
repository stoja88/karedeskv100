import { NextRequest, NextResponse } from 'next/server'
import { getAuthUser } from '@/lib/auth'
import { prisma } from '@/lib/database'
import { handleApiError } from '@/lib/errors'

export async function POST(request: NextRequest) {
  try {
    // Get user from token (if valid)
    let userId: string | null = null
    try {
      const user = getAuthUser(request)
      userId = user.userId
    } catch (error) {
      // Token might be invalid, but we still want to clear the cookie
    }

    // Log logout if we have a valid user
    if (userId) {
      await prisma.auditLog.create({
        data: {
          userId,
          action: 'LOGOUT',
          entity: 'User',
          entityId: userId,
          details: {}
        }
      })
    }

    // Create response
    const response = NextResponse.json(
      { message: 'Logout exitoso' },
      { status: 200 }
    )

    // Clear auth cookie
    response.cookies.set('auth-token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0,
      path: '/',
    })

    return response
  } catch (error) {
    const { message, statusCode } = handleApiError(error)
    return NextResponse.json({ error: message }, { status: statusCode })
  }
}