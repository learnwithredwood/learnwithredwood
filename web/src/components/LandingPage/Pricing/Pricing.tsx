const Pricing = () => {
  return (
    <div className="mx-8">
      <h2 className="section-heading text-center pb-4">
        Learn Full Stack
        <br />
        <span className="text-tealGreen">Without the Pain</span> of Full Stack
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
              <h3>starter</h3>
            </div>
            <ol>
              <li>Dynamic, interactive self-paced lessons</li>
              <li>Full Course Transcripts and Captions</li>
              <li>Source code for each lesson</li>
              <li>Community Access</li>
            </ol>
            <button
              data-item-id="lwr-starter-tier"
              data-item-price="199.00"
              data-item-description="Starter Tier"
              data-item-name="Learn with Redwood, Starter Tier"
              data-item-url="https://www.learnwithredwood.com/products.json"
              className="snipcart-add-item button w-full px-3 self-end mt-auto"
            >
              Get Early Access
            </button>
          </div>
        </div>

        {/* professional */}
        <div className="tier lg:col-span-5 col-span-12">
          <div className="price">
            <sup>$</sup>264
          </div>
          <div className="pricing-box">
            <div className="text-center w-full">
              <h3>complete</h3>
            </div>
            <ol>
              <li>Dynamic, interactive self-paced lessons</li>
              <li>Full Course Transcripts and Captions</li>
              <li>Source code for each lesson</li>
              <li>Community Access</li>
              <li>Setting up a CICD Pipeline</li>
              <li>
                Bonus designs for taking the application to the next level and
                making this project portfolio-worthy
              </li>
            </ol>
            <button
              data-item-id="lwr-complete-tier"
              data-item-price="264.00"
              data-item-description="Complete Tier"
              data-item-name="Learn with Redwood, Complete Tier"
              data-item-url="https://www.learnwithredwood.com/products.json"
              className="snipcart-add-item button w-full px-3"
            >
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Pricing }
