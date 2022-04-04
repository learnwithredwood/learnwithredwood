import { Footer } from 'src/components/Footer/Footer'

type LandingPageLayoutProps = {
  children?: React.ReactNode
}

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => {
  return (
    <div className="trees">
      <div className="page-border">
        {children}
        <Footer />
      </div>
    </div>
  )
}

export { LandingPageLayout }
