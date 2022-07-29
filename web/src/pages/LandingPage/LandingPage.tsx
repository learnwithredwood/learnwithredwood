import { BestParts } from 'src/components/BestParts/BestParts'
import { Faqs } from 'src/components/Faqs/Faqs'
import { HelloMyNameIs } from 'src/components/HelloMyNameIs/HelloMyNameIs'
import { Hero } from 'src/components/Hero/Hero'
import { MetaTags } from '@redwoodjs/web'
import { Newsletter } from 'src/components/Newsletter/Newsletter'

const LandingPage = () => {
  return (
    <>
      <MetaTags
        title="Learn with Redwood: Learn Full-Stack without the Pain of Full-Stack"
        description="Redwood.js is a full-stack framework designed to help you scale from side hustle to start-up and makes it easy to get up and running with the latest and greatest technologies."
      />
      <Hero />
      <BestParts />
      <div id="newsletter">
        <Newsletter />
      </div>
      <HelloMyNameIs />
      <Faqs />
      <Newsletter />
    </>
  )
}

export default LandingPage
