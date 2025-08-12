'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle, AlertCircle, User, Mail, Building, Phone, MessageSquare } from 'lucide-react'

interface FormData {
  name: string
  email: string
  company?: string
  phone?: string
  service: string
  message: string
}

const services = [
  { value: 'WEB_VULNERABILITY_ANALYSIS', label: 'Análisis de Vulnerabilidades Web' },
  { value: 'REMOTE_IT_SUPPORT', label: 'Asistencia Informática Remota' },
  { value: 'EXPRESS_WEB_CREATION', label: 'Creación de Webs Express' },
  { value: 'AI_CONSULTING', label: 'Consultoría IA' },
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-karedesk-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-karedesk-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Hablemos de tu <span className="gradient-text">Proyecto</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Estamos aquí para ayudarte a proteger y hacer crecer tu presencia digital. 
                  Contáctanos para una consulta gratuita y personalizada.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-karedesk-primary/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-karedesk-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Consulta Gratuita</h3>
                    <p className="text-gray-400">Análisis inicial sin compromiso</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-karedesk-primary/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-karedesk-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Respuesta en 24h</h3>
                    <p className="text-gray-400">Te contactamos en menos de un día</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-karedesk-primary/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-karedesk-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Propuesta Personalizada</h3>
                    <p className="text-gray-400">Solución adaptada a tus necesidades</p>
                  </div>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="glass-effect rounded-xl p-6">
                <h3 className="font-semibold mb-4">Otras formas de contacto</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-karedesk-primary" />
                    <span>contacto@karedesk.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-karedesk-primary" />
                    <span>+34 900 123 456</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Nombre completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...register('name', { required: 'El nombre es obligatorio' })}
                      type="text"
                      className="form-input w-full pl-12 pr-4 py-3 rounded-lg text-white placeholder-gray-400"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...register('email', {
                        required: 'El email es obligatorio',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email inválido'
                        }
                      })}
                      type="email"
                      className="form-input w-full pl-12 pr-4 py-3 rounded-lg text-white placeholder-gray-400"
                      placeholder="tu@email.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Company and Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Empresa
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register('company')}
                        type="text"
                        className="form-input w-full pl-12 pr-4 py-3 rounded-lg text-white placeholder-gray-400"
                        placeholder="Tu empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Teléfono
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register('phone')}
                        type="tel"
                        className="form-input w-full pl-12 pr-4 py-3 rounded-lg text-white placeholder-gray-400"
                        placeholder="+34 600 000 000"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Servicio de interés *
                  </label>
                  <select
                    {...register('service', { required: 'Selecciona un servicio' })}
                    className="form-input w-full px-4 py-3 rounded-lg text-white bg-transparent"
                  >
                    <option value="" className="bg-karedesk-gray text-white">Selecciona un servicio</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value} className="bg-karedesk-gray text-white">
                        {service.label}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.service.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Mensaje *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      {...register('message', { required: 'El mensaje es obligatorio' })}
                      rows={4}
                      className="form-input w-full pl-12 pr-4 py-3 rounded-lg text-white placeholder-gray-400 resize-none"
                      placeholder="Cuéntanos sobre tu proyecto y necesidades..."
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 rounded-lg text-black font-semibold flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-green-400">¡Mensaje enviado correctamente! Te contactaremos pronto.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 flex items-center"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                    <span className="text-red-400">Error al enviar el mensaje. Inténtalo de nuevo.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}