import { render } from '@redwoodjs/testing/web'

import Tweet from './Tweet'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Tweet', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Tweet />)
    }).not.toThrow()
  })
})
