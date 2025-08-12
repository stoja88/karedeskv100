'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, ArrowLeft, CheckCircle, AlertTriangle, Clock, Target, Zap, FileText, Eye, Lock, TrendingUp, Users, Award, Star } from 'lucide-react'
import Footer from '@/components/Footer'
import ServiceContactForm from '@/components/ServiceContactForm'

export default function VulnerabilidadesPage() {
  const features = [
    {
      icon: Shield,
      title: 'Escaneo Automatizado 24/7',
      description: 'Monitoreo continuo de tu sitio web para detectar vulnerabilidades en tiempo real.',
      color: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: AlertTriangle,
      title: 'Detección de Amenazas',
      description: 'Identificación proactiva de malware, inyecciones SQL, XSS y otras amenazas.',
      color: 'from-red-500/20 to-orange-500/20',
      iconColor: 'text-red-400'
    },
    {
      icon: FileText,
      title: 'Reportes Detallados',
      description: 'Informes completos con análisis técnico y recomendaciones de seguridad.',
      color: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-400'
    },
    {
      icon: Clock,
      title: 'Tiempo Récord',
      description: 'Análisis completo en menos de 24 horas con alertas inmediatas.',
      color: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400'
    },
    {
      icon: Target,
      title: 'Análisis de Reputación',
      description: 'Monitoreo de tu reputación online y presencia en listas negras.',
      color: 'from-yellow-500/20 to-amber-500/20',
      iconColor: 'text-yellow-400'
    },
    {
      icon: Zap,
      title: 'Alertas Instantáneas',
      description: 'Notificaciones inmediatas por email y SMS ante cualquier amenaza.',
      color: 'from-karedesk-primary/20 to-teal-500/20',
      iconColor: 'text-karedesk-primary'
    }
  ]

  const packages = [
    {
      name: 'Básico',
      price: '€299',
      period: 'único',
      features: [
        'Escaneo semanal automatizado',
        'Detección de vulnerabilidades básicas',
        'Reporte mensual por email',
        'Soporte por email',
        'Monitoreo de 1 dominio'
      ],
      popular: false
    },
    {
      name: 'Profesional',
      price: '€599',
      period: 'único',
      features: [
        'Escaneo diario automatizado',
        'Detección avanzada de amenazas',
        'Reportes semanales detallados',
        'Soporte prioritario 24/7',
        'Monitoreo de hasta 5 dominios',
        'Análisis de reputación online',
        'Alertas en tiempo real'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '€1,299',
      period: 'único',
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
      popular: false
    }
  ]

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-bg"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-karedesk-primary/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl floating-element-reverse"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-karedesk-primary rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-red-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center text-gray-300 hover:text-karedesk-primary transition-all duration-300 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>

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

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
            >
              <div className="glass-effect rounded-xl p-4">
                <div className="text-2xl font-bold text-karedesk-primary">99.9%</div>
                <div className="text-sm text-gray-400">Precisión</div>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <div className="text-2xl font-bold text-karedesk-primary">&lt;24h</div>
                <div className="text-sm text-gray-400">Análisis</div>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <div className="text-2xl font-bold text-karedesk-primary">500+</div>
                <div className="text-sm text-gray-400">Sitios Protegidos</div>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <div className="text-2xl font-bold text-karedesk-primary">24/7</div>
                <div className="text-sm text-gray-400">Monitoreo</div>
              </div>
            </motion.div>

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
                🚀 Análisis Gratuito
              </Link>
              <Link
                href="#paquetes"
                className="glass-effect px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 border border-karedesk-primary/30 hover:border-karedesk-primary/60"
              >
                💎 Ver Paquetes
              </Link>
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
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-karedesk-primary/20 rounded-full flex items-center justify-center mr-3">
                <Star className="w-6 h-6 text-karedesk-primary" />
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold">
                ¿Por qué elegir nuestro <span className="gradient-text bg-gradient-to-r from-karedesk-primary to-blue-400 bg-clip-text text-transparent">análisis</span>?
              </h2>
            </div>
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
                className="group relative"
              >
                <div className="service-card rounded-2xl p-8 h-full relative overflow-hidden border border-white/5 hover:border-karedesk-primary/30 transition-all duration-300">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                    </div>

                    <h3 className="text-xl font-bold mb-4 group-hover:text-karedesk-primary transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-karedesk-primary/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-3">
                  <Award className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-sm text-gray-400">Certificado ISO 27001</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-sm text-gray-400">+500 Clientes</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-sm text-gray-400">99.9% Uptime</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-3">
                  <Eye className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="text-sm text-gray-400">Monitoreo 24/7</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="paquetes" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-karedesk-gray/30 via-karedesk-gray/50 to-karedesk-gray/30"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-karedesk-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-karedesk-primary/20 to-blue-500/20 rounded-full flex items-center justify-center mr-3">
                <Lock className="w-6 h-6 text-karedesk-primary" />
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold">
                Elige tu <span className="gradient-text bg-gradient-to-r from-karedesk-primary via-blue-400 to-purple-400 bg-clip-text text-transparent">Plan</span>
              </h2>
            </div>
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
                        {pkg.name}
                      </h3>
                      <div className="flex items-baseline justify-center mb-2">
                        <span className={`text-5xl font-bold ${pkg.popular ? 'gradient-text bg-gradient-to-r from-karedesk-primary to-blue-400 bg-clip-text text-transparent' : 'text-white'}`}>
                          {pkg.price}
                        </span>
                        <span className="text-gray-400 ml-2 text-lg">{pkg.period}</span>
                      </div>
                      {pkg.popular && (
                        <div className="text-sm text-karedesk-primary font-semibold">
                          💎 Mejor relación calidad-precio
                        </div>
                      )}
                    </div>

                    <div className="space-y-4 mb-10">
                      {pkg.features.map((feature, featureIndex) => (
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
                        href={`/checkout?service=WEB_VULNERABILITY_ANALYSIS&plan=${pkg.name}&amount=${pkg.price.replace('€', '').replace(',', '')}`}
                        className={`flex-1 py-4 rounded-xl font-bold text-center block transition-all duration-300 text-lg ${pkg.popular
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

                  {/* Hover effect */}
                  {!pkg.popular && (
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-karedesk-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="glass-effect rounded-2xl p-6 max-w-4xl mx-auto">
              <p className="text-gray-300 mb-4">
                <strong className="text-karedesk-primary">🎁 Oferta especial:</strong> Todos los planes incluyen
                <strong className="text-white"> análisis gratuito inicial</strong> y
                <strong className="text-white"> 30 días de garantía</strong>
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <span>✅ Sin permanencia</span>
                <span>✅ Cancelación gratuita</span>
                <span>✅ Soporte 24/7</span>
                <span>✅ Actualizaciones incluidas</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <ServiceContactForm
            service="WEB_VULNERABILITY_ANALYSIS"
            title="Solicita tu Análisis de Vulnerabilidades"
            description="Obtén un análisis gratuito de tu sitio web y descubre las vulnerabilidades que podrían estar comprometiendo tu seguridad."
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}