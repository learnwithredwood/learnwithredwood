import { render } from '@redwoodjs/testing/web'

import VideoEmbed from './VideoEmbed'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('VideoEmbed', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VideoEmbed />)
    }).not.toThrow()
  })
})
