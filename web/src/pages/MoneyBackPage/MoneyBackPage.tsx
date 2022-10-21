import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MoneyBackPage = () => {
  return (
    <>
      <MetaTags title="MoneyBack" description="MoneyBack page" />

      <h1>MoneyBackPage</h1>
      <p>
        Find me in <code>./web/src/pages/MoneyBackPage/MoneyBackPage.tsx</code>
      </p>
      <p>
        My default route is named <code>moneyBack</code>, link to me with `
        <Link to={routes.moneyBack()}>MoneyBack</Link>`
      </p>
    </>
  )
}

export default MoneyBackPage
