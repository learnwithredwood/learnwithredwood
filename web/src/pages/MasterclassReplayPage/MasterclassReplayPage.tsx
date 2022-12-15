import { MetaTags } from '@redwoodjs/web'
import { Hero } from 'src/components/LeadMagnet/Hero'
import { VideoEmbed } from 'src/components/VideoEmbed'

const MasterclassReplayPage = () => {
  return (
    <>
      <MetaTags
        title="Masterclass Replay: Recession Proofing Your Career"
        ogUrl="https://www.learnwithredwood.com/masterclass"
      />
      <Hero
        condensed={true}
        injectedContent={
          // <iframe
          //   src="https://player.vimeo.com/video/781657259?h=67eeb2c205"
          //   width="640"
          //   height="360"
          //   frameBorder="0"
          //   allow="autoplay; fullscreen; picture-in-picture"
          //   allowFullScreen
          //   title="December Masterclass: Recession Proofing Your Career"
          // ></iframe>
          <div className="pt-10">
            <VideoEmbed embed="https://player.vimeo.com/video/781657259?h=67eeb2c205" />
          </div>
        }
      />
    </>
  )
}

export default MasterclassReplayPage
