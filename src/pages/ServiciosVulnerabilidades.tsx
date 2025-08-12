'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle, AlertTriangle, Clock, Target, Zap, FileText } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ServiciosVulnerabilidades() {
  const features = [
    {
      icon: Shield,
      title: 'Escaneo Automatizado 24/7',
      description: 'Monitoreo continuo de tu sitio web para detectar vulnerabilidades en tiempo real.'
    },
    {
      icon: AlertTriangle,
      title: 'Detección de Amenazas',
      description: 'Identificación proactiva de malware, inyecciones SQL, XSS y otras amenazas.'
    },
    {
      icon: FileText,
      title: 'Reportes Detallados',
      description: 'Informes completos con análisis técnico y recomendaciones de seguridad.'
    },
    {
      icon: Clock,
      title: 'Tiempo Récord',
      description: 'Análisis completo en menos de 24 horas con alertas inmediatas.'
    },
    {
      icon: Target,
      title: 'Análisis de Reputación',
      description: 'Monitoreo de tu reputación online y presencia en listas negras.'
    },
    {
      icon: Zap,
      title: 'Alertas Instantáneas',
      description: 'Notificaciones inmediatas por email y SMS ante cualquier amenaza.'
    }
  ]

  const packages = [
    {
      name: 'Básico',
      price: '€299',
      features: [
        'Escaneo semanal automatizado',
        'Detección de vulnerabilidades básicas',
        'Reporte mensual por email',
        'Soporte por email',
        'Monitoreo de 1 dominio'
      ]
    },
    {
      name: 'Profesional',
      price: '€599',
      popular: true,
      features: [
        'Escaneo diario automatizado',
        'Detección avanzada de amenazas',
        'Reportes semanales detallados',
        'Soporte prioritario 24/7',
        'Monitoreo de hasta 5 dominios',
        'Análisis de reputación online',
        'Alertas en tiempo real'
      ]
    },
    {
      name: 'Enterprise',
      price: '€1,299',
      features: [
        'Escaneo continuo 24/7',
        'Análisis de código fuente',
        'Reportes personalizados',
        'Consultor dedicado',
        'Dominios ilimitados',
        'Integración con SIEM',
        'Certificaciones de seguridad',
        'Auditorías trimestrales'
      ]
    }
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
                  className="w-24 h-24 bg-gradient-to-br from-karedesk-primary/20 to-red-500/20 rounded-3xl flex items-center justify-center mr-6 relative"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Shield className="w-12 h-12 text-karedesk-primary" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-3 h-3 text-white" />
                  </div>
                </motion.div>
                <div className="text-left">
                  <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                    Análisis de <br />
                    <span className="gradient-text bg-gradient-to-r from-karedesk-primary to-red-400 bg-clip-text text-transparent">
                      Vulnerabilidades
                    </span>
                  </h1>
                  <p className="text-xl text-karedesk-primary font-semibold mt-2">
                    🛡️ Protección Avanzada • ⚡ Tiempo Récord • 🎯 Precisión Total
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
              Protege tu sitio web con nuestro sistema de <strong className="text-karedesk-primary">IA avanzada</strong> para
              detección de vulnerabilidades. Monitoreo continuo 24/7, análisis profundo y reportes detallados
              para mantener tu presencia digital <strong className="text-white">100% segura</strong>.
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
                🚀 Análisis Gratuito
              </button>
              <button
                onClick={() => document.getElementById('paquetes')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass-effect px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 border border-karedesk-primary/30 hover:border-karedesk-primary/60"
              >
                💎 Ver Paquetes
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
              ¿Por qué elegir nuestro <span className="gradient-text bg-gradient-to-r from-karedesk-primary to-red-400 bg-clip-text text-transparent">análisis</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Tecnología de <strong className="text-karedesk-primary">IA avanzada</strong> combinada con expertise humano
              para una protección integral de tu presencia digital
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
                  <div className="w-16 h-16 bg-gradient-to-br from-karedesk-primary/20 to-red-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Packages Section */}
      <section id="paquetes" className="py-24 relative overflow-hidden">
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
              Elige tu <span className="gradient-text bg-gradient-to-r from-karedesk-primary via-red-400 to-orange-400 bg-clip-text text-transparent">Plan</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Planes diseñados para cada tipo de negocio, desde startups hasta grandes empresas
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
                      <span className="bg-gradient-to-r from-karedesk-primary to-red-400 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
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
                        <span className={`text-5xl font-bold ${pkg.popular ? 'gradient-text bg-gradient-to-r from-karedesk-primary to-red-400 bg-clip-text text-transparent' : 'text-white'}`}>
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