import { useState, useEffect } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { useLocation } from 'react-router-dom'

const phrases = [
  { text: "Share your memories", duration: 2000 },
  { text: "Connect through time", duration: 2000 },
  { text: "Preserve your story", duration: 2000 },
  { text: "Create lasting bonds", duration: 2000 },
  { text: "Share your journey", duration: 2000 },
  { text: "Build your legacy", duration: 2000 },
  { text: "Start the conversation", duration: 2000 }
]

const Invitation = () => {
  const location = useLocation()
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [invitationId] = useState(() => Math.random().toString(36).substring(2, 15))
  const invitationUrl = `${window.location.origin}/join/${invitationId}`

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, phrases[currentPhrase].duration)
    return () => clearInterval(interval)
  }, [currentPhrase])

  const handleShareImage = () => {
    // TODO: Implement image sharing
    console.log('Sharing image...')
  }

  const handleShareQR = () => {
    // TODO: Implement QR code sharing
    console.log('Sharing QR code...')
  }

  const handleShareLink = () => {
    // TODO: Implement link sharing
    console.log('Sharing link...')
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Floating YouTube Video */}
        <div className="fixed top-4 left-4 w-64 h-64 rounded-full overflow-hidden shadow-xl">
          <div className="relative w-full h-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <p className="text-white text-center text-lg font-display">
                {phrases[currentPhrase].text}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-display text-primary mb-8">Invite Your Loved One</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Image Share Option */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-xl font-display text-secondary mb-4">Share an Image</h2>
              <div className="relative w-full aspect-square mb-4">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
                  alt="Invitation"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                  <p className="text-white text-center px-4">
                    Join me on Memochat to share our memories together
                  </p>
                </div>
              </div>
              <button
                onClick={handleShareImage}
                className="w-full btn-primary"
              >
                Share Image
              </button>
            </div>

            {/* QR Code Option */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-xl font-display text-secondary mb-4">Share QR Code</h2>
              <div className="flex justify-center mb-4">
                <QRCodeSVG
                  value={invitationUrl}
                  size={200}
                  level="H"
                  includeMargin
                />
              </div>
              <button
                onClick={handleShareQR}
                className="w-full btn-primary"
              >
                Share QR Code
              </button>
            </div>

            {/* Link Share Option */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-xl font-display text-secondary mb-4">Share Link</h2>
              <div className="mb-4 p-4 bg-white rounded-lg border border-gray-200">
                <p className="text-sm break-all">{invitationUrl}</p>
              </div>
              <button
                onClick={handleShareLink}
                className="w-full btn-primary"
              >
                Share Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invitation