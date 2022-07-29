import { mockHttpEvent } from '@redwoodjs/testing/api'
import { handler } from './mdx'

describe('mdx function', () => {
  it('Should respond with 200', async () => {
    const httpEvent = mockHttpEvent({
      path: '/foobar'
    })
    const response = await handler(httpEvent)
    expect(response.statusCode).toBe(200)
  })
  it('should return 400 when no dataType match', async () => {
    const httpEvent = mockHttpEvent({ path: '/mdx' })
    const response = await handler(httpEvent)
    expect(response.statusCode).toBe(400)
    expect(response.data).toBe('Please specify a content type')
  })
})
