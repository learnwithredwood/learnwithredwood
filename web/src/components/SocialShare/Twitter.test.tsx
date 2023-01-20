import { render } from '@redwoodjs/testing/web'

import { Twitter } from './Twitter'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Twitter', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Twitter url={'http://learnwithredwood.com'} />)
    }).not.toThrow()
  })
})
