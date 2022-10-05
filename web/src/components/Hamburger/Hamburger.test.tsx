import { render } from '@redwoodjs/testing/web'

import { Hamburger } from './Hamburger'

describe('Hamburger', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Hamburger />)
    }).not.toThrow()
  })

  it('should match the snapshot', () => {
    const hamburgerIcon = render(<Hamburger />)
    expect(hamburgerIcon).toMatchSnapshot()
  })
})
