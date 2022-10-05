interface Props {
  isAvatarOnLeft: boolean
}

const Testimonial = ({ isAvatarOnLeft = true }: Props): JSX.Element => {
  return (
    <div className={`flex gap-x-2 ${!isAvatarOnLeft && 'flex-col-reverse'}`}>
      <div className="avatar">
        <img src="" alt="" />
      </div>

      <div>
        <div className="mb-7 font-body font-medium">
          When I started with{' '}
          <span className="highlight">
            List Builders Society I had no clue how to build a list, none. List
            Builders Society has given me practical steps, ideas and action
            steps to create valuable tools for my clients.
          </span>{' '}
          Having my own list means not stressing about algorithms or funneling
          money into ads during the start up phase.
        </div>

        <div>
          <h3 className="uppercase font-wide text-lg mb-1">Jennifer Tacheff</h3>
          <p className="text-base font-semibold">CEO, Manifest</p>
        </div>
      </div>
    </div>
  )
}

export { Testimonial }
