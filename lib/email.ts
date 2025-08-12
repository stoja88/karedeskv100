interface EmailOptions {
  to: string
  subject: string
  html: string
  text?: string
}

export async function sendEmail({ to, subject, html, text }: EmailOptions): Promise<boolean> {
  // In development, just log the email
  if (process.env.NODE_ENV === 'development') {
    console.log('📧 Email would be sent:', { to, subject, html })
    return true
  }

  // TODO: Implement actual email sending with your preferred service
  // Examples: SendGrid, Resend, Nodemailer, etc.
  
  try {
    // Placeholder for actual email implementation
    console.log('Sending email to:', to)
    return true
  } catch (error) {
    console.error('Failed to send email:', error)
    return false
  }
}

export function generateWelcomeEmail(name: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Bienvenido a Karedesk</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #7FBFBF;">¡Bienvenido a Karedesk!</h1>
        </div>
        
        <p>Hola ${name},</p>
        
        <p>¡Gracias por registrarte en Karedesk! Tu cuenta ha sido creada exitosamente.</p>
        
        <p>Ahora puedes acceder a nuestros servicios de asistencia digital avanzada:</p>
        
        <ul>
          <li>🛡️ Análisis de Vulnerabilidades Web</li>
          <li>⚡ Asistencia Informática Remota</li>
          <li>🌐 Creación de Webs Express</li>
          <li>🤖 Consultoría IA</li>
        </ul>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${process.env.NEXTAUTH_URL}/dashboard" 
             style="background: #7FBFBF; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block;">
            Acceder a mi Panel
          </a>
        </div>
        
        <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
        
        <p>Saludos,<br>El equipo de Karedesk</p>
      </div>
    </body>
    </html>
  `
}

export function generateOrderConfirmationEmail(orderDetails: any): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Confirmación de Pedido - Karedesk</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #7FBFBF; text-align: center;">¡Pedido Confirmado!</h1>
        
        <p>Tu pedido ha sido procesado exitosamente:</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Detalles del Pedido</h3>
          <p><strong>Número:</strong> #${orderDetails.id.slice(-8).toUpperCase()}</p>
          <p><strong>Servicio:</strong> ${orderDetails.service}</p>
          <p><strong>Plan:</strong> ${orderDetails.plan}</p>
          <p><strong>Total:</strong> €${orderDetails.amount}</p>
        </div>
        
        <p>Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas para comenzar con tu proyecto.</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${process.env.NEXTAUTH_URL}/dashboard" 
             style="background: #7FBFBF; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block;">
            Ver Mi Panel
          </a>
        </div>
      </div>
    </body>
    </html>
  `
}