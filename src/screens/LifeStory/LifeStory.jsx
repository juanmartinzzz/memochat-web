import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ChatWindow from '../../components/chat/ChatWindow'
import ChatHeader from '../../components/chat/ChatHeader'

const LifeStory = () => {
  const navigate = useNavigate()
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [previouslySentMessages, setPreviouslySentMessages] = useState([])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedChapter, setSelectedChapter] = useState(1)
  const textareaRef = useRef(null)

  const chapters = [
    { id: 1, title: 'Early Childhood' },
    { id: 2, title: 'School Years' },
    { id: 3, title: 'Teenage Years' },
    { id: 4, title: 'College/University' },
    { id: 5, title: 'First Job' },
    { id: 6, title: 'Romantic Relationships' },
    { id: 7, title: 'Marriage' },
    { id: 8, title: 'Children' },
    { id: 9, title: 'Career Growth' },
    { id: 10, title: 'Life Challenges' },
    { id: 11, title: 'Achievements' },
    { id: 12, title: 'Life Lessons' },
  ]

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`
    }
  }, [inputValue])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage = {
      content: inputValue,
      isUser: true,
      timestamp: new Date().toISOString()
    }

    setMessages(prev => [...prev, newMessage])
    setPreviouslySentMessages(prev => [...prev, inputValue])
    setInputValue('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex gap-6">
          {/* Collapsible Menu */}
          <div className={`w-64 transition-all duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="bg-white rounded-2xl shadow-xl p-4">
              <h2 className="text-lg font-semibold mb-4">Life Chapters</h2>
              <div className="space-y-2">
                {chapters.map(chapter => (
                  <button
                    key={chapter.id}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedChapter === chapter.id
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedChapter(chapter.id)}
                  >
                    {chapter.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <ChatHeader />
              <ChatWindow messages={messages} />

              {/* Input Area */}
              <div className="mt-4">
                <div className="relative">
                  <textarea
                    ref={textareaRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value.slice(0, 1000))}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                    rows={1}
                  />
                  <div className="absolute bottom-3 right-3 flex items-center gap-2">
                    <span className="text-sm text-gray-500">
                      {inputValue.length}/1000
                    </span>
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className={`px-4 py-2 rounded-lg ${
                        inputValue.trim()
                          ? 'bg-primary text-white hover:bg-primary/90'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LifeStory