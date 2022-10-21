import { render } from '@redwoodjs/testing/web'

import StudentDiscountPage from './StudentDiscountPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StudentDiscountPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentDiscountPage />)
    }).not.toThrow()
  })
})
