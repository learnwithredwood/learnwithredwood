import { render } from '@redwoodjs/testing/web'

import TermsAndConditionsPage from './TermsAndConditionsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TermsAndConditionsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TermsAndConditionsPage />)
    }).not.toThrow()
  })
})
