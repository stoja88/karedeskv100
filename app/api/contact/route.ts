import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/database'
import { contactSchema, validateRequest } from '@/lib/validation'
import { sanitizeInput, sanitizeEmail } from '@/lib/security'
import { handleApiError } from '@/lib/errors'
import { rateLimit } from '@/lib/rate-limit'
import { sendEmail } from '@/lib/email'


export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitResult = rateLimit(request, 5, 300000) // 5 submissions per 5 minutes
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Intenta de nuevo en 5 minutos.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const validatedData = validateRequest(contactSchema, body)

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(validatedData.name),
      email: sanitizeEmail(validatedData.email),
      company: validatedData.company ? sanitizeInput(validatedData.company) : null,
      phone: validatedData.phone ? sanitizeInput(validatedData.phone) : null,
      service: validatedData.service,
      message: sanitizeInput(validatedData.message)
    }

    // Create contact record
    const contact = await prisma.contact.create({
      data: {
        name: sanitizedData.name,
        email: sanitizedData.email,
        company: sanitizedData.company,
        phone: sanitizedData.phone,
        service: sanitizedData.service,
        message: sanitizedData.message,
      },
    })

    // Send notification email to admin (async)
    sendEmail({
      to: 'contacto@karedesk.com',
      subject: `Nueva consulta: ${sanitizedData.service}`,
      html: `
        <h2>Nueva consulta recibida</h2>
        <p><strong>Nombre:</strong> ${sanitizedData.name}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Empresa:</strong> ${sanitizedData.company || 'No especificada'}</p>
        <p><strong>Teléfono:</strong> ${sanitizedData.phone || 'No especificado'}</p>
        <p><strong>Servicio:</strong> ${sanitizedData.service}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${sanitizedData.message}</p>
      `
    }).catch(error => console.error('Failed to send notification email:', error))

    return NextResponse.json(
      { message: 'Contacto creado exitosamente', id: contact.id },
      { status: 201 }
    )
  } catch (error) {
    const { message, statusCode } = handleApiError(error)
    return NextResponse.json({ error: message }, { status: statusCode })
  }
}

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      take: 100, // Limit results
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(contacts)
  } catch (error) {
    const { message, statusCode } = handleApiError(error)
    return NextResponse.json({ error: message }, { status: statusCode })
  }
}