import { MetaTags } from '@redwoodjs/web'
import { SalesLetter } from 'src/components/LeadMagnet/SalesLetter'
import { Hero } from 'src/components/LeadMagnet/Hero'
import { RegisterToday } from 'src/components/LeadMagnet/RegisterToday'
import { VideoEmbed } from 'src/components/VideoEmbed'

const LeadMagnetPage = () => {
  return (
    <>
      <MetaTags title="Lead Magnet" description="" />
      <Hero />
      <div className="grid grid-cols-12 w-full mb-48">
        <div className="col-span-6 col-start-2">
          <VideoEmbed embed="https://www.youtube.com/watch?v=9R5A7e1DmJQ" />
          <SalesLetter />
        </div>
        <div className="col-span-5">
          <div className="sticky top-5">
            <RegisterToday />
          </div>
        </div>
      </div>
    </>
  )
}

export default LeadMagnetPage
