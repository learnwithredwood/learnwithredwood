const Hero = () => {
  return (
    <div className="pt-28 md:pt-[125px] text-center min-h-44rem mb-20">
      <div className="relative inline-block">
        <img
          src="/images/badge.svg"
          alt="Learn with Redwood"
          className="mx-auto rotate(-23deg) w-[125px] h-[125px] lg:w-[183px] lg:h-[182px] absolute -left-20 -top-16 transform -rotate-12"
        />
        <h3 className="text-center font-wide text-[3.875rem] uppercase text-tealGreen leading-none">
          FREE
        </h3>
        <h1 className="text-center text-rangoonGreen mb-8 relative z-10">
          <div className="font-wide uppercase leading-none text-[3.125rem]">
            MASTERCLASS SERIES
          </div>
          <div className="font-narrow uppercase leading-none text-[6rem]">
            FUTURE PROOFING YOUR CAREER
          </div>
        </h1>
        <p className="text-2xl font-semibold max-w-[800px] text-left mb-10">
          The best thing to do in a volatile, fluid economy and hiring
          environment is to make sure you stand out as a technologist and a
          potential candidate.
        </p>

        <div>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>

        <div>
          <p className="text-2xl font-semibold mb-4">How do you do this?</p>
          <h3 className="text-4xl uppercase text-sinopia font-wide leading-none mb-10">
            By Leveling Up
          </h3>
          <a href="#register-today" className="button button-alt">
            Register Now
          </a>
        </div>

        <div>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export { Hero }
