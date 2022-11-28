import { MetaTags } from '@redwoodjs/web'
import { useMDXComponent } from 'src/hooks/useMDXComponent'

const DisclaimersPage = () => {
  const disclaimers = require(`../../../.contentlayer/generated/Legal/legal__disclaimers.mdx.json`)
  const Component = useMDXComponent(disclaimers.body.code)

  return (
    <>
      <MetaTags title="Privacy Policy" description="PrivacyPolicy page" />

      <h1 className="section-heading text-zeus text-center mb-14">
        Disclaimers
      </h1>
      <div className="content">
        <Component />
      </div>
    </>
  )
}

export default DisclaimersPage
