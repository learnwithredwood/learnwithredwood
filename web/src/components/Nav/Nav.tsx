import { Icon } from '../Icon/Icon'
import { Link, routes } from '@redwoodjs/router'
import { MouseEvent, useEffect } from 'react'

interface Props {
  className?: string
  handleClick: () => void
}

const Nav = ({ className = '', handleClick }: Props) => {
  const closeNav = (e: MouseEvent) => {
    e.preventDefault()
    handleClick()
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClick()
      }
    }

    document.addEventListener('keydown', handleEsc)

    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  })

  return (
    <div
      className={`bg-bgNav bg-cover fixed top-0 left-0 w-full z-nav transition-transform ${className}`}
    >
      <div className="bg-nav" />
      <button
        className="z-closeNav top-6 right-8 bg-transparent absolute px-0 py-0 text-turquoise h-8 hover:text-sinopia hover:bg-transparent"
        onClick={(e) => closeNav(e)}
      >
        <Icon name="close" className="w-8 h-8" />
      </button>
      <div className="grid grid-cols-12 w-full relative page pt-24 pb-24">
        <div className="col-span-3">
          <h4 className="font-script text-2xl lowercase text-alpine mb-3">
            navigate to
          </h4>
          <nav>
            <ul className="list-none pl-0 ml-0">
              <li className="uppercase font-wide text-xl leading-0">
                <Link className="text-white no-underline" to={routes.landing()}>
                  Home
                </Link>
              </li>
              <li className="uppercase font-wide text-xl leading-0">
                <Link
                  className="text-white no-underline"
                  to={routes.articles()}
                >
                  Articles
                </Link>
              </li>
              <li className="uppercase font-wide text-xl leading-0">
                <Link className="text-white no-underline" to={routes.contact()}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="col-span-3">
          <h4 className="font-script text-2xl lowercase text-alpine mb-7">
            content focus
          </h4>
          <ul className="list-none pl-0 ml-0 text-base font-wide text-bone uppercase">
            <li className="flex items-center gap-2 mb-7">
              <div className="w-8">
                <img
                  src="/images/logo__react.png"
                  alt="React"
                  srcSet="/images/logo__react@2x.png 2x, /images/logo__react.png 1x"
                />
              </div>
              React
            </li>
            <li className="flex items-center gap-2">
              <div className="w-8">
                <img
                  src="/images/logo__storybook.png"
                  alt="Storybook"
                  srcSet="/images/logo__storybook@2x.png 2x, /images/logo__storybook.png 1x"
                />
              </div>
              Storybook
            </li>
          </ul>
        </div>

        <div className="col-span-3 mt-14">
          <ul className="list-none pl-0 ml-0 text-base font-wide text-bone uppercase">
            <li className="flex items-center gap-2 mb-7">
              <div className="w-8">
                <img
                  src="/images/logo__graphql.png"
                  alt="GraphQL"
                  srcSet="/images/logo__graphql@2x.png 2x, /images/logo__graphql.png 1x"
                />
              </div>
              GraphQL
            </li>
            <li className="flex items-center gap-2 mb-7">
              <div className="w-8">
                <img
                  src="/images/logo__jest.png"
                  alt="Jest"
                  srcSet="/images/logo__jest@2x.png 2x, /images/logo__jest.png 1x"
                />
              </div>
              Jest
            </li>
          </ul>
        </div>

        <div className="col-span-3 mt-14">
          <ul className="list-none pl-0 ml-0 text-base font-wide text-bone uppercase">
            <li className="flex items-center gap-2 mb-7">
              <div className="w-8">
                <img
                  src="/images/logo__prisma.png"
                  alt="Prisma"
                  srcSet="/images/logo__prisma@2x.png 2x, /images/logo__prisma.png 1x"
                />
              </div>
              Prisma
            </li>
            <li className="flex items-center gap-2 mb-7">
              <div className="w-8">
                <img
                  src="/images/logo__typescript.png"
                  alt="TypeScript"
                  srcSet="/images/logo__typescript@2x.png 2x, /images/logo__typescript.png 1x"
                />
              </div>
              TypeScript
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export { Nav }
