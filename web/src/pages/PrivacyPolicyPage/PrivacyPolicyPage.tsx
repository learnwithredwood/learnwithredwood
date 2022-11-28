import { MetaTags } from '@redwoodjs/web'
import { useMDXComponent } from 'src/hooks/useMDXComponent'

const PrivacyPolicyPage = () => {
  const article = require(`../../../.contentlayer/generated/Legal/legal__privacy.mdx.json`)
  const Component = useMDXComponent(article.body.code)

  return (
    <>
      <MetaTags title="Privacy Policy" description="PrivacyPolicy page" />

      <h1 className="section-heading text-zeus text-center mb-14">
        Privacy Policy
      </h1>
      <div className="content">
        <Component />
      </div>
    </>
  )
}

export default PrivacyPolicyPage
