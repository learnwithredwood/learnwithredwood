import { render } from '@redwoodjs/testing/web'

import { Faqs } from './Faqs'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Faqs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Faqs />)
    }).not.toThrow()
  })
})
