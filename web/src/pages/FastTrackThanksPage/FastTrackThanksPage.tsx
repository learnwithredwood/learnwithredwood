import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const FastTrackThanksPage = () => {
  return (
    <>
      <MetaTags title="FastTrackThanks" description="FastTrackThanks page" />

      <h1>FastTrackThanksPage</h1>
      <p>
        Find me in <code>./web/src/pages/FastTrackThanksPage/FastTrackThanksPage.tsx</code>
      </p>
      <p>
        My default route is named <code>fastTrackThanks</code>, link to me with `
        <Link to={routes.fastTrackThanks()}>FastTrackThanks</Link>`
      </p>
    </>
  )
}

export default FastTrackThanksPage
