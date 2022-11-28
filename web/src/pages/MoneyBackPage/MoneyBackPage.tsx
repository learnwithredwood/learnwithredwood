import { MetaTags } from '@redwoodjs/web'
import { useMDXComponent } from 'src/hooks/useMDXComponent'

const MoneyBackPage = () => {
  const moneyBack = require(`../../../.contentlayer/generated/Legal/legal__money-back.mdx.json`)
  const Component = useMDXComponent(moneyBack.body.code)

  return (
    <>
      <MetaTags title="MoneyBack" description="Refund Policy" />

      <h1 className="section-heading text-zeus text-center mb-14">
        Refund Policy
      </h1>
      <div className="content">
        <Component />
      </div>
    </>
  )
}

export default MoneyBackPage
