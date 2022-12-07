import kwesforms from 'kwesforms'
import { useEffect } from 'react'

const RegisterToday = () => {
  useEffect(() => {
    kwesforms.init()
  })

  return (
    <div className="p-24">
      <h3 className="uppercase font-wide text-5xl">Register Today</h3>
      <form>
        <div className="field">
          <label className="text-white" htmlFor="fullName">
            Full Name
          </label>
          <input type="text" name="fullName" />
        </div>
        <div className="field">
          <label className="text-white" htmlFor="email">
            Email Address
          </label>
          <input type="email" name="email" />
        </div>
        <div className="field">
          <label className="text-white" htmlFor="time">
            What time works best for you?
          </label>
          <input type="checkbox" name="time" value="December 13" /> December 13,
          2022 at 11am PST
          <br />
          <input type="checkbox" name="time" value="December 18" /> December 18,
          2022 at 11am PST
          <br />
        </div>
        <button type="submit" className="button px-16 whitespace-nowrap">
          Register Now!
        </button>
      </form>
    </div>
  )
}

export { RegisterToday }
