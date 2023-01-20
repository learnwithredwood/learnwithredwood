import kwesforms from 'kwesforms'
import { useEffect } from 'react'

const RegisterToday = () => {
  useEffect(() => {
    kwesforms.init()
  })

  return (
    <div
      className="px-5 py-12 md:p-24 bg-registerToday bg-cover"
      id="register-today"
    >
      <h3 className="uppercase font-wide text-5xl mb-12">Register Today</h3>
      <form
        className="kwes-form"
        action="https://kwesforms.com/api/foreign/forms/iVJNIeAAItDLkCkwf8rV"
        redirect="/fast-track-confirm"
      >
        <div className="field">
          <label className="text-white" htmlFor="fullName">
            Full Name
          </label>
          <input type="text" name="fullName" rules="required" required />
        </div>
        <div className="field mb-10">
          <label className="text-white" htmlFor="email">
            Email Address
          </label>
          <input type="email" name="email" rules="required" required />
        </div>
        <button type="submit" className="button px-16 whitespace-nowrap">
          Register Now!
        </button>
      </form>
    </div>
  )
}

export { RegisterToday }
