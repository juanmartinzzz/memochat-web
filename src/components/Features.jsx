import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, MicroscopeIcon as MicrophoneIcon, Heart, Users } from 'lucide-react'

const Message = ({ content, isUser = false, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, x: isUser ? 20 : -20 }}
    animate={{ opacity: 1, y: 0, x: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
  >
    <div className={`max-w-[80%] rounded-2xl p-4 ${isUser ? 'bg-primary text-white ml-8' : 'bg-gray-100 text-dark mr-8'}`}>
      {content}
    </div>
  </motion.div>
)

const Features = () => {
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
    { content: "Hi! I'm Sarah from Memochat. Let me show you how our service works.", isUser: false },
    { content: "That would be great! I'd love to capture my grandmother's stories.", isUser: true },
    { content: "Perfect! First, you'll create an account and tell us a bit about your grandmother.", isUser: false },
    { content: "What kind of information do you need?", isUser: true },
    { content: "Just basics like her nickname and any topics she loves talking about. Then we'll invite her to join.", isUser: false },
    { content: "And then what happens?", isUser: true },
    { content: "We'll guide you through meaningful conversations with carefully crafted questions.", isUser: false },
    { content: "Can we record her voice too?", isUser: true },
    { content: "Absolutely! You can capture her stories in text or voice recordings.", isUser: false },
    { content: "What about sharing with family?", isUser: true },
    { content: "You can invite family members to join and add their own memories and perspectives!", isUser: false },
    { content: "This sounds perfect for preserving our family history!", isUser: true },
  ]
  
  return (
    <section className="section" ref={ref}>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">How Memochat Works</h2>
        <p className="text-xl max-w-3xl mx-auto">
          See how easy it is to preserve your family's precious memories
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto mb-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 relative">
          {/* Chat header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">M</div>
              <div className="ml-3">
                <div className="font-bold">Memochat Guide</div>
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
                delay={index * 0.2}
              />
            ))}
          </div>

          {!showAllMessages && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              onClick={() => setShowAllMessages(true)}
              className="w-full py-3 text-center text-primary hover:text-secondary transition-colors"
            >
              Show more...
            </motion.button>
          )}
        </div>
      </div>

      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.3
            }
          }
        }}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            variants={{
              hidden: { y: 20, opacity: 0 },
              show: { y: 0, opacity: 1, transition: { duration: 0.8 } }
            }}
            className="retro-card"
          >
            <div className="mb-4 text-primary">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Features