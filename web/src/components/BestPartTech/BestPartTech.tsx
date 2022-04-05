const BestPartTech = ({
  children,
  icon,
  icon2x,
  tech,
  label = '',
  link = '',
}) => {
  return (
    <div>
      {/* icon */}
      <div className="bg-treeStump bg-no-repeat bg-center p-2 bg-100% w-36 h-36 box-content mx-auto -mb-20 z-10 relative">
        <div className="bg-white w-36 h-36 flex justify-center items-center rounded-full">
          <img
            src={icon}
            srcSet={`${icon2x} 2x, ${icon} 1x`}
            alt={tech}
            className="w-24 h-24 object-contain"
          />
        </div>
      </div>

      <div className="text-center bg-starkWhite rounded-md pt-24 pb-8 px-10 relative z-0 mb-12">
        <h3 className="font-body font-bold text-gossamer tracking-wider text-xl uppercase mb-5">
          {tech}
        </h3>

        <p className="font-body mb-10">{children}</p>

        {label ? (
          <a href={link} className="button">
            {label}
          </a>
        ) : (
          <div className="font-wide uppercase text-halfSpanishWhite bg-vanilla px-4 h-16 rounded-md flex items-center justify-center w-full">
            Coming Soon
          </div>
        )}
      </div>
    </div>
  )
}

export { BestPartTech }
