import { render } from '@redwoodjs/testing/web'

import ArticlesPage from './ArticlesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ArticlesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArticlesPage />)
    }).not.toThrow()
  })
})
