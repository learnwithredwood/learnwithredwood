import { useState } from 'react'
import { Hamburger } from 'src/components/Hamburger'
import { Footer } from 'src/components/Footer/Footer'
import { Nav } from 'src/components/Nav/Nav'

type LandingPageLayoutProps = {
  children?: React.ReactNode
}

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

  return (
    <div className="trees">
      {/* <Nav
        className={isNavOpen ? 'translate-y-0' : '-translate-y-full'}
        handleClick={() => setIsNavOpen(false)}
      /> */}
      <div className="page-border relative">
        {/* <button
          className="text-sinopia hover:text-gossamer bg-halfSpanishWhite p-4 pt-6 m-0 hover:bg-halfSpanishWhite rounded-none h-auto fixed top-0 right-4"
          onClick={() => setIsNavOpen(true)}
        >
          <Hamburger />
        </button> */}

        {children}
        <Footer />
      </div>
    </div>
  )
}

export { LandingPageLayout }
