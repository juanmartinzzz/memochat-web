import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = ({ onFeaturesClick, onPricingClick, onAboutClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navbarClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <span className="text-2xl font-display font-bold text-primary">Memochat</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={onFeaturesClick}
              className="text-primary hover:text-secondary transition-colors duration-300"
            >
              How It Works
            </button>
            <button
              onClick={onPricingClick}
              className="text-primary hover:text-secondary transition-colors duration-300"
            >
              Pricing
            </button>
            <button
              onClick={onAboutClick}
              className="text-primary hover:text-secondary transition-colors duration-300"
            >
              Our Story
            </button>
            <button className="btn-primary">
              Start Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white"
        >
          <div className="px-4 py-4 space-y-4">
            <button
              onClick={() => {
                onFeaturesClick()
                setIsOpen(false)
              }}
              className="block w-full text-left py-2 text-primary hover:text-secondary"
            >
              How It Works
            </button>
            <button
              onClick={() => {
                onPricingClick()
                setIsOpen(false)
              }}
              className="block w-full text-left py-2 text-primary hover:text-secondary"
            >
              Pricing
            </button>
            <button
              onClick={() => {
                onAboutClick()
                setIsOpen(false)
              }}
              className="block w-full text-left py-2 text-primary hover:text-secondary"
            >
              Our Story
            </button>
            <button className="btn-primary w-full">
              Start Now
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar