import { render } from '@redwoodjs/testing/web'

import { Testimonial } from './Testimonial'
import Amanda from 'src/images/avatars/amanda.jpeg'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Testimonial', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Testimonial
          avatar={Amanda}
          person="Amanda Giannelli"
          title="Software Engineer - DX-Support Experience @ Okta and Redwood.js Core Team"
        >
          <p>This is great.</p>
        </Testimonial>
      )
    }).not.toThrow()
  })

  it.skip("displays the person's name", () => {})
  it.skip("displays the person's title", () => {})
  it.skip("displays the person's avatar", () => {
    // avatar is present
    // avatar is rendered on the correct
  })
  it.skip('displays the testimonial', () => {})
})
