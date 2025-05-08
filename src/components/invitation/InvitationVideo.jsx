import { useState, useEffect } from 'react'

const phrases = [
  { text: "How to invite your loved ones", duration: 4000 },
  { text: "Click play to get useful tips", duration: 4000 },
  // { text: "Preserve your story", duration: 4000 },
  // { text: "Create lasting bonds", duration: 4000 },
  // { text: "Share your journey", duration: 4000 },
  // { text: "Build your legacy", duration: 4000 },
  // { text: "Start the conversation", duration: 4000 }
]

const InvitationVideo = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, phrases[currentPhrase].duration)
    return () => clearInterval(interval)
  }, [currentPhrase])

  return (
    <div className="md:max-w-64 md:fixed md:top-8 md:left-8 mb-8 md:mb-0 flex flex-col justify-center items-center z-50">
      <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl relative group border-4 border-black">
        <iframe
          className="h-[384px] mt-[-96px] ml-[-25px]"
          src="https://www.youtube.com/embed/gSb8dl8m6rM"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="max-w-32 mt-2 text-center">
        <p className="text-md mb-2 animate-fade-in uppercase leading-none">
          {phrases[currentPhrase].text}
        </p>
      </div>
    </div>
  )
}

export default InvitationVideo