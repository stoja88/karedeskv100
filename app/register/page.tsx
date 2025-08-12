'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Eye, EyeOff, Mail, Lock, User, Building, ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react'
import { ThemeProvider } from '@/contexts/ThemeContext'

interface RegisterForm {
  name: string
  email: string
  company?: string
  password: string
  confirmPassword: string
}

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<RegisterForm>()

  const password = watch('password')

  const onSubmit = async (data: RegisterForm) => {
    setIsLoading(true)
    setError('')
    setSuccess(false)

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          password: data.password,
        }),
      })

      if (response.ok) {
        setSuccess(true)
        setTimeout(() => {
          window.location.href = '/login'
        }, 2000)
      } else {
        const errorData = await response.json()
        setError(errorData.error || 'Error al crear la cuenta')
      }
    } catch (error) {
      setError('Error de conexión')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-bg"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-karedesk-primary/10 rounded-full blur-3xl floating-element"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-karedesk-primary/5 rounded-full blur-3xl floating-element" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-md mx-auto">
          {/* Back to Home */}
          <Link
            href="/"
            className="inline-flex items-center text-gray-300 hover:text-karedesk-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>

          {/* Register Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-8"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Image 
                  src="/logo.png" 
                  alt="Karedesk Logo" 
                  width={48} 
                  height={48} 
                  className="w-12 h-12"
                />
                <span className="text-2xl font-bold gradient-text">Karedesk</span>
              </div>
              <h1 className="text-2xl font-bold mb-2">Crear Cuenta</h1>
              <p className="text-gray-300">Únete a nuestra plataforma</p>
            </div>

            {/* Success Message */}
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 flex items-center mb-6"
              >
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-green-400">¡Cuenta creada exitosamente! Redirigiendo...</span>
              </motion.div>
            )}

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 flex items-center mb-6"
              >
                <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                <span className="text-red-400">{error}</span>
              </motion.div>
            )}

            {/* Register Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Nombre completo
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
                  Email
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

              {/* Company Field */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Empresa (opcional)
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

              {/* Password Field */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    {...register('password', {
                      required: 'La contraseña es obligatoria',
                      minLength: {
                        value: 6,
                        message: 'La contraseña debe tener al menos 6 caracteres'
                      }
                    })}
                    type={showPassword ? 'text' : 'password'}
                    className="form-input w-full pl-12 pr-12 py-3 rounded-lg text-white placeholder-gray-400"
                    placeholder="Tu contraseña"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-karedesk-primary transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Confirmar contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    {...register('confirmPassword', {
                      required: 'Confirma tu contraseña',
                      validate: value => value === password || 'Las contraseñas no coinciden'
                    })}
                    type={showConfirmPassword ? 'text' : 'password'}
                    className="form-input w-full pl-12 pr-12 py-3 rounded-lg text-white placeholder-gray-400"
                    placeholder="Confirma tu contraseña"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-karedesk-primary transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  required
                  className="w-4 h-4 text-karedesk-primary bg-transparent border-gray-300 rounded focus:ring-karedesk-primary focus:ring-2 mt-1"
                />
                <span className="text-sm text-gray-300">
                  Acepto los{' '}
                  <Link href="/terms" className="text-karedesk-primary hover:underline">
                    términos de servicio
                  </Link>{' '}
                  y la{' '}
                  <Link href="/privacy" className="text-karedesk-primary hover:underline">
                    política de privacidad
                  </Link>
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || success}
                className="btn-primary w-full py-3 rounded-lg text-black font-semibold flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                ) : null}
                {isLoading ? 'Creando cuenta...' : 'Crear Cuenta'}
              </button>
            </form>

            {/* Login Link */}
            <div className="text-center mt-6">
              <p className="text-gray-300">
                ¿Ya tienes cuenta?{' '}
                <Link href="/login" className="text-karedesk-primary hover:underline font-semibold">
                  Inicia sesión aquí
                </Link>
              </p>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}