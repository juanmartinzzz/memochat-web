const InvitationLink = ({ invitationUrl, onShare }) => {
  return (
    <div className="group">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </div>
        <h2 className="text-xl font-display text-secondary">Share Link</h2>
      </div>

      <div className="mb-4 p-4 bg-white rounded-lg border border-gray-200 group-hover:border-secondary transition-colors duration-300">
        <p className="text-sm break-all font-mono text-gray-700">{invitationUrl}</p>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
            <span className="text-gold text-sm">1</span>
          </div>
          <p className="text-gray-700">Copy this unique invitation link</p>
        </div>
        <div className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
            <span className="text-gold text-sm">2</span>
          </div>
          <p className="text-gray-700">Share it through email, text, or your favorite messaging app</p>
        </div>
        <div className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
            <span className="text-gold text-sm">3</span>
          </div>
          <p className="text-gray-700">Your loved one can click the link to join your story</p>
        </div>
      </div>

      <button
        onClick={onShare}
        className="w-full btn-primary group-hover:bg-secondary transition-colors duration-300"
      >
        Share Link
      </button>
    </div>
  )
}

export default InvitationLink