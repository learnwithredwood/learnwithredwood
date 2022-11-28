// import { useState } from 'react'
// import { Hamburger } from 'src/components/Hamburger'
import { Footer } from 'src/components/Footer/Footer'
// import { Nav } from 'src/components/Nav/Nav'

type InteriorLayoutProps = {
  children?: React.ReactNode
}

const InteriorLayout = ({ children }: InteriorLayoutProps) => {
  // const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

  return (
    <div className="pt-6">
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

        <div className="grid grid-cols-12 mb-36 pt-24">
          <div className="col-start-4 col-span-6">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export { InteriorLayout }
