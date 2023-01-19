import { Close } from './Close'
import { Email } from './Email'
import { GitHub } from './GitHub'
import { Instagram } from './Instagram'
import { Medium } from './Medium'
import { Twitter } from './Twitter'
import { YouTube } from './YouTube'
import { LinkedIn } from './LinkedIn'
import { Facebook } from './Facebook'
import { WhatsApp } from './WhatsApp'
import { Zeal } from './Zeal'

export interface Props {
  name: string
  className?: string
  width?: number
  height?: number
}

const Icon = ({ name, className, width, height }: Props): JSX.Element => {
  switch (name.toLowerCase()) {
    case 'close':
      return <Close className={className} width={width} height={height} />
    case 'email':
      return <Email className={className} width={width} height={height} />
    case 'facebook':
      return <Facebook className={className} width={width} height={height} />
    case 'github':
      return <GitHub className={className} width={width} height={height} />
    case 'instagram':
      return <Instagram className={className} width={width} height={height} />
    case 'linkedin':
      return <LinkedIn className={className} width={width} height={height} />
    case 'medium':
      return <Medium className={className} width={width} height={height} />
    case 'twitter':
      return <Twitter className={className} width={width} height={height} />
    case 'whatsapp':
      return <WhatsApp className={className} width={width} height={height} />
    case 'youtube':
      return <YouTube className={className} width={width} height={height} />
    case 'zeal':
      return <Zeal className={className} width={width} height={height} />
    default:
      return <span />
  }
}

export { Icon }
