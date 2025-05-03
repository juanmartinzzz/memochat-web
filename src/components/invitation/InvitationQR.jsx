import { QRCodeSVG } from 'qrcode.react'

const InvitationQR = ({ invitationUrl, onShare }) => {
  return (
    <div className="group">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
          </svg>
        </div>
        <h2 className="text-xl font-display text-secondary">Share QR Code</h2>
      </div>

      <div className="flex justify-center mb-4 group-hover:scale-[1.02] transition-transform duration-300">
        <div className="relative">
          <QRCodeSVG
            value={invitationUrl}
            size={200}
            level="H"
            includeMargin
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 rounded-full bg-gold/80 flex items-center justify-center">
              <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
            <span className="text-gold text-sm">1</span>
          </div>
          <p className="text-gray-700">Print or save this QR code to your device</p>
        </div>
        <div className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
            <span className="text-gold text-sm">2</span>
          </div>
          <p className="text-gray-700">Give it to your loved one in person or through a message</p>
        </div>
        <div className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
            <span className="text-gold text-sm">3</span>
          </div>
          <p className="text-gray-700">They can scan it with their phone's camera to join your story</p>
        </div>
      </div>

      <button
        onClick={onShare}
        className="w-full btn-primary group-hover:bg-secondary transition-colors duration-300"
      >
        Share QR Code
      </button>
    </div>
  )
}

export default InvitationQR