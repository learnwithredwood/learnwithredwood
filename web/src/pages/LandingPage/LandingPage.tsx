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
      <MetaTags title="Learn with Redwood" description="Landing page" />
      <Hero />
      <BestParts />
      <Newsletter />
      {/* <WhatWeBuild /> */}
      <HelloMyNameIs />
      <Faqs />
      <Newsletter />
    </>
  )
}

export default LandingPage
