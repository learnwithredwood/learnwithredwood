import { render } from '@redwoodjs/testing/web'

import LivestreamsPage from './LivestreamsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LivestreamsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LivestreamsPage />)
    }).not.toThrow()
  })
})
