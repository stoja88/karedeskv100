'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { CheckCircle, Download, ArrowRight, Calendar } from 'lucide-react'
import Link from 'next/link'
import LoadingSpinner from '@/components/LoadingSpinner'
import { ThemeProvider } from '@/contexts/ThemeContext'

function PaymentSuccessContent() {
  const searchParams = useSearchParams()
  const [orderDetails, setOrderDetails] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const orderId = searchParams.get('orderId')

  useEffect(() => {
    if (orderId) {
      fetchOrderDetails()
    }
  }, [orderId])

  const fetchOrderDetails = async () => {
    try {
      const token = localStorage.getItem('auth-token')
      if (!token) return

      const response = await fetch('/api/orders', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        const orders = await response.json()
        const order = orders.find((o: any) => o.id === orderId)
        setOrderDetails(order)
      }
    } catch (error) {
      console.error('Error fetching order details:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatPrice = (amount: number, currency: string) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: currency.toUpperCase()
    }).format(amount)
  }

  const getServiceName = (service: string) => {
    const serviceNames = {
      'WEB_VULNERABILITY_ANALYSIS': 'Análisis de Vulnerabilidades Web',
      'REMOTE_IT_SUPPORT': 'Asistencia Informática Remota',
      'EXPRESS_WEB_CREATION': 'Creación de Webs Express',
      'AI_CONSULTING': 'Consultoría IA'
    }
    return serviceNames[service as keyof typeof serviceNames] || service
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text="Cargando detalles..." />
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-bg"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl floating-element"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-karedesk-primary/5 rounded-full blur-3xl floating-element" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: 'spring', 
              stiffness: 200, 
              damping: 10,
              delay: 0.2 
            }}
            className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-12 h-12 text-green-400" />
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              ¡Pago <span className="text-green-400">Exitoso</span>!
            </h1>
            <p className="text-xl text-gray-300">
              Tu pedido ha sido procesado correctamente
            </p>
          </motion.div>

          {/* Order Details */}
          {orderDetails && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-effect rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">Detalles del Pedido</h2>
              
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-center py-3 border-b border-karedesk-primary/20">
                  <span className="text-gray-300">Número de Pedido:</span>
                  <span className="font-mono text-karedesk-primary">#{orderDetails.id.slice(-8).toUpperCase()}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-karedesk-primary/20">
                  <span className="text-gray-300">Servicio:</span>
                  <span className="font-semibold">{getServiceName(orderDetails.service)}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-karedesk-primary/20">
                  <span className="text-gray-300">Plan:</span>
                  <span className="font-semibold">{orderDetails.plan}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-karedesk-primary/20">
                  <span className="text-gray-300">Estado:</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                    Confirmado
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-3 text-lg font-bold">
                  <span>Total Pagado:</span>
                  <span className="text-karedesk-primary">
                    {formatPrice(orderDetails.amount, orderDetails.currency)}
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass-effect rounded-2xl p-8 mb-8"
          >
            <h3 className="text-xl font-bold mb-6">¿Qué sigue ahora?</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-karedesk-primary/10 rounded-lg">
                <div className="w-8 h-8 bg-karedesk-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-karedesk-primary font-bold text-sm">1</span>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold mb-1">Confirmación por Email</h4>
                  <p className="text-gray-300 text-sm">
                    Recibirás un email de confirmación con todos los detalles en los próximos minutos.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-karedesk-primary/10 rounded-lg">
                <div className="w-8 h-8 bg-karedesk-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-karedesk-primary font-bold text-sm">2</span>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold mb-1">Contacto del Equipo</h4>
                  <p className="text-gray-300 text-sm">
                    Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-karedesk-primary/10 rounded-lg">
                <div className="w-8 h-8 bg-karedesk-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-karedesk-primary font-bold text-sm">3</span>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold mb-1">Inicio del Servicio</h4>
                  <p className="text-gray-300 text-sm">
                    Comenzaremos a trabajar en tu proyecto según los tiempos acordados.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/dashboard"
              className="btn-primary px-8 py-4 rounded-xl text-black font-bold flex items-center justify-center group"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Ver Mi Panel
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/"
              className="glass-effect px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              Volver al Inicio
            </Link>
          </motion.div>

          {/* Support Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 p-6 glass-effect rounded-xl"
          >
            <p className="text-gray-300 mb-2">
              ¿Tienes alguna pregunta sobre tu pedido?
            </p>
            <p className="text-karedesk-primary font-semibold">
              Contacta con nosotros: <a href="mailto:contacto@karedesk.com" className="hover:underline">contacto@karedesk.com</a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default function PaymentSuccessPage() {
  return (
    <ThemeProvider>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <LoadingSpinner size="lg" text="Cargando..." />
        </div>
      }>
        <PaymentSuccessContent />
      </Suspense>
    </ThemeProvider>
  )
}