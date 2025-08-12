'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { 
  PaymentElement, 
  useStripe, 
  useElements,
  AddressElement 
} from '@stripe/react-stripe-js'
import { CheckCircle, AlertCircle, CreditCard, Lock } from 'lucide-react'
import LoadingSpinner from './LoadingSpinner'

interface CheckoutFormProps {
  clientSecret: string
  orderId: string
  amount: number
  currency: string
  service: string
  plan: string
  onSuccess: (orderId: string) => void
  onError: (error: string) => void
}

interface BillingForm {
  name: string
  email: string
  company?: string
  taxId?: string
}

export default function CheckoutForm({
  clientSecret,
  orderId,
  amount,
  currency,
  service,
  plan,
  onSuccess,
  onError
}: CheckoutFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)
  const [message, setMessage] = useState('')
  const [paymentElementReady, setPaymentElementReady] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<BillingForm>()

  useEffect(() => {
    if (!stripe || !clientSecret) return

    stripe.retrievePaymentIntent(clientSecret).then((res) => {
      const paymentIntent = res.paymentIntent
      switch (paymentIntent?.status) {
        case 'succeeded':
          setMessage('¡Pago completado exitosamente!')
          onSuccess(orderId)
          break
        case 'processing':
          setMessage('Tu pago se está procesando.')
          break
        case 'requires_payment_method':
          setMessage('Tu pago no se completó. Intenta de nuevo.')
          break
        default:
          setMessage('Algo salió mal.')
          break
      }
    })
  }, [stripe, clientSecret, orderId, onSuccess])

  const handlePaymentSubmit = async (billingData: BillingForm) => {
    if (!stripe || !elements) return

    setIsProcessing(true)
    setMessage('')

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment/success?orderId=${orderId}`,
        receipt_email: billingData.email,
        payment_method_data: {
          billing_details: {
            name: billingData.name,
            email: billingData.email,
            address: {
              line1: billingData.company || '',
            }
          }
        }
      },
      redirect: 'if_required'
    })

    if (error) {
      if (error.type === 'card_error' || error.type === 'validation_error') {
        setMessage(error.message || 'Error en el pago')
        onError(error.message || 'Error en el pago')
      } else {
        setMessage('Error inesperado. Intenta de nuevo.')
        onError('Error inesperado')
      }
    } else {
      setMessage('¡Pago completado exitosamente!')
      onSuccess(orderId)
    }

    setIsProcessing(false)
  }

  const formatPrice = (amount: number, currency: string) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: currency.toUpperCase()
    }).format(amount)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect rounded-2xl p-8"
      >
        {/* Order Summary */}
        <div className="mb-8 p-6 bg-karedesk-primary/10 rounded-xl" role="region" aria-label="Resumen del pedido">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <CreditCard className="w-6 h-6 mr-3 text-karedesk-primary" />
            Resumen del Pedido
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-300">Servicio:</span>
              <span className="font-semibold">{service}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Plan:</span>
              <span className="font-semibold">{plan}</span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t border-karedesk-primary/20 pt-2">
              <span>Total:</span>
              <span className="text-karedesk-primary">
                {formatPrice(amount, currency)}
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(handlePaymentSubmit)} className="space-y-6" noValidate>
          {/* Billing Information */}
          <div role="group" aria-labelledby="billing-info-heading">
            <h4 id="billing-info-heading" className="text-lg font-semibold mb-4">Información de Facturación</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="billing-name" className="block text-sm font-semibold mb-2">
                  Nombre completo *
                </label>
                <input
                  id="billing-name"
                  {...register('name', { required: 'El nombre es obligatorio' })}
                  type="text"
                  className="form-input w-full px-4 py-3 rounded-lg text-white placeholder-gray-400"
                  placeholder="Tu nombre completo"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'billing-name-error' : undefined}
                />
                {errors.name && (
                  <p id="billing-name-error" className="text-red-400 text-sm mt-1 flex items-center" role="alert">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="billing-email" className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  id="billing-email"
                  {...register('email', {
                    required: 'El email es obligatorio',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido'
                    }
                  })}
                  type="email"
                  className="form-input w-full px-4 py-3 rounded-lg text-white placeholder-gray-400"
                  placeholder="tu@email.com"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'billing-email-error' : undefined}
                />
                {errors.email && (
                  <p id="billing-email-error" className="text-red-400 text-sm mt-1 flex items-center" role="alert">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="billing-company" className="block text-sm font-semibold mb-2">
                  Empresa
                </label>
                <input
                  id="billing-company"
                  {...register('company')}
                  type="text"
                  className="form-input w-full px-4 py-3 rounded-lg text-white placeholder-gray-400"
                  placeholder="Tu empresa"
                />
              </div>

              <div>
                <label htmlFor="billing-taxId" className="block text-sm font-semibold mb-2">
                  NIF/CIF
                </label>
                <input
                  id="billing-taxId"
                  {...register('taxId')}
                  type="text"
                  className="form-input w-full px-4 py-3 rounded-lg text-white placeholder-gray-400"
                  placeholder="12345678A"
                />
              </div>
            </div>
          </div>

          {/* Address Element */}
          <div role="group" aria-labelledby="billing-address-heading">
            <h4 id="billing-address-heading" className="text-lg font-semibold mb-4">Dirección de Facturación</h4>
            <div className="p-4 glass-effect rounded-lg">
              <AddressElement 
                options={{
                  mode: 'billing',
                  allowedCountries: ['ES', 'FR', 'IT', 'PT', 'DE'],
                }}
              />
            </div>
          </div>

          {/* Payment Element */}
          <div role="group" aria-labelledby="payment-info-heading">
            <h4 id="payment-info-heading" className="text-lg font-semibold mb-4 flex items-center">
              <Lock className="w-5 h-5 mr-2 text-karedesk-primary" />
              Información de Pago
            </h4>
            <div className="p-4 glass-effect rounded-lg">
              <PaymentElement 
                onReady={() => setPaymentElementReady(true)}
                options={{
                  layout: 'tabs'
                }}
              />
            </div>
          </div>

          {/* Security Notice */}
          <div className="flex items-center space-x-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg" aria-label="Aviso de seguridad">
            <Lock className="w-5 h-5 text-green-400 flex-shrink-0" />
            <div className="text-sm">
              <p className="text-green-400 font-semibold">Pago 100% Seguro</p>
              <p className="text-gray-300">
                Tus datos están protegidos con encriptación SSL de 256 bits
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!stripe || !paymentElementReady || isProcessing}
            className="btn-primary w-full py-4 rounded-xl text-black font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            aria-busy={isProcessing}
          >
            {isProcessing ? (
              <>
                <LoadingSpinner size="sm" color="white" />
                <span className="ml-3">Procesando pago...</span>
              </>
            ) : (
              <>
                <Lock className="w-5 h-5 mr-3" />
                Pagar {formatPrice(amount, currency)}
              </>
            )}
          </button>

          {/* Status Message */}
          <div className="status-region" aria-live="polite" aria-atomic="true">
            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg flex items-center ${
                  message.includes('exitosamente') || message.includes('completado')
                    ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                    : 'bg-red-500/20 border border-red-500/50 text-red-400'
                }`}
                role="status"
              >
                {message.includes('exitosamente') || message.includes('completado') ? (
                  <CheckCircle className="w-5 h-5 mr-3" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-3" />
                )}
                {message}
              </motion.div>
            )}
          </div>
        </form>

        {/* Trust Badges */}
        <div className="mt-8 pt-6 border-t border-karedesk-primary/20" role="region" aria-label="Sellos de confianza">
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center">
              <Lock className="w-4 h-4 mr-2" />
              SSL Seguro
            </div>
            <div className="flex items-center">
              <CreditCard className="w-4 h-4 mr-2" />
              Stripe
            </div>
            <div>256-bit Encryption</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}