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
import Chatbot from './components/Chatbot' 

const App = () => {
  return (
    <div className='w-full min-h-screen overflow-hidden bg-white selection:bg-orange-600 selection:text-white scroll-smooth'>
      
      {/* Fixed Navigation */}
      <Navbar />

      {/* 1. Hero Section */}
      <section id="home">
        <Header />
      </section>

      {/* 2. Property Details (No ID needed unless linked) */}
      <PropertyDetails />

      {/* 3. Interactive Showcase */}
      <section id="showcase">
        <PropertyShowcase />
      </section>
     
      {/* 4. Viral Reels */}
      <ViralReelsSection />

      {/* 5. Brand Identity */}
      <section id="about">
        <About />
      </section>

      {/* 6. Portfolio */}
      <section id="projects">
        <Projects />
      </section>

      {/* 7. Trust Building */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* 8. Lead Generation */}
      <section id="contact">
        <Contact />
      </section>

      {/* 9. Footer */}
      <Footer />

      {/* 10. AI Chatbot Component */}
      <Chatbot />
      
    </div>
  )
}

export default App