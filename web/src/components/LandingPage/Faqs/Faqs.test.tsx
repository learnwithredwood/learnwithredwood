import { Faqs } from './Faqs'
import { render } from '@redwoodjs/testing/web'

describe('Faqs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Faqs />)
    }).not.toThrow()
  })
})
