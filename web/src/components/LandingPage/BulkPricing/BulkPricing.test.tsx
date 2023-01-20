import { render } from '@redwoodjs/testing/web'

import { BulkPricing } from './BulkPricing'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BulkPricing', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BulkPricing />)
    }).not.toThrow()
  })
})
