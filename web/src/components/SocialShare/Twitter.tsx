import { Icon } from '../Icon'

interface Props {
  description?: string
  hashtags?: string
  url: string
}

const Twitter = ({ description, hashtags, url }: Props) => {
  const encodedUrl = encodeURIComponent(url)
  const encodedDescription = encodeURIComponent(description)
  const encodedHashtags = encodeURIComponent(hashtags)

  const href = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedDescription}&hashtags=${encodedHashtags}`

  return (
    <a
      className="social-share bg-twitter"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <Icon name="twitter" />
    </a>
  )
}

export { Twitter }
