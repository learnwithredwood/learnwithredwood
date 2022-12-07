import { Testimonial, Props as TestimonialProps } from './Testimonial'
import Amanda from 'src/images/avatars/amanda.jpeg'

const Template = (args: TestimonialProps) => <Testimonial {...args} />

export const AvatarRight = Template.bind({})
AvatarRight.args = {
  person: 'Amanda Giannelli',
  title:
    'Software Engineer - DX-Support Experience @ Okta and Redwood.js Core Team',
  avatar: Amanda,
  isAvatarOnLeft: false,
  children: (
    <p>
      From Amy’s very first YouTube video, she has been providing content that
      is to the point and easy to follow all while being extremely fun and
      engaging. Amy knows how to build up to the finale in just the right way to
      leave you feeling confident in what you’ve learned. LearnWithRedwood is no
      different!
    </p>
  ),
}

export const AvatarLeft = Template.bind({})
AvatarLeft.args = {
  person: 'Amanda Giannelli',
  title:
    'Software Engineer - DX-Support Experience @ Okta and Redwood.js Core Team',
  avatar: Amanda,
  isAvatarOnLeft: true,
  children: (
    <p>
      From Amy’s very first YouTube video, she has been providing content that
      is to the point and easy to follow all while being extremely fun and
      engaging. Amy knows how to build up to the finale in just the right way to
      leave you feeling confident in what you’ve learned. LearnWithRedwood is no
      different!
    </p>
  ),
}

export default { title: 'Components/LandingPage/Testimonial' }
