import { render } from '@redwoodjs/testing/web'

import IndividualArticlePage from './IndividualArticlePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('IndividualArticlePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IndividualArticlePage />)
    }).not.toThrow()
  })
})
