import { MetaTags } from '@redwoodjs/web'
import { useGetData } from 'src/hooks/useGetData'
import ArticleCard from 'src/components/ArticleCard/ArticleCard'

const ArticlesPage = () => {
  const url = `/.redwood/functions/mdx/articles`
  const data = useGetData(url)

  return (
    <>
      <MetaTags title="Articles" description="Articles page" />
      <h1>ArticlesPage</h1>
      {data?.map((item, index) => <ArticleCard article={item} key={index} />)}
    </>
  )
}

export default ArticlesPage
