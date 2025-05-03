import { useState } from 'react'

const ChapterList = ({ chapters, selectedChapter, onSelectChapter }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <>
      {isCollapsed && (
        <button
          onClick={() => setIsCollapsed(false)}
          className="fixed top-4 left-4 btn-primary"
        >
          Chapters
        </button>
      )}

      {!isCollapsed && (
        <div className="fixed left-0 top-0 h-full bg-white shadow-lg w-64">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Chapters</h2>
              <button
                onClick={() => setIsCollapsed(true)}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
              >
                ←
              </button>
            </div>
            <ul className="space-y-2">
              {chapters.map((chapter) => (
                <li
                  key={chapter.id}
                  className={`p-2 rounded cursor-pointer ${
                    selectedChapter === chapter.id
                      ? 'bg-primary text-white'
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => onSelectChapter(chapter.id)}
                >
                  {chapter.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default ChapterList