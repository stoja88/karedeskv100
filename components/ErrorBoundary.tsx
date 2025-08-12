'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    this.setState({ error, errorInfo })

    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // TODO: Send to error tracking service (Sentry, LogRocket, etc.)
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-karedesk-dark">
          <div className="max-w-md mx-auto text-center p-8">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </div>
            
            <h1 className="text-2xl font-bold mb-4">¡Oops! Algo salió mal</h1>
            
            <p className="text-gray-300 mb-8">
              Ha ocurrido un error inesperado. Nuestro equipo ha sido notificado automáticamente.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-left mb-6 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                <summary className="cursor-pointer text-red-400 font-semibold mb-2">
                  Detalles del Error (Solo en Desarrollo)
                </summary>
                <pre className="text-xs text-red-300 overflow-auto">
                  {this.state.error.message}
                  {this.state.error.stack}
                </pre>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleRetry}
                className="btn-primary px-6 py-3 rounded-lg text-black font-semibold flex items-center justify-center"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Intentar de Nuevo
              </button>
              
              <Link
                href="/"
                className="glass-effect px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-white/10 transition-colors border border-karedesk-primary/30"
              >
                <Home className="w-5 h-5 mr-2" />
                Ir al Inicio
              </Link>
            </div>

            <p className="text-sm text-gray-400 mt-6">
              Si el problema persiste, contacta con soporte: 
              <a href="mailto:soporte@karedesk.com" className="text-karedesk-primary hover:underline">
                soporte@karedesk.com
              </a>
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}