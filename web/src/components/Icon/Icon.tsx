import { Close } from './Close'
import { GitHub } from './GitHub'
import { Medium } from './Medium'
import { Twitter } from './Twitter'
import { YouTube } from './YouTube'

interface Props {
  name: string
  className?: string
  width?: number
  height?: number
}

const Icon = ({ name, className, width, height }: Props): JSX.Element => {
  switch (name.toLowerCase()) {
    case 'close':
      return <Close className={className} width={width} height={height} />
    case 'github':
      return <GitHub className={className} width={width} height={height} />
    case 'medium':
      return <Medium className={className} width={width} height={height} />
    case 'twitter':
      return <Twitter className={className} width={width} height={height} />
    case 'youtube':
      return <YouTube className={className} width={width} height={height} />
    default:
      return <span />
  }
}

export default Icon
