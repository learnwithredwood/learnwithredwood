import type { APIGatewayEvent } from 'aws-lambda'
import { logger } from 'src/lib/logger'
import Airtable from 'airtable'

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
  logger.info('Invoked airtable function')

  let statusCode = 200
  let message = ''

  const formContent = JSON.parse(event.body)

  try {
    const { email, fullName } = formContent

    // make sure the email address is provided
    if (email === undefined) {
      statusCode = 400
      message = `Please specify an email address`
      throw Error(message)
    }

    if (fullName === undefined) {
      statusCode = 400
      message = `Please specify a name`
      throw Error(message)
    }

    // send the email to airtable
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API }).base(
      process.env.AIRTABLE_RW_BASE
    )

    base('Newsletter').create(
      { Email: email, Name: fullName },
      { typecast: true },
      function (err, record) {
        if (err) {
          console.error(err)
          return
        }
        console.log(record.getId())
      }
    )
  } catch (error) {
    return {
      statusCode,
      body: {
        message: error.message,
      },
    }
  }

  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: 'airtable function',
    }),
  }
}
