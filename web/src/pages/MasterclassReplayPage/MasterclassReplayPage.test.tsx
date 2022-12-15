import { render } from '@redwoodjs/testing/web'

import MasterclassReplayPage from './MasterclassReplayPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MasterclassReplayPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MasterclassReplayPage />)
    }).not.toThrow()
  })
})
