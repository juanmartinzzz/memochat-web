import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ChatInputField from '../../components/interaction/ChatInputField'
import ChatWindow from '../../components/chat/ChatWindow'
import ChatHeader from '../../components/chat/ChatHeader'
import remote from '../../data/remote'

const ChapterToggle = ({ name, enabled, onToggle, orderIndex }) => (
  <div className="flex items-center justify-between mb-2">
    <span className="text-sm">{name}</span>
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
  const [signupData, setSignupData] = useState(JSON.parse(localStorage.getItem('signupData'))||{})
  const [step, setStep] = useState(1)
  const [education, setEducation] = useState('')
  const [messages, setMessages] = useState([])
  const [chapters, setChapters] = useState([])

  useEffect(() => {

    console.log({lifeStoryIdOnLocalStorage: localStorage.getItem('lifeStoryId')})
    remote.chapters.getAll().then((data) => {
      console.log({chaptersReceived: data});
      setChapters(data.map(chapter => ({
        title: chapter.name,
        enabled: chapter.is_enabled,
        ...chapter
      })))
    })
  }, [])

  useEffect(() => {
    const data = localStorage.getItem('signupData')
    if (data) {
      setSignupData(JSON.parse(data))
      // Initialize welcome messages
      setMessages([
        {
          content: "Welcome! Super good to have you here. Before we start, I just want to make sure we have all the right info.",
          isUser: false,
          createdAt: new Date()
        },
        {
          content: (
            <div>
              <p className="mb-4">Here's what we have so far:</p>
              <ChatInputField
                label="Your name or nickname"
                value={signupData.nickname}
                onChange={({target}) => setSignupData({...signupData, nickname: target.value})}
              />
              <ChatInputField
                label="Your Email"
                widthClass="w-[256px]"
                value={signupData.email}
                onChange={({target}) => setSignupData({...signupData, email: target.value})}
              />
              <ChatInputField
                label="Your loved one's name or nickname"
                value={signupData.lovedOneNickname}
                onChange={({target}) => setSignupData({...signupData, lovedOneNickname: target.value})}
              />
            </div>
          ),
          isUser: false,
          createdAt: new Date()
        },
        {
          content: "Please make sure the info is AOK. You can edit it if needed.",
          isUser: false,
          createdAt: new Date()
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
        isUser: true,
        senderName: signupData.nickname,
        createdAt: new Date()
      },
      {
        content: "Perfect. Just so you know, you can add extra information or choose which chapters of your loved one's life you want to explore.",
        isUser: false,
        createdAt: new Date()
      },
      {
        content: (
          <div>
            {/* <ChatInputField
              label="Education Level"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            /> */}

            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Select Chapters to Explore:</p>
              {chapters.map(chapter => (
                <ChapterToggle
                  key={chapter.id}
                  name={chapter.name}
                  enabled={chapter.is_enabled}
                  orderIndex={chapter.order_index}
                  onToggle={() => toggleChapter(chapter.id)}
                />
              ))}
            </div>
          </div>
        ),
        isUser: false,
        createdAt: new Date()
      }
    ])
  }

  const handleStart = async ({message}) => {
    setMessages(prev => [
      ...prev,
      {
        content: message,
        isUser: true
      }
    ])

    // Here you would typically save the final configuration and proceed
    console.log('Starting with:', { signupData, education, chapters })

    // Create profile for collector
    await remote.profile.upsert({profile:{
      full_name: signupData.nickname,
      email: signupData.email,
    }})

    const collectorProfile = await remote.profile.getByEmail({email: signupData.email})

    console.log({collectorProfile})

    const lifeStoryToUpsert = {
      collector_id: collectorProfile.id,
      title: `${signupData.lovedOneNickname}'s story`,
      description: `${signupData.lovedOneNickname}'s life story`,
    }

    // Get life story ID from local storage
    const lifeStoryId = localStorage.getItem('lifeStoryId')
    if(lifeStoryId) {
      console.log({lifeStoryId})
      lifeStoryToUpsert.id = lifeStoryId
    }

    const lifeStory = await remote.lifeStory.upsert({lifeStory: lifeStoryToUpsert})

    // If new life story created, save ID to local storage
    if(lifeStory) {
      localStorage.setItem('lifeStoryId', lifeStory.id)
    }

    // For each chapter the Collector has enabled, create a life story chapter
    chapters.filter(chapter => chapter.enabled).map(async (chapter) => {
      console.log({chapter})
      await remote.lifeStoryChapter.upsert({lifeStoryChapter:{
        life_story_id: lifeStory ? lifeStory.id : lifeStoryId,
        chapter_id: chapter.id,
        order_index: chapter.order_index
      }})
    })

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