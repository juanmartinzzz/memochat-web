import { useState } from 'react'
import ChatWindow from '../../components/chat/ChatWindow'
import ChatHeader from '../../components/chat/ChatHeader'
import ChatInput from '../../components/chat/ChatInput'
import ChapterList from '../../components/chat/ChapterList'

const LifeStory = () => {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [selectedChapter, setSelectedChapter] = useState(1)
  const [previouslySentMessages, setPreviouslySentMessages] = useState([])

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

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        content: inputValue,
        isUser: true,
        timestamp: new Date().toISOString(),
      }

      setMessages(prev => [...prev, newMessage])
      setPreviouslySentMessages(prev => [...prev, inputValue])
      setInputValue('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <ChatHeader />

          <ChatWindow messages={messages} />

          <ChatInput
            inputValue={inputValue}
            setInputValue={setInputValue}
            onSendMessage={handleSendMessage}
          />

          <ChapterList
            chapters={chapters}
            selectedChapter={selectedChapter}
            onSelectChapter={setSelectedChapter}
          />
        </div>
      </div>
    </div>
  )
}

export default LifeStory