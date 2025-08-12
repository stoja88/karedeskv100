'use client'

import { useState, useCallback } from 'react'
import { ToastType } from '@/components/NotificationToast'

interface Toast {
  id: string
  type: ToastType
  title: string
  message: string
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((type: ToastType, title: string, message: string) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { id, type, title, message }
    
    setToasts(prev => [...prev, newToast])
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      removeToast(id)
    }, 5000)
    
    return id
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  const success = useCallback((title: string, message: string) => {
    return addToast('success', title, message)
  }, [addToast])

  const error = useCallback((title: string, message: string) => {
    return addToast('error', title, message)
  }, [addToast])

  const info = useCallback((title: string, message: string) => {
    return addToast('info', title, message)
  }, [addToast])

  return {
    toasts,
    addToast,
    removeToast,
    success,
    error,
    info
  }
}