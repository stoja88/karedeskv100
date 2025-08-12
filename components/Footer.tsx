'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Shield, Zap, Globe, Brain } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function Footer() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  
  useEffect(() => {
    setMounted(true)
  }, [])

  // Evitar hidratación con valores estáticos durante SSR
  const currentYear = mounted ? new Date().getFullYear() : 2024
  const footerBg = mounted ? (theme === 'light' ? 'bg-white' : 'bg-karedesk-gray') : 'bg-karedesk-gray'
  const borderColor = mounted ? (theme === 'light' ? 'border-karedesk-light-border' : 'border-karedesk-primary/20') : 'border-karedesk-primary/20'
  const textColor = mounted ? (theme === 'light' ? 'text-karedesk-text-light' : '') : ''

  const services = [
    { name: 'Análisis de Vulnerabilidades', href: '/servicios/vulnerabilidades', icon: Shield },
    { name: 'Asistencia Remota', href: '/servicios/asistencia-remota', icon: Zap },
    { name: 'Webs Express', href: '/servicios/webs-express', icon: Globe },
    { name: 'Consultoría IA', href: '/servicios/consultoria-ia', icon: Brain },
  ]

  const quickLinks = [
    { name: 'Inicio', href: '/#inicio' },
    { name: 'Servicios', href: '/#servicios' },
    { name: 'Contacto', href: '/#contacto' },
    { name: 'Acceso Cliente', href: '/login' },
  ]

  // Durante SSR, mostrar versión simplificada
  if (!mounted) {
    return (
      <footer
        className={`${footerBg} ${textColor} border-t ${borderColor} relative overflow-hidden`}
        role="contentinfo"
        aria-label="Información del sitio"
      >
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Versión simplificada para SSR */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-600 rounded"></div>
                <span className="text-2xl font-bold gradient-text">Karedesk</span>
              </div>
            </div>
          </div>
          <div className={`border-t ${borderColor} mt-12 pt-8`}>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Karedesk. Todos los derechos reservados.
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer
      className={`${footerBg} ${textColor} border-t ${borderColor} relative overflow-hidden`}
      role="contentinfo"
      aria-label="Información del sitio"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-karedesk-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-karedesk-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image 
                src="/logo.png" 
                alt="Karedesk Logo" 
                width={40} 
                height={40} 
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold gradient-text">Karedesk</span>
            </div>
            <p className="text-gray-300 dark:text-gray-300 leading-relaxed text-lg">
              Especialistas en asistencia digital avanzada. Protegemos y optimizamos tu presencia online 
              con tecnología de vanguardia y soporte profesional.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-300 dark:text-gray-300 hover:text-karedesk-primary transition-colors duration-300 group">
                <div className="w-10 h-10 bg-karedesk-primary/20 rounded-lg flex items-center justify-center group-hover:bg-karedesk-primary/30 transition-colors">
                  <Mail className="w-5 h-5 text-karedesk-primary" />
                </div>
                <span className="font-medium">contacto@karedesk.com</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300 dark:text-gray-300 hover:text-karedesk-primary transition-colors duration-300 group">
                <div className="w-10 h-10 bg-karedesk-primary/20 rounded-lg flex items-center justify-center group-hover:bg-karedesk-primary/30 transition-colors">
                  <Phone className="w-5 h-5 text-karedesk-primary" />
                </div>
                <span className="font-medium">+34 900 123 456</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300 dark:text-gray-300 hover:text-karedesk-primary transition-colors duration-300 group">
                <div className="w-10 h-10 bg-karedesk-primary/20 rounded-lg flex items-center justify-center group-hover:bg-karedesk-primary/30 transition-colors">
                  <MapPin className="w-5 h-5 text-karedesk-primary" />
                </div>
                <span className="font-medium">Madrid, España</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Servicios">
            <h3 className="text-xl font-bold mb-6 gradient-text">Servicios</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-karedesk-primary transition-colors group"
                  >
                    <service.icon className="w-4 h-4 group-hover:text-karedesk-primary" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick Links */}
          <nav aria-label="Enlaces rápidos">
            <h3 className="text-xl font-bold mb-6 gradient-text">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    prefetch={false}
                    className="block text-gray-300 hover:text-karedesk-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div role="region" aria-labelledby="newsletter-heading">
            <h3 className="text-xl font-bold mb-6 gradient-text">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Mantente al día con las últimas tendencias en ciberseguridad y tecnología.
            </p>
            <div className="space-y-3">
              <label htmlFor="newsletter-email" id="newsletter-heading" className="sr-only">
                Correo electrónico para suscripción
              </label>
              <input
                id="newsletter-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="tu@email.com"
                className="form-input w-full px-4 py-3 rounded-lg text-white placeholder-gray-400"
                aria-describedby="newsletter-help"
              />
              <p id="newsletter-help" className="text-xs text-gray-400">
                Usaremos tu email solo para enviarte novedades.
              </p>
              <button type="button" className="btn-primary w-full py-3 rounded-lg text-black font-semibold" aria-label="Suscribirse al boletín">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t ${borderColor} mt-12 pt-8`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Karedesk. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-karedesk-primary transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terms" className="hover:text-karedesk-primary transition-colors">
                Términos de Servicio
              </Link>
              <Link href="/cookies" className="hover:text-karedesk-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
