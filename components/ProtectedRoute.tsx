'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import LoadingPage from './LoadingPage'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: string[]
  redirectTo?: string
}

export default function ProtectedRoute({ 
  children, 
  requiredRole = [], 
  redirectTo = '/login' 
}: ProtectedRouteProps) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push(redirectTo)
        return
      }

      if (requiredRole.length > 0 && !requiredRole.includes(user.role)) {
        router.push('/')
        return
      }
    }
  }, [user, loading, router, requiredRole, redirectTo])

  if (loading) {
    return <LoadingPage message="Verificando autenticación..." />
  }

  if (!user) {
    return <LoadingPage message="Redirigiendo..." />
  }

  if (requiredRole.length > 0 && !requiredRole.includes(user.role)) {
    return <LoadingPage message="Acceso denegado..." />
  }

  return <>{children}</>
}