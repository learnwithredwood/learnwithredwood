import { getYear } from 'date-fns'
import { Link, routes } from '@redwoodjs/router'
import { Social } from '../Social/Social'

const getCurrentYear = () => {
  return getYear(new Date(Date.now())).toString()
}

const Footer = () => {
  return (
    <footer className="pb-20 uppercase font-body font-bold text-cafeRoyale text-lg tracking-wider text-center mx-6">
      <Social />
      <div className="block md:inline">
        <Link to={routes.privacyPolicy()}>privacy policy</Link>
      </div>
      <div className="hidden md:inline">&nbsp;&nbsp;.&nbsp;&nbsp;</div>
      <div className="block md:inline mb-6">
        <Link to={routes.termsAndConditions()}>terms &amp; conditions</Link>
      </div>
      <div className="hidden lg:inline">&nbsp;&nbsp;.&nbsp;&nbsp;</div>
      <div className="block lg:inline">
        Copyright &copy; {getCurrentYear()}.{' '}
      </div>
      <div className="block md:inline">
        <a href="http://ahhacreative.com" target="_blank" rel="noreferrer">
          Ah Ha Creative, LLC
        </a>
        .{' '}
      </div>
      <div className="block md:inline">All Rights Reserved.</div>
    </footer>
  )
}

export { Footer, getCurrentYear }
