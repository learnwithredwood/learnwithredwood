import { MetaTags } from '@redwoodjs/web'
import { useEffect, useState } from 'react'
import { useGetData } from 'src/hooks/useGetData'
import type { Article as TArticle } from '@contentlayer/types'
import { Newsletter } from 'src/components/Newsletter'

const IndividualArticlePage = ({ slug }) => {
  const [article, setArticle] = useState<TArticle>(null)

  const url = `/.redwood/functions/mdx/articles`
  const data = useGetData(url)

  useEffect(() => {
    if (data) {
      const foundArticle = data.find((elem) => elem.slug === slug)
      setArticle(foundArticle)
    }
  }, [data, article, slug])

  return article ? (
    <div data-testid="article">
      <MetaTags
        title="IndividualArticle"
        description="IndividualArticle page"
      />

      <h1>{article.title}</h1>
      <p>{article.slug}</p>

      <h3>Comments</h3>
      <p>Comments go here</p>

      <Newsletter />
    </div>
  ) : null
}

export default IndividualArticlePage
