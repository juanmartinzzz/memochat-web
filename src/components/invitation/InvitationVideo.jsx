import { useState, useEffect } from 'react'

const phrases = [
  { text: "Share your memories", duration: 4000 },
  { text: "Connect through time", duration: 4000 },
  { text: "Preserve your story", duration: 4000 },
  { text: "Create lasting bonds", duration: 4000 },
  { text: "Share your journey", duration: 4000 },
  { text: "Build your legacy", duration: 4000 },
  { text: "Start the conversation", duration: 4000 }
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
    <div className="fixed top-8 left-8">
      <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl relative group border-4 border-black">
        <iframe
          className="w-64 mt-[-0px] ml-[-0px]"
          src="https://www.youtube.com/embed/fZ_JOBCLF-I"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="mt-2 text-center">
        <p className="text-black text-lg font-display mb-2 animate-fade-in">
          {phrases[currentPhrase].text}
        </p>
      </div>
    </div>
  )
}

export default InvitationVideo