import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Limpiar datos existentes
  await prisma.servicePlan.deleteMany()

  // Service Plans for Web Vulnerability Analysis
  await prisma.servicePlan.create({
    data: {
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

  await prisma.servicePlan.create({
    data: {
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

  await prisma.servicePlan.create({
    data: {
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
  await prisma.servicePlan.create({
    data: {
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

  await prisma.servicePlan.create({
    data: {
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