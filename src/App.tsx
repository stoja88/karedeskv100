import React, { useEffect } from 'react'
import { ThemeProvider, useTheme } from '../contexts/ThemeContext'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

function AppContent() {
  const { theme } = useTheme()

  useEffect(() => {
    // Aplicar clase de tema al documento de forma más robusta
    const html = document.documentElement
    const body = document.body
    
    // Remover clases existentes
    html.classList.remove('dark', 'light')
    body.classList.remove('dark', 'light')
    
    // Aplicar nueva clase de tema
    html.classList.add(theme)
    body.classList.add(theme)
    
    // Forzar actualización de estilos
    html.style.colorScheme = theme
    
    // Cleanup function
    return () => {
      html.classList.remove('dark', 'light')
      body.classList.remove('dark', 'light')
    }
  }, [theme])

  return (
    <div className="min-h-screen transition-colors duration-300">
      <div 
        className={`min-h-screen ${
          theme === 'light' 
            ? 'bg-gradient-to-br from-slate-50 to-white text-slate-900' 
            : 'bg-gradient-to-br from-gray-900 to-black text-white'
        }`}
      >
        <Header />
        <main>
          <section id="inicio">
            <Hero />
          </section>
          <Services />
          <section id="contacto">
            <ContactForm />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App