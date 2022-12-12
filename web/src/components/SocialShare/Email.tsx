import { Icon } from '../Icon'

interface Props {
  body: string
  subject: string
}

const Email = ({ body, subject }: Props) => {
  const href = `mailto:?subject=${subject}&body=${body}`

  return (
    <a
      href={href}
      className="social-share bg-email"
      target="_blank"
      rel="noreferrer"
    >
      <Icon name="email" />
    </a>
  )
}

export { Email }
