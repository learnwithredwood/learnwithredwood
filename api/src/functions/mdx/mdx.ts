import type { APIGatewayEvent } from 'aws-lambda'
import { logger } from 'src/lib/logger'
import type { Article, Faq } from '../../../.contentlayer/generated/types'
import * as allFaqs from '../../../.contentlayer/generated/Faq/_index.json'
import * as allArticles from '../../../.contentlayer/generated/Article/_index.json'

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
export const handler = async (event: APIGatewayEvent) => {
  logger.info('Invoked mdx function')

  let statusCode = 200
  let data: string | Faq[] | Article[] = ''

  const dataType = event.path.replace('/mdx', '')
  console.log({ dataType })

  if (!dataType || dataType === undefined) {
    statusCode = 400
    data = `Please specify a content type`
  } else if (dataType === '/faqs') {
    data = allFaqs
  } else if (dataType === '/articles') {
    data = allArticles
  }

  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data,
    }),
  }
}
