const BulkPricing = () => {
  return (
    <div className="grid grid-cols-12 mb-[100px]">
      <h2 className="col-span-12 section-heading mb-8 text-center">
        Team License Packages
      </h2>
      <div className="col-span-5 col-start-2 pr-14">
        <p>
          There’s no better way to learn than to work through a course with a
          group of people.
        </p>
        <p>
          With a bulk license, you can allocate each slot to a student or an
          employee.
        </p>
        <p>
          The bulk license includes everything within the Complete Plan. Spots
          cannot be reassigned once used.
        </p>
        <p>
          Please contact{' '}
          <a
            href="mailto:support@learnwithredwood.com"
            className="font-bold underline hover:no-underline"
          >
            support@learnwithredwood.com
          </a>{' '}
          for larger groups and corporate workshops.
        </p>
      </div>
      <div className="col-span-4">
        <button
          data-item-id="lwr-10-spots"
          data-item-price="2112.00"
          data-item-description="10 Spots"
          data-item-name="Learn with Redwood, 10 Spots"
          data-item-url="https://www.learnwithredwood.com/products.json"
          className="snipcart-add-item w-full bg-starkWhite bg-opacity-40 mix-blend-multiply text-donkeyBrown min-h-[110px] center gap-x-4 hover:text-white mb-8"
        >
          <span className="text-3xl uppercase">10 Spots</span>
          <span className="text-base">$2112</span>
        </button>
        <button
          data-item-id="lwr-20-spots"
          data-item-price="$4224.00"
          data-item-description="20 Spots"
          data-item-name="Learn with Redwood, 20 Spots"
          data-item-url="https://www.learnwithredwood.com/products.json"
          className="snipcart-add-item w-full bg-starkWhite bg-opacity-40 mix-blend-multiply text-donkeyBrown min-h-[110px] center gap-x-4 hover:text-white mb-8"
        >
          <span className="text-3xl uppercase">20 Spots</span>
          <span className="text-base">$4224</span>
        </button>
        <button
          data-item-id="lwr-30-spots"
          data-item-price="2112.00"
          data-item-description="30 Spots"
          data-item-name="Learn with Redwood, 30 Spots"
          data-item-url="https://www.learnwithredwood.com/products.json"
          className="snipcart-add-item w-full bg-starkWhite bg-opacity-40 mix-blend-multiply text-donkeyBrown min-h-[110px] center gap-x-4 hover:text-white mb-8"
        >
          <span className="text-3xl uppercase">30 Spots</span>
          <span className="text-base">$6336</span>
        </button>
      </div>
    </div>
  )
}

export { BulkPricing }
