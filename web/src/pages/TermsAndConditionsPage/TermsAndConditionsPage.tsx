import { MetaTags } from '@redwoodjs/web'
import type { Legal as TLegal } from '@contentlayer/types'
import { useLocation } from '@redwoodjs/router'
import { useMDXComponent } from 'src/hooks/useMDXComponent'

const TermsAndConditionsPage = () => {
  // const MDXComponent = useMDXComponent(legal.body.code)

  return (
    <>
      <MetaTags
        title="TermsAndConditions"
        description="TermsAndConditions page"
      />

      <h1 className="page-title">Terms &amp; Conditions</h1>
      {/* {legal && <MDXComponent />} */}
    </>
  )
}

export default TermsAndConditionsPage
