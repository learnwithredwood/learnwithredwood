import { MetaTags } from '@redwoodjs/web'
import type { Article as TArticle } from '@contentlayer/types'
import { useGetData } from 'src/hooks/useGetData'
import ArticleCard from 'src/components/ArticleCard/ArticleCard'

const ArticlesPage = () => {
  const url = `/.redwood/functions/mdx/articles`
  const data: TArticle[] = useGetData(url)

  console.log(data)

  return (
    <>
      <MetaTags title="Articles" description="Articles page" />

      <h1>ArticlesPage</h1>

      {data &&
        data.map((item, index) => <ArticleCard article={item} key={index} />)}
    </>
  )
}

export default ArticlesPage
