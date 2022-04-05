import { render } from '@redwoodjs/testing/web'

import { Footer, getCurrentYear } from './Footer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Footer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Footer />)
    }).not.toThrow()
  })

  it('displays the correct year', () => {
    jest
      .spyOn(global.Date, 'now')
      .mockImplementationOnce(() =>
        new Date('2022-05-14T11:01:58.135Z').valueOf()
      )

    const year = getCurrentYear()
    expect(year).toBe('2022')
  })
})
