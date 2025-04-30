import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Founder = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50])
  
  return (
    <section ref={ref} className="section pt-20 pb-24 overflow-hidden">
      <motion.div 
        style={{ opacity, y }}
        className="max-w-5xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="section-title mb-8"
            >
              Our Story
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-xl leading-relaxed">
                When my grandmother passed away, I realized how many of her stories were lost forever. The way she described her childhood, her first dance, the day she met my grandfather—all gone.
              </p>
              
              <p className="text-xl leading-relaxed">
                That's why I created Memochat—to make sure no family loses the stories that shape who they are. Our mission is to help you capture and preserve the voices and memories of those you love.
              </p>
              
              <p className="text-xl leading-relaxed">
                Every life deserves to be remembered. Every story deserves to be told.
              </p>
              
              <div className="pt-4">
                <div className="font-display text-2xl italic text-primary">Sarah Johnson</div>
                <div className="text-gray-600">Founder, Memochat</div>
              </div>
            </motion.div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Video container */}
              <div className="aspect-[9/16] w-full max-w-[300px] mx-auto bg-gray-200 rounded-lg overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-black">
                {/* Placeholder for a video - in a real implementation, this would be an embedded video */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-black opacity-80 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <div className="w-16 h-16 mx-auto border-2 border-white rounded-full flex items-center justify-center mb-4">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                    </div>
                    <p className="font-medium">Watch Sarah's Story</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-20 h-20 border-4 border-secondary rounded-md opacity-20 rotate-12"></div>
              <div className="absolute -top-4 -right-4 w-12 h-12 border-4 border-gold opacity-20 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Founder