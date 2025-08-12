'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Zap, Wifi, WifiOff, Palette } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function DevStatus() {
  // Access context first to preserve hook order across renders
  const { theme } = useTheme()
  const [isConnected] = useState(true)
  const [lastUpdate, setLastUpdate] = useState(new Date())
  const [mounted, setMounted] = useState(false)
  const isDev = process.env.NODE_ENV === 'development'

  useEffect(() => {
    setMounted(true)
  }, [])

  // Drive periodic updates only when mounted and in dev
  useEffect(() => {
    if (!mounted || !isDev) return
    setLastUpdate(new Date())
    const interval = setInterval(() => setLastUpdate(new Date()), 1000)
    return () => clearInterval(interval)
  }, [mounted, isDev])

  if (!isDev || !mounted) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="fixed bottom-6 right-6 z-50 glass-effect rounded-2xl p-4 text-sm shadow-glow max-w-xs"
    >
      {/* Header */}
      <div className="flex items-center space-x-3 mb-3">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-8 h-8 bg-karedesk-primary/20 rounded-lg flex items-center justify-center"
        >
          <Zap className="w-4 h-4 text-karedesk-primary" />
        </motion.div>
        <div>
          <div className="font-bold text-karedesk-primary">Karedesk Dev</div>
          <div className="text-xs text-gray-400">Modo Desarrollo</div>
        </div>
      </div>

      {/* Status */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {isConnected ? (
              <Wifi className="w-4 h-4 text-green-400" />
            ) : (
              <WifiOff className="w-4 h-4 text-red-400" />
            )}
            <span className="text-xs">HMR</span>
          </div>
          <span className={`text-xs font-medium ${isConnected ? 'text-green-400' : 'text-red-400'}`}>
            {isConnected ? 'Conectado' : 'Desconectado'}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Palette className="w-4 h-4 text-karedesk-primary" />
            <span className="text-xs">Tema</span>
          </div>
          <span className="text-xs font-medium text-karedesk-primary capitalize">
            {theme}
          </span>
        </div>

        <div className="border-t border-karedesk-primary/20 pt-2 mt-2">
          <div className="text-xs text-gray-400">
            Última actualización: {lastUpdate.toLocaleTimeString()}
          </div>
        </div>
      </div>

      {/* Pulse indicator */}
      <motion.div
        className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  )
}