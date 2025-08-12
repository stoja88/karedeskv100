import React from 'react'
import { useEffect, useState } from 'react'
import { ThemeProvider } from '../../contexts/ThemeContext'
import App from '../App'
import ServiciosAsistenciaRemota from '../pages/ServiciosAsistenciaRemota'

// Simple router for Vite
export default function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Route components mapping
  const routes: Record<string, React.ComponentType> = {
    '/': App,
    '/servicios/asistencia-remota': ServiciosAsistenciaRemota,
    '/servicios/vulnerabilidades': () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Análisis de Vulnerabilidades</h1>
          <p className="mb-4">Página próximamente disponible</p>
          <a href="/" className="text-karedesk-primary hover:underline">← Volver al inicio</a>
        </div>
      </div>
    ),
    '/servicios/webs-express': () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Webs Express</h1>
          <p className="mb-4">Página próximamente disponible</p>
          <a href="/" className="text-karedesk-primary hover:underline">← Volver al inicio</a>
        </div>
      </div>
    ),
    '/servicios/consultoria-ia': () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Consultoría IA</h1>
          <p className="mb-4">Página próximamente disponible</p>
          <a href="/" className="text-karedesk-primary hover:underline">← Volver al inicio</a>
        </div>
      </div>
    ),
  }

  // Find matching route
  const RouteComponent = routes[currentPath] || (() => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Página no encontrada</h1>
        <a href="/" className="text-karedesk-primary hover:underline">← Ir al inicio</a>
      </div>
    </div>
  ))

  return (
    <ThemeProvider>
      <RouteComponent />
    </ThemeProvider>
  )
}

// Helper function to navigate programmatically
export const navigateTo = (path: string) => {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
}