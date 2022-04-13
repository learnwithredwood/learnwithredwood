import { getYear } from 'date-fns'
import { Link, routes } from '@redwoodjs/router'
import { Social } from '../Social/Social'

const getCurrentYear = () => {
  return getYear(new Date(Date.now())).toString()
}

const Footer = () => {
  return (
    <footer className="pb-20 uppercase font-body font-bold text-cafeRoyale text-lg tracking-wider text-center">
      <Social />
      <Link to={routes.privacyPolicy()}>privacy policy</Link>
      &nbsp;&nbsp;.&nbsp;&nbsp;
      <Link to={routes.termsAndConditions()}>terms &amp; conditions</Link>
      &nbsp;&nbsp;.&nbsp;&nbsp; Copyright &copy; {getCurrentYear()}.{' '}
      <a href="http://ahhacreative.com" target="_blank" rel="noreferrer">
        Ah Ha Creative, LLC
      </a>
      . All Rights Reserved.
    </footer>
  )
}

export { Footer, getCurrentYear }
