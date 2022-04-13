import { useState } from 'react'
import { motion } from 'framer-motion'

const Faq = ({ children, question }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const ToggleFaq = () => {
    setIsExpanded((prevValue) => !prevValue)
  }

  // handles the motion transition / duration / easing
  const transition = {
    duration: 0.5,
    ease: [0.04, 0.62, 0.23, 0.98],
  }

  // Framer Motion -- Answer Variants
  const AnswerVariants = {
    open: { opacity: 1, height: 'auto', pointerEvents: 'auto' },
    closed: { opacity: 0, height: 0, pointerEvents: 'none' },
  }

  return (
    <div className="grid grid-cols-12 pt-12 col-span-12 gap-5">
      <div className="col-span-1 text-right font-condensedAlt uppercase text-8xl text-marigold leading-none -mt-3 pr-4">
        Q
      </div>

      {/* question */}
      <div className="col-span-8 items-end flex">
        <p className="large-body mt-auto">{question}</p>
      </div>

      <div className="col-span-2 text-right flex items-center">
        <button
          onClick={ToggleFaq}
          className="font-wide uppercase text-base text-rustyNail bg-bone h-7 px-3 hover:bg-marigold hover:text-white rounded-sm"
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </div>

      {/* answer */}
      <motion.div
        className="col-span-10 col-start-2"
        animate={isExpanded ? 'open' : 'closed'}
        transition={transition}
        variants={AnswerVariants}
      >
        <div className="pb-4">{children}</div>
      </motion.div>

      <hr className="col-span-10 col-start-2" />
    </div>
  )
}

export { Faq }
