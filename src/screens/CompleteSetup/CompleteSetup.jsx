import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ChatInputField from '../../components/interaction/ChatInputField'
import ChatWindow from '../../components/chat/ChatWindow'
import ChatHeader from '../../components/chat/ChatHeader'

const ChapterToggle = ({ title, enabled, onToggle }) => (
  <div className="flex items-center justify-between mb-2">
    <span className="text-sm">{title}</span>
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={enabled}
        onChange={onToggle}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
    </label>
  </div>
)

const CompleteSetup = () => {
  const navigate = useNavigate()
  const [signupData, setSignupData] = useState(null)
  const [step, setStep] = useState(1)
  const [education, setEducation] = useState('')
  const [messages, setMessages] = useState([])
  const [chapters, setChapters] = useState([
    { id: 1, title: 'Early Childhood', enabled: true },
    { id: 2, title: 'School Years', enabled: true },
    { id: 3, title: 'Teenage Years', enabled: true },
    { id: 4, title: 'College/University', enabled: true },
    { id: 5, title: 'First Job', enabled: true },
    { id: 6, title: 'Romantic Relationships', enabled: true },
    { id: 7, title: 'Marriage', enabled: false },
    { id: 8, title: 'Children', enabled: false },
    { id: 9, title: 'Career Growth', enabled: false },
    { id: 10, title: 'Life Challenges', enabled: false },
    { id: 11, title: 'Achievements', enabled: false },
    { id: 12, title: 'Life Lessons', enabled: false },
  ])

  useEffect(() => {
    const data = localStorage.getItem('signupData')
    if (data) {
      setSignupData(JSON.parse(data))
      // Initialize welcome messages
      setMessages([
        {
          content: "Welcome! Super good to have you here. Before we start, I just want to make sure we have all the right info.",
          isUser: false
        },
        {
          content: (
            <div>
              <p className="mb-4">Here's what we have so far:</p>
              <ChatInputField
                label="Your name or nickname"
                value={JSON.parse(data).nickname}
                onChange={(e) => setSignupData({...JSON.parse(data), nickname: e.target.value})}
              />
              <ChatInputField
                label="Your Email"
                widthClass="w-[256px]"
                value={JSON.parse(data).email}
                onChange={(e) => setSignupData({...JSON.parse(data), email: e.target.value})}
              />
              <ChatInputField
                label="Your loved one's name or nickname"
                value={JSON.parse(data).lovedOneNickname}
                onChange={(e) => setSignupData({...JSON.parse(data), lovedOneNickname: e.target.value})}
              />
            </div>
          ),
          isUser: false
        },
        {
          content: "Please make sure the info is AOK. You can edit it if needed.",
          isUser: false
        },
      ])
    }
  }, [])

  const toggleChapter = (id) => {
    setChapters(chapters.map(chapter =>
      chapter.id === id ? { ...chapter, enabled: !chapter.enabled } : chapter
    ))
  }

  const handleInfoConfirm = ({message}) => {
    setStep(2)
    setMessages(prev => [
      ...prev,
      {
        content: message,
        isUser: true
      },
      {
        content: "Perfect. Just so you know, you can add extra information or choose which chapters of your loved one's life you want to explore.",
        isUser: false
      },
      {
        content: (
          <div>
            <ChatInputField
              label="Education Level"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            />

            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Select Chapters to Explore:</p>
              {chapters.map(chapter => (
                <ChapterToggle
                  key={chapter.id}
                  title={chapter.title}
                  enabled={chapter.enabled}
                  onToggle={() => toggleChapter(chapter.id)}
                />
              ))}
            </div>
          </div>
        ),
        isUser: false
      }
    ])
  }

  const handleStart = ({message}) => {
    setMessages(prev => [
      ...prev,
      {
        content: message,
        isUser: true
      }
    ])
    // Here you would typically save the final configuration and proceed
    console.log('Starting with:', { signupData, education, chapters })

    /** @TODO later save configuration on Supabase */

    // Move User to Invitation screen
    navigate('/invitation')
  }

  if (!signupData) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <ChatHeader />

          <ChatWindow messages={messages} />

          <div className="flex justify-end">
            {step === 1 ? (
              <button
                className="btn-outline"
                onClick={() => handleInfoConfirm({message: "Ok, info is good"})}
              >
                Ok, info is good
              </button>
            ) : (
              <button
                className="btn-primary"
                onClick={() => handleStart({message: "I'm done with configs, let's start!"})}
              >
                I'm done with configs, let's start!
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompleteSetup