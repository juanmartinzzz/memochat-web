import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, MicroscopeIcon as MicrophoneIcon, Heart, Users } from 'lucide-react'

const Message = ({ content, isUser = false, delay = 0 }) => (
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

const HowMemochatWorks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [showAllMessages, setShowAllMessages] = useState(false)

  const features = [
    {
      icon: <MessageSquare size={40} />,
      title: "Natural Conversations",
      description: "Explore your loved one's life story through friendly, guided conversations that feel natural and comfortable."
    },
    {
      icon: <MicrophoneIcon size={40} />,
      title: "Capture Their Voice",
      description: "Record their memories, anecdotes, and life lessons in their own words or voice, preserving their unique personality."
    },
    {
      icon: <Heart size={40} />,
      title: "Meaningful Questions",
      description: "We help you ask questions that matter, focusing on what's most important to your loved one."
    },
    {
      icon: <Users size={40} />,
      title: "Include Others",
      description: "Invite family members, colleagues, or friends to enrich the story with their own perspectives and memories."
    }
  ]

  const conversation = [
    { content: "Hi! Let me show you how our service works.", isUser: false },
    { content: "👍", isUser: true },
    { content: "Basically, you'll create an account and tell us a bit about your loved one.", isUser: false },
    { content: "What kind of info do you need?", isUser: true },
    { content: "Just basics: a name or nickname. Then we'll invite them to join.", isUser: false },
    { content: "And then what happens?", isUser: true },
    { content: "Memochat guides you 2 through the chapters in your loved one's life, sparking conversation then stepping back to give them the mic 🎤", isUser: false },
    { content: "Can we record their voice too?", isUser: true },
    { content: "Absolutely - anyone can post voice messages at any time 🔊", isUser: false },
    { content: "What if they mention someone else? Can I add them to a conversation?", isUser: true },
    { content: "Yup - chapters are divided into smaller private chunks, and you can invite anyone to join a specific part.", isUser: false },
    { content: "👌", isUser: true },
  ]

  return (
    <section className="section" ref={ref}>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-2 text-primary">How <span className="gradient-text">Memochat</span> Works</h2>
        <p className="text-xl max-w-3xl mx-auto">
          See how easy it is to preserve your family's precious memories
        </p>
      </motion.div>

      {/* Chat */}
      <div className="max-w-2xl mx-auto mb-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 relative">
          {/* Chat header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">M</div>
              <div className="ml-3">
                <div className="font-bold">Memochat AI</div>
                <div className="text-sm text-gray-500">Online</div>
              </div>
            </div>
          </div>

          {/* Chat messages */}
          <div className="space-y-4 mb-6">
            {conversation.slice(0, showAllMessages ? conversation.length : 6).map((message, index) => (
              <Message
                key={index}
                content={message.content}
                isUser={message.isUser}
                delay={(index-6) * 0.4}
              />
            ))}
          </div>

          {!showAllMessages && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              onClick={() => setShowAllMessages(true)}
              className="w-full py-3 text-center text-primary hover:text-secondary transition-colors"
            >
              Show more...
            </motion.button>
          )}
        </div>
      </div>
    </section>
  )
}

export default HowMemochatWorks