import { render } from '@redwoodjs/testing/web'

import { CourseYouWill } from './CourseYouWill'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CourseYouWill', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CourseYouWill />)
    }).not.toThrow()
  })
})
