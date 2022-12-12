import { MetaTags } from '@redwoodjs/web'
import { PageHeader } from 'src/components/PageHeader'

const MasterclassConfirmPage = () => {
  return (
    <>
      <MetaTags title="Masterclass Confirm" />
      <div>
        <PageHeader
          pageTitle="Thank you for Registering"
          subheading="Two Things"
        />
      </div>

      {/* number 1 */}
      <div className="mb-20 px-5 md:px-0">
        <div className="text-center">
          <div className="uppercase font-wide text-large">number 1</div>
          <div className="heading-with-flourish">check your inbox</div>
          <p className="max-w-[750px] text-left mx-auto text-base md:text-2xl">
            An email is about to hit your inbox (if it hasn’t already). Please
            click on the confirmation link inside. You may need to check your
            spam folder.
          </p>
          <img
            src="/images/inbox.png"
            alt="Gmail Inbox with Email"
            className="mx-auto mb-10"
          />
          <p className="max-w-[750px] text-left mx-auto text-base md:text-2xl">
            Once you do that, we’ll send a follow-up email that includes
            everything you need to know.
          </p>
        </div>
      </div>

      {/* number 2 */}
      <div className="mb-40 px-5 md:px-0">
        <div className="text-center">
          <div className="uppercase font-wide text-large">number 2</div>
          <div className="heading-with-flourish">update your address book</div>
          <p className="max-w-[750px] text-left mx-auto text-base md:text-2xl">
            Add <strong>marketing@codingzeal.com</strong> to your contact list.
          </p>
          <p className="max-w-[750px] text-left mx-auto text-base md:text-lg">
            This step is important (especially if you use Gmail) and want our
            emails to end up in the right place.
          </p>
          {/* video */}
          <video
            className="mx-auto relative"
            width="563"
            height="358"
            muted
            autoPlay
            loop
            poster="/video/add-to-contacts.png"
          >
            <source src="/video/add-to-contacts.mp4" type="video/mp4" />
            <source src="/video/add-to-contacts.mkv" type="video/mkv" />
          </video>
        </div>
      </div>
    </>
  )
}

export default MasterclassConfirmPage
