import { render } from '@redwoodjs/testing/web'

import FastTrackThanksPage from './FastTrackThanksPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FastTrackThanksPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FastTrackThanksPage />)
    }).not.toThrow()
  })
})
