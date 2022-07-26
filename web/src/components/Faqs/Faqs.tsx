import { useEffect, useState } from 'react'
import { Faq } from '../Faq/Faq'
import type { Faq as TFaq } from '@contentlayer/types'

const Faqs = () => {
  const [data, setData] = useState<TFaq[]>()

  const getData = async () => {
    const url = `/.redwood/functions/mdxFaqs`
    const response = await fetch(url)
    const faqs = await response.json()
    setData(faqs.data.default)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="mx-6 lg:mx-24 grid grid-cols-12 mb-16">
      <h2 className="section-heading text-center col-span-12 mb-16">
        Frequently Asked Questions
      </h2>
      <hr className="col-span-10 col-start-2" />
      {data &&
        data.map((item, index) => {
          console.log(item)
          return (
            <Faq key={index} question={item.question} answer={item.body.code} />
          )
        })}
    </div>
  )
}

export { Faqs }
