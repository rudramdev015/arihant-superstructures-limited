import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import PropertyDetails from './components/PropertyDetails'
import PropertyShowcase from './components/PropertyShowcase'
import ViralReelsSection from './components/ViralReelsSection'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

// 1. IMPORT THE NEW CHATBOT COMPONENT
import Chatbot from './components/Chatbot' 

/**
 * ARIHANT 2 - TOP CLASS REAL ESTATE LANDING PAGE
 * Optimized for Jodhpur High-End Residential Market
 * Features: AI Chatbot, WhatsApp Integration, and 4K Design
 */
const App = () => {
  return (
    <div className='w-full min-h-screen overflow-hidden bg-white selection:bg-[#1a73e8] selection:text-white scroll-smooth'>
      
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Hero Section - First Impression */}
      <Header />

      {/* 3. High-Conversion Details (Connectivity & Bank Loans) */}
      <PropertyDetails />

      {/* 4. Interactive 1BHK/2BHK Floor Plans */}
      <PropertyShowcase />
     
      {/* 6. Viral Moments Section */}
      <ViralReelsSection />

      {/* 7. Brand Identity & Heritage */}
      <About />

      {/* 8. Portfolio & Trust Building */}
      <Projects />
      <Testimonials />

      {/* 9. Lead Generation & Site Footer */}
      <Contact />
      <Footer />

      {/* 10. FLOATING AI CHATBOT & WHATSAPP */}
      {/* This component stays fixed in the bottom right corner */}
      <Chatbot />
      
    </div>
  )
}

export default App