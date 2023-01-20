import { render } from '@redwoodjs/testing/web'

import { SharingIsCaring } from './SharingIsCaring'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SharingIsCaring', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <SharingIsCaring
          introCopy={''}
          shareLink={''}
          emailBody={''}
          emailSubject={''}
          linkedInTitle={''}
          linkedInSummary={''}
          whatsAppContent={''}
        />
      )
    }).not.toThrow()
  })
})
