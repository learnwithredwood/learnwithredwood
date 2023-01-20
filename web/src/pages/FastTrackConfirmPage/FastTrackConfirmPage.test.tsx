import { render } from '@redwoodjs/testing/web'

import FastTrackConfirmPage from './FastTrackConfirmPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FastTrackConfirmPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FastTrackConfirmPage />)
    }).not.toThrow()
  })
})
