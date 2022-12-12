import { Icon } from '../Icon'

const LinkedIn = ({ url, title, summary }) => {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedSummary = encodeURIComponent(summary)

  const href = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedSummary}&source=${encodedTitle}`

  return (
    <a
      className="social-share bg-linkedIn"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <Icon name="linkedIn" />
    </a>
  )
}

export { LinkedIn }
