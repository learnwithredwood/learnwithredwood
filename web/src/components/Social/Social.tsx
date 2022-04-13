import Icon from '../Icon/Icon'

const Social = () => {
  return (
    <ul className="social flex gap-16 justify-center items-center list-none m-0 mb-16 p-0">
      {/* youtube */}
      <li>
        <a
          href="http://medium.com"
          target="_blank"
          rel="noreferrer"
          className="text-cafeRoyale hover:text-gossamer"
        >
          <Icon name="youtube" />
        </a>
      </li>

      {/* twitter */}
      <li>
        <a
          href="http://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="text-cafeRoyale hover:text-gossamer"
        >
          <Icon name="twitter" />
        </a>
      </li>

      {/* github */}
      <li>
        <a
          href="http://medium.com"
          target="_blank"
          rel="noreferrer"
          className="text-cafeRoyale hover:text-gossamer"
        >
          <Icon name="github" />
        </a>
      </li>

      {/* medium */}
      <li>
        <a
          href="http://medium.com"
          target="_blank"
          rel="noreferrer"
          className="text-cafeRoyale hover:text-gossamer"
        >
          <Icon name="medium" />
        </a>
      </li>
    </ul>
  )
}

export { Social }
