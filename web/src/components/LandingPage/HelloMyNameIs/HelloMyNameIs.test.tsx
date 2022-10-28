import { render } from '@redwoodjs/testing/web'

import { HelloMyNameIs } from './HelloMyNameIs'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HelloMyNameIs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HelloMyNameIs />)
    }).not.toThrow()
  })
})
