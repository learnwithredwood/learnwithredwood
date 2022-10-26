import { MetaTags } from '@redwoodjs/web'
import { useGetData } from 'src/hooks/useGetData'
import type { Legal as TLegal } from '@contentlayer/types'
import { useEffect, useState } from 'react'
import { useLocation } from '@redwoodjs/router'
import { useMDXComponent } from 'src/hooks/useMDXComponent'

const TermsAndConditionsPage = () => {
  const [legal, setLegal] = useState<TLegal>(null)
  const [slug, setSlug] = useState<string>('')

  const { pathname } = useLocation()

  const url = `/.redwood/functions/mdx/legal`
  const data = useGetData(url)

  useEffect(() => {
    setSlug(pathname.split('/')[1])
  }, [pathname])

  useEffect(() => {
    console.log({ data, legal })
    if (data) {
      const foundLegal = data.find((elem) => elem.slug === slug)
      setLegal(foundLegal)
    } else {
      console.log("couldn't find legal")
    }
  }, [data, legal, slug])

  const MDXComponent = useMDXComponent(legal.body.code)

  return (
    <>
      <MetaTags
        title="TermsAndConditions"
        description="TermsAndConditions page"
      />

      <h1 className="page-title">Terms &amp; Conditions</h1>
      {legal && <MDXComponent />}
    </>
  )
}

export default TermsAndConditionsPage
