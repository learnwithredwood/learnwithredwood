import { render } from '@redwoodjs/testing/web'

import MasterclassThanksPage from './MasterclassThanksPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MasterclassThanksPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MasterclassThanksPage />)
    }).not.toThrow()
  })
})
