'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-12 h-12 rounded-full glass-effect flex items-center justify-center">
        <Moon className="w-5 h-5 text-karedesk-primary" />
      </div>
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative z-50 w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-colors group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute"
      >
        <Moon className="w-5 h-5 text-karedesk-primary" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'light' ? 0 : -180,
          scale: theme === 'light' ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute"
      >
        <Sun className="w-5 h-5 text-karedesk-primary" />
      </motion.div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-karedesk-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
    </motion.button>
  )
}