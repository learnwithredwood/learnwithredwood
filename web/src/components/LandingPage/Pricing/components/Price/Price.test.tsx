import { render } from '@redwoodjs/testing/web'

import Price from './Price'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Price', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Price />)
    }).not.toThrow()
  })
})
