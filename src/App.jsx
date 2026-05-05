import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import PropertyDetails from './components/PropertyDetails'
import FloorPlans from './components/FloorPlans'
import PropertyShowcase from './components/PropertyShowcase'
import ViralReelsSection from './components/ViralReelsSection'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import SiteVisit from './components/SiteVisit'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

const App = () => {
  return (
    <div className='w-full min-h-screen overflow-hidden bg-white scroll-smooth'>

      {/* Fixed Navigation */}
      <Navbar />

      {/* 1. Hero */}
      <section id="home">
        <Header />
      </section>

      {/* 2. Property Overview */}
      <PropertyDetails />

      {/* 3. Floor Plans */}
      <section id="floorplans">
        <FloorPlans />
      </section>

      {/* 4. Interactive Layout Showcase */}
      <section id="showcase">
        <PropertyShowcase />
      </section>

      {/* 4. Social Reels */}
      <ViralReelsSection />

      {/* 5. Brand & CMD */}
      <section id="about">
        <About />
      </section>

      {/* 6. Gallery */}
      <section id="projects">
        <Projects />
      </section>

      {/* 7. Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* 8. Free Site Visit CTA */}
      <SiteVisit />

      {/* 9. Contact */}
      <section id="contact">
        <Contact />
      </section>

      {/* 9. Footer */}
      <Footer />

      {/* Floating AI Chatbot */}
      <Chatbot />

    </div>
  )
}

export default App
