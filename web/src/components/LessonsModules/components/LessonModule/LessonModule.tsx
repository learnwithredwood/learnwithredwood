interface LessonModuleProps {
  content: string
  order: number
  title: string
  startingIndex?: number
  updateStartingIndex: (listLength: number) => void
}

const LessonModule = ({
  content,
  order,
  startingIndex = 0,
  title,
  updateStartingIndex,
}: LessonModuleProps): JSX.Element => {
  // split each list item into an array
  const splitContent = content.split('\n- ')
  // remove white space
  const list = splitContent.filter((el) => el !== '')

  return (
    <div className="w-full grid grid-cols-12 border-2 border-rustyNail mb-8">
      <div className="py-10 pl-14 w-48 col-span-3">
        <img src={`/images/NO-${order}.png`} alt={`Number ${order}`} />
      </div>
      <div className="py-10 pr-[4.5rem] col-span-9">
        <h3 className="mb-6 font-wide uppercase text-4xl text-donkeyBrown">
          {title}
        </h3>
        <ol
          className="module-lessons border-t-2 border-twine border-dashed"
          style={{ '--start-value': startingIndex }}
        >
          {list.map((item, index) => {
            const [lessonTitle, timestamp] = item.split('|')
            return (
              <li
                key={index}
                className="flex justify-between items-center border-b-2 border-twine border-dashed py-2"
              >
                <div className="text-lg font-body font-medium">
                  {lessonTitle}
                </div>
                {timestamp && (
                  <div className="font-wide text-base py-1 px-3 text-rustyNail bg-bone">
                    {timestamp}
                  </div>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export { LessonModule }
