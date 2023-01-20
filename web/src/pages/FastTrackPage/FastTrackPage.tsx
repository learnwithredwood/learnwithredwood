import { MetaTags } from '@redwoodjs/web'
import { Hero } from 'src/components/FastTrack/Hero'
import { RegisterToday } from 'src/components/FastTrack/RegisterToday'
import { SalesLetter } from 'src/components/FastTrack/SalesLetter'

const FastTrackPage = () => {
  return (
    <>
      <MetaTags
        title="FREE Masterclass Series: Full-Stack Fast Track"
        description="Learning backend web development increases your career opportunities, earning potential, and makes you a more well-rounded engineer. Getting started with full-stack development can be easy. Here's how."
        ogUrl="https://www.learnwithredwood.com/fast-track"
      />
      <Hero injectedContent={undefined} />
      <div className="grid grid-cols-12 w-full mb-12 md:mb-48">
        <div className="col-span-12 md:col-span-6 md:col-start-2">
          <SalesLetter />
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="sticky top-5">
            <RegisterToday />
          </div>
        </div>
      </div>
    </>
  )
}

export default FastTrackPage
