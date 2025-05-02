import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowBigRight, ArrowRight, Check, Star } from 'lucide-react'

const Pricing = () => {
  const [feedbackText, setFeedbackText] = useState('')
  const [contactInfo, setContactInfo] = useState('')

  const handleSubmitFeedback = (e) => {
    e.preventDefault()
    if (feedbackText.trim()) {
      alert('Thank you for your feedback! We\'ll get back to you when we implement your requested feature.')
      setFeedbackText('')
      setContactInfo('')
    }
  }

  return (
    <section className="section relative overflow-hidden">
      {/* Retro background elements */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        <motion.div
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-display mb-4">
            <span className="gradient-text">Simple pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start without worrying, unlock the full story when you're ready
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-gold/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white rounded-3xl p-8 max-w-sm">
              <div className="text-4xl font-display mb-2">Chapter One</div>
              <div className="text-6xl font-bold mb-6">
                <span className="gradient-text">Free</span>
              </div>
              <div className="h-1 w-24 mx-auto mb-8 bg-gradient-to-r from-secondary to-gold"></div>
              <p className="text-xl mb-8">
                Start your journey with the first chapter of your loved one's story
              </p>
              <button className="w-full bg-gold hover:bg-gold/80 text-black btn transition-all duration-300 transform hover:scale-105">
                Begin Your Story
              </button>
            </div>
          </motion.div>

          {/* VS Separator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block text-4xl font-display text-gray-400"
          >
            <ArrowRight className="text-gold" size={64} />
          </motion.div>

          {/* Paid Plan */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-primary/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white rounded-3xl p-8 max-w-sm">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="text-primary" size={24} />
                <div className="text-4xl font-display">Full Story</div>
                <Star className="text-primary" size={24} />
              </div>
              <div className="text-6xl font-bold mb-6">
                <span className="text-primary">$30</span>
              </div>
              <div className="h-1 w-24 mx-auto mb-8 bg-primary"></div>
              <p className="text-xl mb-8">
                Unlock all chapters and preserve the complete story
              </p>
              <button className="btn-primary w-full transform hover:scale-105 transition-transform">
                Unlock Full Story
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-lg mx-auto"
        >
          <h3 className="text-2xl font-display mb-2">Not convinced?</h3>
          <p className="mb-6 text-gray-600">
            Tell us what feature you want to see in Memochat, and we'll contact you when we implement it!
          </p>

          <form onSubmit={handleSubmitFeedback} className="flex flex-col gap-4">
            <input
              type="text"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              placeholder="Email, phone, social media handle, anything"
              className="px-4 py-3 rounded-full bg-white border-2 border-gray-200 focus:border-gold focus:ring focus:ring-gold/50 focus:outline-none"
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="I would be interested if..."
                className="flex-1 px-4 py-3 rounded-full bg-white border-2 border-gray-200 focus:border-gold focus:ring focus:ring-gold/50 focus:outline-none"
              />
              <button
                type="submit"
                className="btn-primary bg-gold hover:bg-gold/80 text-black"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Pricing