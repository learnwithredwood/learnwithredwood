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

      <Faq question="Ahh!! Help!! I lost my welcome email!">
        <p>
          No worries, it happens! Please email support{' '}
          <a href="mailto:support@learnwithredwood.com">
            support[at]learnwithredwood.com
          </a>
        </p>
      </Faq>

      <Faq question="Will I be able to redistribute these and charge money for them?">
        <p>Umm...no.</p>
        <p>
          Do not take what we've created and resell it. That's called stealing.
        </p>
      </Faq>

      <Faq question="I found a typo or a bug.">
        <p>
          Yikes! Please let us know at{' '}
          <a href="mailto:support@learnwithredwood.com">
            support[at]learnwithredwood.com
          </a>
        </p>
      </Faq>

      <Faq question="Can I put the code on GitHub? Can I include within my portfolio? Can I blog about this?">
        <p>Redwood is awesome</p>
      </Faq>

      <Faq question="What tools do you use?">
        <p>Redwood is awesome</p>
      </Faq>

      <Faq question="What other courses and challenges do you have?">
        <>
          <p>Thanks for asking!</p>
          <ul>
            <li>
              <a href="#">Advent of CSS</a>
            </li>
            <li>
              <a href="#">Advent of JavaScript</a>
            </li>
            <li>
              <a href="#">Everything Svelte</a>
            </li>
          </ul>
          <p>
            I also have a few other irons in the fire. Feel free to visit those
            landing pages and express your interest. -- That helps me gauge
            interest.
          </p>
          <ul>
            <li>
              <a href="">100 Days of Code</a>
            </li>
          </ul>
          <p>You can also find me elsewhere online:</p>
          <ul>
            <li>
              <a href="">Compressed.fm</a>
            </li>
            <li>
              <a href="">SelfTeach.me</a>
            </li>
            <li>
              <a href="">YouTube</a>
            </li>
            <li>
              <a href="">Twitch</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
          </ul>
        </>
      </Faq>

      <Faq question="What format are the tutorials in?">
        <p>
          As soon as we receive your payment, we'll send you an email with
          information on how to set up a login to Podia (subject to change).
          This is where we're hosting all of our course content.
        </p>
      </Faq>

      <Faq question="What if I hate this?">
        <p>
          We certainly hope that's not the case, but if you do, reach out to us
          at{' '}
          <a href="mailto:support@learnwithredwood.com">
            support[at]learnwithredwood.com
          </a>{' '}
          and we'll be happy to give you a full refund.
        </p>
      </Faq>

      <Faq question="Do you offer a student discount?">
        <p>
          Sure do! Reach out to us{' '}
          <a href="mailto:support@learnwithredwood.com">
            support[at]learnwithredwood.com
          </a>{' '}
          and we'll send you a coupon code.
        </p>
      </Faq>
    </div>
  )
}

export { Faqs }
