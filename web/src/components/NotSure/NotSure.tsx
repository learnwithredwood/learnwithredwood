import { Link, routes } from '@redwoodjs/router'

const NotSure = () => {
  return (
    <div className="grid grid-cols-12 gap-x-5">
      <div className="col-span-10 col-start-2">
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
    </div>
  )
}

export { NotSure }
