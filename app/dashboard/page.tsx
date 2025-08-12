'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  ShoppingBag, 
  FileText, 
  Settings, 
  LogOut,
  Calendar,
  CreditCard,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { useAuth } from '@/hooks/useAuth'
import ProtectedRoute from '@/components/ProtectedRoute'
import LoadingSpinner from '@/components/LoadingSpinner'
import ErrorBoundary from '@/components/ErrorBoundary'

interface Order {
  id: string
  service: string
  plan: string
  amount: number
  currency: string
  status: string
  createdAt: string
  invoice?: {
    number: string
    pdfUrl?: string
  }
}

interface User {
  id: string
  name: string
  email: string
  company?: string
}

function DashboardContent() {
  const { user, logout } = useAuth()
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('orders')

  useEffect(() => {
    if (user) {
      fetchOrders()
    }
  }, [user])

  const fetchOrders = async () => {
    setError(null)
    try {
      const response = await fetch('/api/orders', {
        credentials: 'include'
      })

      if (response.ok) {
        const ordersData = await response.json()
        setOrders(ordersData)
      } else {
        throw new Error('Error al cargar pedidos')
      }
    } catch (error) {
      console.error('Error fetching orders:', error)
      setError('Error al cargar los datos')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await logout()
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return <CheckCircle className="w-5 h-5 text-green-400" />
      case 'IN_PROGRESS':
        return <Clock className="w-5 h-5 text-yellow-400" />
      case 'PENDING':
        return <AlertCircle className="w-5 h-5 text-orange-400" />
      default:
        return <Clock className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return 'bg-green-500/20 text-green-400 border-green-500/50'
      case 'IN_PROGRESS':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
      case 'PENDING':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/50'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50'
    }
  }

  const formatPrice = (amount: number, currency: string) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: currency.toUpperCase()
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Error al cargar el dashboard</h2>
          <p className="text-gray-400 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary px-6 py-3 rounded-lg text-black font-semibold"
          >
            Reintentar
          </button>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text="Cargando dashboard..." />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-karedesk-dark dark:bg-karedesk-dark">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-karedesk-gray dark:bg-karedesk-gray min-h-screen p-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-karedesk-primary rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">K</span>
              </div>
              <span className="text-xl font-bold gradient-text">Karedesk</span>
            </div>

            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'orders'
                    ? 'bg-karedesk-primary/20 text-karedesk-primary'
                    : 'text-gray-300 hover:bg-karedesk-primary/10'
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Mis Pedidos</span>
              </button>

              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'profile'
                    ? 'bg-karedesk-primary/20 text-karedesk-primary'
                    : 'text-gray-300 hover:bg-karedesk-primary/10'
                }`}
              >
                <User className="w-5 h-5" />
                <span>Mi Perfil</span>
              </button>

              <button
                onClick={() => setActiveTab('invoices')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'invoices'
                    ? 'bg-karedesk-primary/20 text-karedesk-primary'
                    : 'text-gray-300 hover:bg-karedesk-primary/10'
                }`}
              >
                <FileText className="w-5 h-5" />
                <span>Facturas</span>
              </button>

              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition-colors mt-8"
              >
                <LogOut className="w-5 h-5" />
                <span>Cerrar Sesión</span>
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">
                Bienvenido, {user?.name || 'Usuario'}
              </h1>
              <p className="text-gray-300 dark:text-gray-300">
                Gestiona tus servicios y pedidos desde aquí
              </p>
            </div>

            {/* Content */}
            {activeTab === 'orders' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold mb-6">Mis Pedidos</h2>

                {orders.length === 0 ? (
                  <div className="glass-effect rounded-2xl p-12 text-center">
                    <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No tienes pedidos aún</h3>
                    <p className="text-gray-400 mb-6">
                      Explora nuestros servicios y realiza tu primer pedido
                    </p>
                    <button
                      onClick={() => router.push('/')}
                      className="btn-primary px-6 py-3 rounded-lg text-black font-semibold"
                    >
                      Ver Servicios
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <motion.div
                        key={order.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-effect rounded-xl p-6"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            {getStatusIcon(order.status)}
                            <div>
                              <h3 className="font-semibold">
                                {getServiceName(order.service)}
                              </h3>
                              <p className="text-sm text-gray-400">
                                Plan {order.plan} • {formatDate(order.createdAt)}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-karedesk-primary">
                              {formatPrice(order.amount, order.currency)}
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(order.status)}`}>
                              {order.status}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">
                            Pedido #{order.id.slice(-8).toUpperCase()}
                          </span>
                          {order.invoice && (
                            <button className="text-karedesk-primary hover:underline">
                              Descargar Factura
                            </button>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'profile' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold mb-6">Mi Perfil</h2>

                <div className="glass-effect rounded-2xl p-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Nombre</label>
                      <div className="form-input px-4 py-3 rounded-lg bg-gray-500/20">
                        {user?.name}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Email</label>
                      <div className="form-input px-4 py-3 rounded-lg bg-gray-500/20">
                        {user?.email}
                      </div>
                    </div>

                    {user?.company && (
                      <div>
                        <label className="block text-sm font-semibold mb-2">Empresa</label>
                        <div className="form-input px-4 py-3 rounded-lg bg-gray-500/20">
                          {user.company}
                        </div>
                      </div>
                    )}

                    <button className="btn-primary px-6 py-3 rounded-lg text-black font-semibold">
                      Editar Perfil
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'invoices' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold mb-6">Facturas</h2>

                <div className="glass-effect rounded-2xl p-12 text-center">
                  <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Próximamente</h3>
                  <p className="text-gray-400">
                    La gestión de facturas estará disponible pronto
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
  )
}

export default function DashboardPage() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <ProtectedRoute>
          <Suspense fallback={<LoadingSpinner size="lg" text="Cargando dashboard..." />}>
            <DashboardContent />
          </Suspense>
        </ProtectedRoute>
      </ErrorBoundary>
    </ThemeProvider>
  )
}