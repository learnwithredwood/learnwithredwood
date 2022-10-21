import { render } from '@redwoodjs/testing/web'

import { BestPartTech } from './BestPartTech'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BestPartTech', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BestPartTech />)
    }).not.toThrow()
  })
})
