import { render } from '@redwoodjs/testing/web'

import SelfPacedCourse from './SelfPacedCourse'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SelfPacedCourse', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SelfPacedCourse />)
    }).not.toThrow()
  })
})
