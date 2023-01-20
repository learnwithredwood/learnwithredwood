import { render } from '@redwoodjs/testing/web'

import { Facebook } from './Facebook'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Facebook', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Facebook url={''} />)
    }).not.toThrow()
  })
})
