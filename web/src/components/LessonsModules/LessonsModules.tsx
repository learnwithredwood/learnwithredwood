import { LessonModule } from './components/LessonModule'
import { useGetData } from '../../hooks/useGetData'
import CC from './images/closed-captioning.png'
import { useState } from 'react'

const LessonsModules = () => {
  const [lessonNumber, setLessonNumber] = useState(0)

  const url = `/.redwood/functions/mdx/lessons-modules`
  const data = useGetData(url)

  const UpdateStartingIndex = (moduleLength: number): void => {
    setLessonNumber((prev) => prev + moduleLength)
  }

  return (
    <div className="mx-6 lg:mx-24 mb-24">
      {/* section heading */}
      <div className="text-center mb-8">
        <h2 className="font-script text-tealGreen text-[3.5rem]">
          lessons &amp; modules
        </h2>
        <div className="flex items-center gap-x-2 justify-center">
          <div>
            <img
              src={CC}
              alt="Closed Captioning"
              className="mix-blend-multiply"
            />
          </div>
          <p className="!mb-0">
            <em>
              Closed Captioning and video transcripts are provided for every
              video.
            </em>
          </p>
        </div>
      </div>

      {/* lessons and modules */}
      {data?.map((item, index) => {
        return (
          <LessonModule
            key={index}
            title={item.title}
            order={item.order}
            content={item.body.raw}
            startingIndex={lessonNumber}
            updateStartingIndex={UpdateStartingIndex}
          />
        )
      })}
    </div>
  )
}

export { LessonsModules }
