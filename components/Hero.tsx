'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, Clock } from 'lucide-react'
import Link from 'next/link'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-bg"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-karedesk-primary/10 rounded-full blur-3xl floating-element animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-karedesk-primary/5 rounded-full blur-3xl floating-element" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-karedesk-primary/5 rounded-full blur-3xl opacity-30"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(127, 191, 191, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.2 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                >
                  <span className="text-karedesk-text-light dark:text-white">
                    Asistencia Digital
                  </span>
                  <br />
                  <span className="text-karedesk-primary">
                    Avanzada
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.4 }}
                  className="text-lg md:text-xl text-karedesk-text-light/80 dark:text-gray-300 max-w-2xl"
                >
                  Protegemos tu presencia digital con análisis de vulnerabilidades en tiempo récord, asistencia informática remota y soluciones web ultramodernas.
                </motion.p>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.6 }}
                className="grid grid-cols-3 gap-6"
              >
                <motion.div 
                  className="text-center glass-effect rounded-2xl p-6"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -5 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                >
                  <motion.div 
                    className="text-3xl font-bold gradient-text mb-2"
                    animate={prefersReducedMotion ? {} : { scale: [1, 1.1, 1] }}
                    transition={{ duration: prefersReducedMotion ? 0 : 2, repeat: prefersReducedMotion ? 0 : Infinity, repeatDelay: prefersReducedMotion ? 0 : 3 }}
                  >
                    24/7
                  </motion.div>
                  <div className="text-sm text-gray-400 dark:text-gray-400 font-medium">Soporte</div>
                </motion.div>
                <motion.div 
                  className="text-center glass-effect rounded-2xl p-6"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -5 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                >
                  <motion.div 
                    className="text-3xl font-bold gradient-text mb-2"
                    animate={prefersReducedMotion ? {} : { scale: [1, 1.1, 1] }}
                    transition={{ duration: prefersReducedMotion ? 0 : 2, repeat: prefersReducedMotion ? 0 : Infinity, repeatDelay: prefersReducedMotion ? 0 : 3, delay: prefersReducedMotion ? 0 : 0.5 }}
                  >
                    99.9%
                  </motion.div>
                  <div className="text-sm text-gray-400 dark:text-gray-400 font-medium">Uptime</div>
                </motion.div>
                <motion.div 
                  className="text-center glass-effect rounded-2xl p-6"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -5 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                >
                  <motion.div 
                    className="text-3xl font-bold gradient-text mb-2"
                    animate={prefersReducedMotion ? {} : { scale: [1, 1.1, 1] }}
                    transition={{ duration: prefersReducedMotion ? 0 : 2, repeat: prefersReducedMotion ? 0 : Infinity, repeatDelay: prefersReducedMotion ? 0 : 3, delay: prefersReducedMotion ? 0 : 1 }}
                  >
                    500+
                  </motion.div>
                  <div className="text-sm text-gray-400 dark:text-gray-400 font-medium">Clientes</div>
                </motion.div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.8 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                >
                  <Link href="#contacto" className="btn-primary px-10 py-5 rounded-2xl text-black font-bold flex items-center justify-center group shadow-glow text-lg">
                    Consulta Gratuita
                    <motion.div
                      className="ml-3"
                      animate={prefersReducedMotion ? {} : { x: [0, 5, 0] }}
                      transition={{ duration: prefersReducedMotion ? 0 : 1.5, repeat: prefersReducedMotion ? 0 : Infinity, repeatDelay: prefersReducedMotion ? 0 : 2 }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                >
                  <Link href="#servicios" className="glass-effect px-10 py-5 rounded-2xl font-bold flex items-center justify-center hover:bg-white/10 transition-all duration-300 text-lg border-2 border-karedesk-primary/30 hover:border-karedesk-primary/60">
                    Ver Servicios
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.4 }}
              className="relative"
            >
              <div className="relative z-10 space-y-8">
                {/* Feature Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 1 }}
                  className="glass-effect p-8 rounded-2xl"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-karedesk-primary/20 rounded-xl flex items-center justify-center">
                      <Shield className="w-7 h-7 text-karedesk-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Análisis de Vulnerabilidades</h3>
                      <p className="text-sm text-gray-400">Detección en tiempo récord</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 1.2 }}
                  className="glass-effect p-8 rounded-2xl ml-12"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-karedesk-primary/20 rounded-xl flex items-center justify-center">
                      <Zap className="w-7 h-7 text-karedesk-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Asistencia Remota</h3>
                      <p className="text-sm text-gray-400">Soporte inmediato</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 1.4 }}
                  className="glass-effect p-8 rounded-2xl"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-karedesk-primary/20 rounded-xl flex items-center justify-center">
                      <Clock className="w-7 h-7 text-karedesk-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Respuesta Rápida</h3>
                      <p className="text-sm text-gray-400">Tiempo récord garantizado</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Background decoration */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-karedesk-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-karedesk-primary/5 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 1, delay: prefersReducedMotion ? 0 : 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-karedesk-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-karedesk-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}