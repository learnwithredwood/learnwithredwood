import taylor from '/src/images/avatars/taylor.png'
import jennifer from '/src/images/avatars/jennifer.png'
import erik from '/src/images/avatars/erik.png'
import amy from '/src/images/avatars/amy.png'

const Hero = () => {
  return (
    <div className="pt-28 md:pt-[125px] text-center min-h-44rem mb-20">
      <div className="relative inline-block px-6 md:px-10 lg:px-0">
        <img
          src="/images/badge.svg"
          alt="Learn with Redwood"
          className="mx-auto rotate(-23deg) w-[125px] h-[125px] md:w-[183px] md:h-[182px] absolute -top-20 left-2 lg:-left-20 lg:-top-16 transform -rotate-12"
        />
        <h3 className="text-center font-wide text-[1.5rem] md:text-[3.875rem] uppercase text-tealGreen leading-none">
          FREE
        </h3>
        <h1 className="text-center text-rangoonGreen mb-4 relative z-10">
          <div className="font-wide uppercase leading-none text-[1.75rem] md:text-[3.125rem]">
            MASTERCLASS SERIES
          </div>
          <div className="font-narrow uppercase leading-none text-[4rem] md:text-[6rem]">
            FUTURE PROOFING YOUR CAREER
          </div>
        </h1>
        <h3 className="mb-8 font-wide text-sinopia text-lg uppercase">
          Live&nbsp;&nbsp;||&nbsp;&nbsp;December 15 at 12:00pm PST
        </h3>
        <p className="text-base md:text-2xl font-semibold max-w-[800px] text-left mb-10">
          The best thing to do in a volatile, fluid economy and hiring
          environment is to make sure you stand out as a technologist and a
          potential candidate.
        </p>
      </div>

      <div className="grid grid-cols-2 xl:flex xl:items-center xl:justify-center gap-x-10 xl:gap-x-20 gap-y-10 xl:flex-row w-full">
        <div className="flex gap-x-8 row-start-2 col-span-2 md:col-span-1 justify-center md:justify-end">
          <div>
            <img
              src={amy}
              alt="Amy Dutton"
              className="border-4 rounded-full border-white w-32 xl:w-auto"
            />
            <h4 className="font-body font-bold text-tealGreen py-1">
              Amy Dutton
            </h4>
          </div>
          <div>
            <img
              src={erik}
              alt="Erik Guzman"
              className="border-4 rounded-full border-white w-32 xl:w-auto"
            />
            <h4 className="font-body font-bold text-tealGreen py-1">
              Erik Guzman
            </h4>
          </div>
        </div>

        <div className="row-start-1 col-span-2">
          <p className="text-lg md:text-2xl font-semibold mb-4">
            How do you do this?
          </p>
          <h3 className="text-xl md:text-4xl uppercase text-sinopia font-wide leading-none mb-10">
            By Leveling Up
          </h3>
          <a
            href="#register-today"
            className="button button-alt w-11/12 md:w-auto"
          >
            Register Now
          </a>
        </div>

        <div className="flex gap-x-8 row-start-3 col-span-2 md:col-span-1 md:row-start-2 justify-center md:justify-start">
          <div>
            <img
              src={taylor}
              alt="Taylor Desseyn"
              className="border-4 rounded-full border-white w-32 xl:w-auto"
            />
            <h4 className="font-body font-bold text-tealGreen py-1">
              Taylor Desseyn
            </h4>
          </div>
          <div>
            <img
              src={jennifer}
              alt="Jennifer Tacheff"
              className="border-4 rounded-full border-white w-32 xl:w-auto"
            />
            <h4 className="font-body font-bold text-tealGreen py-1">
              Jennifer Tacheff
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Hero }
