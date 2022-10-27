import { MetaTags } from '@redwoodjs/web'
import type { Article as TArticle } from '@contentlayer/types'
import { Newsletter } from 'src/components/Newsletter'
import { Comments } from 'src/components/Comments/Comments'

const IndividualArticlePage = ({ slug }) => {
  // find the article from content layer
  const article = import(`articles__${slug}__index.mdx.json`)
  console.log(article)

  return (
    <div data-testid="article">
      <MetaTags
        title="IndividualArticle"
        description="IndividualArticle page"
      />

      {/* <h1>{article.title}</h1> */}
      {/* <p>{article.slug}</p> */}

      <h3>Comments</h3>
      <Comments />

      <Newsletter />
    </div>
  )
}

export default IndividualArticlePage
