import { Faq } from '../Faq/Faq'
import Content, { question, order } from '../../content/faqs/01__question.mdx'

const Faqs = () => {
  console.log(Content)
  console.log(question)
  console.log(order)

  return (
    <div className="mx-6 lg:mx-24 grid grid-cols-12 mb-16">
      <h2 className="section-heading text-center col-span-12 mb-16">
        Frequently Asked Questions
      </h2>
      <hr className="col-span-10 col-start-2" />
      <Faq question="What’s the difference between Redwood and some of the other libraries and frameworks that are out there?">
        <Content />
      </Faq>
      {/*
      <Faq question="Do these lessons expire? Is there a monthly cost?">
        <div>
          <p>
            The lessons never expire. You have lifetime access. As long as the
            product is alive, you can access the course.
          </p>
          <p>There is no monthly cost. Just a one-time cost.</p>
        </div>
      </Faq>

      <Faq question="Do you provide a certificate of completion?">
        <p>
          Yes. When you finish the course, you’ll receive a certificate of
          completion through Podia.
        </p>
      </Faq>

      <Faq question="What font / color scheme / editor / terminal is that?">
        <div>
          <p>
            I use the font{' '}
            <a
              href="https://philpl.gumroad.com/l/dank-mono"
              target="_blank"
              rel="noreferrer"
            >
              Dank Mono
            </a>
            . It costs ~$24 USD. But, I like it because it has ligatures
            specific for coding. If you’re looking for something free,{' '}
            <a
              href="https://github.com/tonsky/FiraCode"
              target="_blank"
              rel="noreferrer"
            >
              Fira Code
            </a>{' '}
            is a great alternative, with a lot of the same features.
          </p>
          <p>
            I’m using{' '}
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              VS Code
            </a>{' '}
            with the{' '}
            <a
              href="https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2"
              target="_blank"
              rel="noreferrer"
            >
              Cobalt 2 Theme
            </a>
            .
          </p>
          <p>
            In general, I like to use the Terminal that’s built into VS Code.
            But, if I need to reach for something else, I use{' '}
            <a href="https://hyper.is/" target="_blank" rel="noreferrer">
              Hyper
            </a>{' '}
            with{' '}
            <a href="https://ohmyz.sh/" target="_blank" rel="noreferrer">
              Oh My Zsh
            </a>{' '}
            and the{' '}
            <a
              href="https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/robbyrussell.zsh-theme"
              target="_blank"
              rel="noreferrer"
            >
              Robby Russell
            </a>{' '}
            theme.
          </p>
        </div>
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
          No worries, it happens! Please email support at{' '}
          <a href="mailto:support@learnwithredwood.com">
            support[at]learnwithredwood.com
          </a>
          .
        </p>
      </Faq>

      <Faq question="Will I be able to redistribute these and charge money for them?">
        <p>
          Umm...no. Do not take what we've created and resell it. That's called
          stealing.
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
        <>
          <p>
            Feel free to put{' '}
            <strong>
              <em>your</em>
            </strong>{' '}
            code on GitHub. But, please do not put{' '}
            <strong>
              <em>our</em>
            </strong>{' '}
            code on GitHub.
          </p>
          <p>
            If you want to put this within your portfolio, please extend the
            core functionality that we’ve taught within the course. If you
            bought the Starter package, consider upgrading to the Complete
            package, that includes a Figma file of ideas and designs for
            applying your new found knowledge and extending the application,
            beyond what we build together in the application.
          </p>
          <p>
            Always be honest about the work{' '}
            <strong>
              <em>you</em>
            </strong>{' '}
            did and the contributions{' '}
            <strong>
              <em>you</em>
            </strong>
            made.
          </p>
        </>
      </Faq>

      <Faq question="Can I stream these or arrange a viewing party?">
        <p>
          Sure. But, we also ask that you consider purchasing a bulk license.
          Details for bulk pricing.
        </p>
      </Faq>

      <Faq question="What tools do you use?">
        <>
          <p>I work off a shiny 16" Mac Book Pro. 😍</p>
          <p>
            For design, I use{' '}
            <a href="http://figma.com" target="_blank" rel="noreferrer">
              Figma.
            </a>
          </p>
          <p>
            For development, I use{' '}
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              VS Code
            </a>
            . I also like{' '}
            <a href="https://hyper.is/" target="_blank" rel="noreferrer">
              Hyper
            </a>{' '}
            and{' '}
            <a
              href="https://www.git-tower.com/mac"
              target="_blank"
              rel="noreferrer"
            >
              Tower
            </a>
            .
          </p>
        </>
      </Faq>

      <Faq question="What other courses and challenges do you have?">
        <div>
          <p>
            Thanks for asking!
            <ul>
              <li>
                <a
                  href="https://adventofcss.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Advent of CSS
                </a>
              </li>
              <li>
                <a
                  href="https://adventofjs.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Advent of JavaScript
                </a>
              </li>
              <li>
                <a
                  href="https://everythingsvelte.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Everything Svelte
                </a>
              </li>
            </ul>
            <p>
              You can also find me elsewhere online:
              <ul>
                <li>
                  <a
                    href="https://compressed.fm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Compressed.fm
                  </a>
                </li>
                <li>
                  <a
                    href="https://selfteach.me"
                    target="_blank"
                    rel="noreferrer"
                  >
                    SelfTeach.me
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/c/selfteachme"
                    target="_blank"
                    rel="noreferrer"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitch.com/selfteachme"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitch
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/selfteachme"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </p>
          </p>
        </div>
      </Faq>

      <Faq question="What format are the tutorials in?">
        <>
          <p>
            You'll receive a login to Podia. This is where we're hosting all of
            our course content.
          </p>
          <p>
            Each lesson includes a video (including closed captioning) and its
            script or video transcription.
          </p>
          <p>
            You'll also receive a Figma File with all the design elements,
            starter files, style guide, and stepped coded solution. We may throw
            in a couple of bonuses, here or there. 😉
          </p>
        </>
      </Faq>

      <Faq question="What if I hate this?">
        <p>
          We certainly hope that’s not the case, but if you do, reach out to us
          at{' '}
          <a href="mailto:support@learnwithredwood.com">
            support[at]learnwithredwood.com
          </a>{' '}
          and we’ll be happy to give you a full refund.
        </p>
      </Faq>

      <Faq question="Do you offer a student discount?">
        <p>
          Sure do! Reach out to us{' '}
          <a href="mailto:support@learnwithredwood.com">
            support[at]learnwithredwood.com
          </a>{' '}
          and we’ll send you a coupon code.
        </p>
      </Faq>

      <Faq question="Can you send me an invoice?">
        <p>
          We use <a href="http://gumroad.com">Gumroad</a> to handle all of our
          payments.{' '}
          <a
            href="https://customers.gumroad.com/receipts-and-refunds/i-need-an-invoice"
            target="_blank"
            rel="noreferrer"
          >
            Here's a link to their documentation explaining how to generate an
            invoice.
          </a>
        </p>
      </Faq> */}
    </div>
  )
}

export { Faqs }
