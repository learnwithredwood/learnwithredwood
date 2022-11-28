import { render } from '@redwoodjs/testing/web'

import AutoGrowTextarea from './AutoGrowTextarea'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AutoGrowTextarea', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AutoGrowTextarea />)
    }).not.toThrow()
  })
})
