import { useRef, useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'

const ChatWindow = ({ messages, className = '' }) => {
  const chatContainerRef = useRef(null)
  const [renderedMessages, setRenderedMessages] = useState([])

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }

  useEffect(() => {
    console.log({messages})
    // Only process new messages that haven't been rendered yet
    const newMessages = messages.filter(msg => msg && !renderedMessages.includes(msg))

    if (newMessages.length > 0) {
      // Add messages one by one with delay
      newMessages.forEach((message, index) => {
        setTimeout(() => {
          setRenderedMessages(prev => [...prev, message])
          setTimeout(() => {
            scrollToBottom()
          }, 300)
        }, index * 1500) // 1.5 seconds delay between messages
      })
    }
  }, [messages])

  return (
    <div
      ref={chatContainerRef}
      className={`py-4 space-y-4 min-h-[512px] max-h-[calc(100vh-300px)] overflow-y-auto pr-2 ${className}`}
    >
      {console.log({renderedMessages})}
      {renderedMessages.map((message, index) => (
        <ChatMessage
          key={index}
          content={message.content}
          isUser={message.isUser}
          createdAt={message.createdAt}
          senderName={message.senderName}
          delay={0} // No delay for already rendered messages
        />
      ))}
    </div>
  )
}

export default ChatWindow