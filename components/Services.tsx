'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Globe, Brain, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import EnhancedServiceCard from './EnhancedServiceCard'

const services = [
  {
    id: 'vulnerabilidades',
    icon: Shield,
    title: 'Análisis de Vulnerabilidades Web',
    subtitle: 'Reputación en Tiempo Récord',
    description: 'Identificamos y evaluamos vulnerabilidades de seguridad en tu sitio web con tecnología avanzada de escaneo.',
    features: [
      'Escaneo automatizado 24/7',
      'Reportes detallados en tiempo real',
      'Monitoreo de reputación online',
      'Alertas inmediatas de amenazas',
      'Análisis de código fuente',
      'Certificaciones de seguridad'
    ],
    price: 'Pago único desde €299',
    popular: true
  },
  {
    id: 'asistencia-remota',
    icon: Zap,
    title: 'Asistencia Informática Remota',
    subtitle: 'Soporte Técnico Inmediato',
    description: 'Resolvemos tus problemas técnicos al instante con acceso remoto seguro y profesionales certificados.',
    features: [
      'Acceso remoto seguro',
      'Soporte 24/7 disponible',
      'Técnicos certificados',
      'Resolución en minutos',
      'Mantenimiento preventivo',
      'Backup y recuperación'
    ],
    price: 'Pago único desde €99',
    popular: false
  },
  {
    id: 'webs-express',
    icon: Globe,
    title: 'Creación de Webs Express',
    subtitle: 'Sitios Web Profesionales',
    description: 'Desarrollamos sitios web modernos y responsivos con las últimas tecnologías en tiempo récord.',
    features: [
      'Diseño responsive moderno',
      'Optimización SEO incluida',
      'Hosting y dominio gratis',
      'Entrega en 48-72 horas',
      'Panel de administración',
      'Soporte post-lanzamiento'
    ],
    price: 'Desde €799',
    popular: false
  },
  {
    id: 'consultoria-ia',
    icon: Brain,
    title: 'Consultoría IA',
    subtitle: 'Inteligencia Artificial Empresarial',
    description: 'Implementamos soluciones de IA personalizadas para optimizar tus procesos empresariales.',
    features: [
      'Análisis de procesos actuales',
      'Implementación de chatbots',
      'Automatización inteligente',
      'Machine Learning personalizado',
      'Integración con sistemas existentes',
      'Formación del equipo'
    ],
    price: 'Desde €1,299',
    popular: false
  }
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-karedesk-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-karedesk-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluciones digitales avanzadas diseñadas para proteger, optimizar y hacer crecer tu negocio
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <EnhancedServiceCard
              key={service.id}
              id={service.id}
              Icon={service.icon}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              features={service.features}
              price={service.price}
              popular={service.popular}
              index={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              ¿Necesitas una solución personalizada?
            </h3>
            <p className="text-gray-300 mb-6">
              Combinamos nuestros servicios para crear la solución perfecta para tu empresa
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link
                href="/servicios/vulnerabilidades#paquetes"
                className="btn-primary px-6 py-4 rounded-lg text-black font-semibold inline-flex items-center group"
              >
                Pagar ahora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contacto"
                className="glass-effect px-6 py-4 rounded-lg font-semibold inline-flex items-center group hover:bg-white/10 border border-karedesk-primary/30 hover:border-karedesk-primary/60"
              >
                Consulta personalizada
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}