interface Props {
  pageTitle: string
  subheading: string
}

const PageHeader = ({ pageTitle, subheading }: Props) => {
  return (
    <div className="pt-28 md:pt-[150px] text-center mb-20">
      <div className="relative inline-block px-6 md:px-10 lg:px-0">
        <img
          src="/images/badge.svg"
          alt="Learn with Redwood"
          className="mx-auto rotate(-23deg) w-[125px] h-[125px] md:w-[183px] md:h-[182px] absolute -top-20 left-2 lg:-left-[6rem] lg:-top-[8rem] transform -rotate-12"
        />
        <h1 className="text-center text-rangoonGreen relative z-10 font-narrow uppercase leading-none text-[4rem] md:text-[6rem]">
          {pageTitle}
        </h1>
        <h3 className="text-center font-wide text-tealGreen uppercase text-[1.5rem] md:text-[3rem]">
          {subheading}
        </h3>
      </div>
    </div>
  )
}

export { PageHeader }
