type LandingPageLayoutProps = {
  children?: React.ReactNode
}

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => {
  return (
    <div className="trees">
      <div className="page-border">{children}</div>
    </div>
  )
}

export { LandingPageLayout }
