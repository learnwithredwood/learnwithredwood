import { MetaTags } from '@redwoodjs/web'
import { Comments } from 'src/components/Comments/Comments'
import { Newsletter } from 'src/components/Newsletter'
import { useMDXComponent } from 'src/hooks/useMDXComponent'

const IndividualArticlePage = ({ slug }) => {
  // fetch JSON based on the slug
  const article = require(`../../../.contentlayer/generated/Article/articles__${slug}__index.mdx.json`)

  const Component = useMDXComponent(article.body.code)

  return (
    <>
      <MetaTags
        title="IndividualArticle"
        description="IndividualArticle page"
      />
      <h1 className="section-heading">{article?.title && article.title}</h1>
      <Component />

      <h2>Comments</h2>
      <Comments />

      <Newsletter />
    </>
  )
}

export default IndividualArticlePage
