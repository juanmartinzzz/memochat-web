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
        // style={{ opacity, y }}
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
              A Founder's Note
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-lg leading-tight"
            >
              <p>
                Hey there! I'm Juan, best known as Juanito — a latino living in Canada 🇨🇦
              </p>

              <p>
                I'm used to be surrounded by my big, warm, loving family.
              </p>

              <p>
                Now I'm with them once or twice a year, I started asking them to tell me stories — about my grandparents, about their siblings, and about themselves.
              </p>

              <p>
                I tried recording them, transcribing them, I even tried creating a podcast... but it never stuck.
              </p>

              <p>
                So I built <span className="gradient-text">Memochat</span>
              </p>

              <p>
                I want this tool to help you have meaningful convos with a loved one — and what is probably my favourite feature: preserve their stories in their own voice, so you (and your kids, and their kids) can keep them alive.
              </p>

              <p>
                If you're like me — missing your loved ones, a fan of their anecdotes, and wanting to preserve the essence of your family - then I made this for you.
              </p>

              <div className="pt-4">
                <div className="font-display text-2xl italic text-primary">Juan Martínez</div>
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
              <div className="aspect-[9/16] w-full max-w-[300px] mx-auto rounded-lg overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-black">
                {/* Eembedded video */}
                <iframe height="100%" src="https://www.youtube.com/embed/gSb8dl8m6rM" title="A Founder’s Note" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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