import { useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Pricing from './components/Pricing'
import Founder from './components/Founder'
import SignupForm from './components/SignupForm'
import FeatureCards from './components/FeatureCards'
import HowMemochatWorks from './components/HowMemochatWorks'
import CompleteSetup from './screens/CompleteSetup/CompleteSetup'
import LifeStory from './screens/LifeStory/LifeStory'

function App() {
  const aboutRef = useRef(null)
  const pricingRef = useRef(null)
  const featuresRef = useRef(null)
  const featureCardsRef = useRef(null)
  const howMemochatWorksRef = useRef(null)
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-light text-dark">
      <Navbar
        onAboutClick={() => scrollToSection(aboutRef)}
        onPricingClick={() => scrollToSection(pricingRef)}
        onFeaturesClick={() => scrollToSection(featuresRef)}
        onFeatureCardsClick={() => scrollToSection(featureCardsRef)}
        onHowMemochatWorksClick={() => scrollToSection(howMemochatWorksRef)}
      />

      <Routes>
        <Route path="/complete-setup" element={<CompleteSetup />} />
        <Route path="/life-story" element={<LifeStory />} />
        <Route path="/" element={
          <main>
            <Hero />
            <SignupForm id="primary-cta" />
            <div ref={howMemochatWorksRef}>
              <HowMemochatWorks />
            </div>
            <SignupForm id="secondary-cta" />
            {/* <div ref={featureCardsRef}>
              <FeatureCards />
            </div> */}
            <div ref={pricingRef}>
              <Pricing />
            </div>
            <SignupForm id="tertiary-cta" />
            <div ref={aboutRef}>
              <Founder />
            </div>
          </main>
        } />
      </Routes>

      <Footer />
    </div>
  )
}

export default App