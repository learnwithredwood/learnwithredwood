import { render } from '@redwoodjs/testing/web'

import MasterclassConfirmPage from './MasterclassConfirmPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MasterclassConfirmPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MasterclassConfirmPage />)
    }).not.toThrow()
  })
})
