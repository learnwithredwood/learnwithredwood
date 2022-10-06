import { Faq } from '../Faq/Faq'
import { useGetData } from '../../hooks/useGetData'

const Faqs = () => {
  const url = `/.redwood/functions/mdxFaqs`
  const data = useGetData(url)

  return (
    <div className="mx-6 lg:mx-24 grid grid-cols-12 mb-16">
      <h2 className="section-heading text-center col-span-12 mb-4">
        Frequently Asked Questions
      </h2>
      <hr className="col-span-10 col-start-2" />
      {data?.map((item, index) => {
        return (
          <Faq key={index} question={item.question} answer={item.body.code} />
        )
      })}
    </div>
  )
}

export { Faqs }
