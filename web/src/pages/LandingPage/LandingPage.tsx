import { MetaTags } from '@redwoodjs/web'
import { BestParts } from 'src/components/BestParts/BestParts'
import { Newsletter } from 'src/components/Newsletter/Newsletter'
import { Hero } from 'src/components/Hero/Hero'
import { Faqs } from 'src/components/Faqs/Faqs'
// import { WhatWeBuild } from 'src/components/WhatWeBuild/WhatWeBuild'
import { HelloMyNameIs } from 'src/components/HelloMyNameIs/HelloMyNameIs'

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
      {/* <WhatWeBuild /> */}
      <HelloMyNameIs />
      <Faqs />
      <Newsletter />
    </>
  )
}

export default LandingPage
