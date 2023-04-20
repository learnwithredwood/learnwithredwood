import { BestParts } from 'src/components/LandingPage/BestParts'
import { Faqs } from 'src/components/LandingPage/Faqs'
import { HelloMyNameIs } from 'src/components/LandingPage/HelloMyNameIs'
import { Hero } from 'src/components/LandingPage/Hero'
import { MetaTags } from '@redwoodjs/web'
import { SalesLetter } from 'src/components/LandingPage/SalesLetter'
import { Pricing } from 'src/components/LandingPage/Pricing'
import { Topics } from 'src/components/LandingPage/Topics'
import { LessonsModules } from 'src/components/LandingPage/LessonsModules'
import { CourseYouWill } from 'src/components/LandingPage/CourseYouWill'
import { WhatWeBuild } from 'src/components/LandingPage/WhatWeBuild/WhatWeBuild'
import { Who } from 'src/components/LandingPage/Who'
import { Newsletter } from 'src/components/Newsletter'
import { Testimonial } from 'src/components/LandingPage/Testimonial'
import { LogoParade } from 'src/components/LandingPage/LogoParade'
import { BulkPricing } from 'src/components/LandingPage/BulkPricing/BulkPricing'
import { NotSure } from 'src/components/NotSure'

// Avatars
import MichaelLiendo from 'src/images/avatars/michael-liendo.jpeg'
import Tom from 'src/images/avatars/tom.png'
import David from 'src/images/avatars/david.jpeg'
import Amanda from 'src/images/avatars/amanda.jpeg'

const LandingPage = () => {
  return (
    <>
      <MetaTags
        title="Learn with Redwood: Learn Full Stack without the Pain of Full Stack"
        description="Redwood.js is a full-stack framework designed to help you scale from side hustle to start-up and makes it easy to get up and running with the latest and greatest technologies."
      />
      <Hero />
      <Testimonial
        person="Tom Preston-Werner"
        title="Founder and Former CEO of GitHub, Co-Founder of Redwood"
        avatar={Tom}
        isAvatarOnLeft={true}
      >
        <p>
          Amy Dutton is an accomplished course creator and tech leader who has
          helped thousands of engineers and designers to get to the next level!
          Her new course, Learn with Redwood will give you the foundation you
          need for building something extraordinary. I highly recommend this
          course for the next generation of full stack engineers and startup
          leaders who want to build quickly, beautifully and easily.{' '}
        </p>
      </Testimonial>
      <LogoParade />
      <SalesLetter />
      <Newsletter />
      {/* Testimonial */}
      <Testimonial
        person="David Price"
        title="Co-Founder of Redwood"
        avatar={David}
        isAvatarOnLeft={true}
      >
        <p>
          Amy Dutton is a rare expert developer who is a master of design and
          teaching! Her approach makes things easy to understand even for
          full-stack, which is inherently complex. Amy is an expert at teaching
          both the components and workflow you'll need to take your career to
          the next level. Her focus on Redwood makes the course and learnings
          that much more integrated and accessible. I highly recommend her!
        </p>
      </Testimonial>
      <Testimonial
        person="Amanda Giannelli"
        title="Software Engineer - DX-Support Experience @ Okta and Redwood.js Core Team"
        avatar={Amanda}
        isAvatarOnLeft={false}
      >
        <p>
          From Amy’s very first YouTube video, she has been providing content
          that is to the point and easy to follow all while being extremely fun
          and engaging. Amy knows how to build up to the finale in just the
          right way to leave you feeling confident in what you’ve learned.
          LearnWithRedwood is no different!
        </p>
      </Testimonial>
      {/* Video Embed */}
      {/* <VideoEmbed embed={'https://www.youtube.com/watch?v=9R5A7e1DmJQ'} /> */}
      {/* Testimonial */}
      <Testimonial
        person="Michael Liendo"
        title="Sr. Developer Advocate, AWS"
        avatar={MichaelLiendo}
        isAvatarOnLeft={true}
      >
        <p>Amy Dutton is one of the most genuine people out there.</p>
      </Testimonial>
      <div id="get-started">
        <Pricing />
        <NotSure />
        <BulkPricing />
      </div>
      <Topics />
      <CourseYouWill />
      <WhatWeBuild />
      <Who />

      <div className="font-wide uppercase text-center text-xl leading-8 mb-[100px] px-5 md:px-0">
        This course is intentionally designed to{' '}
        <div className="text-sinopia">
          equip you with everything you need to know
          <br /> to become a successful full stack developer
        </div>{' '}
        with the best libraries and frameworks available.
      </div>

      <div className="mb-[150px]">
        <Pricing />
      </div>
      {/* 2 TESTIMONIALS */}

      <HelloMyNameIs />
      <BestParts />
      <LessonsModules />
      {/* <WhyRedwood /> */}
      <Pricing />
      <NotSure />
      <BulkPricing />
      <Faqs />
    </>
  )
}

export default LandingPage
