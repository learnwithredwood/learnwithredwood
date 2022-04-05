const Newsletter = () => {
  return (
    <div className="bg-bgNewsletter mx-10 px-11 py-12 mb-24">
      <h3 className="text-center lowercase font-script text-gossamer text-4xl mb-7">
        launching fall of 2022
      </h3>
      <h2 className="font-wide uppercase text-5xl tracking-wider text-cafeRoyale text-center mb-5">
        Are you interested?
      </h2>
      <p className="font-body text-center mb-20">
        We’ll keep you updated and send you *bonus content* along the way.
      </p>

      <form action="" className="flex gap-10">
        <div className="flex-1">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>

        <div className="flex-1">
          <label htmlFor="email">Email Address</label>
          <input type="text" name="email" />
        </div>

        <div className="flex-1 flex items-end">
          <input type="submit" name="submit" value="keep me posted" />
        </div>
      </form>
    </div>
  )
}

export { Newsletter }
