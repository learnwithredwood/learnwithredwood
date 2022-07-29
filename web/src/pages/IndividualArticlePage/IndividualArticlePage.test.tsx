import { render, screen } from '@redwoodjs/testing/web'
import IndividualArticlePage from './IndividualArticlePage'

// see auto mock in src/hooks/__mocks__
jest.mock('src/hooks/useGetData')

const renderComponent = (props = {}) => render(<IndividualArticlePage slug='foo' {...props} />)

describe('IndividualArticlePage', () => {
  it('renders successfully', () => {
    expect(() => {
      renderComponent()
    }).not.toThrow()
  })
  it('renders a found article', () => {
    renderComponent()
    const found = screen.getByTestId('article')
    expect(found).toBeVisible()
  })
})
