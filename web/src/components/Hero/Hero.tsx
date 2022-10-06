const Hero = () => {
  return (
    <div className="pt-[200px] text-center min-h-44rem mb-20">
      <div className="relative inline-block">
        <a
          href="/"
          className="absolute -left-[5rem] -top-[8.5rem] -rotate-[23] z-0"
        >
          <img
            src="/images/badge.svg"
            alt="Learn with Redwood"
            className="mx-auto"
          />
        </a>
        <h1 className="text-center text-rangoonGreen mb-8 relative z-10">
          <div className="font-narrow uppercase leading-none text-[6rem]">
            a comprehensive approach to
          </div>
          <div className="font-narrow uppercase leading-none text-[7.5rem]">
            Full-Stack Development
          </div>
        </h1>
        <p className="font-wide font-bold text-xl text-center mb-14">
          Learn Full Stack{' '}
          <span className="text-harleyDavidsonOrange">without the Pain</span> of
          Full Stack
        </p>
        <a className="button-alt" href="#get-started">
          Get Started
        </a>
        <img
          className="m-[50px_auto_10px]"
          src="/images/sponsored-by.svg"
          alt="Sponsored By ZEAL"
        />
        <a href="http://codingzeal.com/" target="_blank" rel="noreferrer">
          <img className="m-[0_auto]" src="/images/zeal-logo.svg" alt="ZEAL" />
        </a>
      </div>
    </div>
  )
}

export { Hero }
