import { render } from '@redwoodjs/testing/web'

import { Testimonial } from './Testimonial'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Testimonial', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Testimonial />)
    }).not.toThrow()
  })
})
