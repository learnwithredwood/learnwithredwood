interface Props {
  className: string
  height: number
  width: number
}

const Close = ({
  className = '',
  height = 24,
  width = 24,
}: Props): JSX.Element => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.9998 2.41713L21.5827 0L11.9999 9.58279L2.41713 0L0 2.41713L9.58279 11.9999L0 21.5827L2.41713 23.9998L11.9999 14.417L21.5827 23.9998L23.9998 21.5827L14.417 11.9999L23.9998 2.41713Z" />
    </svg>
  )
}

export { Close }
