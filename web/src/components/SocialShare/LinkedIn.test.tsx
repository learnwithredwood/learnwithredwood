import { render } from '@redwoodjs/testing/web'

import { LinkedIn } from './LinkedIn'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LinkedIn', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LinkedIn url={undefined} title={undefined} summary={undefined} />)
    }).not.toThrow()
  })
})
