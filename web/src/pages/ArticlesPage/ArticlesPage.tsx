import { MetaTags } from '@redwoodjs/web'
import ArticleCard from 'src/components/ArticleCard/ArticleCard'
import data from '../../../.contentlayer/generated/Article/_index.json'

const ArticlesPage = () => {
  return (
    <>
      <MetaTags title="Articles" description="Articles page" />
      <h1>ArticlesPage</h1>
      {data?.map((item, index: number) => {
        console.log(item)
        return <ArticleCard article={item} key={index} />
      })}
    </>
  )
}

export default ArticlesPage
