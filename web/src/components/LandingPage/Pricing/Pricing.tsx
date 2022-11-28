import { Link, routes } from '@redwoodjs/router'

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
              <li>Community Access (provided by Circle)</li>
            </ol>
            <button
              data-item-id="lwr-starter-tier"
              data-item-price="199.00"
              data-item-description="Starter Tier"
              data-item-name="Learn with Redwood, Starter Tier"
              data-item-url="https://www.learnwithredwood.com"
              className="snipcart-add-item button w-full px-3 self-end mt-auto"
            >
              Pre-Order Now
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
              <li>Circle Community Access</li>
              <li>e2e Testing with Cypress</li>
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
              data-item-url="https://www.learnwithredwood.com"
              className="snipcart-add-item button w-full px-3"
            >
              Pre-Order Now
            </button>
          </div>
        </div>
      </div>

      {/* not sure if this for you? */}
      <div className="border-2 border-twine text-center py-10 mb-20">
        <h3 className="font-wide text-tealGreen text-2xl mb-2">
          Not sure if this is for you?
        </h3>
        <p className="!mb-0">
          We have a 30-Day "Try-It, Test-It, Implement-It" 100% Money Back
          Guarantee.{' '}
          <Link to={routes.moneyBack()} className="text-black">
            Want details?
          </Link>
        </p>
      </div>
    </div>
  )
}

export { Pricing }
