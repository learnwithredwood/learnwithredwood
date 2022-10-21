import { render } from '@redwoodjs/testing/web'

import { Social } from './Social'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Social', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Social />)
    }).not.toThrow()
  })
})
