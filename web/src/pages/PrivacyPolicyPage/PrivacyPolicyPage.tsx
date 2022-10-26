import { useEffect, useState } from 'react'
import { MetaTags } from '@redwoodjs/web'
import { useGetData } from 'src/hooks/useGetData'
import type { Legal as TLegal } from '@contentlayer/types'

const PrivacyPolicyPage = aync () => {
  const [privacyPolicy, setPrivacyPolicy] = useState<TLegal>(null)

  const url = `/.redwood/functions/mdx/legal`
  const getContent = async (url) => {
    try {
      const response = await fetch(url)
      const foundData = await response.json()
      return foundData.data.default
    } catch (err) {
      console.error(err.message)
    }
  }

  const data = await getContent(url)
  console.log(data)

  return (
    <>
      <MetaTags title="Privacy Policy" description="PrivacyPolicy page" />

      <h1 className="section-heading text-zeus text-center mb-14">
        Privacy Policy
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </>
  )
}

export default PrivacyPolicyPage
