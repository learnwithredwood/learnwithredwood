import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Faqs = defineDocumentType(() => ({
  name: 'Faq',
  contentType: 'mdx',
  filePathPattern: 'faqs/*.mdx',
  fields: {
    question: { type: 'string', description: 'FAQ question', required: true },
    order: {
      type: 'number',
      description: 'Order the FAQ should appear in',
      required: false,
    },
  },
}))

const Articles = defineDocumentType(() => ({
  name: 'Article',
  contentType: 'mdx',
  filePathPattern: 'articles/*.mdx',
  fields: {
    title: { type: 'string', description: 'Article Title', required: true },
    publishDate: {
      type: 'string',
      description: 'Date that the article should be published',
      required: true,
    },
    slug: { type: 'string', description: 'Article Slug', required: true },
  },
}))

export default makeSource({
  documentTypes: [Faqs, Articles],
  contentDirPath: '../content',
})
