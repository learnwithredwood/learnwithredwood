import { render } from '@redwoodjs/testing/web'

import { Who } from './Who'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Who', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Who />)
    }).not.toThrow()
  })
})
