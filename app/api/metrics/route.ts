import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/database'
import { getAuthUser } from '@/lib/auth'
import { handleApiError, AuthorizationError } from '@/lib/errors'

export async function GET(request: NextRequest) {
  try {
    const user = getAuthUser(request)
    
    // Only admins can access metrics
    if (!['ADMIN', 'SUPER_ADMIN'].includes(user.role)) {
      throw new AuthorizationError('Acceso denegado')
    }

    const { searchParams } = new URL(request.url)
    const days = parseInt(searchParams.get('days') || '30')
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)

    // Performance metrics
    const metrics = {
      // User metrics
      users: {
        total: await prisma.user.count(),
        active: await prisma.user.count({
          where: {
            lastLogin: { gte: startDate }
          }
        }),
        new: await prisma.user.count({
          where: {
            createdAt: { gte: startDate }
          }
        })
      },

      // Order metrics
      orders: {
        total: await prisma.order.count(),
        completed: await prisma.order.count({
          where: { status: 'COMPLETED' }
        }),
        pending: await prisma.order.count({
          where: { status: 'PENDING' }
        }),
        recent: await prisma.order.count({
          where: {
            createdAt: { gte: startDate }
          }
        })
      },

      // Revenue metrics
      revenue: {
        total: await prisma.order.aggregate({
          where: { status: 'COMPLETED' },
          _sum: { amount: true }
        }),
        recent: await prisma.order.aggregate({
          where: {
            status: 'COMPLETED',
            createdAt: { gte: startDate }
          },
          _sum: { amount: true }
        })
      },

      // Contact metrics
      contacts: {
        total: await prisma.contact.count(),
        pending: await prisma.contact.count({
          where: { status: 'NEW' }
        }),
        recent: await prisma.contact.count({
          where: {
            createdAt: { gte: startDate }
          }
        })
      },

      // Service popularity
      servicePopularity: await prisma.order.groupBy({
        by: ['service'],
        _count: true,
        _sum: { amount: true },
        orderBy: { _count: { service: 'desc' } }
      })
    }

    return NextResponse.json(metrics, {
      headers: {
        'Cache-Control': 'private, max-age=300' // Cache for 5 minutes
      }
    })
  } catch (error) {
    const { message, statusCode } = handleApiError(error)
    return NextResponse.json({ error: message }, { status: statusCode })
  }
}