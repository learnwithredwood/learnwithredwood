import { render } from '@redwoodjs/testing/web'

import LeadMagnetPage from './LeadMagnetPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LeadMagnetPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LeadMagnetPage />)
    }).not.toThrow()
  })
})
