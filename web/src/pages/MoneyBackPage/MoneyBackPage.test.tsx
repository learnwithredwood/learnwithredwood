import { render } from '@redwoodjs/testing/web'

import MoneyBackPage from './MoneyBackPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MoneyBackPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MoneyBackPage />)
    }).not.toThrow()
  })
})
