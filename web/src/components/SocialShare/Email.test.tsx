import { render } from '@redwoodjs/testing/web'

import { Email } from './Email'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Email', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Email body={''} subject={''} />)
    }).not.toThrow()
  })
})
