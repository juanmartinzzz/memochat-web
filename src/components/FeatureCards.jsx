import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Heart, MessageSquare, MicroscopeIcon, Users } from "lucide-react"

const FeatureCards = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: <MessageSquare size={40} />,
      title: "Natural Conversations",
      description: "Explore your loved one's life story through friendly, guided conversations that feel natural and comfortable."
    },
    {
      icon: <MicroscopeIcon size={40} />,
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

  return (
    <div ref={ref}>
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
    </div>
  )
}

export default FeatureCards