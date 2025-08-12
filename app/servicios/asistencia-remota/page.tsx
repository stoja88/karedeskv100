'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Zap, ArrowLeft, CheckCircle, Monitor, Headphones, Settings, Users, Clock } from 'lucide-react'
import Footer from '@/components/Footer'
import ServiceContactForm from '@/components/ServiceContactForm'

export default function AsistenciaRemotaPage() {
  const features = [
    {
      icon: Monitor,
      title: 'Acceso Remoto Seguro',
      description: 'Conexión cifrada y segura para resolver problemas sin comprometer tu privacidad.'
    },
    {
      icon: Headphones,
      title: 'Soporte 24/7',
      description: 'Técnicos disponibles las 24 horas, los 7 días de la semana para ayudarte.'
    },
    {
      icon: Clock,
      title: 'Resolución Rápida',
      description: 'La mayoría de problemas se resuelven en menos de 30 minutos.'
    },
    {
      icon: Users,
      title: 'Técnicos Certificados',
      description: 'Profesionales con certificaciones internacionales y amplia experiencia.'
    },
    {
      icon: Settings,
      title: 'Mantenimiento Preventivo',
      description: 'Optimización y mantenimiento regular para prevenir futuros problemas.'
    },
    {
      icon: Zap,
      title: 'Respuesta Inmediata',
      description: 'Tiempo de respuesta promedio de menos de 5 minutos.'
    }
  ]

  const services = [
    'Resolución de problemas de software',
    'Configuración de sistemas y aplicaciones',
    'Instalación y actualización de programas',
    'Optimización de rendimiento',
    'Backup y recuperación de datos',
    'Configuración de redes y conectividad',
    'Soporte para Office y aplicaciones empresariales',
    'Limpieza y mantenimiento del sistema',
    'Configuración de seguridad',
    'Migración de datos y sistemas'
  ]

  const plans = [
    {
      name: 'Básico',
      price: '€99',
      period: 'único',
      features: [
        '10 horas de soporte mensual',
        'Soporte en horario laboral',
        'Acceso remoto seguro',
        'Respuesta en 2 horas',
        'Soporte por email y chat'
      ],
      popular: false
    },
    {
      name: 'Profesional',
      price: '€199',
      period: 'único',
      features: [
        '25 horas de soporte mensual',
        'Soporte 24/7',
        'Acceso remoto prioritario',
        'Respuesta en 30 minutos',
        'Soporte telefónico incluido',
        'Mantenimiento preventivo',
        'Backup automático'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '€399',
      period: 'único',
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
      popular: false
    }
  ]

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-bg"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-karedesk-primary/10 rounded-full blur-3xl floating-element"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center text-gray-300 hover:text-karedesk-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>

          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="w-20 h-20 bg-karedesk-primary/20 rounded-2xl flex items-center justify-center mr-4">
                <Zap className="w-10 h-10 text-karedesk-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Asistencia <span className="gradient-text">Remota</span>
                </h1>
                <p className="text-xl text-karedesk-primary font-semibold">
                  Soporte Técnico Inmediato
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 leading-relaxed mb-8"
            >
              Resuelve cualquier problema técnico al instante con nuestro servicio de asistencia remota. 
              Técnicos certificados disponibles 24/7 para mantener tu negocio funcionando sin interrupciones.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="#contacto" className="btn-primary px-8 py-4 rounded-lg text-black font-semibold">
                Soporte Inmediato
              </Link>
              <Link href="#planes" className="glass-effect px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Ver Planes
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Soporte técnico <span className="gradient-text">profesional</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nuestro equipo de expertos está listo para resolver cualquier problema técnico
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="service-card rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-karedesk-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-karedesk-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-karedesk-gray/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿En qué podemos <span className="gradient-text">ayudarte</span>?
            </h2>
            <p className="text-xl text-gray-300">
              Servicios técnicos completos para mantener tu tecnología funcionando perfectamente
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 glass-effect rounded-lg p-4"
              >
                <CheckCircle className="w-5 h-5 text-karedesk-primary flex-shrink-0" />
                <span className="text-gray-300">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planes" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Planes de <span className="gradient-text">Soporte</span>
            </h2>
            <p className="text-xl text-gray-300">
              Elige el plan que mejor se adapte a tus necesidades
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass-effect rounded-2xl p-8 relative ${
                  plan.popular ? 'ring-2 ring-karedesk-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-karedesk-primary text-black px-4 py-2 rounded-full text-sm font-semibold">
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-karedesk-primary flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/checkout?service=REMOTE_IT_SUPPORT&plan=${plan.name}&amount=${plan.price.replace('€','')}`}
                    className={`flex-1 py-3 rounded-lg font-bold text-center block transition-colors btn-primary text-black`}
                  >
                    💳 Pagar ahora
                  </Link>
                  <Link
                    href="#contacto"
                    className={`flex-1 glass-effect py-3 rounded-lg font-semibold text-center hover:bg-white/10`}
                  >
                    📞 Consultar primero
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-karedesk-gray/50">
        <div className="container mx-auto px-6">
          <ServiceContactForm 
            service="REMOTE_IT_SUPPORT"
            title="Solicita Asistencia Técnica"
            description="¿Tienes un problema técnico? Nuestros expertos están listos para ayudarte. Describe tu situación y te contactaremos inmediatamente."
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}