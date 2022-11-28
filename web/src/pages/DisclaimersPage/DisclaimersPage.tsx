import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useMDXComponent } from 'src/hooks/useMDXComponent'

const DisclaimersPage = () => {
  const article = require(`../../../.contentlayer/generated/Legal/legal__disclaimers.mdx.json`)
  const Component = useMDXComponent(article.body.code)

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
