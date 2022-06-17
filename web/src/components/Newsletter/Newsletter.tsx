import { Form, Label, TextField, useForm } from '@redwoodjs/forms'
import { useState } from 'react'

const Newsletter = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const formMethods = useForm()

  const onSubmit = (data) => {
    // Reference: https://www.smashingmagazine.com/2018/05/building-serverless-contact-form-static-website/
    const form = document.querySelector('form')

    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action, true)
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8')
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')

    // Send the collected data as JSON
    xhr.send(JSON.stringify(data))

    // Callback function
    xhr.onloadend = (response) => {
      // The form submission was successful
      if (response.target.status === 200) {
        formMethods.reset() // reset the form fields
        setSuccess('Thanks for the message. I’ll be in touch shortly.')
      } // The form submission failed
      else {
        setError('Something went wrong')
        console.error(JSON.parse(response.target.response).message)
      }
    }
  }

  return (
    <div className="bg-bgNewsletter mx-10 px-11 py-12 mb-24">
      <h3 className="text-center lowercase font-script text-gossamer text-4xl mb-7">
        launching fall of 2022
      </h3>
      <h2 className="section-heading tracking-wider text-center mb-5 font-sans">
        Are you interested?
      </h2>
      <p className="font-body text-center mb-20">
        We’ll keep you updated and send you *bonus content* along the way.
      </p>

      {error && (
        <div className="bg-melon p-5 border-2 border-cabSav text-center font-sans">
          {error}
        </div>
      )}
      {success ? (
        <div className="bg-sulu border-2 border-sheenGreen p-5 text-center">
          {success}
        </div>
      ) : (
        <Form
          formMethods={formMethods}
          onSubmit={onSubmit}
          method="POST"
          action="/.redwood/functions/airtable"
          className="flex gap-10 flex-col lg:flex-row"
        >
          <div className="flex-1">
            <Label
              name="fullName"
              className="input"
              errorClassName="input error"
            >
              Name
            </Label>
            <TextField name="fullName" />
          </div>

          <div className="flex-1">
            <Label name="email" className="input" errorClassName="input error">
              Email
            </Label>
            <TextField name="email" />
          </div>

          <div className="flex-1 flex items-end">
            <input type="submit" name="submit" value="keep me posted" />
          </div>
        </Form>
      )}
    </div>
  )
}

export { Newsletter }
