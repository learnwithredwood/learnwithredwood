import { render } from '@redwoodjs/testing/web'
import renderer from 'react-test-renderer'

import Icon from './Icon'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Icon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Icon name="github" />)
    }).not.toThrow()
  })

  it('renders GitHub icon', () => {
    const gitHubIcon = renderer.create(<Icon name="github" />).toJSON()
    expect(gitHubIcon).toMatchSnapshot()
  })

  it('renders Medium icon', () => {
    const MediumIcon = renderer.create(<Icon name="medium" />).toJSON()
    expect(MediumIcon).toMatchSnapshot()
  })

  it('renders YouTube icon', () => {
    const YouTubeIcon = renderer.create(<Icon name="medium" />).toJSON()
    expect(YouTubeIcon).toMatchSnapshot()
  })
})
