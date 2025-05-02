import { motion } from 'framer-motion'

const ChatMessage = ({ content, isUser = false, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, x: isUser ? 20 : -20, scale: 0.6 }}
    animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
    transition={{ duration: 0.3, delay }}
    className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
  >
    <div className={`max-w-[80%] rounded-2xl p-4 ${isUser ? 'bg-primary text-white ml-8' : 'bg-gray-100 text-dark mr-8'}`}>
      {content}
    </div>
  </motion.div>
)

export default ChatMessage