import { useMDXComponent } from 'src/hooks/useMDXComponent'

const ArticleCard = ({ article }) => {
  const MDXComponent = useMDXComponent(article.body.code)

  return (
    <div>
      <MDXComponent />
    </div>
  )
}

export default ArticleCard
