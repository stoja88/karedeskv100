import { NextResponse } from 'next/server'
import { checkDatabaseConnection } from '@/lib/database'

export async function GET() {
  try {
    const dbHealthy = await checkDatabaseConnection()
    
    const health = {
      status: dbHealthy ? 'healthy' : 'unhealthy',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || '1.0.0',
      environment: process.env.NODE_ENV,
      database: dbHealthy ? 'connected' : 'disconnected',
      uptime: process.uptime()
    }

    return NextResponse.json(health, {
      status: dbHealthy ? 200 : 503,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
  } catch (error) {
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Health check failed',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}