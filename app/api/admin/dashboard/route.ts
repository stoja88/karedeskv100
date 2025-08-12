import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/database'
import { getAuthUser } from '@/lib/auth'
import { handleApiError, AuthorizationError } from '@/lib/errors'

export async function GET(request: NextRequest) {
  try {
    const user = getAuthUser(request)
    
    // Check admin permissions
    if (!['ADMIN', 'SUPER_ADMIN'].includes(user.role)) {
      throw new AuthorizationError('Acceso denegado')
    }

    // Get dashboard statistics
    const [
      totalUsers,
      totalOrders,
      totalRevenue,
      pendingContacts,
      recentOrders,
      recentContacts
    ] = await Promise.all([
      prisma.user.count(),
      prisma.order.count(),
      prisma.order.aggregate({
        where: { status: 'COMPLETED' },
        _sum: { amount: true }
      }),
      prisma.contact.count({
        where: { status: 'NEW' }
      }),
      prisma.order.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' },
        include: {
          user: {
            select: { name: true, email: true }
          }
        }
      }),
      prisma.contact.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' }
      })
    ])

    const stats = {
      totalUsers,
      totalOrders,
      totalRevenue: totalRevenue._sum.amount || 0,
      pendingContacts,
      recentOrders,
      recentContacts
    }

    return NextResponse.json(stats)
  } catch (error) {
    const { message, statusCode } = handleApiError(error)
    return NextResponse.json({ error: message }, { status: statusCode })
  }
}