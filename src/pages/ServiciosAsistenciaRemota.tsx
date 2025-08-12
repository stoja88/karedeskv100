import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, Zap, Clock, Target, Users, Award, Star } from 'lucide-react'
import Footer from '../../components/Footer'
import ServiceContactForm from '../../components/ServiceContactForm'

export default function ServiciosAsistenciaRemota() {
  const features = [
    {
      icon: Zap,
      title: 'Conexión Instantánea',
      description: 'Acceso remoto inmediato a tu equipo para solucionar problemas al momento.',
      color: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: Clock,
      title: 'Disponibilidad 24/7',
      description: 'Soporte técnico disponible las 24 horas del día, los 7 días de la semana.',
      color: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-400'
    },
    {
      icon: Target,
      title: 'Diagnóstico Preciso',
      description: 'Identificación rápida y precisa de problemas técnicos y software.',
      color: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400'
    },
    {
      icon: Users,
      title: 'Equipo Especializado',
      description: 'Técnicos certificados con amplia experiencia en múltiples sistemas.',
      color: 'from-karedesk-primary/20 to-teal-500/20',
      iconColor: 'text-karedesk-primary'
    }
  ]

  const packages = [
    {
      name: 'Básico',
      price: '€49',
      period: 'por sesión',
      features: [
        'Sesión de soporte de 1 hora',
        'Diagnóstico remoto',
        'Resolución de problemas básicos',
        'Informe de la sesión',
        'Soporte por chat'
      ],
      popular: false
    },
    {
      name: 'Profesional',
      price: '€199',
      period: 'mensual',
      features: [
        'Soporte ilimitado',
        'Respuesta en menos de 2 horas',
        'Instalación de software',
        'Configuración de sistemas',
        'Soporte prioritario',
        'Backup y recuperación',
        'Mantenimiento preventivo'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '€499',
      period: 'mensual',
      features: [
        'Soporte dedicado',
        'SLA garantizado',
        'Respuesta inmediata',
        'Administración completa',
        'Monitoreo 24/7',
        'Consultor asignado',
        'Auditorías regulares',
        'Formación del equipo'
      ],
      popular: false
    }
  ]

  const handleGoHome = () => {
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-bg"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-karedesk-primary/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl floating-element-reverse"></div>

        <div className="container mx-auto px-6 relative z-10">
          <button
            onClick={handleGoHome}
            className="inline-flex items-center text-gray-300 hover:text-karedesk-primary transition-all duration-300 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </button>

          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center mb-6">
                <motion.div
                  className="w-24 h-24 bg-gradient-to-br from-karedesk-primary/20 to-blue-500/20 rounded-3xl flex items-center justify-center mr-6 relative"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Zap className="w-12 h-12 text-karedesk-primary" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <Clock className="w-3 h-3 text-white" />
                  </div>
                </motion.div>
                <div className="text-left">
                  <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                    Asistencia <br />
                    <span className="gradient-text bg-gradient-to-r from-karedesk-primary to-blue-400 bg-clip-text text-transparent">
                      Remota
                    </span>
                  </h1>
                  <p className="text-xl text-karedesk-primary font-semibold mt-2">
                    ⚡ Conexión Inmediata • 🛠️ Soporte 24/7 • 🎯 Soluciones Rápidas
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
              Obtén <strong className="text-karedesk-primary">asistencia técnica inmediata</strong> desde cualquier lugar.
              Nuestros expertos se conectan de forma segura a tu equipo para resolver problemas,
              instalar software y <strong className="text-white">optimizar tu sistema</strong>.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
            >
              <div className="glass-effect rounded-xl p-4">
                <div className="text-2xl font-bold text-karedesk-primary">&lt;5min</div>
                <div className="text-sm text-gray-400">Tiempo Conexión</div>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <div className="text-2xl font-bold text-karedesk-primary">24/7</div>
                <div className="text-sm text-gray-400">Disponibilidad</div>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <div className="text-2xl font-bold text-karedesk-primary">1000+</div>
                <div className="text-sm text-gray-400">Casos Resueltos</div>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <div className="text-2xl font-bold text-karedesk-primary">98%</div>
                <div className="text-sm text-gray-400">Éxito</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => {
                  const element = document.getElementById('contacto')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary px-10 py-4 rounded-xl text-black font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-karedesk-primary/25"
              >
                🚀 Conectar Ahora
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('paquetes')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="glass-effect px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 border border-karedesk-primary/30 hover:border-karedesk-primary/60"
              >
                💎 Ver Planes
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
              ¿Por qué elegir nuestra <span className="gradient-text bg-gradient-to-r from-karedesk-primary to-blue-400 bg-clip-text text-transparent">asistencia</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Tecnología de <strong className="text-karedesk-primary">conexión segura</strong> combinada con expertise técnico
              para soluciones inmediatas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              Elige tu <span className="gradient-text bg-gradient-to-r from-karedesk-primary via-blue-400 to-purple-400 bg-clip-text text-transparent">Plan</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Desde soporte puntual hasta asistencia completa para tu empresa
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
                    </div>

                    <div className="space-y-4 mb-10">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-karedesk-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3">
                      <button
                        onClick={() => {
                          const element = document.getElementById('contacto')
                          if (element) element.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 text-lg ${pkg.popular
                            ? 'btn-primary text-black hover:scale-105 shadow-lg hover:shadow-karedesk-primary/25'
                            : 'btn-primary text-black'
                          }`}
                      >
                        💳 Contratar Ahora
                      </button>
                      <button
                        onClick={() => {
                          const element = document.getElementById('contacto')
                          if (element) element.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className="w-full glass-effect py-4 rounded-xl font-semibold text-center border border-karedesk-primary/30 hover:bg-white/10 hover:border-karedesk-primary/60 transition-all duration-300"
                      >
                        📞 Consultar
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <ServiceContactForm
            service="REMOTE_ASSISTANCE"
            title="Solicita tu Asistencia Remota"
            description="Conéctate con nuestros técnicos especializados y resuelve tus problemas técnicos de forma inmediata."
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}