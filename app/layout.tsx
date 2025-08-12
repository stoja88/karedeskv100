import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import Header from '@/components/Header'
import ErrorBoundary from '@/components/ErrorBoundary'
import { Suspense } from 'react'
import LoadingPage from '@/components/LoadingPage'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Karedesk - Asistencia Digital Avanzada',
  description: 'Servicios profesionales de análisis de vulnerabilidades web, asistencia informática remota, creación de webs express y consultoría IA.',
  keywords: 'vulnerabilidades web, asistencia informática, desarrollo web, consultoría IA, ciberseguridad',
  authors: [{ name: 'Karedesk' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Karedesk - Asistencia Digital Avanzada',
    description: 'Servicios profesionales de análisis de vulnerabilidades web, asistencia informática remota, creación de webs express y consultoría IA.',
    url: process.env.NEXT_PUBLIC_SITE_URL || '/',
    siteName: 'Karedesk',
    locale: 'es_ES',
    type: 'website',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karedesk - Asistencia Digital Avanzada',
    description: 'Servicios profesionales de análisis de vulnerabilidades web, asistencia informática remota, creación de webs express y consultoría IA.',
    images: ['/logo.png'],
    creator: '@karedesk',
  },
  alternates: {
    canonical: '/',
  },
  // Next.js 15 metadata improvements
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8FAFC' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#7FBFBF" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <a href="#contenido" className="skip-link">Saltar al contenido principal</a>
        <ErrorBoundary>
          <ThemeProvider>
            <Suspense fallback={<LoadingPage message="Cargando aplicación..." />}>
              <Header />
              {children}
            </Suspense>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}