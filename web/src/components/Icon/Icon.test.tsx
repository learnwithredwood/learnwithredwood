import { render } from '@redwoodjs/testing/web'
import renderer from 'react-test-renderer'

import { Icon } from './Icon'

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

  it('renders the Email icon', () => {
    const emailIcon = renderer.create(<Icon name="email" />).toJSON()
    expect(emailIcon).toMatchSnapshot()
  })

  it('renders the Facebook icon', () => {
    const facebookIcon = renderer.create(<Icon name="facebook" />).toJSON()
    expect(facebookIcon).toMatchSnapshot()
  })

  it('renders GitHub icon', () => {
    const gitHubIcon = renderer.create(<Icon name="github" />).toJSON()
    expect(gitHubIcon).toMatchSnapshot()
  })

  it('renders Instagram icon', () => {
    const instagramIcon = renderer.create(<Icon name="instagram" />).toJSON()
    expect(instagramIcon).toMatchSnapshot()
  })

  it('renders LinkedIn icon', () => {
    const linkedInIcon = renderer.create(<Icon name="linkedin" />).toJSON()
    expect(linkedInIcon).toMatchSnapshot()
  })

  it('renders Medium icon', () => {
    const MediumIcon = renderer.create(<Icon name="medium" />).toJSON()
    expect(MediumIcon).toMatchSnapshot()
  })

  it('renders Twitter icon', () => {
    const TwitterIcon = renderer.create(<Icon name="twitter" />).toJSON()
    expect(TwitterIcon).toMatchSnapshot()
  })

  it('renders WhatsApp icon', () => {
    const whatsAppIcon = renderer.create(<Icon name="whatsapp" />).toJSON()
    expect(whatsAppIcon).toMatchSnapshot()
  })

  it('renders YouTube icon', () => {
    const YouTubeIcon = renderer.create(<Icon name="medium" />).toJSON()
    expect(YouTubeIcon).toMatchSnapshot()
  })

  it('renders Zeal icon', () => {
    const zealIcon = renderer.create(<Icon name="zeal" />).toJSON()
    expect(zealIcon).toMatchSnapshot()
  })
})
