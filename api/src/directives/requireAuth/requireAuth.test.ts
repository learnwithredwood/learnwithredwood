import { mockRedwoodDirective, getDirectiveName } from '@redwoodjs/testing/api'

import requireAuth from './requireAuth'

const MOCK_USER = {
  id: '0',
  name: 'foobar',
  email:'bazbar'
}

describe('requireAuth directive', () => {
  it('declares the directive sdl as schema, with the correct name', () => {
    expect(requireAuth.schema).toBeTruthy()
    expect(getDirectiveName(requireAuth.schema)).toBe('requireAuth')
  })

  it('requireAuth has stub implementation. Should not throw when current user', () => {
    const mockExecution = mockRedwoodDirective(requireAuth, {
      context: {
        currentUser: MOCK_USER
      }
    })

    expect(mockExecution).not.toThrowError()
  })
})
