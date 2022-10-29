import { LessonModule } from './components/LessonModule'
import CC from './images/closed-captioning.png'

/**
 * Takes a string of lessons and returns an array of lessons (title and timestamp)
 * @param {string} lessons
 * @returns {Array}
 */
const lessonsToArray = (
  lessonContent: string
): Array<{
  title: string
  timestamp: string
}> => {
  // split each list item into an array
  const splitContent = lessonContent.split('\n- ')
  // remove white space
  const list = splitContent.filter((el: string) => el !== '')

  const lessons = list.map((item: string) => {
    const [title, timestamp] = item.split('|')
    return { title, timestamp }
  })

  return lessons
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const LessonsModules = () => {
  const data = require('../../../../.contentlayer/generated/LessonsModules/_index.json')
  let lessonNumber = 0

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
      {data?.map((item, index: number) => {
        const lessons = lessonsToArray(item.body.raw)

        const startingIndex = lessonNumber
        lessonNumber += lessons.length

        return (
          <LessonModule
            key={index}
            title={item.title}
            order={item.order}
            lessons={lessons}
            startingIndex={startingIndex}
          />
        )
      })}
    </div>
  )
}

export { LessonsModules }
