import { render } from '@redwoodjs/testing/web'

import { NotSure } from './NotSure'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NotSure', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotSure />)
    }).not.toThrow()
  })
})
