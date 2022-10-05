import { render } from '@redwoodjs/testing/web'
import renderer from 'react-test-renderer'

import Icon from './Icon'

describe('Icon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Icon name="github" />)
    }).not.toThrow()
  })

  it('renders the Close icon', () => {
    const closeIcon = renderer.create(<Icon name="close" />).toJSON()
    expect(closeIcon).toMatchSnapshot()
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
