import { render } from '@redwoodjs/testing/web'

import { WhatsApp } from './WhatsApp'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WhatsApp', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WhatsApp content={''} />)
    }).not.toThrow()
  })
})
