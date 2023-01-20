import { render } from '@redwoodjs/testing/web'

import { RegisterToday } from './RegisterToday'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RegisterToday', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RegisterToday />)
    }).not.toThrow()
  })
})
