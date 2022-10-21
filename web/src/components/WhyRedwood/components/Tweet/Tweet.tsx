import { useMDXComponent } from 'src/hooks/useMDXComponent'

interface Props {
  avatar: string
  content: string
  date: string
  name: string
  title: string
}

const Tweet = ({ avatar, content, date, name, title }: Props): JSX.Element => {
  return (
    <div>
      <div>
        <img src={avatar} alt={`${title}'s avatar`} />
      </div>
    </div>
  )
}

export { Tweet }
