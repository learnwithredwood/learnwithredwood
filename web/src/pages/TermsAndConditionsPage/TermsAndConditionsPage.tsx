import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TermsAndConditionsPage = () => {
  return (
    <>
      <MetaTags title="TermsAndConditions" description="TermsAndConditions page" />

      <h1>TermsAndConditionsPage</h1>
      <p>
        Find me in <code>./web/src/pages/TermsAndConditionsPage/TermsAndConditionsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>termsAndConditions</code>, link to me with `
        <Link to={routes.termsAndConditions()}>TermsAndConditions</Link>`
      </p>
    </>
  )
}

export default TermsAndConditionsPage
