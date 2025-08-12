'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Globe, ArrowLeft, CheckCircle, Smartphone, Search, Palette, Code, Zap, Shield } from 'lucide-react'
import Footer from '@/components/Footer'
import ServiceContactForm from '@/components/ServiceContactForm'

export default function WebsExpressPage() {
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

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-bg"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-karedesk-primary/10 rounded-full blur-3xl floating-element"></div>
        
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
                <Globe className="w-10 h-10 text-karedesk-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Webs <span className="gradient-text">Express</span>
                </h1>
                <p className="text-xl text-karedesk-primary font-semibold">
                  Sitios Web Profesionales en Tiempo Récord
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 leading-relaxed mb-8"
            >
              Obtén un sitio web profesional, moderno y optimizado en tiempo récord. 
              Diseño personalizado, tecnología de vanguardia y todo lo necesario para 
              destacar en el mundo digital.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="#contacto" className="btn-primary px-8 py-4 rounded-lg text-black font-semibold">
                Solicitar Presupuesto
              </Link>
              <Link href="#tipos" className="glass-effect px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Ver Tipos de Web
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
              ¿Por qué elegir nuestras <span className="gradient-text">webs express</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Combinamos velocidad, calidad y tecnología moderna para crear sitios web excepcionales
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

      {/* Web Types Section */}
      <section id="tipos" className="py-20 bg-karedesk-gray/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Tipos de <span className="gradient-text">Sitios Web</span>
            </h2>
            <p className="text-xl text-gray-300">
              Soluciones web adaptadas a cada necesidad y presupuesto
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {webTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass-effect rounded-2xl p-8 relative ${
                  type.popular ? 'ring-2 ring-karedesk-primary' : ''
                }`}
              >
                {type.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-karedesk-primary text-black px-4 py-2 rounded-full text-sm font-semibold">
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
                    <p className="text-gray-400 mb-4">{type.description}</p>
                  <div className="text-3xl font-bold gradient-text">{type.price}</div>
                </div>

                <div className="space-y-3 mb-8">
                  {type.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-karedesk-primary flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/checkout?service=EXPRESS_WEB_CREATION&plan=${type.title}&amount=${type.price.replace('€','').replace(',','')}`}
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

      {/* Process Section */}
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
              Nuestro <span className="gradient-text">Proceso</span>
            </h2>
            <p className="text-xl text-gray-300">
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
                className="text-center"
              >
                <div className="w-16 h-16 bg-karedesk-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-karedesk-primary">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-karedesk-gray/30">
        <div className="container mx-auto px-6">
          <ServiceContactForm 
            service="EXPRESS_WEB_CREATION"
            title="Solicita tu Web Express"
            description="Cuéntanos sobre tu proyecto y te enviaremos una propuesta personalizada en menos de 24 horas."
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}