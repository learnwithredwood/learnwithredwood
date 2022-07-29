import { logger } from 'src/lib/logger'
import * as allArticles from '../../../.contentlayer/generated/Article/_index.json'
import * as allFaqs from '../../../.contentlayer/generated/Faq/_index.json'
import type { APIGatewayEvent, Context } from 'aws-lambda'
import type { Article, Faq } from '../../../.contentlayer/generated/types'

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

interface IMDXResponse {
  statusCode: number
  headers: Record<string, unknown>
  data: string | Faq[] | Article[]
}

function _handleResponse(payload = {}): IMDXResponse {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    data: '',
    ...payload
  }
}

export const handler = async (event: APIGatewayEvent, context?: Context) => {
  try {
    logger.info('Invoked mdx function')

    const dataType = event.path.replace('/mdx', '')

    if (!dataType || dataType === undefined) {
      return _handleResponse({ statusCode: 400, data: 'Please specify a content type' })
    } else if (dataType === '/faqs') {
      return _handleResponse({ data: JSON.stringify(allFaqs) })
    } else if (dataType === '/articles') {
      return _handleResponse({ data: JSON.stringify(allArticles) })
    } else {
      return _handleResponse()
    }
  } catch (err) {
    console.error(err.message)
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json'
      },
      data: 'Internal Error'
    }
  }
}
