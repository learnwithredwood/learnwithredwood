import kwesforms from 'kwesforms'
import { useEffect } from 'react'

const Hero = () => {
  useEffect(() => {
    kwesforms.init()
  })

  return (
    <div className="pt-28 md:pt-[200px] text-center min-h-44rem mb-20">
      <div className="relative inline-block">
        <a
          href="/"
          className="absolute left-4 -top-[100px] lg:-left-[5rem] lg:-top-[8.5rem] z-0"
        >
          {/* FIXME: Tailwind rotation style isn't working */}
          <img
            src="/images/badge.svg"
            alt="Learn with Redwood"
            className="mx-auto rotate(-23deg) w-[125px] h-[125px] lg:w-[183px] lg:h-[182px]"
          />
        </a>
        <h1 className="text-center text-rangoonGreen mb-8 relative z-10">
          <div className="font-narrow uppercase leading-none text-[2.3rem] lg:text-[6rem]">
            a comprehensive approach to
          </div>
          <div className="font-narrow uppercase leading-none text-[5rem] lg:text-[7.5rem]">
            Full-Stack Development
          </div>
        </h1>
        <p className="font-wide font-bold text-xl text-center mb-14">
          Learn Full Stack{' '}
          <span className="text-harleyDavidsonOrange">without the Pain</span> of
          Full Stack
        </p>
        <p className="max-w-[800px] px-5">
          <strong>Want to be in the know?</strong> We'll give you a behind the
          scenes look at the course and{' '}
          <strong>
            <em>FREE</em>
          </strong>{' '}
          bonuses, sent directly to your inbox.
        </p>
        <form
          className="kwes-form"
          action="https://kwesforms.com/api/foreign/forms/sMgyb9beZ3XIomClKHDo"
        >
          <div className="flex flex-col sm:flex-row gap-4 px-5">
            <input
              className="w-full"
              type="email"
              name="email"
              placeholder="Your Email Address"
              rules="required"
            />
            <button
              className="button-alt !px-4 md:!px-8 whitespace-nowrap w-full"
              type="submit"
            >
              Join the Wait List
            </button>
          </div>
        </form>
        <img
          className="m-[50px_auto_10px]"
          src="/images/powered-by-zeal.svg"
          alt="Powered By ZEAL"
        />
        <a href="http://codingzeal.com/" target="_blank" rel="noreferrer">
          <img className="m-[0_auto]" src="/images/zeal-logo.svg" alt="ZEAL" />
        </a>
      </div>
    </div>
  )
}

export { Hero }
