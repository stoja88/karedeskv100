'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import CheckoutForm from '@/components/CheckoutForm'
import LoadingSpinner from '@/components/LoadingSpinner'
import { ThemeProvider } from '@/contexts/ThemeContext'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

function CheckoutContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [clientSecret, setClientSecret] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [orderDetails, setOrderDetails] = useState<any>(null)

  const service = searchParams.get('service')
  const plan = searchParams.get('plan')
  const amount = searchParams.get('amount')

  useEffect(() => {
    if (!service || !plan || !amount) {
      setError('Parámetros de pago inválidos')
      setLoading(false)
      return
    }

    createPaymentIntent()
  }, [service, plan, amount])

  const createPaymentIntent = async () => {
    try {
      const token = localStorage.getItem('auth-token')
      if (!token) {
        router.push('/login?redirect=/checkout')
        return
      }

      const response = await fetch('/api/payments/create-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          service,
          plan,
          amount: parseFloat(amount!),
          description: `${service} - ${plan}`
        })
      })

      if (!response.ok) {
        throw new Error('Error al crear el pago')
      }

      const data = await response.json()
      setClientSecret(data.clientSecret)
      setOrderDetails({
        orderId: data.orderId,
        amount: data.amount,
        currency: data.currency
      })
    } catch (error) {
      console.error('Error:', error)
      setError('Error al procesar el pago')
    } finally {
      setLoading(false)
    }
  }

  const handlePaymentSuccess = (orderId: string) => {
    router.push(`/payment/success?orderId=${orderId}`)
  }

  const handlePaymentError = (error: string) => {
    setError(error)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text="Preparando el pago..." />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-400 text-xl mb-4">{error}</div>
          <Link href="/" className="btn-primary px-6 py-3 rounded-lg text-black font-semibold">
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  const appearance = {
    theme: 'night' as const,
    variables: {
      colorPrimary: '#7FBFBF',
      colorBackground: '#1A1A1A',
      colorText: '#ffffff',
      colorDanger: '#df1b41',
      fontFamily: 'Inter, system-ui, sans-serif',
      spacingUnit: '4px',
      borderRadius: '8px',
    },
  }

  const options = {
    clientSecret,
    appearance,
  }

  return (
    <div className="min-h-screen py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-bg"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-karedesk-primary/10 rounded-full blur-3xl floating-element"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-karedesk-primary/5 rounded-full blur-3xl floating-element" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-gray-300 hover:text-karedesk-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al inicio
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Finalizar <span className="gradient-text">Compra</span>
          </h1>
          <p className="text-xl text-gray-300">
            Completa tu pago de forma segura
          </p>
        </motion.div>

        {/* Checkout Form */}
        {clientSecret && orderDetails && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm
              clientSecret={clientSecret}
              orderId={orderDetails.orderId}
              amount={orderDetails.amount}
              currency={orderDetails.currency}
              service={service!}
              plan={plan!}
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
            />
          </Elements>
        )}

        {/* Alternate CTA: Consult first */}
        <div className="mt-6 text-center">
          {service && (
            (() => {
              const map: Record<string, string> = {
                WEB_VULNERABILITY_ANALYSIS: '/servicios/vulnerabilidades#contacto',
                REMOTE_IT_SUPPORT: '/servicios/asistencia-remota#contacto',
                AI_CONSULTING: '/servicios/consultoria-ia#contacto',
                EXPRESS_WEB_CREATION: '/servicios/webs-express#contacto',
              }
              const url = map[service] || '#contacto'
              return (
                <Link href={url} className="inline-block mt-2 text-karedesk-primary hover:underline">
                  ¿Prefieres consultar primero? Contáctanos
                </Link>
              )
            })()
          )}
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <ThemeProvider>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <LoadingSpinner size="lg" text="Cargando..." />
        </div>
      }>
        <CheckoutContent />
      </Suspense>
    </ThemeProvider>
  )
}