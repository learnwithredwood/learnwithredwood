import { render } from '@redwoodjs/testing/web'

import FastTrackReplayPage from './FastTrackReplayPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FastTrackReplayPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FastTrackReplayPage />)
    }).not.toThrow()
  })
})
