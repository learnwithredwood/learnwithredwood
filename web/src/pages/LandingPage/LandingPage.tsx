import { MetaTags } from '@redwoodjs/web'
import { BestParts } from 'src/components/BestParts/BestParts'
import { Newsletter } from 'src/components/Newsletter/Newsletter'
import { Hero } from 'src/components/Hero/Hero'

const LandingPage = () => {
  return (
    <>
      <MetaTags title="Learn with Redwood" description="Landing page" />
      <Hero />
      <BestParts />
      <Newsletter />
    </>
  )
}

export default LandingPage
