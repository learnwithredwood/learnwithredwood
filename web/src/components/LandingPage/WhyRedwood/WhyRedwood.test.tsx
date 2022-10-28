import { render } from '@redwoodjs/testing/web'

import WhyRedwood from './WhyRedwood'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WhyRedwood', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WhyRedwood />)
    }).not.toThrow()
  })
})
