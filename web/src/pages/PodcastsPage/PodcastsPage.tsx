import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PodcastsPage = () => {
  return (
    <>
      <MetaTags title="Podcasts" description="Podcasts page" />

      <h1>PodcastsPage</h1>
      <p>
        Find me in <code>./web/src/pages/PodcastsPage/PodcastsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>podcasts</code>, link to me with `
        <Link to={routes.podcasts()}>Podcasts</Link>`
      </p>
    </>
  )
}

export default PodcastsPage
