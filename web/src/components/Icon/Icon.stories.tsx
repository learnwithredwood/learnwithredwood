import { Icon, Props as IconProps } from './Icon'

const Template = (args: IconProps) => <Icon {...args} />

export const Close = Template.bind({})
Close.args = {
  name: 'close',
}

export const GitHub = Template.bind({})
GitHub.args = {
  name: 'github',
}

export const Medium = Template.bind({})
Medium.args = {
  name: 'medium',
}

export const Twitter = Template.bind({})
Twitter.args = {
  name: 'twitter',
}

export const YouTube = Template.bind({})
YouTube.args = {
  name: 'youtube ',
}

export default { title: 'Components/Icon' }
