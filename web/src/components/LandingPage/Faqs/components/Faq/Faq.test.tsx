import { screen, render, fireEvent } from '@redwoodjs/testing/web'

import { Faq } from './Faq'

jest.mock('../../hooks/useMDXComponent', () => ({
  useMDXComponent: () => () => <div>foobar</div>
}))

const MOCK_PROPS = { answer: 'an answer', question: 'a question' }

const renderComponent = (props) => render(<Faq {...props}/>)

describe('Faq', () => {
  it('renders successfully', () => {
    expect(() => {
      renderComponent(MOCK_PROPS)
    }).not.toThrow()
  })
  it('toggles collapse and expand for question', () => {
    renderComponent(MOCK_PROPS)
    const collapseExpand = screen.getByTestId('faq_q-collapse-toggle')
    expect(collapseExpand).toHaveTextContent('Expand')
    fireEvent.click(collapseExpand)
    expect(collapseExpand).toHaveTextContent('Collapse')
  })
})
