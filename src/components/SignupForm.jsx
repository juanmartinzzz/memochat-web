import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Star, User } from 'lucide-react'
import { SiAuth0, SiInstagram, SiMastercard, SiVisa, SiX } from '@icons-pack/react-simple-icons'

const CassetteTapeElements = () => {
  return (
    <>
      {/* Cassette tape holes */}
      <div className="absolute top-1/2 left-[96px] -translate-y-1/2 w-24 h-24 rounded-full bg-gray-900/20 border-2 border-white/10" />
      <div className="absolute top-1/2 left-[104px] -translate-y-1/2 w-20 h-20 rounded-full bg-gray-900/20 border-2 border-white/10" />
      <div className="absolute top-1/2 right-[96px] -translate-y-1/2 w-24 h-24 rounded-full bg-gray-900/20 border-2 border-white/10" />
      <div className="absolute top-1/2 right-[104px] -translate-y-1/2 w-20 h-20 rounded-full bg-gray-900/20 border-2 border-white/10" />

      {/* Cassette tape label */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/3 h-24 bg-gradient-to-r from-gray-900/30 0 via-gray-900/0 to-gray-900/30 border border-white/10" />

      {/* Cassette tape bottom elements */}
      {/* Main bottom edge */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[92%] h-1 bg-gray-900/40" />

      {/* Write-protect tabs */}
      <div className="absolute bottom-2 left-[12%] w-10 h-5 bg-gray-900/40 border border-white/20 rounded-sm" />
      <div className="absolute bottom-2 right-[12%] w-10 h-5 bg-gray-900/40 border border-white/20 rounded-sm" />

      {/* Center holes and indentations */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[40%] h-6 flex justify-between items-center">
        <div className="w-2 h-2 rounded-full bg-gray-900/40 border border-white/20" />
        <div className="w-2 h-2 rounded-full bg-gray-900/40 border border-white/20" />
      </div>

      {/* Center rectangular holes */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[30%] h-3 flex justify-between">
        <div className="w-1 h-3 bg-gray-900/40 border border-white/20" />
        <div className="w-1 h-3 bg-gray-900/40 border border-white/20" />
        <div className="w-1 h-3 bg-gray-900/40 border border-white/20" />
      </div>

      {/* Side notches */}
      <div className="absolute bottom-1 left-[8%] w-4 h-1 bg-gray-900/40" />
      <div className="absolute bottom-1 right-[8%] w-4 h-1 bg-gray-900/40" />

      {/* Texture lines */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[60%] h-4 flex flex-col justify-between">
        <div className="w-full h-[1px] bg-gray-900/30" />
        <div className="w-full h-[1px] bg-gray-900/30" />
        <div className="w-full h-[1px] bg-gray-900/30" />
      </div>
    </>
  )
}

const SignupForm = ({ id }) => {
  const [formData, setFormData] = useState({
    nickname: '',
    email: '',
    lovedOneNickname: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!formData.nickname || !formData.email || !formData.lovedOneNickname) {
      setError('All fields are required')
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          nickname: '',
          email: '',
          lovedOneNickname: ''
        })
      }, 5000)
    }, 1500)
  }

  return (
    <section id={id} className="relative section py-12 bg-primary text-white">
      <CassetteTapeElements />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Start the journey now
          </h2>
          <p className="text-xl opacity-90">
            No credit card required <Star size={16} className="inline-block" /> - you don't even need to sign up <User size={16} className="inline-block" />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm p-8 border border-white/20 relative overflow-hidden"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center py-6"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <Check size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-center text-lg">
                We'll be in touch soon to help you start capturing those precious memories.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="text"
                    id={`nickname-${id}`}
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-white/30 px-0 py-2 focus:outline-none focus:border-gold transition-colors peer placeholder-transparent"
                    placeholder="Your nickname"
                  />
                  <label
                    htmlFor={`nickname-${id}`}
                    className="absolute left-0 -top-3.5 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm text-white/70"
                  >
                    Your name or nickname
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    id={`email-${id}`}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-white/30 px-0 py-2 focus:outline-none focus:border-gold transition-colors peer placeholder-transparent"
                    placeholder="Your email"
                  />
                  <label
                    htmlFor={`email-${id}`}
                    className="absolute left-0 -top-3.5 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm text-white/70"
                  >
                    Your email
                  </label>
                </div>
              </div>

              <div className="relative group">
                <input
                  type="text"
                  id={`lovedOneNickname-${id}`}
                  name="lovedOneNickname"
                  value={formData.lovedOneNickname}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-white/30 px-0 py-2 focus:outline-none focus:border-gold transition-colors peer placeholder-transparent"
                  placeholder="Loved one's nickname"
                />
                <label
                  htmlFor={`lovedOneNickname-${id}`}
                  className="absolute left-0 -top-3.5 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm text-white/70"
                >
                  Loved one's name or nickname
                </label>
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold hover:bg-gold/80 text-black btn relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></span>
                    Processing...
                  </span>
                ) : (
                  <>
                    Get Started
                    <span className="absolute inset-0 h-full w-full scale-0 rounded-full bg-white/20 transition-transform duration-300 group-hover:scale-100" />
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>

        <p className="text-xs text-center text-white/60 mt-4">
          By signing up, you agree to our Terms of Service and Privacy Policy.
          {/* We'll occasionally send you updates about Memochat. */}
        </p>

        <div className="flex justify-center mt-6 space-x-6">
          <SiX className="text-white/70 hover:text-gold transition-colors cursor-pointer" onClick={() => window.open('https://x.com/juanito_asap', '_blank')} />
          <SiInstagram className="text-white/70 hover:text-gold transition-colors cursor-pointer" onClick={() => window.open('https://instagram.com/memochatai', '_blank')} />
        </div>
      </div>
    </section>
  )
}

export default SignupForm