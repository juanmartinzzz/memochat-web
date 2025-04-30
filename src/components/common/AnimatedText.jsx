import { motion } from 'framer-motion'

const AnimatedText = ({ text, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      key={text}
      className={className}
    >
      {text}
    </motion.div>
  )
}

export default AnimatedText