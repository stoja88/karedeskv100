'use client'

import { motion } from 'framer-motion'
import { Globe, CheckCircle, Smartphone, Search, Palette, Code, Zap, Shield } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ServiciosWebsExpress() {
  const features = [
    {
      icon: Zap,
      title: 'Entrega Express',
      description: 'Tu sitio web listo en 48-72 horas con diseño profesional y funcionalidad completa.'
    },
    {
      icon: Smartphone,
      title: 'Diseño Responsive',
      description: 'Adaptado perfectamente a móviles, tablets y desktop con la mejor experiencia de usuario.'
    },
    {
      icon: Search,
      title: 'SEO Optimizado',
      description: 'Optimización completa para motores de búsqueda incluida desde el primer día.'
    },
    {
      icon: Palette,
      title: 'Diseño Personalizado',
      description: 'Diseño único adaptado a tu marca y sector con paleta de colores profesional.'
    },
    {
      icon: Code,
      title: 'Tecnología Moderna',
      description: 'Desarrollado con las últimas tecnologías web para máximo rendimiento.'
    },
    {
      icon: Shield,
      title: 'Hosting Incluido',
      description: 'Hosting seguro y dominio gratis durante el primer año incluidos.'
    }
  ]

  const webTypes = [
    {
      title: 'Landing Page',
      description: 'Página única optimizada para conversión',
      price: '€799',
      features: [
        'Diseño responsive profesional',
        'Formulario de contacto',
        'Optimización SEO básica',
        'Hosting y dominio 1 año',
        'Certificado SSL',
        'Entrega en 48h'
      ]
    },
    {
      title: 'Web Corporativa',
      description: 'Sitio web completo para tu empresa',
      price: '€1,299',
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
      popular: true
    },
    {
      title: 'E-commerce',
      description: 'Tienda online completa',
      price: '€2,499',
      features: [
        'Catálogo de productos',
        'Carrito de compras',
        'Pasarela de pago',
        'Gestión de inventario',
        'Panel administrativo',
        'SEO para productos',
        'Hosting especializado',
        'Entrega en 5 días'
      ]
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Consulta Inicial',
      description: 'Analizamos tus necesidades y objetivos para crear la propuesta perfecta.'
    },
    {
      step: '02',
      title: 'Diseño y Desarrollo',
      description: 'Creamos tu sitio web con diseño personalizado y funcionalidades específicas.'
    },
    {
      step: '03',
      title: 'Revisión y Ajustes',
      description: 'Revisas el resultado y realizamos los ajustes necesarios.'
    },
    {
      step: '04',
      title: 'Lanzamiento',
      description: 'Publicamos tu sitio web y te proporcionamos toda la documentación.'
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
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-karedesk-primary/10 rounded-full blur-3xl floating-element"></div>
        
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
                  className="w-24 h-24 bg-gradient-to-br from-karedesk-primary/20 to-green-500/20 rounded-3xl flex items-center justify-center mr-6"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Globe className="w-12 h-12 text-karedesk-primary" />
                </motion.div>
                <div className="text-left">
                  <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                    Webs <br />
                    <span className="gradient-text bg-gradient-to-r from-karedesk-primary to-green-400 bg-clip-text text-transparent">
                      Express
                    </span>
                  </h1>
                  <p className="text-xl text-karedesk-primary font-semibold mt-2">
                    ⚡ Tiempo Récord • 🎨 Diseño Profesional • 📱 100% Responsive
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
              Obtén un sitio web <strong className="text-karedesk-primary">profesional, moderno y optimizado</strong> en tiempo récord. 
              Diseño personalizado, tecnología de vanguardia y todo lo necesario para 
              destacar en el <strong className="text-white">mundo digital</strong>.
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
                🚀 Solicitar Presupuesto
              </button>
              <button
                onClick={() => document.getElementById('tipos')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass-effect px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 border border-karedesk-primary/30 hover:border-karedesk-primary/60"
              >
                💎 Ver Tipos de Web
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
              ¿Por qué elegir nuestras <span className="gradient-text bg-gradient-to-r from-karedesk-primary to-green-400 bg-clip-text text-transparent">webs express</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Combinamos <strong className="text-karedesk-primary">velocidad, calidad y tecnología moderna</strong> para crear sitios web excepcionales
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
                  <div className="w-16 h-16 bg-gradient-to-br from-karedesk-primary/20 to-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Web Types Section */}
      <section id="tipos" className="py-24 relative overflow-hidden">
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
              Tipos de <span className="gradient-text bg-gradient-to-r from-karedesk-primary via-green-400 to-blue-400 bg-clip-text text-transparent">Sitios Web</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluciones web adaptadas a cada necesidad y presupuesto
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {webTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative group ${type.popular ? 'lg:scale-105' : ''}`}
              >
                <div className={`glass-effect rounded-3xl p-8 relative overflow-hidden border transition-all duration-300 ${type.popular
                    ? 'border-karedesk-primary/50 shadow-2xl shadow-karedesk-primary/10'
                    : 'border-white/10 hover:border-karedesk-primary/30'
                  }`}>

                  {type.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <span className="bg-gradient-to-r from-karedesk-primary to-green-400 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        ⭐ Más Popular
                      </span>
                    </div>
                  )}

                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-karedesk-primary transition-colors duration-300">
                        {type.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{type.description}</p>
                      <div className="flex items-baseline justify-center mb-2">
                        <span className={`text-5xl font-bold ${type.popular ? 'gradient-text bg-gradient-to-r from-karedesk-primary to-green-400 bg-clip-text text-transparent' : 'text-white'}`}>
                          {type.price}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-10">
                      {type.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-karedesk-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => alert(`Pago de ${type.title} - ${type.price} implementado próximamente`)}
                        className={`flex-1 py-4 rounded-xl font-bold text-center transition-all duration-300 text-lg ${type.popular
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

      {/* Process Section */}
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
              Nuestro <span className="gradient-text bg-gradient-to-r from-karedesk-primary to-green-400 bg-clip-text text-transparent">Proceso</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Un proceso optimizado para entregarte resultados excepcionales en tiempo récord
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-karedesk-primary/20 to-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-karedesk-primary">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-karedesk-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}