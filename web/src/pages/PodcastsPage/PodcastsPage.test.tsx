import { render } from '@redwoodjs/testing/web'

import PodcastsPage from './PodcastsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PodcastsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PodcastsPage />)
    }).not.toThrow()
  })
})
