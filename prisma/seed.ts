import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Service Plans for Web Vulnerability Analysis
  await prisma.servicePlan.upsert({
    where: { 
      service_name: { 
        service: 'WEB_VULNERABILITY_ANALYSIS', 
        name: 'Básico' 
      } 
    },
    update: {},
    create: {
      service: 'WEB_VULNERABILITY_ANALYSIS',
      name: 'Básico',
      price: 299,
      currency: 'EUR',
      billing: 'MONTHLY',
      features: [
        'Escaneo semanal automatizado',
        'Detección de vulnerabilidades básicas',
        'Reporte mensual por email',
        'Soporte por email',
        'Monitoreo de 1 dominio'
      ],
      description: 'Plan básico para pequeñas empresas'
    }
  })

  await prisma.servicePlan.upsert({
    where: { service_name: { service: 'WEB_VULNERABILITY_ANALYSIS', name: 'Profesional' } },
    update: {},
    create: {
      service: 'WEB_VULNERABILITY_ANALYSIS',
      name: 'Profesional',
      price: 599,
      currency: 'EUR',
      billing: 'MONTHLY',
      features: [
        'Escaneo diario automatizado',
        'Detección avanzada de amenazas',
        'Reportes semanales detallados',
        'Soporte prioritario 24/7',
        'Monitoreo de hasta 5 dominios',
        'Análisis de reputación online',
        'Alertas en tiempo real'
      ],
      description: 'Plan profesional para empresas medianas'
    }
  })

  await prisma.servicePlan.upsert({
    where: { service_name: { service: 'WEB_VULNERABILITY_ANALYSIS', name: 'Enterprise' } },
    update: {},
    create: {
      service: 'WEB_VULNERABILITY_ANALYSIS',
      name: 'Enterprise',
      price: 1299,
      currency: 'EUR',
      billing: 'MONTHLY',
      features: [
        'Escaneo continuo 24/7',
        'Análisis de código fuente',
        'Reportes personalizados',
        'Consultor dedicado',
        'Dominios ilimitados',
        'Integración con SIEM',
        'Certificaciones de seguridad',
        'Auditorías trimestrales'
      ],
      description: 'Plan enterprise para grandes empresas'
    }
  })

  // Service Plans for Remote IT Support
  await prisma.servicePlan.upsert({
    where: { service_name: { service: 'REMOTE_IT_SUPPORT', name: 'Básico' } },
    update: {},
    create: {
      service: 'REMOTE_IT_SUPPORT',
      name: 'Básico',
      price: 99,
      currency: 'EUR',
      billing: 'MONTHLY',
      features: [
        '10 horas de soporte mensual',
        'Soporte en horario laboral',
        'Acceso remoto seguro',
        'Respuesta en 2 horas',
        'Soporte por email y chat'
      ],
      description: 'Soporte básico para pequeñas empresas'
    }
  })

  await prisma.servicePlan.upsert({
    where: { service_name: { service: 'REMOTE_IT_SUPPORT', name: 'Profesional' } },
    update: {},
    create: {
      service: 'REMOTE_IT_SUPPORT',
      name: 'Profesional',
      price: 199,
      currency: 'EUR',
      billing: 'MONTHLY',
      features: [
        '25 horas de soporte mensual',
        'Soporte 24/7',
        'Acceso remoto prioritario',
        'Respuesta en 30 minutos',
        'Soporte telefónico incluido',
        'Mantenimiento preventivo',
        'Backup automático'
      ],
      description: 'Soporte profesional con disponibilidad extendida'
    }
  })

  await prisma.servicePlan.upsert({
    where: { service_name: { service: 'REMOTE_IT_SUPPORT', name: 'Enterprise' } },
    update: {},
    create: {
      service: 'REMOTE_IT_SUPPORT',
      name: 'Enterprise',
      price: 399,
      currency: 'EUR',
      billing: 'MONTHLY',
      features: [
        'Horas ilimitadas',
        'Soporte dedicado 24/7',
        'Técnico asignado',
        'Respuesta inmediata',
        'Todos los canales de soporte',
        'Mantenimiento proactivo',
        'Monitoreo continuo',
        'Reportes mensuales'
      ],
      description: 'Soporte enterprise con técnico dedicado'
    }
  })

  // Service Plans for Express Web Creation
  await prisma.servicePlan.upsert({
    where: { service_name: { service: 'EXPRESS_WEB_CREATION', name: 'Landing Page' } },
    update: {},
    create: {
      service: 'EXPRESS_WEB_CREATION',
      name: 'Landing Page',
      price: 799,
      currency: 'EUR',
      billing: 'ONE_TIME',
      features: [
        'Diseño responsive profesional',
        'Formulario de contacto',
        'Optimización SEO básica',
        'Hosting y dominio 1 año',
        'Certificado SSL',
        'Entrega en 48h'
      ],
      description: 'Página única optimizada para conversión'
    }
  })

  await prisma.servicePlan.upsert({
    where: { service_name: { service: 'EXPRESS_WEB_CREATION', name: 'Web Corporativa' } },
    update: {},
    create: {
      service: 'EXPRESS_WEB_CREATION',
      name: 'Web Corporativa',
      price: 1299,
      currency: 'EUR',
      billing: 'ONE_TIME',
      features: [
        'Hasta 8 páginas',
        'Panel de administración',
        'Blog integrado',
        'Galería de imágenes',
        'Formularios avanzados',
        'SEO completo',
        'Hosting y dominio 1 año',
        'Entrega en 72h'
      ],
      description: 'Sitio web completo para tu empresa'
    }
  })

  await prisma.servicePlan.upsert({
    where: { service_name: { service: 'EXPRESS_WEB_CREATION', name: 'E-commerce' } },
    update: {},
    create: {
      service: 'EXPRESS_WEB_CREATION',
      name: 'E-commerce',
      price: 2499,
      currency: 'EUR',
      billing: 'ONE_TIME',
      features: [
        'Catálogo de productos',
        'Carrito de compras',
        'Pasarela de pago',
        'Gestión de inventario',
        'Panel administrativo',
        'SEO para productos',
        'Hosting especializado',
        'Entrega en 5 días'
      ],
      description: 'Tienda online completa'
    }
  })

  // Service Plans for AI Consulting
  await prisma.servicePlan.upsert({
    where: { service_name: { service: 'AI_CONSULTING', name: 'Consultoría Básica' } },
    update: {},
    create: {
      service: 'AI_CONSULTING',
      name: 'Consultoría Básica',
      price: 1299,
      currency: 'EUR',
      billing: 'ONE_TIME',
      features: [
        'Análisis inicial de procesos',
        'Identificación de oportunidades',
        'Propuesta de implementación',
        'Roadmap de 6 meses',
        '2 sesiones de consultoría',
        'Reporte ejecutivo'
      ],
      description: 'Consultoría inicial para identificar oportunidades de IA'
    }
  })

  await prisma.servicePlan.upsert({
    where: { service_name: { service: 'AI_CONSULTING', name: 'Implementación IA' } },
    update: {},
    create: {
      service: 'AI_CONSULTING',
      name: 'Implementación IA',
      price: 3999,
      currency: 'EUR',
      billing: 'ONE_TIME',
      features: [
        'Todo lo del plan básico',
        'Desarrollo de solución IA',
        'Integración con sistemas',
        'Formación del equipo',
        'Soporte 3 meses',
        'Optimización inicial',
        'Documentación completa'
      ],
      description: 'Implementación completa de solución IA'
    }
  })

  await prisma.servicePlan.upsert({
    where: { service_name: { service: 'AI_CONSULTING', name: 'Transformación Digital' } },
    update: {},
    create: {
      service: 'AI_CONSULTING',
      name: 'Transformación Digital',
      price: 9999,
      currency: 'EUR',
      billing: 'ONE_TIME',
      features: [
        'Consultoría estratégica completa',
        'Múltiples soluciones IA',
        'Integración empresarial',
        'Formación avanzada',
        'Soporte 12 meses',
        'Consultor dedicado',
        'ROI garantizado',
        'Escalabilidad futura'
      ],
      description: 'Transformación digital completa con IA'
    }
  })

  console.log('✅ Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })