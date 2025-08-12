import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import Stripe from 'stripe'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // Use a compatible, pinned version to satisfy types at build time
  apiVersion: '2023-10-16',
})

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Token requerido' }, { status: 401 })
    }

    const token = authHeader.substring(7)
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any
    const userId = decoded.userId

    const body = await request.json()
    const { service, plan, amount, currency = 'EUR', description } = body

    // Validate required fields
    if (!service || !plan || !amount) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      )
    }

    // Get user info
    const user = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!user) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 })
    }

    // Create order in database
    const order = await prisma.order.create({
      data: {
        userId,
        service,
        plan,
        amount,
        currency,
        description,
        status: 'PENDING'
      }
    })

    // Create Stripe payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: currency.toLowerCase(),
      metadata: {
        orderId: order.id,
        userId,
        service,
        plan
      },
      description: `${service} - ${plan} - ${user.name}`,
      receipt_email: user.email,
    })

    // Update order with Stripe payment intent ID
    await prisma.order.update({
      where: { id: order.id },
      data: { paymentId: paymentIntent.id }
    })

    // Create payment record
    await prisma.payment.create({
      data: {
        orderId: order.id,
        amount,
        currency,
        method: 'STRIPE',
        stripeId: paymentIntent.id,
        status: 'PENDING'
      }
    })

    // Log audit
    await prisma.auditLog.create({
      data: {
        userId,
        action: 'PAYMENT_INTENT_CREATED',
        entity: 'Order',
        entityId: order.id,
        details: { service, plan, amount, currency }
      }
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      orderId: order.id,
      amount,
      currency
    })
  } catch (error) {
    console.error('Error creating payment intent:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}