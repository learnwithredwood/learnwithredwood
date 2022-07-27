import { useEffect } from 'react'
import { useMDXComponent } from 'src/hooks/useMDXComponent'
import Prism from 'prismjs'

const ArticleCard = ({ article }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const MDXComponent = useMDXComponent(article.body.code)

  return (
    <div>
      <MDXComponent />
    </div>
  )
}

export default ArticleCard
