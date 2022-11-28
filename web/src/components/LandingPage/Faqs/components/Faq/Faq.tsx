import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useMDXComponent } from 'src/hooks/useMDXComponent'

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
    <div className="grid grid-cols-12 pt-12 col-span-12 gap-x-5">
      {/* Q - Star Trek Style (joke) */}
      <div className="col-span-2 md:col-span-1 font-condensedAlt uppercase text-8xl text-marigold leading-none relative pointer-events-none">
        <span className="absolute w-full text-center -top-8">Q</span>
      </div>

      {/* question */}
      <div className="col-span-9 col-start-3 md:col-span-8 items-center flex pb-2">
        <p
          data-testid="faq_q-toggle"
          className="large-body cursor-pointer hover:text-sinopia !pt-0 !my-0"
          onClick={handleToggle}
        >
          {question}
        </p>
      </div>

      {/* expand / collapse button */}
      <div className="col-span-9 col-start-3 md:col-span-2 md-start-10 flex items-center justify-end">
        <button
          data-testid="faq_q-collapse-toggle"
          onClick={handleToggle}
          className="font-wide uppercase text-xs md:text-base text-rustyNail bg-bone h-7 px-3 hover:bg-marigold hover:text-white rounded-sm"
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </div>

      {/* answer */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="col-span-10 col-start-2"
            animate={isExpanded ? 'open' : 'closed'}
            initial="closed"
            exit="closed"
            transition={transition}
            variants={answerVariants}
          >
            <div className="text-xl font-medium pt-6 -mb-6">
              <Component />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <hr className="col-span-10 col-start-2 mt-12" />
    </div>
  )
}

export { Faq }
