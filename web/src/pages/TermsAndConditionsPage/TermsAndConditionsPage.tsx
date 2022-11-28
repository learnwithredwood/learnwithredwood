import { MetaTags } from '@redwoodjs/web'
import { useMDXComponent } from 'src/hooks/useMDXComponent'

const TermsAndConditionsPage = () => {
  const legal = require(`../../../.contentlayer/generated/Legal/legal__terms-and-conditions.mdx.json`)
  const Component = useMDXComponent(legal.body.code)

  return (
    <>
      <MetaTags
        title="TermsAndConditions"
        description="TermsAndConditions page"
      />

      <h1 className="page-title">Terms &amp; Conditions</h1>
      <div className="content">
        <Component />
      </div>
    </>
  )
}

export default TermsAndConditionsPage
