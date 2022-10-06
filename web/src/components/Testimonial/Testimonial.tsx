interface Props {
  avatar: string
  children: JSX.Element
  isAvatarOnLeft?: boolean
  person: string
  title: string
}

const Testimonial = ({
  avatar,
  children,
  isAvatarOnLeft = true,
  person,
  title,
}: Props): JSX.Element => {
  return (
    <div className="grid page grid-cols-12 gap-5 mb-16">
      <div
        className={`col-start-2 col-span-10 flex gap-x-2 ${
          !isAvatarOnLeft && 'flex-col-reverse'
        }`}
      >
        <div className="avatar">
          <img src={avatar} alt={person} />
        </div>

        <div>
          <div className="mb-7 font-body font-medium">{children}</div>
          <div>
            <h3 className="uppercase font-wide text-lg mb-1">{person}</h3>
            <p className="text-base font-semibold">{title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Testimonial }
