import {
  EmailField,
  Form,
  Label,
  SelectField,
  TextField,
  useForm,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import { AutoGrowTextarea } from 'src/components/Form/AutoGrowTextarea/AutoGrowTextarea'

const ContactPage = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const formMethods = useForm()

  const onSubmit = (data) => {
    const form = document.querySelector('form')

    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action, true)
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8')
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')

    // Send the collected data as JSON
    xhr.send(JSON.stringify(data))

    // Callback function
    xhr.onloadend = (response) => {
      const target = response.target as XMLHttpRequest

      // The form submission was successful
      if (target.status === 200) {
        formMethods.reset() // reset the form fields
        // TODO: Should this confirmation message be moved to a separate page?
        // TODO: Swap out thank you copy
        setSuccess(
          'Thanks for expressing your interest! Please check your email. We need to confirm your address.'
        )
      } // The form submission failed
      else {
        setError('Whoops! Something went wrong')
        console.error(JSON.parse(target.response).message)
      }
    }
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <h1 className="section-heading text-zeus text-center mb-14">
        Contact Us
      </h1>
      {error && <div className="error-box">{error}</div>}

      {success ? (
        <div className="success-box">{success}</div>
      ) : (
        <Form
          formMethods={formMethods}
          onSubmit={onSubmit}
          method="POST"
          action="/.redwood/functions/contact"
          className="flex gap-10 flex-col"
        >
          {/* full name */}
          <div className="field">
            <Label name="name" className="input" errorClassName="input error">
              Full Name
            </Label>
            <TextField name="name" />
          </div>

          {/* email */}
          <div className="field">
            <Label name="email" className="input" errorClassName="input error">
              Email Address
            </Label>
            <EmailField name="name" />
          </div>

          {/* subject */}
          <div className="field">
            <Label
              name="subject"
              className="input"
              errorClassName="input error"
            >
              Subject
            </Label>
            <SelectField name="subject">
              <option value="hello">Just Saying Hello</option>
              <option value="support">I have a support question</option>
              <option value="feedback">I have some feedback</option>
            </SelectField>
          </div>

          {/* message */}
          <div className="field">
            <Label name="email" className="input" errorClassName="input error">
              Message
            </Label>
            <AutoGrowTextarea />
          </div>

          {/* button */}
          <input type="submit" name="submit" value="Send" />
        </Form>
      )}
    </>
  )
}

export default ContactPage
