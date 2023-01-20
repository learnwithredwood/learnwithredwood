import { render } from '@redwoodjs/testing/web'

import FastTrackPage from './FastTrackPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FastTrackPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FastTrackPage />)
    }).not.toThrow()
  })
})
