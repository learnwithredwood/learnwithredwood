import { Icon } from '../Icon'

interface Props {
  content: string
}

const WhatsApp = ({ content }: Props) => {
  const encodedText = encodeURIComponent(content)
  const href = `https://api.whatsapp.com/send?text=${encodedText}`
  return (
    <a
      href={href}
      className="social-share bg-whatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <Icon name="whatsApp" />
    </a>
  )
}

export { WhatsApp }
