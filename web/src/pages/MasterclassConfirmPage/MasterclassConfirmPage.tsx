import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MasterclassConfirmPage = () => {
  return (
    <>
      <MetaTags title="MasterclassConfirm" description="MasterclassConfirm page" />

      <h1>MasterclassConfirmPage</h1>
      <p>
        Find me in <code>./web/src/pages/MasterclassConfirmPage/MasterclassConfirmPage.tsx</code>
      </p>
      <p>
        My default route is named <code>masterclassConfirm</code>, link to me with `
        <Link to={routes.masterclassConfirm()}>MasterclassConfirm</Link>`
      </p>
    </>
  )
}

export default MasterclassConfirmPage
