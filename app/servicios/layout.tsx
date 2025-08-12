'use client'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen relative">
      {/* Background Effects - Consistent for all service pages */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 hero-bg"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-karedesk-primary/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-karedesk-primary/5 rounded-full blur-3xl floating-element-reverse"></div>
      </div>

      {/* Common Navigation */}
      <div className="relative z-10 pt-24 pb-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center text-gray-300 hover:text-karedesk-primary transition-all duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Volver al inicio
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Page Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}