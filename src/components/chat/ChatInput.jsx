import { useRef, useEffect } from 'react'

const ChatInput = ({ inputValue, setInputValue, onSendMessage }) => {
  const maxCharacters = 512
  const textareaRef = useRef(null)

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`
    }
  }, [inputValue])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSendMessage()
    }
  }

  return (
    <div className="relative">
      <div
        className="
          border
          border-gray-300
          rounded-lg
          shadow-md
          overflow-hidden"
      >
        <textarea
          ref={textareaRef}
          value={inputValue}
          onChange={({ target }) => setInputValue(target.value.slice(0, maxCharacters))}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="
            w-full
            p-4
            pr-24
            bg-white
            outline-none
            focus:outline-none
            resize-none"
          rows={1}
        />

        <div className="absolute right-2 bottom-2 flex flex-col items-center gap-2">
          <button
            onClick={onSendMessage}
            disabled={!inputValue.trim()}
            className="btn btn-primary"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatInput