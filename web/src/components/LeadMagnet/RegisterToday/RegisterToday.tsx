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
        action="https://kwesforms.com/api/foreign/forms/RFJrstosCLJGhJhJwS0T"
      >
        <div className="field">
          <label className="text-white" htmlFor="fullName">
            Full Name
          </label>
          <input type="text" name="fullName" rules="required" required />
        </div>
        <div className="field">
          <label className="text-white" htmlFor="email">
            Email Address
          </label>
          <input type="email" name="email" rules="required" required />
        </div>
        <div className="field">
          <div className="label text-white mb-3">
            What time works best for you?
          </div>
          <fieldset data-kw-group>
            <div className="label mb-3 text-white">
              <input
                type="checkbox"
                name="time"
                value="December 13"
                id="time-december-13"
              />{' '}
              <label htmlFor="time-december-13" className="text-white mb-3">
                December 13, 2022 at 11am PST
              </label>
            </div>
            <div className="label text-white">
              <input
                type="checkbox"
                name="time"
                value="December 18"
                id="time-december-18"
              />{' '}
              <label htmlFor="time-december-18" className="text-white">
                December 18, 2022 at 11am PST
              </label>
            </div>
          </fieldset>
        </div>
        <button type="submit" className="button px-16 whitespace-nowrap">
          Register Now!
        </button>
      </form>
    </div>
  )
}

export { RegisterToday }
