'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, AlertCircle, X, Info } from 'lucide-react'
import { useEffect } from 'react'

export type ToastType = 'success' | 'error' | 'info'

interface NotificationToastProps {
  type: ToastType
  title: string
  message: string
  isVisible: boolean
  onClose: () => void
  duration?: number
}

export default function NotificationToast({
  type,
  title,
  message,
  isVisible,
  onClose,
  duration = 5000
}: NotificationToastProps) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info
  }

  const colors = {
    success: 'border-green-500/50 bg-green-500/10 text-green-400',
    error: 'border-red-500/50 bg-red-500/10 text-red-400',
    info: 'border-karedesk-primary/50 bg-karedesk-primary/10 text-karedesk-primary'
  }

  const Icon = icons[type]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className="fixed top-6 right-6 z-50 max-w-md"
        >
          <div className={`glass-effect rounded-2xl p-6 border ${colors[type]} shadow-glow`}>
            <div className="flex items-start space-x-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              >
                <Icon className="w-6 h-6 flex-shrink-0" />
              </motion.div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-white dark:text-white">
                  {title}
                </h4>
                <p className="text-sm text-gray-300 dark:text-gray-300 mt-1">
                  {message}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Progress bar */}
            {duration > 0 && (
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-current rounded-b-2xl"
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: duration / 1000, ease: 'linear' }}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}