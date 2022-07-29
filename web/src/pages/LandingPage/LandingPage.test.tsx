import { render } from '@redwoodjs/testing/web'
import LandingPage from './LandingPage'

const MOCK_COMPONENT = <div>foo</div>

jest.mock('src/components/Newsletter/Newsletter', () => ({
  Newsletter: () => MOCK_COMPONENT
}))
jest.mock('src/components/Faqs/Faqs', () => ({
  Faqs: () => MOCK_COMPONENT
}))
jest.mock('src/hooks/useGetData')

describe('LandingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LandingPage />)
    }).not.toThrow()
  })
})
