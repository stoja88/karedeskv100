'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Clock, Award } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Stat {
  icon: React.ComponentType<any>
  value: number
  suffix: string
  label: string
  color: string
}

const stats: Stat[] = [
  {
    icon: Shield,
    value: 99.9,
    suffix: '%',
    label: 'Uptime Garantizado',
    color: 'text-green-400'
  },
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Clientes Satisfechos',
    color: 'text-blue-400'
  },
  {
    icon: Clock,
    value: 24,
    suffix: '/7',
    label: 'Soporte Disponible',
    color: 'text-karedesk-primary'
  },
  {
    icon: Award,
    value: 5,
    suffix: '★',
    label: 'Calificación Promedio',
    color: 'text-yellow-400'
  }
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {value % 1 === 0 ? count : count.toFixed(1)}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-karedesk-primary/5 via-transparent to-karedesk-primary/5"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-karedesk-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Números que nos <span className="gradient-text">respaldan</span>
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 max-w-3xl mx-auto">
            La confianza de nuestros clientes se refleja en estos resultados
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="glass-effect rounded-3xl p-8 text-center group hover:shadow-glow transition-all duration-300"
            >
              <motion.div
                className="w-16 h-16 bg-karedesk-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-karedesk-primary/30 transition-colors"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </motion.div>

              <motion.div
                className={`text-4xl lg:text-5xl font-bold mb-2 ${stat.color}`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 200 }}
                viewport={{ once: true }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </motion.div>

              <p className="text-gray-300 dark:text-gray-300 font-medium">
                {stat.label}
              </p>

              {/* Hover effect line */}
              <motion.div
                className="w-0 h-1 bg-gradient-to-r from-transparent via-karedesk-primary to-transparent mx-auto mt-4 group-hover:w-full transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}