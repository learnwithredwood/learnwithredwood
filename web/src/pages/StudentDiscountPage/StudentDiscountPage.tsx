import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const StudentDiscountPage = () => {
  return (
    <>
      <MetaTags title="StudentDiscount" description="StudentDiscount page" />

      <h1>StudentDiscountPage</h1>
      <p>
        Find me in <code>./web/src/pages/StudentDiscountPage/StudentDiscountPage.tsx</code>
      </p>
      <p>
        My default route is named <code>studentDiscount</code>, link to me with `
        <Link to={routes.studentDiscount()}>StudentDiscount</Link>`
      </p>
    </>
  )
}

export default StudentDiscountPage
