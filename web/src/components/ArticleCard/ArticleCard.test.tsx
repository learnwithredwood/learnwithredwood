import { render } from '@redwoodjs/testing/web'
import ArticleCard from './ArticleCard'

jest.mock('prismjs')
jest.mock('src/hooks/useMDXComponent', () => ({
  useMDXComponent: () => () => <div>foo</div>
}))

describe('ArticleCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArticleCard article={{ body: { code: '' }}}/>)
    }).not.toThrow()
  })
})
