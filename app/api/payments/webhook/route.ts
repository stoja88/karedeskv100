import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import Stripe from 'stripe'

const prisma = new PrismaClient()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')!

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, endpointSecret)
    } catch (err) {
      console.error('Webhook signature verification failed:', err)
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        await handlePaymentSuccess(event.data.object as Stripe.PaymentIntent)
        break
      case 'payment_intent.payment_failed':
        await handlePaymentFailed(event.data.object as Stripe.PaymentIntent)
        break
      case 'invoice.payment_succeeded':
        await handleInvoicePaymentSuccess(event.data.object as Stripe.Invoice)
        break
      default:
        console.log(`Unhandled event type ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}

async function handlePaymentSuccess(paymentIntent: Stripe.PaymentIntent) {
  const orderId = paymentIntent.metadata.orderId
  const userId = paymentIntent.metadata.userId

  if (!orderId) return

  // Update order status
  await prisma.order.update({
    where: { id: orderId },
    data: { status: 'CONFIRMED' }
  })

  // Update payment status
  await prisma.payment.updateMany({
    where: { stripeId: paymentIntent.id },
    data: { 
      status: 'COMPLETED',
      processedAt: new Date()
    }
  })

  // Create invoice
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: { user: true }
  })

  if (order) {
    const invoiceNumber = `INV-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`
    const tax = order.amount * 0.21 // 21% IVA in Spain
    const total = order.amount + tax

    await prisma.invoice.create({
      data: {
        orderId: order.id,
        userId: order.userId,
        number: invoiceNumber,
        amount: order.amount,
        tax,
        total,
        status: 'PAID',
        dueDate: new Date(),
        paidAt: new Date()
      }
    })

    // Create consultation if needed
    await prisma.consultation.create({
      data: {
        userId: order.userId,
        service: order.service,
        description: `Consulta para ${order.service} - Plan ${order.plan}`,
        status: 'PENDING'
      }
    })
  }

  // Log audit
  await prisma.auditLog.create({
    data: {
      userId: userId || null,
      action: 'PAYMENT_COMPLETED',
      entity: 'Order',
      entityId: orderId,
      details: { 
        amount: paymentIntent.amount / 100,
        currency: paymentIntent.currency 
      }
    }
  })
}

async function handlePaymentFailed(paymentIntent: Stripe.PaymentIntent) {
  const orderId = paymentIntent.metadata.orderId

  if (!orderId) return

  // Update payment status
  await prisma.payment.updateMany({
    where: { stripeId: paymentIntent.id },
    data: { 
      status: 'FAILED',
      failureReason: paymentIntent.last_payment_error?.message || 'Payment failed'
    }
  })

  // Log audit
  await prisma.auditLog.create({
    data: {
      userId: paymentIntent.metadata.userId || null,
      action: 'PAYMENT_FAILED',
      entity: 'Order',
      entityId: orderId,
      details: { 
        error: paymentIntent.last_payment_error?.message 
      }
    }
  })
}

async function handleInvoicePaymentSuccess(invoice: Stripe.Invoice) {
  // Handle subscription invoice payments
  console.log('Invoice payment succeeded:', invoice.id)
}