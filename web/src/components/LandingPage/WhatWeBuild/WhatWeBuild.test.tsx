import { render } from '@redwoodjs/testing/web'

import { WhatWeBuild } from './WhatWeBuild'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WhatWeBuild', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WhatWeBuild />)
    }).not.toThrow()
  })
})
