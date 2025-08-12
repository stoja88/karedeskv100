import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/database'
import { getAuthUser } from '@/lib/auth'
import { orderSchema, validateRequest } from '@/lib/validation'
import { handleApiError } from '@/lib/errors'
import { sendEmail, generateOrderConfirmationEmail } from '@/lib/email'


export async function GET(request: NextRequest) {
  try {
    const user = getAuthUser(request)

    const orders = await prisma.order.findMany({
      where: { userId: user.userId },
      include: {
        payments: true,
        invoice: true
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(orders)
  } catch (error) {
    const { message, statusCode } = handleApiError(error)
    return NextResponse.json({ error: message }, { status: statusCode })
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = getAuthUser(request)

    const body = await request.json()
    const validatedData = validateRequest(orderSchema, body)

    const order = await prisma.order.create({
      data: {
        userId: user.userId,
        service: validatedData.service,
        plan: validatedData.plan,
        amount: validatedData.amount,
        currency: validatedData.currency,
        description: validatedData.description,
        metadata: validatedData.metadata,
        status: 'PENDING'
      },
      include: {
        user: true
      }
    })

    // Log audit
    await prisma.auditLog.create({
      data: {
        userId: user.userId,
        action: 'ORDER_CREATED',
        entity: 'Order',
        entityId: order.id,
        details: { 
          service: validatedData.service, 
          plan: validatedData.plan, 
          amount: validatedData.amount 
        }
      }
    })

    // Send order confirmation email (async)
    sendEmail({
      to: order.user.email,
      subject: 'Confirmación de Pedido - Karedesk',
      html: generateOrderConfirmationEmail(order)
    }).catch(error => console.error('Failed to send order confirmation:', error))

    return NextResponse.json(order, { status: 201 })
  } catch (error) {
    const { message, statusCode } = handleApiError(error)
    return NextResponse.json({ error: message }, { status: statusCode })
  }
}