interface Props {
  className: string
  height: number
  width: number
}

const Facebook = ({
  className = '',
  height = 42,
  width = 42,
}: Props): JSX.Element => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.7 22.7V37H23.7V22.8H28.5L29.7 16.9H23.8C23.8 16.9 23.8 14.1 23.8 12.5C23.7 11.9 24 11 25 11C26.5 11 28.4 11 28.4 11V5C28.4 5 25.4 5 22.1 5C19.9 5 16.7 7.7 16.7 10.5C16.7 13.4 16.7 16.6 16.7 16.6H13V22.6L16.7 22.7Z" />
    </svg>
  )
}

export { Facebook }
