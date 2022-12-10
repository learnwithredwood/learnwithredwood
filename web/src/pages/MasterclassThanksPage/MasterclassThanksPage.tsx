import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MasterclassThanksPage = () => {
  return (
    <>
      <MetaTags title="MasterclassThanks" description="MasterclassThanks page" />

      <h1>MasterclassThanksPage</h1>
      <p>
        Find me in <code>./web/src/pages/MasterclassThanksPage/MasterclassThanksPage.tsx</code>
      </p>
      <p>
        My default route is named <code>masterclassThanks</code>, link to me with `
        <Link to={routes.masterclassThanks()}>MasterclassThanks</Link>`
      </p>
    </>
  )
}

export default MasterclassThanksPage
