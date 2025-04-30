import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SignupForm from './components/SignupForm'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Founder from './components/Founder'
import Footer from './components/Footer'

function App() {
  const featuresRef = useRef(null)
  const pricingRef = useRef(null)
  const aboutRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-light text-dark">
      <Navbar
        onFeaturesClick={() => scrollToSection(featuresRef)}
        onPricingClick={() => scrollToSection(pricingRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
      />

      <main>
        <Hero />
        <SignupForm id="primary-cta" />
        <div ref={featuresRef}>
          <Features />
        </div>
        <SignupForm id="secondary-cta" />
        <div ref={pricingRef}>
          <Pricing />
        </div>
        <SignupForm id="tertiary-cta" />
        <div ref={aboutRef}>
          <Founder />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App