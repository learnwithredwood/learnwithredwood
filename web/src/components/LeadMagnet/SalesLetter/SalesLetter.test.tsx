import { render } from '@redwoodjs/testing/web'

import SalesLetter from './SalesLetter'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SalesLetter', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SalesLetter />)
    }).not.toThrow()
  })
})
