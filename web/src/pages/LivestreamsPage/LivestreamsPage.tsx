import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LivestreamsPage = () => {
  return (
    <>
      <MetaTags title="Livestreams" description="Livestreams page" />

      <h1>LivestreamsPage</h1>
      <p>
        Find me in <code>./web/src/pages/LivestreamsPage/LivestreamsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>livestreams</code>, link to me with `
        <Link to={routes.livestreams()}>Livestreams</Link>`
      </p>
    </>
  )
}

export default LivestreamsPage
