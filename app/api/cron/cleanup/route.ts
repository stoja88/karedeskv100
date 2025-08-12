import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  // Verify the request is from Vercel Cron
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    // Clean up old contact records (older than 6 months)
    const sixMonthsAgo = new Date()
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)

    const deletedContacts = await prisma.contact.deleteMany({
      where: {
        createdAt: {
          lt: sixMonthsAgo
        }
      }
    })

    // Clean up old consultation records (older than 1 year)
    const oneYearAgo = new Date()
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)

    const deletedConsultations = await prisma.consultation.deleteMany({
      where: {
        createdAt: {
          lt: oneYearAgo
        },
        status: 'COMPLETED'
      }
    })

    return NextResponse.json({
      success: true,
      deletedContacts: deletedContacts.count,
      deletedConsultations: deletedConsultations.count,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Cleanup cron job failed:', error)
    return NextResponse.json(
      { error: 'Cleanup failed' },
      { status: 500 }
    )
  }
}