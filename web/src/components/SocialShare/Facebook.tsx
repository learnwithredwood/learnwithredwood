import { Icon } from '../Icon'

const Facebook = ({ url }) => {
  const encodedUrl = encodeURIComponent(url)
  return (
    <a
      className="center social-share bg-facebook"
      href={`https://www.facebook.com/sharer.php?u=${encodedUrl}`}
      target="_blank"
      rel="noreferrer"
    >
      <Icon name="facebook" />
    </a>
  )
}

export { Facebook }
