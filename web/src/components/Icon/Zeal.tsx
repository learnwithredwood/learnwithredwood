interface Props {
  className: string
  height: number
  width: number
}

const Zeal = ({
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
      <path d="M5.16895 8.57642V17.0771C5.16895 17.0771 16.5826 9.97996 23.4149 9.97996C19.2308 17.0771 12.6898 26.2662 7.1286 40.0633C13.034 38.7127 24.3947 36.5677 34.0076 31.4302V24.3331L21.6141 29.2057C21.6141 29.2057 30.6709 9.13254 32.2068 2.72395C17.43 0.631889 5.16895 7.04048 5.16895 8.57642Z" />
    </svg>
  )
}

export { Zeal }
