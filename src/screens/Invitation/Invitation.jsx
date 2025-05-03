import { useState } from 'react'
import InvitationVideo from '../../components/invitation/InvitationVideo'
import InvitationImage from '../../components/invitation/InvitationImage'
import InvitationQR from '../../components/invitation/InvitationQR'
import InvitationLink from '../../components/invitation/InvitationLink'

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
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [invitationId] = useState(() => Math.random().toString(36).substring(2, 15))
  const invitationUrl = `${window.location.origin}/join/${invitationId}`

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
      <InvitationVideo />
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display text-primary mb-6">Share Your Story</h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              Memochat AI is your personal time capsule - a place where your stories, memories, and wisdom can live forever.
            </p>
            <p className="text-lg text-gray-700">
              Choose how you'd like to invite your loved one to join you on this journey through time.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-display text-secondary mb-8 text-center">Invitation Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InvitationImage onShare={handleShareImage} />
          <InvitationQR invitationUrl={invitationUrl} onShare={handleShareQR} />
          <InvitationLink invitationUrl={invitationUrl} onShare={handleShareLink} />
        </div>
      </div>
    </div>
  )
}

export default Invitation