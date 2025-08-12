'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, CheckCircle, AlertTriangle, Clock, Target, Zap, FileText } from 'lucide-react'
import Footer from '@/components/Footer'

export default function VulnerabilidadesPage() {
  return (
    <>
      {/* Hero Section - Enhanced but Standardized */}
      <section className="pb-16 relative overflow-hidden">
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

      {/* Features Section - Simple */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              ¿Por qué elegir nuestro <span className="gradient-text bg-gradient-to-r from-karedesk-primary to-red-400 bg-clip-text text-transparent">análisis</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Tecnología de <strong className="text-karedesk-primary">IA avanzada</strong> combinada con expertise humano
              para una protección integral de tu presencia digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="service-card rounded-2xl p-8 h-full border border-white/5 hover:border-karedesk-primary/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-karedesk-primary/20 to-red-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-karedesk-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Simple */}
      <section id="contacto" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-karedesk-gray/30 via-karedesk-gray/50 to-karedesk-gray/30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Solicita tu Análisis de Vulnerabilidades
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Obtén un análisis gratuito de tu sitio web y descubre las vulnerabilidades que podrían estar comprometiendo tu seguridad.
            </p>
            <Link
              href="/#contacto"
              className="btn-primary px-10 py-4 rounded-xl text-black font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-karedesk-primary/25 inline-block"
            >
              📞 Contactar Ahora
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}