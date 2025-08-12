'use client'

import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

interface LoadingPageProps {
  message?: string
}

export default function LoadingPage({ message = 'Cargando...' }: LoadingPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-karedesk-dark">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border-4 border-karedesk-primary/20 border-t-karedesk-primary rounded-full mx-auto mb-6"
        />
        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-semibold mb-2"
        >
          {message}
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center space-x-2 text-gray-400"
        >
          <Loader2 className="w-4 h-4 animate-spin" />
          <span className="text-sm">Esto solo tomará un momento...</span>
        </motion.div>
      </div>
    </div>
  )
}