const InvitationImage = ({ onShare }) => {
  return (
    <div className="group">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-xl font-display text-secondary">Share an Image</h2>
      </div>

      <div className="relative w-full aspect-square mb-4 group-hover:scale-[1.02] transition-transform duration-300">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
          alt="Invitation"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-center px-4">
            Join me on Memochat to share our memories together
          </p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
            <span className="text-gold text-sm">1</span>
          </div>
          <p className="text-gray-700">Choose a meaningful photo that represents your relationship</p>
        </div>
        <div className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
            <span className="text-gold text-sm">2</span>
          </div>
          <p className="text-gray-700">Add a personal message explaining why you want to share your story</p>
        </div>
        <div className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
            <span className="text-gold text-sm">3</span>
          </div>
          <p className="text-gray-700">Share it with your loved one through your preferred messaging app</p>
        </div>
      </div>

      <button
        onClick={onShare}
        className="w-full btn-primary group-hover:bg-secondary transition-colors duration-300"
      >
        Share Image
      </button>
    </div>
  )
}

export default InvitationImage