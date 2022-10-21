const Pricing = () => {
  return (
    <div className="mx-8">
      <h2 className="section-heading text-center pb-4">
        Learn Full-Stack
        <br />
        <span className="text-tealGreen">Without the Pain</span> of Full-Stack
      </h2>
      <h3 className="font-wide uppercase text-base md:text-xl text-center mb-16">
        Join the ZEAL and Redwood community to level up!
      </h3>

      <div className="mb-8 grid grid-cols-12 gap-5 lg:bg-bgPricing bg-no-repeat lg:bg-pricingSize lg:bg-pricingPosition">
        {/* basic */}
        <div className="tier lg:col-start-2 lg:col-span-5 col-span-12 mb-10 lg:mb-0">
          <div className="price">
            <sup>$</sup>199
          </div>
          <div className="pricing-box">
            <div className="text-center w-full">
              <h3>basic</h3>
            </div>
            <ol>
              <li>Dynamic, interactive self-paced lessons</li>
              <li>Full Course Transcripts and Captions</li>
              <li>Source code for each lesson</li>
              <li>Community Access (provided by Circle)</li>
            </ol>
            <a
              href="https://store.selfteach.me/rotten-ratings"
              data-podia-embed="link"
              className="button w-full px-3 self-end mt-auto"
            >
              Make it Happen
            </a>
          </div>
        </div>

        {/* professional */}
        <div className="tier lg:col-span-5 col-span-12">
          <div className="price">
            <sup>$</sup>264
          </div>
          <div className="pricing-box">
            <div className="text-center w-full">
              <h3>professional</h3>
            </div>
            <ol>
              <li>Dynamic, interactive self-paced lessons</li>
              <li>Full Course Transcripts and Captions</li>
              <li>Source code for each lesson</li>
              <li>Circle Community Access</li>
              <li>e2e Testing with Cypress</li>
              <li>Setting up a CICD Pipeline</li>
              <li>
                Bonus designs for taking the application to the next level and
                making this project portfolio-worthy
              </li>
            </ol>
            <a
              href="https://store.selfteach.me/rotten-ratings-professional"
              data-podia-embed="link"
              className="button w-full px-3"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>

      {/* not sure if this for you? */}
      <div className="border-2 border-twine text-center py-10 mb-20">
        <h3 className="font-wide text-tealGreen text-2xl mb-2">
          Not sure if this is for you?
        </h3>
        <p className="!mb-0">We have a 100% Money Back Guarantee.</p>
      </div>
    </div>
  )
}

export { Pricing }
