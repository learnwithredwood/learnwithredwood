import { render } from '@redwoodjs/testing/web'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Faq question="What is the question?" answer="I am the answer." />)
    }).not.toThrow()
  })
})
