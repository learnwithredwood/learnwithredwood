import type { APIGatewayEvent, Context } from 'aws-lambda'
import { logger } from 'src/lib/logger'
import * as allFaqs from '../../../.contentlayer/generated/Faq/_index.json'
import * as allArticles from '../../../.contentlayer/generated/Article/_index.json'
import * as allCourseYouWill from '../../../.contentlayer/generated/CourseYouWill/_index.json'
import * as allLegal from '../../../.contentlayer/generated/Legal/_index.json'
import * as allLessonsModules from '../../../.contentlayer/generated/LessonsModules/_index.json'
import * as allPricing from '../../../.contentlayer/generated/Pricing/_index.json'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event: APIGatewayEvent, context: Context) => {
  logger.info('Invoked mdx function')

  if (event.path.includes('faqs')) {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        data: allFaqs,
      },
    }
  }
  if (event.path.includes('articles')) {
    console.log(allArticles)
    const publishedArticles = allArticles.filter((article) => article.published)
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        data: publishedArticles,
      },
    }
  }
  if (event.path.includes('course-you-will')) {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        data: allCourseYouWill,
      },
    }
  }
  if (event.path.includes('legal')) {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        data: allLegal,
      },
    }
  }
  if (event.path.includes('lessons-modules')) {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        data: allLessonsModules,
      },
    }
  }
  if (event.path.includes('pricing')) {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        data: allPricing,
      },
    }
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: 'mdx function',
    }),
  }
}
