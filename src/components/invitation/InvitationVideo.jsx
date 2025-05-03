import { useState, useEffect } from 'react'

const phrases = [
  { text: "Share your memories", duration: 2000 },
  { text: "Connect through time", duration: 2000 },
  { text: "Preserve your story", duration: 2000 },
  { text: "Create lasting bonds", duration: 2000 },
  { text: "Share your journey", duration: 2000 },
  { text: "Build your legacy", duration: 2000 },
  { text: "Start the conversation", duration: 2000 }
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
    <div className="fixed top-4 left-4">
      <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse" />
        <iframe
          className="w-full h-full relative z-10 group-hover:scale-105 transition-transform duration-300"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-gold/80 flex items-center justify-center animate-pulse">
            <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-black text-lg font-display mb-2 animate-fade-in">
          {phrases[currentPhrase].text}
        </p>
        <p className="text-sm text-gray-600 max-w-xs">
          Watch this video to understand the power of preserving your story
        </p>
      </div>
    </div>
  )
}

export default InvitationVideo