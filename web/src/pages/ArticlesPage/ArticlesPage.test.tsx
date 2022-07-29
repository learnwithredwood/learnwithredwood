import { render } from '@redwoodjs/testing/web'
import ArticlesPage from './ArticlesPage'

jest.mock('../../hooks/useGetData')
jest.mock('src/components/ArticleCard/ArticleCard', () => () => <div>foo</div>)

describe('ArticlesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArticlesPage />)
    }).not.toThrow()
  })
})
