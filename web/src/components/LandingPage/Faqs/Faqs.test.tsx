import { Faqs } from './Faqs'
import { render } from '@redwoodjs/testing/web'

jest.mock('../../hooks/useGetData')
jest.mock('../Faq/Faq', () => ({
  Faq: () => <div>foobar</div>
}))

describe('Faqs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Faqs />)
    }).not.toThrow()
  })
})
