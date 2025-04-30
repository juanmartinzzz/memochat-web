import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import AnimatedText from './common/AnimatedText'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const messages = [
    "Preserve their voice forever",
    "Capture precious memories together",
    "Share stories across generations",
    "Discover their life story",
    "Uncover their adventures"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  }

  return (
    <section className="min-h-screen pt-24 pb-16 px-4 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-primary opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-secondary opacity-10 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gold opacity-5 blur-3xl"></div>

      {/* Retro decorative elements */}
      <div className="absolute top-20 right-20 w-16 h-16 border-4 border-primary rounded-full opacity-20 hidden md:block"></div>
      <div className="absolute bottom-40 left-10 w-24 h-6 bg-secondary opacity-20 rotate-12 hidden md:block"></div>
      <div className="absolute top-40 left-20 w-12 h-12 border-4 border-gold opacity-20 rotate-45 hidden md:block"></div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto text-center z-10"
      >
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold mb-6 font-display"
        >
          Don't let their story be <span className="gradient-text">forgotten</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="h-24 flex items-center justify-center mb-8"
        >
          <AnimatedText
            text={messages[currentIndex]}
            className="text-2xl md:text-4xl font-display italic text-secondary"
          />
        </motion.div>

        <motion.p
          variants={item}
          className="text-xl mb-10 max-w-2xl mx-auto"
        >
          Explore, capture, and treasure your loved one's life story through natural conversation.
          Create a lasting record of their memories and wisdom in their own words.
        </motion.p>

        <motion.div variants={item}>
          <a href="#primary-cta" className="btn-primary inline-block text-lg">
            Start Preserving Memories
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        >
          <a href="#primary-cta">
            <ChevronDown size={32} className="animate-bounce text-primary" />
          </a>
        </motion.div>
      </motion.div>

      {/* Vinyl record decorative element */}
      <div className="absolute -right-20 top-1/4 w-64 h-64 border-8 border-black rounded-full opacity-10 hidden lg:block">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border border-black"></div>
      </div>

      {/* Cassette tape decorative element */}
      <div className="absolute -left-16 bottom-32 w-48 h-28 border-4 border-black rounded-md opacity-10 hidden lg:block">
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-black"></div>
        <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-black"></div>
      </div>
    </section>
  )
}

export default Hero