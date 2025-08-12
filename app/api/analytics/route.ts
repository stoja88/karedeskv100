import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/database'
import { getAuthUser } from '@/lib/auth'
import { handleApiError, AuthorizationError } from '@/lib/errors'

export async function GET(request: NextRequest) {
  try {
    const user = getAuthUser(request)
    
    // Only admins can access analytics
    if (!['ADMIN', 'SUPER_ADMIN'].includes(user.role)) {
      throw new AuthorizationError('Acceso denegado')
    }

    const { searchParams } = new URL(request.url)
    const period = searchParams.get('period') || '30' // days
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - parseInt(period))

    // Get analytics data
    const [
      userGrowth,
      ordersByService,
      revenueByMonth,
      conversionRate
    ] = await Promise.all([
      // User growth over time
      prisma.user.groupBy({
        by: ['createdAt'],
        where: {
          createdAt: { gte: startDate }
        },
        _count: true,
        orderBy: { createdAt: 'asc' }
      }),

      // Orders by service type
      prisma.order.groupBy({
        by: ['service'],
        where: {
          createdAt: { gte: startDate }
        },
        _count: true,
        _sum: { amount: true }
      }),

      // Revenue by month
      prisma.$queryRaw`
        SELECT 
          DATE_TRUNC('month', "createdAt") as month,
          SUM(amount) as revenue,
          COUNT(*) as orders
        FROM orders 
        WHERE "createdAt" >= ${startDate}
        AND status = 'COMPLETED'
        GROUP BY DATE_TRUNC('month', "createdAt")
        ORDER BY month ASC
      `,

      // Conversion rate (contacts to orders)
      prisma.$queryRaw`
        SELECT 
          (SELECT COUNT(*) FROM orders WHERE "createdAt" >= ${startDate}) as orders,
          (SELECT COUNT(*) FROM contacts WHERE "createdAt" >= ${startDate}) as contacts
      `
    ])

    const analytics = {
      userGrowth,
      ordersByService,
      revenueByMonth,
      conversionRate,
      period: parseInt(period)
    }

    return NextResponse.json(analytics)
  } catch (error) {
    const { message, statusCode } = handleApiError(error)
    return NextResponse.json({ error: message }, { status: statusCode })
  }
}