'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Zap, CheckCircle, Monitor, Headphones, Settings, Users, Clock } from 'lucide-react'
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
    <>
      {/* Hero Section - Standardized */}
      <section className="pb-16 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center mb-6">
                <motion.div
                  className="w-24 h-24 bg-gradient-to-br from-karedesk-primary/20 to-blue-500/20 rounded-3xl flex items-center justify-center mr-6"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Zap className="w-12 h-12 text-karedesk-primary" />
                </motion.div>
                <div className="text-left">
                  <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                    Asistencia <br />
                    <span className="gradient-text bg-gradient-to-r from-karedesk-primary to-blue-400 bg-clip-text text-transparent">
                      Remota
                    </span>
                  </h1>
                  <p className="text-xl text-karedesk-primary font-semibold mt-2">
                    ⚡ Soporte Inmediato • 🛠️ Técnicos Certificados • 🔒 Conexión Segura
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 leading-relaxed mb-10 max-w-4xl mx-auto"
            >
              Resuelve cualquier problema técnico al instante con nuestro servicio de <strong className="text-karedesk-primary">asistencia remota profesional</strong>. 
              Técnicos certificados disponibles 24/7 para mantener tu negocio funcionando <strong className="text-white">sin interrupciones</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="#contacto"
                className="btn-primary px-10 py-4 rounded-xl text-black font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-karedesk-primary/25"
              >
                🚀 Soporte Inmediato
              </Link>
              <Link
                href="#planes"
                className="glass-effect px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 border border-karedesk-primary/30 hover:border-karedesk-primary/60"
              >
                💎 Ver Planes
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Standardized */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-karedesk-gray/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Soporte técnico <span className="gradient-text bg-gradient-to-r from-karedesk-primary to-blue-400 bg-clip-text text-transparent">profesional</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Nuestro equipo de <strong className="text-karedesk-primary">expertos certificados</strong> está listo para resolver cualquier problema técnico
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
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="service-card rounded-2xl p-8 h-full border border-white/5 hover:border-karedesk-primary/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-karedesk-primary/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-karedesk-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-karedesk-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-karedesk-gray/30 via-karedesk-gray/50 to-karedesk-gray/30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              ¿En qué podemos <span className="gradient-text bg-gradient-to-r from-karedesk-primary to-blue-400 bg-clip-text text-transparent">ayudarte</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Servicios técnicos completos para mantener tu tecnología funcionando perfectamente
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 glass-effect rounded-xl p-6 hover:bg-white/10 transition-colors duration-300"
              >
                <CheckCircle className="w-6 h-6 text-karedesk-primary flex-shrink-0" />
                <span className="text-gray-300 font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section - Standardized */}
      <section id="planes" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Planes de <span className="gradient-text bg-gradient-to-r from-karedesk-primary via-blue-400 to-purple-400 bg-clip-text text-transparent">Soporte</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Elige el plan que mejor se adapte a tus necesidades técnicas
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative group ${plan.popular ? 'lg:scale-105' : ''}`}
              >
                <div className={`glass-effect rounded-3xl p-8 relative overflow-hidden border transition-all duration-300 ${plan.popular
                    ? 'border-karedesk-primary/50 shadow-2xl shadow-karedesk-primary/10'
                    : 'border-white/10 hover:border-karedesk-primary/30'
                  }`}>

                  {plan.popular && (
                    <>
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                        <span className="bg-gradient-to-r from-karedesk-primary to-blue-400 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                          ⭐ Más Popular
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-karedesk-primary/5 to-blue-500/5 rounded-3xl"></div>
                    </>
                  )}

                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-karedesk-primary transition-colors duration-300">
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline justify-center mb-2">
                        <span className={`text-5xl font-bold ${plan.popular ? 'gradient-text bg-gradient-to-r from-karedesk-primary to-blue-400 bg-clip-text text-transparent' : 'text-white'}`}>
                          {plan.price}
                        </span>
                        <span className="text-gray-400 ml-2 text-lg">{plan.period}</span>
                      </div>
                      {plan.popular && (
                        <div className="text-sm text-karedesk-primary font-semibold">
                          💎 Mejor relación calidad-precio
                        </div>
                      )}
                    </div>

                    <div className="space-y-4 mb-10">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-5 h-5 text-karedesk-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 leading-relaxed">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`/checkout?service=REMOTE_IT_SUPPORT&plan=${plan.name}&amount=${plan.price.replace('€','')}`}
                        className={`flex-1 py-4 rounded-xl font-bold text-center block transition-all duration-300 text-lg ${plan.popular
                            ? 'btn-primary text-black hover:scale-105 shadow-lg hover:shadow-karedesk-primary/25'
                            : 'btn-primary text-black'
                          }`}
                      >
                        💳 Pagar ahora
                      </Link>
                      <Link
                        href="#contacto"
                        className="flex-1 glass-effect py-4 rounded-xl font-semibold text-center border border-karedesk-primary/30 hover:bg-white/10 hover:border-karedesk-primary/60 transition-all duration-300"
                      >
                        📞 Consultar primero
                      </Link>
                    </div>
                  </div>

                  {!plan.popular && (
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-karedesk-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-karedesk-gray/30 via-karedesk-gray/50 to-karedesk-gray/30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <ServiceContactForm 
            service="REMOTE_IT_SUPPORT"
            title="Solicita Asistencia Técnica"
            description="¿Tienes un problema técnico? Nuestros expertos están listos para ayudarte. Describe tu situación y te contactaremos inmediatamente."
          />
        </div>
      </section>

      <Footer />
    </>
  )
}