import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const FastTrackReplayPage = () => {
  return (
    <>
      <MetaTags title="FastTrackReplay" description="FastTrackReplay page" />

      <h1>FastTrackReplayPage</h1>
      <p>
        Find me in <code>./web/src/pages/FastTrackReplayPage/FastTrackReplayPage.tsx</code>
      </p>
      <p>
        My default route is named <code>fastTrackReplay</code>, link to me with `
        <Link to={routes.fastTrackReplay()}>FastTrackReplay</Link>`
      </p>
    </>
  )
}

export default FastTrackReplayPage
