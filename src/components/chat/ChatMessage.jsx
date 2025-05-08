import { motion } from 'framer-motion'
import { useState } from 'react'
import { MoreVertical, Clock, User, Smile, ArrowUpRight, Copy, Pin, Star, Share } from 'lucide-react'
import emojiList from '../../data/emojiList.json'

const ChatMessage = ({ content, senderName, isUser = false, delay = 0, createdAt }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [showEmojis, setShowEmojis] = useState(false)
  const [reactions, setReactions] = useState([])

  const handleReaction = (emoji) => {
    setReactions(prev => [...prev, emoji])
    setShowEmojis(false)
  }

  const handleAction = (action) => {
    // Implement action handlers here
    setShowMenu(false)
  }

  const popularEmojis = emojiList.emojis.slice(0, 6)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: isUser ? 20 : -20, scale: 0.6 }}
      animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 relative`}
    >
      <div className={`max-w-[80%] rounded-2xl p-4 ${isUser ? 'bg-primary text-white ml-8' : 'bg-gray-100 text-dark mr-8'}`}>
        {/* Ellipsis menu */}
        {showMenu && (
          <div className="relative flex justify-end">
            <div className="absolute top-0 right-0 bg-white rounded-lg shadow-lg p-2 z-10">
              <button onClick={() => handleAction('reply')} className="text-left px-2 py-1 hover:bg-gray-100 rounded"><ArrowUpRight size={12} className="inline-block" /> Reply</button>
              <button onClick={() => handleAction('copy')} className="text-left px-2 py-1 hover:bg-gray-100 rounded"><Copy size={12} className="inline-block" /> Copy</button>
              <button onClick={() => handleAction('pin')} className="text-left px-2 py-1 hover:bg-gray-100 rounded"><Pin size={12} className="inline-block" /> Pin</button>
              <button onClick={() => handleAction('star')} className="text-left px-2 py-1 hover:bg-gray-100 rounded"><Star size={12} className="inline-block" /> Star</button>
              <button onClick={() => handleAction('share')} className="text-left px-2 py-1 hover:bg-gray-100 rounded"><Share size={12} className="inline-block" /> Share</button>
            </div>
          </div>
        )}

        {/* Message header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <User size={16} />
            <span className="text-sm font-medium">{senderName}</span>
          </div>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-1 hover:bg-opacity-20 hover:bg-white rounded-full"
          >
            <MoreVertical size={16} />
          </button>
        </div>

        {/* Message content */}
        <div className="mb-2">{content}</div>

        {/* Reactions and timestamp */}
        <div className="flex items-center justify-between text-xs opacity-70">
          <div className="flex gap-2">
            {reactions.map((emoji, index) => (
              <span key={index}>{emoji}</span>
            ))}
            {reactions.length === 0 && (
              <button
                onClick={() => setShowEmojis(!showEmojis)}
                className="hover:bg-opacity-20 hover:bg-white rounded-full p-1"
              >
                <Smile size={12} />
              </button>
            )}
          </div>
          <div className="flex items-center gap-1">
            <span>{new Date(createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>

        {showEmojis && (
          <div className="absolute bottom-full left-0 bg-white dark:bg-dark rounded-lg shadow-lg p-2 flex gap-1">
            {popularEmojis.map((emoji) => (
              <button
                key={emoji.code}
                onClick={() => handleReaction(emoji.emoji)}
                className="hover:scale-110 transition-transform"
              >
                {emoji.emoji}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default ChatMessage