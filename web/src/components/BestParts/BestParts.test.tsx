import { render } from '@redwoodjs/testing/web'

import { BestParts } from './BestParts'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BestParts', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BestParts />)
    }).not.toThrow()
  })
})
