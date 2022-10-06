import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Articles = defineDocumentType(() => ({
  name: 'Article',
  contentType: 'mdx',
  filePathPattern: 'articles/**/*.mdx',
  fields: {
    title: { type: 'string', description: 'Article Title', required: true },
    publishDate: {
      type: 'string',
      description: 'Date that the article should be published',
      required: true,
    },
    slug: { type: 'string', description: 'Article Slug', required: true },
    published: {
      type: 'boolean',
      description:
        'Flag to determine whether this post has been published or not',
      required: true,
    },
    githubIssue: {
      type: 'number',
      description: 'Github Issue Number for Comments',
      required: true,
    },
  },
}))

const CourseYouWill = defineDocumentType(() => ({
  name: 'CourseYouWill',
  contentType: 'mdx',
  filePathPattern: 'courseYouWill/*.mdx',
  fields: {
    title: {
      type: 'string',
      description: 'Title for Card',
      required: true,
    },
  },
}))

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

const Legal = defineDocumentType(() => ({
  name: 'Legal',
  contentType: 'mdx',
  filePathPattern: 'legal/*.mdx',
  fields: {
    title: { type: 'string', description: 'Page Title', required: true },
    slug: { type: 'string', description: 'Page Slug', required: true },
  },
}))

const LessonsModules = defineDocumentType(() => ({
  name: 'LessonsModules',
  contentType: 'mdx',
  filePathPattern: 'lessonsModules/*.mdx',
  fields: {
    title: { type: 'string', description: 'Module Title', required: true },
    order: { type: 'number', description: 'Order of Module', required: true },
  },
}))

const Pricing = defineDocumentType(() => ({
  name: 'Pricing',
  contentType: 'mdx',
  filePathPattern: 'pricing/*.mdx',
  fields: {
    title: { type: 'string', description: 'Page Title', required: true },
    slug: { type: 'string', description: 'slug', required: true },
  },
}))

export default makeSource({
  documentTypes: [
    Articles,
    CourseYouWill,
    Faqs,
    Legal,
    LessonsModules,
    Pricing,
  ],
  contentDirPath: '../content',
})
