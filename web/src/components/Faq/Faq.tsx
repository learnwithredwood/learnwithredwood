import { useState } from 'react'
import { motion, MotionProps } from 'framer-motion'
import { useMDXComponent } from '../../hooks/useMDXComponent'

interface IFaqProps {
  answer: string
  question: string
}

const Faq = ({ answer, question }: IFaqProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded((prevValue) => !prevValue)
  }

  // handles the motion transition / duration / easing
  const transition = {
    duration: 0.5,
    ease: [0.04, 0.62, 0.23, 0.98],
  }

  // Framer Motion -- Answer Variants
  // motion does not support 'pointerEvents'
  const answerVariants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 },
  }

  const Component = useMDXComponent(answer)

  return (
    <div className="grid grid-cols-12 pt-12 col-span-12 gap-5">
      <div className="col-span-2 md:col-span-1 text-right font-condensedAlt uppercase text-8xl text-marigold leading-none -mt-3 pr-4">
        Q
      </div>

      {/* question */}
      <div className="col-span-10 md:col-span-8 items-end flex">
        <p
          data-testid="faq_q-toggle"
          className="large-body mt-auto cursor-pointer hover:text-sinopia"
          onClick={handleToggle}
        >
          {question}
        </p>
      </div>

      <div className="col-span-9 col-start-3 md:col-span-2 md-start-10 text-right flex items-center">
        <button
          data-testid="faq_q-collapse-toggle"
          onClick={handleToggle}
          className="font-wide uppercase text-base text-rustyNail bg-bone h-7 px-3 hover:bg-marigold hover:text-white rounded-sm"
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </div>

      {/* answer */}
      <motion.div
        className="col-span-10 col-start-2"
        animate={isExpanded ? 'open' : 'closed'}
        initial="closed"
        transition={transition}
        variants={answerVariants}
      >
        <div className="pb-4 text-xl font-medium">
          <Component />
        </div>
      </motion.div>

      <hr className="col-span-10 col-start-2" />
    </div>
  )
}

export { Faq }
