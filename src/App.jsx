import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import PropertyDetails from './components/PropertyDetails'

// ── LAZY-LOADED COMPONENTS ────────────────────────────────────────────────
// These are NOT parsed or executed on initial load.
// Each becomes its own JS chunk — browser downloads them in parallel
// only when needed, cutting initial bundle size by ~60%.
const FloorPlans          = lazy(() => import('./components/FloorPlans'))
const PropertyShowcase    = lazy(() => import('./components/PropertyShowcase'))
const ViralReelsSection   = lazy(() => import('./components/ViralReelsSection'))
const About               = lazy(() => import('./components/About'))
const Projects            = lazy(() => import('./components/Projects'))
const AmenitiesShowcase   = lazy(() => import('./components/AmenitiesShowcase'))
const Testimonials      = lazy(() => import('./components/Testimonials'))
const FAQSection        = lazy(() => import('./components/FAQSection'))
const SiteVisit         = lazy(() => import('./components/SiteVisit'))
const Contact           = lazy(() => import('./components/Contact'))
const Footer            = lazy(() => import('./components/Footer'))
const Chatbot           = lazy(() => import('./components/Chatbot'))

// Invisible spacer shown while a lazy chunk is still downloading.
// Preserves page height so no layout jump when content arrives.
const SectionFallback = ({ h = 'h-24' }) => (
  <div className={`w-full ${h} bg-white`} aria-hidden="true" />
)

const App = () => {
  return (
    <div className='w-full min-h-screen overflow-hidden bg-white scroll-smooth'>

      {/* ── CRITICAL PATH — loaded synchronously, always above fold ── */}
      <Navbar />
      <section id="home"><Header /></section>
      <PropertyDetails />

      {/* ── BELOW FOLD — each section in its own Suspense boundary so   ──
           they all start downloading in parallel and fail independently ── */}

      <Suspense fallback={<SectionFallback h="h-screen" />}>
        <section id="floorplans"><FloorPlans /></section>
      </Suspense>

      <Suspense fallback={<SectionFallback h="h-screen" />}>
        <section id="showcase"><PropertyShowcase /></section>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ViralReelsSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <section id="about"><About /></section>
      </Suspense>

      <Suspense fallback={<SectionFallback h="h-screen" />}>
        <section id="projects"><Projects /></section>
      </Suspense>

      <Suspense fallback={<SectionFallback h="h-screen" />}>
        <AmenitiesShowcase />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <section id="testimonials"><Testimonials /></section>
      </Suspense>

      <Suspense fallback={<SectionFallback h="h-screen" />}>
        <section id="faq"><FAQSection /></section>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <SiteVisit />
      </Suspense>

      <Suspense fallback={<SectionFallback h="h-screen" />}>
        <section id="contact"><Contact /></section>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>

      {/* Chatbot: no fallback — invisible if still loading */}
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>

    </div>
  )
}

export default App
