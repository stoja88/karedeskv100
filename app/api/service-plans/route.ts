import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const service = searchParams.get('service')

    const where = service ? { service: service as any, isActive: true } : { isActive: true }

    const plans = await prisma.servicePlan.findMany({
      where,
      orderBy: { price: 'asc' }
    })

    return NextResponse.json(plans)
  } catch (error) {
    console.error('Error fetching service plans:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { service, name, price, currency, billing, features, description } = body

    // Validate required fields
    if (!service || !name || !price || !features) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      )
    }

    const plan = await prisma.servicePlan.create({
      data: {
        service,
        name,
        price,
        currency: currency || 'EUR',
        billing: billing || 'MONTHLY',
        features,
        description
      }
    })

    return NextResponse.json(plan, { status: 201 })
  } catch (error) {
    console.error('Error creating service plan:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}