const Hero = () => {
  return (
    <div className="pt-20 text-center min-h-44rem mb-20">
      <a href="/" className="mb-7">
        <img src="/images/logo.svg" alt="RedwoodJS Logo" className="mx-auto" />
      </a>
      <h1 className="text-center text-rangoonGreen mb-10">
        <div className="font-wide text-5-375rem">LEARN</div>
        <div className="font-script text-5xl leading-none -mt-5">with</div>
        <div className="font-condensedAlt text-9xl">REDWOOD</div>
      </h1>
      <p className="font-body font-bold text-xl text-center mb-14">
        Learn Full Stack without the Pain of Full Stack
      </p>
      <a
        className="border-b-0 uppercase font-wide hover:bg-gossamer text-xl text-white bg-sinopia px-24 py-5 rounded-md mx-auto"
        href="#newsletter"
      >
        Get Started
      </a>
    </div>
  )
}

export default Hero
