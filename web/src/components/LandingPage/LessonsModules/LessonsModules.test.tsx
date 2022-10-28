import { render } from '@redwoodjs/testing/web'

import LessonsModules from './LessonsModules'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LessonsModules', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LessonsModules />)
    }).not.toThrow()
  })
})
