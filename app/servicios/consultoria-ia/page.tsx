'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Brain, ArrowLeft, CheckCircle, Bot, BarChart, Cog, Users, Lightbulb, Target } from 'lucide-react'
import Footer from '@/components/Footer'
import ServiceContactForm from '@/components/ServiceContactForm'

export default function ConsultoriaIAPage() {
  const features = [
    {
      icon: BarChart,
      title: 'Análisis de Procesos',
      description: 'Evaluación completa de tus procesos actuales para identificar oportunidades de automatización.'
    },
    {
      icon: Bot,
      title: 'Chatbots Inteligentes',
      description: 'Desarrollo de asistentes virtuales personalizados para atención al cliente 24/7.'
    },
    {
      icon: Cog,
      title: 'Automatización Inteligente',
      description: 'Implementación de sistemas que automatizan tareas repetitivas y optimizan workflows.'
    },
    {
      icon: Target,
      title: 'Machine Learning',
      description: 'Modelos predictivos personalizados para análisis de datos y toma de decisiones.'
    },
    {
      icon: Users,
      title: 'Formación del Equipo',
      description: 'Capacitación completa para que tu equipo aproveche al máximo las nuevas herramientas.'
    },
    {
      icon: Lightbulb,
      title: 'Innovación Continua',
      description: 'Seguimiento y optimización continua de las soluciones implementadas.'
    }
  ]

  const solutions = [
    {
      title: 'Chatbots y Asistentes Virtuales',
      description: 'Atención al cliente automatizada',
      applications: [
        'Atención al cliente 24/7',
        'Calificación de leads',
        'Soporte técnico básico',
        'Reservas y citas',
        'FAQ automatizadas'
      ]
    },
    {
      title: 'Análisis Predictivo',
      description: 'Inteligencia de negocio avanzada',
      applications: [
        'Predicción de ventas',
        'Análisis de comportamiento',
        'Detección de fraudes',
        'Optimización de inventario',
        'Segmentación de clientes'
      ]
    },
    {
      title: 'Automatización de Procesos',
      description: 'Optimización de workflows',
      applications: [
        'Procesamiento de documentos',
        'Clasificación automática',
        'Generación de reportes',
        'Gestión de emails',
        'Análisis de sentimientos'
      ]
    },
    {
      title: 'Reconocimiento de Patrones',
      description: 'Análisis avanzado de datos',
      applications: [
        'Análisis de imágenes',
        'Procesamiento de texto',
        'Detección de anomalías',
        'Reconocimiento de voz',
        'Análisis de tendencias'
      ]
    }
  ]

  const packages = [
    {
      name: 'Consultoría Básica',
      price: '€1,299',
      period: 'único',
      features: [
        'Análisis inicial de procesos',
        'Identificación de oportunidades',
        'Propuesta de implementación',
        'Roadmap de 6 meses',
        '2 sesiones de consultoría',
        'Reporte ejecutivo'
      ],
      popular: false
    },
    {
      name: 'Implementación IA',
      price: '€3,999',
      period: 'único',
      features: [
        'Todo lo del plan básico',
        'Desarrollo de solución IA',
        'Integración con sistemas',
        'Formación del equipo',
        'Soporte 3 meses',
        'Optimización inicial',
        'Documentación completa'
      ],
      popular: true
    },
    {
      name: 'Transformación Digital',
      price: '€9,999',
      period: 'único',
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
      popular: false
    }
  ]

  const industries = [
    { name: 'E-commerce', icon: '🛒' },
    { name: 'Salud', icon: '🏥' },
    { name: 'Finanzas', icon: '💰' },
    { name: 'Educación', icon: '🎓' },
    { name: 'Manufactura', icon: '🏭' },
    { name: 'Inmobiliaria', icon: '🏢' },
    { name: 'Turismo', icon: '✈️' },
    { name: 'Retail', icon: '🏪' }
  ]

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-bg"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-karedesk-primary/10 rounded-full blur-3xl floating-element"></div>
        
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
                <Brain className="w-10 h-10 text-karedesk-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Consultoría <span className="gradient-text">IA</span>
                </h1>
                <p className="text-xl text-karedesk-primary font-semibold">
                  Inteligencia Artificial Empresarial
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 leading-relaxed mb-8"
            >
              Transforma tu negocio con soluciones de Inteligencia Artificial personalizadas. 
              Automatiza procesos, optimiza decisiones y mantente a la vanguardia tecnológica 
              con nuestros expertos en IA.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="#contacto" className="btn-primary px-8 py-4 rounded-lg text-black font-semibold">
                Consulta Gratuita
              </Link>
              <Link href="#soluciones" className="glass-effect px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Ver Soluciones
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
              ¿Cómo puede la <span className="gradient-text">IA</span> transformar tu negocio?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Implementamos soluciones de IA que generan valor real y resultados medibles
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

      {/* Solutions Section */}
      <section id="soluciones" className="py-20 bg-karedesk-gray/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Soluciones de <span className="gradient-text">IA</span> Disponibles
            </h2>
            <p className="text-xl text-gray-300">
              Tecnologías de vanguardia adaptadas a tus necesidades específicas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                <p className="text-karedesk-primary font-semibold mb-6">{solution.description}</p>
                
                <div className="space-y-3">
                  {solution.applications.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-karedesk-primary flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{app}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
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
              Sectores que <span className="gradient-text">transformamos</span>
            </h2>
            <p className="text-xl text-gray-300">
              Experiencia comprobada en múltiples industrias
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold text-gray-300">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-karedesk-gray/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Paquetes de <span className="gradient-text">Consultoría</span>
            </h2>
            <p className="text-xl text-gray-300">
              Desde consultoría estratégica hasta implementación completa
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass-effect rounded-2xl p-8 relative ${
                  pkg.popular ? 'ring-2 ring-karedesk-primary' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-karedesk-primary text-black px-4 py-2 rounded-full text-sm font-semibold">
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
                          <span className="text-gray-400 ml-1">{pkg.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-karedesk-primary flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/checkout?service=AI_CONSULTING&plan=${pkg.name}&amount=${pkg.price.replace('€','').replace(',','')}`}
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
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-6">
          <ServiceContactForm 
            service="AI_CONSULTING"
            title="Solicita tu Consultoría en IA"
            description="Cuéntanos sobre tu negocio y los desafíos que enfrentas. Nuestros expertos en IA te ayudarán a encontrar la solución perfecta."
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}