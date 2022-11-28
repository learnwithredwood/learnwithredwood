import { Form, Label } from '@redwoodjs/forms'
import { useEffect } from 'react'
import kwesforms from 'kwesforms'

const Newsletter = () => {
  useEffect(() => {
    kwesforms.init()
  }, [])

  return (
    <div className="bg-bgNewsletter mx-10 px-11 py-12 mb-24">
      <h3 className="text-center lowercase font-script text-gossamer text-4xl mb-7">
        full course available January 1, 2023
      </h3>
      <h2 className="section-heading tracking-wider text-center mb-5 font-narrow">
        Are you interested?
      </h2>
      <p className="font-body text-center mb-8 font-semibold">
        We’ll keep you updated and send you *bonus content* along the way.
      </p>
      <Form
        className="kwes-form flex flex-wrap gap-x-10 flex-col lg:flex-row"
        action="https://kwesforms.com/api/foreign/forms/AWzEU6s7d8eXsIKToe4h"
      >
        <div className="flex-1">
          <Label name="fullName" className="input" errorClassName="input error">
            Name
          </Label>
          <input type="text" name="fullName" rules="required" />
        </div>

        <div className="flex-1">
          <Label name="email" className="input" errorClassName="input error">
            Email
          </Label>
          <input type="email" name="email" rules="required" />
        </div>

        <div className="flex-1 flex items-end">
          <input type="submit" name="submit" value="Yes, please!" />
        </div>
      </Form>
    </div>
  )
}

export { Newsletter }
