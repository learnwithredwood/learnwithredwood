import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const FastTrackConfirmPage = () => {
  return (
    <>
      <MetaTags title="FastTrackConfirm" description="FastTrackConfirm page" />

      <h1>FastTrackConfirmPage</h1>
      <p>
        Find me in <code>./web/src/pages/FastTrackConfirmPage/FastTrackConfirmPage.tsx</code>
      </p>
      <p>
        My default route is named <code>fastTrackConfirm</code>, link to me with `
        <Link to={routes.fastTrackConfirm()}>FastTrackConfirm</Link>`
      </p>
    </>
  )
}

export default FastTrackConfirmPage
