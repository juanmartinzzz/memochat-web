const ChatHeader = ({ title = 'Memochat AI', status = 'Online' }) => (
  <div className="flex items-center justify-between pb-4 border-b">
    <div className="flex items-center">
      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">M</div>
      <div className="ml-3">
        <div className="font-bold">{title}</div>
        <div className="text-sm text-gray-500">{status}</div>
      </div>
    </div>
  </div>
)

export default ChatHeader