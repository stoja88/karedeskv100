'use client'

import { motion } from 'framer-motion'
import { Brain, CheckCircle, Bot, BarChart, Cog, Users, Lightbulb, Target } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ServiciosConsultoriaIA() {
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
      features: [
        'Análisis inicial de procesos',
        'Identificación de oportunidades',
        'Propuesta de implementación',
        'Roadmap de 6 meses',
        '2 sesiones de consultoría',
        'Reporte ejecutivo'
      ]
    },
    {
      name: 'Implementación IA',
      price: '€3,999',
      popular: true,
      features: [
        'Todo lo del plan básico',
        'Desarrollo de solución IA',
        'Integración con sistemas',
        'Formación del equipo',
        'Soporte 3 meses',
        'Optimización inicial',
        'Documentación completa'
      ]
    },
    {
      name: 'Transformación Digital',
      price: '€9,999',
      features: [
        'Consultoría estratégica completa',
        'Múltiples soluciones IA',
        'Integración empresarial',
        'Formación avanzada',
        'Soporte 12 meses',
        'Consultor dedicado',
        'ROI garantizado',
        'Escalabilidad futura'
      ]
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

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-bg"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-karedesk-primary/10 rounded-full blur-3xl floating-element"></div>
        
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
                  className="w-24 h-24 bg-gradient-to-br from-karedesk-primary/20 to-purple-500/20 rounded-3xl flex items-center justify-center mr-6"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Brain className="w-12 h-12 text-karedesk-primary" />
                </motion.div>
                <div className="text-left">
                  <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                    Consultoría <br />
                    <span className="gradient-text bg-gradient-to-r from-karedesk-primary to-purple-400 bg-clip-text text-transparent">
                      IA
                    </span>
                  </h1>
                  <p className="text-xl text-karedesk-primary font-semibold mt-2">
                    🤖 IA Empresarial • 🚀 Automatización • 📊 Análisis Predictivo
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
              Transforma tu negocio con soluciones de <strong className="text-karedesk-primary">Inteligencia Artificial personalizadas</strong>. 
              Automatiza procesos, optimiza decisiones y mantente a la vanguardia tecnológica 
              con nuestros <strong className="text-white">expertos en IA</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => navigateTo('/#contacto')}
                className="btn-primary px-10 py-4 rounded-xl text-black font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-karedesk-primary/25"
              >
                🚀 Consulta Gratuita
              </button>
              <button
                onClick={() => document.getElementById('soluciones')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass-effect px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 border border-karedesk-primary/30 hover:border-karedesk-primary/60"
              >
                💎 Ver Soluciones
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              ¿Cómo puede la <span className="gradient-text bg-gradient-to-r from-karedesk-primary to-purple-400 bg-clip-text text-transparent">IA</span> transformar tu negocio?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Implementamos soluciones de <strong className="text-karedesk-primary">IA avanzada</strong> que generan valor real y resultados medibles
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
                  <div className="w-16 h-16 bg-gradient-to-br from-karedesk-primary/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Solutions Section */}
      <section id="soluciones" className="py-24 relative overflow-hidden">
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
              Soluciones de <span className="gradient-text bg-gradient-to-r from-karedesk-primary to-purple-400 bg-clip-text text-transparent">IA</span> Disponibles
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
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
                className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300"
              >
                <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                <p className="text-karedesk-primary font-semibold mb-6">{solution.description}</p>
                
                <div className="space-y-4">
                  {solution.applications.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-karedesk-primary flex-shrink-0" />
                      <span className="text-gray-300 font-medium">{app}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Sectores que <span className="gradient-text bg-gradient-to-r from-karedesk-primary to-purple-400 bg-clip-text text-transparent">transformamos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
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
              Paquetes de <span className="gradient-text bg-gradient-to-r from-karedesk-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">Consultoría</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Desde consultoría estratégica hasta implementación completa
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative group ${pkg.popular ? 'lg:scale-105' : ''}`}
              >
                <div className={`glass-effect rounded-3xl p-8 relative overflow-hidden border transition-all duration-300 ${pkg.popular
                    ? 'border-karedesk-primary/50 shadow-2xl shadow-karedesk-primary/10'
                    : 'border-white/10 hover:border-karedesk-primary/30'
                  }`}>

                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <span className="bg-gradient-to-r from-karedesk-primary to-purple-400 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        ⭐ Más Popular
                      </span>
                    </div>
                  )}

                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-karedesk-primary transition-colors duration-300">
                        {pkg.name}
                      </h3>
                      <div className="flex items-baseline justify-center mb-2">
                        <span className={`text-5xl font-bold ${pkg.popular ? 'gradient-text bg-gradient-to-r from-karedesk-primary to-purple-400 bg-clip-text text-transparent' : 'text-white'}`}>
                          {pkg.price}
                        </span>
                        <span className="text-gray-400 ml-2 text-lg">único</span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-10">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-karedesk-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => alert(`Pago de ${pkg.name} - ${pkg.price} implementado próximamente`)}
                        className={`flex-1 py-4 rounded-xl font-bold text-center transition-all duration-300 text-lg ${pkg.popular
                            ? 'btn-primary text-black hover:scale-105 shadow-lg hover:shadow-karedesk-primary/25'
                            : 'btn-primary text-black'
                          }`}
                      >
                        💳 Pagar ahora
                      </button>
                      <button
                        onClick={() => navigateTo('/#contacto')}
                        className="flex-1 glass-effect py-4 rounded-xl font-semibold text-center border border-karedesk-primary/30 hover:bg-white/10 hover:border-karedesk-primary/60 transition-all duration-300"
                      >
                        📞 Consultar primero
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}