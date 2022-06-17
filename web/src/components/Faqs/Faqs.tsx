import { Faq } from '../Faq/Faq'

const Faqs = () => {
  return (
    <div className="mx-24 grid grid-cols-12 mb-16">
      <h2 className="section-heading text-center col-span-12 mb-16">
        Frequently Asked Questions
      </h2>
      <hr className="col-span-10 col-start-2" />
      <Faq question="What’s the difference between Redwood and some of the other libraries and frameworks that are out there?">
        <p>Redwood is awesome</p>
      </Faq>

      <Faq question="I have a question, can I email you?">
        <p>
          Of course! The best place to reach me is{' '}
          <a href="mailto:support@learnwithredwood.com">
            support[at]learnwithredwood.com
          </a>
        </p>
      </Faq>
    </div>
  )
}

export { Faqs }
