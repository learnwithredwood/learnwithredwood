import { BestParts } from 'src/components/BestParts/BestParts'
import { Faqs } from 'src/components/Faqs/Faqs'
import { HelloMyNameIs } from 'src/components/HelloMyNameIs/HelloMyNameIs'
import { Hero } from 'src/components/Hero/Hero'
import { MetaTags } from '@redwoodjs/web'
import { Testimonial } from 'src/components/Testimonial'
import { LogoParade } from 'src/components/LogoParade'
import { SalesLetter } from 'src/components/SalesLetter'
import { VideoEmbed } from 'src/components/VideoEmbed/VideoEmbed'
import { Pricing } from 'src/components/Pricing'
import { Topics } from 'src/components/Topics'
import { LessonsModules } from 'src/components/LessonsModules/LessonsModules'
import JenniferTacheff from 'src/images/placeholder__jennifer-tacheff.png'
import { CourseYouWill } from 'src/components/CourseYouWill'
import { WhatWeBuild } from 'src/components/WhatWeBuild/WhatWeBuild'
import { Who } from 'src/components/Who'
import { WhyRedwood } from 'src/components/WhyRedwood/WhyRedwood'

const LandingPage = () => {
  return (
    <>
      <MetaTags
        title="Learn with Redwood: Learn Full-Stack without the Pain of Full-Stack"
        description="Redwood.js is a full-stack framework designed to help you scale from side hustle to start-up and makes it easy to get up and running with the latest and greatest technologies."
      />
      {/* TODO: Update tree background */}
      {/* TODO: Fix badge rotation */}
      <Hero />
      {/* TODO: Tighten Testimonial Styling */}
      <Testimonial
        person="Jennifer Tacheff"
        title="CEO, Manifest"
        avatar={JenniferTacheff}
      >
        <p>
          When I started with List Builders Society I had no clue how to build a
          list, none.{' '}
          <span className="highlight">
            List Builders Society has given me practical steps, ideas and action
            steps to create valuable tools for my clients.
          </span>{' '}
          Having my own list means not stressing about algorithms or funneling
          money into ads during the start up phase.
        </p>
      </Testimonial>
      <LogoParade />
      <SalesLetter />
      {/* TODO: Swap out people and pics on Testimonials */}
      <Testimonial
        person="Jennifer Tacheff"
        title="CEO, Manifest"
        avatar={JenniferTacheff}
      >
        <p>
          When I started with List Builders Society I had no clue how to build a
          list, none.{' '}
          <span className="highlight">
            List Builders Society has given me practical steps, ideas and action
            steps to create valuable tools for my clients.
          </span>{' '}
          Having my own list means not stressing about algorithms or funneling
          money into ads during the start up phase.
        </p>
      </Testimonial>
      <Testimonial
        person="Jennifer Tacheff"
        title="CEO, Manifest"
        avatar={JenniferTacheff}
      >
        <p>
          When I started with List Builders Society I had no clue how to build a
          list, none.{' '}
          <span className="highlight">
            List Builders Society has given me practical steps, ideas and action
            steps to create valuable tools for my clients.
          </span>{' '}
          Having my own list means not stressing about algorithms or funneling
          money into ads during the start up phase.
        </p>
      </Testimonial>
      {/* TODO: Add content for Video Embed */}
      <VideoEmbed />
      {/* TODO: Update pics and titles on Testimonials */}
      <Testimonial
        person="Jennifer Tacheff"
        title="CEO, Manifest"
        avatar={JenniferTacheff}
      >
        <p>
          When I started with List Builders Society I had no clue how to build a
          list, none.{' '}
          <span className="highlight">
            List Builders Society has given me practical steps, ideas and action
            steps to create valuable tools for my clients.
          </span>{' '}
          Having my own list means not stressing about algorithms or funneling
          money into ads during the start up phase.
        </p>
      </Testimonial>
      <Testimonial
        person="Jennifer Tacheff"
        title="CEO, Manifest"
        avatar={JenniferTacheff}
      >
        <p>
          When I started with List Builders Society I had no clue how to build a
          list, none.{' '}
          <span className="highlight">
            List Builders Society has given me practical steps, ideas and action
            steps to create valuable tools for my clients.
          </span>{' '}
          Having my own list means not stressing about algorithms or funneling
          money into ads during the start up phase.
        </p>
      </Testimonial>
      {/* TODO: Style Pricing section */}
      <div id="get-started">
        <Pricing />
      </div>
      <Topics />
      {/* TODO: Style in this course you will */}
      {/* TODO: Pull content in from markdown files */}
      <CourseYouWill />
      {/* TODO: Update Styling for What we Build */}
      <WhatWeBuild />
      {/* TODO: Style who is this for section */}
      <Who />

      {/* TODO: Update Styling */}
      <div>
        This course is intentionally designed to equip you with everything you
        need to know to become a successful full stack developer with the best
        libraries and frameworks available.
      </div>

      {/* TODO: Update Pics and Names for Testimonials */}
      <Testimonial
        person="Jennifer Tacheff"
        title="CEO, Manifest"
        avatar={JenniferTacheff}
      >
        <p>
          When I started with List Builders Society I had no clue how to build a
          list, none.{' '}
          <span className="highlight">
            List Builders Society has given me practical steps, ideas and action
            steps to create valuable tools for my clients.
          </span>{' '}
          Having my own list means not stressing about algorithms or funneling
          money into ads during the start up phase.
        </p>
      </Testimonial>
      <Testimonial
        person="Jennifer Tacheff"
        title="CEO, Manifest"
        avatar={JenniferTacheff}
      >
        <p>
          When I started with List Builders Society I had no clue how to build a
          list, none.{' '}
          <span className="highlight">
            List Builders Society has given me practical steps, ideas and action
            steps to create valuable tools for my clients.
          </span>{' '}
          Having my own list means not stressing about algorithms or funneling
          money into ads during the start up phase.
        </p>
      </Testimonial>

      {/* TODO: Update Styling */}
      <HelloMyNameIs />

      {/* TODO: Tighten Styling */}
      <BestParts />

      {/* TODO: Style Section */}
      {/* TODO: Pull content from Markdown files */}
      <LessonsModules />

      {/* TODO: Style Why Redwood Section */}
      <WhyRedwood />
      <Pricing />
      <Faqs />
    </>
  )
}

export default LandingPage
