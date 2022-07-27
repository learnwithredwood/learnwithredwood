import { useEffect, useState } from 'react'
import { MetaTags } from '@redwoodjs/web'
import type { Article as TArticle } from '@contentlayer/types'
import { useGetData } from 'src/hooks/useGetData'

const IndividualArticlePage = ({ slug }) => {
  const [article, setArticle] = useState<TArticle>()

  const url = `/.redwood/functions/mdx/articles`
  const data: TArticle[] = useGetData(url)

  useEffect(() => {
    if (data) {
      const findArticle = data.find((element) => {
        return element.slug === slug
      })
      setArticle(findArticle)
    }
  }, [data, article, slug])

  return (
    <>
      <MetaTags
        title="IndividualArticle"
        description="IndividualArticle page"
      />

      <h1>{article.title}</h1>
      <p>{article.slug}</p>
    </>
  )
}

export default IndividualArticlePage
