const Footer = () => {
  const currentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <div className="mb-20 uppercase font-body font-bold text-cafeRoyale text-lg tracking-wider text-center">
      privacy policy . terms &amp; conditions . Copyright &copy; {currentYear}.{' '}
      <a
        href="http://ahhacreative.com"
        target="_blank"
        rel="noreferrer"
        className="footer-link"
      >
        Ah Ha Creative, LLC
      </a>
      . All Rights Reserved.
    </div>
  )
}

export { Footer }
