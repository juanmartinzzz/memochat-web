import { useState } from 'react'
import InvitationVideo from '../../components/invitation/InvitationVideo'
import InvitationImage from '../../components/invitation/InvitationImage'
import InvitationQR from '../../components/invitation/InvitationQR'
import InvitationLink from '../../components/invitation/InvitationLink'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()
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

      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display text-primary mb-6">Bring your loved one to Memochat</h1>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              Our last step before their stories, memories, and wisdom can live forever.
            </p>

            <p className="text-lg text-gray-700">
              There are several ways in which you can invite them. Choose the one that you think is best.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-display text-secondary mb-8 text-center">Invitation Methods</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <InvitationImage onShare={handleShareImage} />
          <InvitationQR invitationUrl={invitationUrl} onShare={handleShareQR} />
          <InvitationLink invitationUrl={invitationUrl} onShare={handleShareLink} />
        </div>

        <div className="text-center mt-12">
          <button
            className="btn-primary"
            onClick={() => navigate('/life-story')}
          >
            Move to the next step
          </button>
        </div>
      </div>
    </div>
  )
}

export default Invitation