interface LessonModuleProps {
  lessons: {
    title: string
    timestamp: string
  }[]
  order: number
  title: string
  startingIndex?: number
}

const LessonModule = ({
  lessons,
  order,
  startingIndex = 0,
  title,
}: LessonModuleProps): JSX.Element => {
  return (
    <div className="w-full grid grid-cols-12 border-2 border-rustyNail mb-8">
      <div className="py-5 pl-5 md:py-10 md:pl-14 w-48 col-span-12 md:col-span-3">
        <img
          src={`/images/NO-${order}.png`}
          alt={`Number ${order}`}
          className="h-16 md:h-auto"
        />
      </div>
      <div className="p-5 md:py-10 md:pr-[4.5rem] col-span-12 md:col-span-9">
        <h3 className="mb-6 font-wide uppercase text-2xl md:text-4xl text-donkeyBrown">
          {title}
        </h3>
        <ol
          className="module-lessons border-t-2 border-twine border-dashed"
          style={{ '--start-value': startingIndex }}
        >
          {lessons.map((item, index) => {
            return (
              <li
                key={index}
                className="flex justify-between items-start md:items-center border-b-2 border-twine border-dashed py-2"
              >
                <div className="text-lg font-body font-medium">
                  {item.title}
                </div>
                {item.timestamp && (
                  <div className="font-wide text-base py-1 px-3 text-rustyNail bg-bone">
                    {item.timestamp}
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
