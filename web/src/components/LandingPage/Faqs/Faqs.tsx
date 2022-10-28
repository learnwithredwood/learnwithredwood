import { Faq } from './components/Faq'
import data from '../../../.contentlayer/generated/Faq/_index.json'

const Faqs = () => {
  return (
    <div className="mx-6 lg:mx-24 grid grid-cols-12 mb-16">
      <h2 className="section-heading text-center col-span-12 mb-4">
        Frequently Asked Questions
      </h2>
      <hr className="col-span-10 col-start-2" />
      {data?.map((item, index: number) => {
        return (
          <Faq key={index} question={item.question} answer={item.body.code} />
        )
      })}
    </div>
  )
}

export { Faqs }
