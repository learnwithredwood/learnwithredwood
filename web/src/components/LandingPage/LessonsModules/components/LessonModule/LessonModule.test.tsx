import { render } from '@redwoodjs/testing/web'

import LessonModule from './LessonModule'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LessonModule', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LessonModule />)
    }).not.toThrow()
  })
})
