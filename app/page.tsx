'use client'

import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import StatsSection from '@/components/StatsSection'
import DevStatus from '@/components/DevStatus'

export default function Home() {
  return (
    <main id="contenido" role="main" className="min-h-screen">
      <Hero />
      <Services />
      <StatsSection />
      <ContactForm />
      <Footer />
      <ScrollToTop />
      <DevStatus />
    </main>
  )
}