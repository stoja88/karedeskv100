'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { LucideIcon } from 'lucide-react'

interface EnhancedServiceCardProps {
  id: string
  title: string
  subtitle: string
  description: string
  features: string[]
  price: string
  popular?: boolean
  index: number
  Icon: LucideIcon
}

export default function EnhancedServiceCard({
  id,
  title,
  subtitle,
  description,
  features,
  price,
  popular = false,
  index,
  Icon
}: EnhancedServiceCardProps) {
  const prefersReducedMotion = useReducedMotion()

  const anchors: Record<string, { buy: string; consult: string }> = {
    'vulnerabilidades': { buy: '#paquetes', consult: '#contacto' },
    'asistencia-remota': { buy: '#planes', consult: '#contacto' },
    'webs-express': { buy: '#tipos', consult: '#contacto' },
    'consultoria-ia': { buy: '#soluciones', consult: '#contacto' },
  }
  const anchor = anchors[id] || { buy: '', consult: '#contacto' }
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: prefersReducedMotion ? 0 : 0.6, 
        delay: prefersReducedMotion ? 0 : index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true }}
      whileHover={prefersReducedMotion ? {} : { y: -10, scale: 1.02 }}
      className={`service-card rounded-3xl p-8 relative overflow-hidden group ${
        popular ? 'ring-2 ring-karedesk-primary shadow-glow-lg' : ''
      }`}
    >
      {/* Popular Badge */}
      {popular && (
        <motion.div
          initial={prefersReducedMotion ? {} : { scale: 0, rotate: -45 }}
          animate={prefersReducedMotion ? {} : { scale: 1, rotate: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.5, type: 'spring', stiffness: 200 }}
          className="absolute -top-3 left-8"
        >
          <div className="bg-gradient-to-r from-karedesk-primary to-karedesk-primary-dark text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            ⭐ Más Popular
          </div>
        </motion.div>
      )}

      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-karedesk-primary/5 via-transparent to-karedesk-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Header */}
      <div className="flex items-start space-x-6 mb-8 relative z-10">
        <motion.div 
          className="w-20 h-20 bg-gradient-to-br from-karedesk-primary/20 to-karedesk-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:shadow-inner-glow transition-all duration-300"
          whileHover={prefersReducedMotion ? {} : { rotate: 5, scale: 1.1 }}
        >
          <Icon className="w-10 h-10 text-karedesk-primary" />
        </motion.div>
        <div className="flex-1">
          <motion.h3 
            className="text-2xl font-bold mb-2 group-hover:text-karedesk-primary transition-colors duration-300"
            layoutId={`title-${id}`}
          >
            {title}
          </motion.h3>
          <p className="text-karedesk-primary font-semibold text-lg">{subtitle}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 dark:text-gray-300 mb-8 leading-relaxed text-lg">
        {description}
      </p>

      {/* Features */}
      <div className="space-y-4 mb-8">
        {features.map((feature, featureIndex) => (
          <motion.div
            key={featureIndex}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.1 * featureIndex, duration: prefersReducedMotion ? 0 : 0.3 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4 group/feature"
          >
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.2, rotate: 360 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
            >
              <CheckCircle className="w-6 h-6 text-karedesk-primary flex-shrink-0" />
            </motion.div>
            <span className="text-gray-300 dark:text-gray-300 group-hover/feature:text-karedesk-primary transition-colors duration-300">
              {feature}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Price and CTAs */}
      <div className="flex items-center justify-between relative z-10">
        <div>
          <motion.span 
            className="text-3xl font-bold gradient-text"
            whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
          >
            {price}
          </motion.span>
        </div>
        <div className="flex items-center gap-3">
          <motion.div whileHover={prefersReducedMotion ? {} : { scale: 1.05 }} whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}>
            <Link
              href={`/servicios/${id}${anchor.buy}`}
              className="btn-primary px-6 py-3 rounded-2xl text-black font-bold flex items-center group/btn shadow-lg"
            >
              Pagar ahora
              <motion.div className="ml-2" animate={prefersReducedMotion ? {} : { x: [0, 3, 0] }} transition={{ duration: prefersReducedMotion ? 0 : 1.5, repeat: prefersReducedMotion ? 0 : Infinity, repeatDelay: prefersReducedMotion ? 0 : 2 }}>
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
          <Link
            href={`/servicios/${id}${anchor.consult}`}
            className="glass-effect px-6 py-3 rounded-2xl font-semibold hover:bg-white/10 transition-colors border border-karedesk-primary/30 hover:border-karedesk-primary/60"
          >
            Consulta gratuita
          </Link>
        </div>
      </div>

      {/* Hover Effect Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-karedesk-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-karedesk-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  )
}