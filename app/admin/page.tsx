'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  ShoppingBag, 
  Euro, 
  MessageSquare,
  TrendingUp,
  Calendar,
  AlertCircle
} from 'lucide-react'
import { ThemeProvider } from '@/contexts/ThemeContext'
import ProtectedRoute from '@/components/ProtectedRoute'
import LoadingSpinner from '@/components/LoadingSpinner'
import ErrorBoundary from '@/components/ErrorBoundary'

interface DashboardStats {
  totalUsers: number
  totalOrders: number
  totalRevenue: number
  pendingContacts: number
  recentOrders: any[]
  recentContacts: any[]
}

function AdminDashboardContent() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchDashboardStats()
  }, [])

  const fetchDashboardStats = async () => {
    try {
      const response = await fetch('/api/admin/dashboard', {
        credentials: 'include'
      })

      if (response.ok) {
        const data = await response.json()
        setStats(data)
      } else {
        throw new Error('Error al cargar estadísticas')
      }
    } catch (error) {
      console.error('Error:', error)
      setError('Error al cargar el dashboard')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text="Cargando dashboard administrativo..." />
      </div>
    )
  }

  if (error || !stats) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Error al cargar dashboard</h2>
          <p className="text-gray-400 mb-6">{error}</p>
          <button
            onClick={fetchDashboardStats}
            className="btn-primary px-6 py-3 rounded-lg text-black font-semibold"
          >
            Reintentar
          </button>
        </div>
      </div>
    )
  }

  const statCards = [
    {
      title: 'Total Usuarios',
      value: stats.totalUsers,
      icon: Users,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20'
    },
    {
      title: 'Total Pedidos',
      value: stats.totalOrders,
      icon: ShoppingBag,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20'
    },
    {
      title: 'Ingresos Totales',
      value: `€${stats.totalRevenue.toLocaleString()}`,
      icon: Euro,
      color: 'text-karedesk-primary',
      bgColor: 'bg-karedesk-primary/20'
    },
    {
      title: 'Contactos Pendientes',
      value: stats.pendingContacts,
      icon: MessageSquare,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20'
    }
  ]

  return (
    <div className="min-h-screen bg-karedesk-dark p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard Administrativo</h1>
          <p className="text-gray-300">Panel de control y estadísticas</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statCards.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <TrendingUp className="w-5 h-5 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-effect rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <ShoppingBag className="w-6 h-6 mr-3 text-karedesk-primary" />
              Pedidos Recientes
            </h3>
            <div className="space-y-4">
              {stats.recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-karedesk-gray/50 rounded-lg">
                  <div>
                    <p className="font-semibold">{order.user.name}</p>
                    <p className="text-sm text-gray-400">{order.service} - {order.plan}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-karedesk-primary">€{order.amount}</p>
                    <p className="text-xs text-gray-400">{formatDate(order.createdAt)}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Contacts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-effect rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <MessageSquare className="w-6 h-6 mr-3 text-karedesk-primary" />
              Contactos Recientes
            </h3>
            <div className="space-y-4">
              {stats.recentContacts.map((contact) => (
                <div key={contact.id} className="p-4 bg-karedesk-gray/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold">{contact.name}</p>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      contact.status === 'NEW' ? 'bg-orange-500/20 text-orange-400' : 'bg-green-500/20 text-green-400'
                    }`}>
                      {contact.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-1">{contact.email}</p>
                  <p className="text-sm text-gray-300">{contact.service}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
+  )
+}
+
+export default function AdminPage() {
+  return (
+    <ThemeProvider>
+      <ErrorBoundary>
+        <ProtectedRoute requiredRole={['ADMIN', 'SUPER_ADMIN']}>
+          <Suspense fallback={<LoadingSpinner size="lg" text="Cargando panel administrativo..." />}>
+            <AdminDashboardContent />
+          </Suspense>
+        </ProtectedRoute>
+      </ErrorBoundary>
+    </ThemeProvider>
   )
 }