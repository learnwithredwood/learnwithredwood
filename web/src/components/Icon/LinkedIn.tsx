interface Props {
  className: string
  height: number
  width: number
}

const LinkedIn = ({
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
      <path d="M12.2 8.4C12.2 10.3 10.8 11.8 8.5 11.8C6.4 11.8 5 10.3 5 8.4C5 6.5 6.4 5 8.6 5C10.9 5 12.2 6.5 12.2 8.4ZM5.2 36.6V14.6H12V36.6H5.2ZM16.1 21.6C16.1 18.9 16 16.6 15.9 14.6H21.8L22.1 17.7H22.2C23.1 16.3 25.3 14.1 29 14.1C33.5 14.1 36.9 17.1 36.9 23.6V36.6H30.1V24.4C30.1 21.6 29.1 19.6 26.6 19.6C24.7 19.6 23.6 20.9 23.1 22.2C23 22.6 23 23.2 23 23.9V36.6H16.2V21.6H16.1Z" />
    </svg>
  )
}

export { LinkedIn }
