export interface Props {
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
    <div className="grid page grid-cols-12 md:gap-x-10 mb-16 grid-flow-dense">
      <div
        className={`col-span-10 col-start-2 md:col-span-2 row-start-1 ${
          isAvatarOnLeft ? 'md:col-start-2' : 'md:col-start-10'
        }`}
      >
        <div className="avatar">
          <img
            src={avatar}
            alt={person}
            className="rounded-full bg-treeStump bg-no-repeat p-2 bg-center bg-cover w-[150px] md:w-auto mx-auto"
          />
        </div>
      </div>
      <div
        className={`col-span-10 col-start-2 md:col-span-8 row-start-2 md:row-start-1 pt-5 ${
          !isAvatarOnLeft && 'md:col-start-2'
        }`}
      >
        <div className="relative">
          <img
            src="/images/open-quotes.svg"
            alt="Open Quotes"
            className="absolute -left-9 top-0"
          />
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
