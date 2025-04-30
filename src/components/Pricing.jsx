import { motion } from 'framer-motion'
import { useState } from 'react'
import { Check } from 'lucide-react'

const Pricing = () => {
  const [feedbackText, setFeedbackText] = useState('')
  
  const handleSubmitFeedback = (e) => {
    e.preventDefault()
    if (feedbackText.trim()) {
      alert('Thank you for your feedback! We appreciate your input.')
      setFeedbackText('')
    }
  }
  
  return (
    <section className="section bg-gradient-to-br from-primary to-black text-white">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="section-title text-white mb-12">Simple & Transparent Pricing</h2>
        
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 bg-white text-dark rounded-2xl p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]"
          >
            <h3 className="text-2xl font-bold mb-2 text-primary">Start For Free</h3>
            <div className="text-4xl font-bold mb-6">$0</div>
            <div className="bg-primary h-1 w-16 mx-auto mb-6"></div>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Create an account</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Capture the first chapter of your loved one's life story</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Save and share the first chapter</span>
              </li>
            </ul>
            <button className="btn-primary w-full">Get Started</button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 bg-gradient-to-br from-gold/20 to-gold/5 text-white rounded-2xl p-8 border-2 border-gold shadow-[8px_8px_0px_0px_rgba(212,175,55,0.3)]"
          >
            <div className="inline-block bg-gold text-black px-3 py-1 rounded-full text-sm font-bold mb-2">MOST POPULAR</div>
            <h3 className="text-2xl font-bold mb-2 text-gold">Complete Story</h3>
            <div className="text-4xl font-bold mb-6">$30</div>
            <div className="bg-gold h-1 w-16 mx-auto mb-6"></div>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Everything in Free tier</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Capture all chapters of your loved one's life story</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Unlimited recordings and text stories</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Invite up to 5 family members or friends</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Download high-quality media files</span>
              </li>
            </ul>
            <button className="w-full bg-gold hover:bg-gold/80 text-black btn transition-all duration-300">Unlock Full Access</button>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="retro-card bg-white/10 border-white/20 backdrop-blur-sm inline-block px-12 py-8 mb-6">
            <h3 className="text-3xl font-bold font-display mb-2">
              100% Satisfaction Guarantee
            </h3>
            <p className="text-white/80">
              If you're not completely satisfied, we'll refund your purchase within 30 days.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-lg mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6">Help Shape Our Future</h3>
          <p className="mb-6 text-white/80">
            What feature would make you subscribe to Memochat? Share your thoughts with us!
          </p>
          
          <form onSubmit={handleSubmitFeedback} className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="I'd subscribe for..."
              className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/30 focus:border-gold focus:ring focus:ring-gold/50 focus:outline-none text-white"
            />
            <button
              type="submit"
              className="btn-primary bg-gold hover:bg-gold/80 text-black"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Pricing