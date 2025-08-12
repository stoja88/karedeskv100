'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Shield, Zap, Globe, Brain, ChevronDown, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { useTheme } from '@/contexts/ThemeContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const servicesRef = useRef<HTMLDivElement | null>(null)
  const { theme } = useTheme()

  const linkText = theme === 'light' ? 'text-slate-700' : 'text-slate-200'
  const buttonText = theme === 'light' ? 'text-slate-700' : 'text-white'

  const services = [
    { 
      name: 'Análisis de Vulnerabilidades', 
      href: '/servicios/vulnerabilidades', 
      buy: '/servicios/vulnerabilidades#paquetes', 
      contact: '/servicios/vulnerabilidades#contacto', 
      icon: Shield,
      description: 'Protección avanzada para tu web'
    },
    { 
      name: 'Asistencia Remota', 
      href: '/servicios/asistencia-remota', 
      buy: '/servicios/asistencia-remota#planes', 
      contact: '/servicios/asistencia-remota#contacto', 
      icon: Zap,
      description: 'Soporte técnico inmediato'
    },
    { 
      name: 'Webs Express', 
      href: '/servicios/webs-express', 
      buy: '/servicios/webs-express#tipos', 
      contact: '/servicios/webs-express#contacto', 
      icon: Globe,
      description: 'Sitios web en tiempo récord'
    },
    { 
      name: 'Consultoría IA', 
      href: '/servicios/consultoria-ia', 
      buy: '/servicios/consultoria-ia#soluciones', 
      contact: '/servicios/consultoria-ia#contacto', 
      icon: Brain,
      description: 'Transformación digital con IA'
    },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close services dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!isServicesOpen) return
      const target = event.target as Node
      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isServicesOpen])

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4" aria-label="Navegación principal">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center group" 
            aria-label="Ir al inicio"
          >
            <div className="relative">
              <Image 
                src="/logo.png" 
                alt="Karedesk Logo" 
                width={44} 
                height={44} 
                className="w-11 h-11 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-karedesk-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="#inicio" 
              className={`${linkText} hover:text-karedesk-primary transition-all duration-300 font-medium relative group`}
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-karedesk-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            
            <div
              className="relative"
              ref={servicesRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`${linkText} hover:text-karedesk-primary transition-all duration-300 flex items-center font-medium relative group`}
                aria-haspopup="true"
                aria-expanded={isServicesOpen}
                aria-controls="services-menu"
                aria-label="Abrir menú de servicios"
                onClick={() => setIsServicesOpen((v) => !v)}
                onKeyDown={(e) => { if (e.key === 'Escape') setIsServicesOpen(false) }}
              >
                Servicios
                <motion.div
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-1"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-karedesk-primary transition-all duration-300 group-hover:w-full" />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div 
                    id="services-menu"
                    role="menu"
                    aria-label="Servicios"
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 pt-3 w-96 z-50"
                  >
                    <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-slate-200/50 dark:border-slate-600/50 rounded-2xl shadow-2xl p-6 space-y-3">
                      {services.map((service, index) => (
                        <motion.div
                          key={service.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <div className="group/item p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300 border border-transparent hover:border-slate-200 dark:hover:border-slate-600">
                            <div className="flex items-start justify-between gap-4">
                              <Link
                                href={service.href}
                                className="flex-1 flex items-start space-x-4 group-hover/item:translate-x-1 transition-transform duration-300"
                                role="menuitem"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                <div className="w-12 h-12 bg-gradient-to-br from-karedesk-primary/20 to-karedesk-primary/10 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-all duration-300">
                                  <service.icon className="w-6 h-6 text-karedesk-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-slate-900 dark:text-white group-hover/item:text-karedesk-primary transition-colors duration-300">
                                    {service.name}
                                  </h4>
                                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                    {service.description}
                                  </p>
                                </div>
                              </Link>
                              <div className="flex items-center gap-2 shrink-0">
                                <Link 
                                  href={service.buy} 
                                  className="bg-karedesk-primary hover:bg-karedesk-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105" 
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  Comprar
                                </Link>
                                <Link 
                                  href={service.contact} 
                                  className="border border-slate-300 dark:border-slate-600 hover:border-karedesk-primary text-slate-700 dark:text-slate-300 hover:text-karedesk-primary px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-700/50" 
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  Consultar
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link 
              href="/#contacto" 
              prefetch={false} 
              className={`${linkText} hover:text-karedesk-primary transition-all duration-300 font-medium relative group`}
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-karedesk-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            
            <Link 
              href="/login" 
              prefetch={false} 
              className={`${linkText} hover:text-karedesk-primary transition-all duration-300 font-medium relative group`}
            >
              Acceso
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-karedesk-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            
            <ThemeToggle />
            
            <div className="relative group">
              <Link 
                href="/#contacto" 
                prefetch={false} 
                className="bg-gradient-to-r from-karedesk-primary to-karedesk-primary/90 hover:from-karedesk-primary/90 hover:to-karedesk-primary text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              >
                Consulta Gratuita
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <div className="absolute inset-0 bg-karedesk-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <motion.button
              className={`${buttonText} p-2.5 rounded-xl bg-slate-100/50 dark:bg-slate-800/50 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-all duration-300`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              role="region"
              aria-label="Menú móvil"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden mt-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-600/50"
            >
              <div className="p-6 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link 
                    href="#inicio" 
                    className={`block ${linkText} hover:text-karedesk-primary transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Inicio
                  </Link>
                </motion.div>
                
                <div className="space-y-3">
                  <motion.span 
                    className="text-karedesk-primary font-semibold text-sm uppercase tracking-wider px-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Servicios
                  </motion.span>
                  {services.map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <Link
                        href={service.href}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300 ml-2 border border-transparent hover:border-slate-200 dark:hover:border-slate-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-karedesk-primary/20 to-karedesk-primary/10 rounded-xl flex items-center justify-center">
                          <service.icon className="w-5 h-5 text-karedesk-primary" />
                        </div>
                        <div className="flex-1">
                          <span className={`text-sm font-medium ${linkText}`}>{service.name}</span>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Link 
                    href="/#contacto" 
                    prefetch={false} 
                    className={`block ${linkText} hover:text-karedesk-primary transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contacto
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Link 
                    href="/login" 
                    className={`block ${linkText} hover:text-karedesk-primary transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Acceso
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="pt-4"
                >
                  <Link 
                    href="/#contacto" 
                    prefetch={false}
                    className="bg-gradient-to-r from-karedesk-primary to-karedesk-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-center block shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Consulta Gratuita
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
