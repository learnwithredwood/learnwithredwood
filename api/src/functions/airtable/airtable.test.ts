import { handler } from './airtable'
import { mockHttpEvent } from '@redwoodjs/testing/api'
import Airtable from 'airtable'

jest.mock('airtable')

describe('airtable function', () => {
  it('Should respond with 200', async () => {
    const httpEvent = mockHttpEvent({
      httpMethod: 'POST',
      payload: { email: 'foo', fullName: 'bar' },
    })
    const response = await handler(httpEvent)
    expect(response.statusCode).toBe(200)
    expect(Airtable).toHaveBeenCalledTimes(1)
  })

  it('Should respond with 400', async () => {
    const httpEvent = mockHttpEvent({
      httpMethod: 'POST',
      payload: {},
    })
    const response = await handler(httpEvent)
    expect(response.statusCode).toBe(400)
    expect(Airtable).toHaveBeenCalledTimes(1)
  })

  it('Needs an email address', async () => {
    const httpEvent = mockHttpEvent({
      httpMethod: 'POST',
      payload: { fullName: 'bar' },
    })
    const response = await handler(httpEvent)
    expect(response.statusCode).toBe(400)
    expect(Airtable).toHaveBeenCalledTimes(1)
  })

  it('Needs the full name address', async () => {
    const httpEvent = mockHttpEvent({
      httpMethod: 'POST',
      payload: { email: 'foo' },
    })
    const response = await handler(httpEvent)
    expect(response.statusCode).toBe(400)
    expect(Airtable).toHaveBeenCalledTimes(1)
  })
})
