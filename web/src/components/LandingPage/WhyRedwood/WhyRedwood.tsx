import { Tweet } from './components/Tweet'
import { Video } from './components/Video'

const WhyRedwood = () => {
  return (
    <div className="grid grid-cols-12 mb-24 mx-8 gap-x-5">
      <h2 className="col-span-12 section-heading text-center mb-8">
        Why Redwood?
      </h2>
      <div className="col-span-8 col-start-3">
        <p>
          The RedwoodJS Team has crafted an integrated framework that
          beautifully weaves together the best parts of the JAMstack ecosystem.
        </p>
        <p>
          I fell in love with Redwood because it was built on my favorite stack
          and used tools I was already familiar with. – Except it removed the
          frustration of setup and sped up my development.
        </p>
      </div>
      <div className="col-span-3">
        <Tweet
          name="Madeleine Work"
          title="Content Marketing at Chili Pepper"
          date="August 4, 2022"
          avatar=""
          content="Chili Piper just implemented our Wall of Love using Testimonial. So
          far the results have been 🔥🔥🔥. Check it out:
          https://chilipiper.com/wall-of-love"
        />
      </div>
      <div className="col-span-3">
        <Video
          avatar=""
          videoTitle="Capturing a Video Testimonial"
          src=""
          orientation="vertical"
        />
      </div>
    </div>
  )
}

export { WhyRedwood }
