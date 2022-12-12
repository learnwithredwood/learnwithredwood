import { MetaTags } from '@redwoodjs/web'
import { PageHeader } from 'src/components/PageHeader'
import {
  Twitter,
  Email,
  Facebook,
  WhatsApp,
  LinkedIn,
} from 'src/components/SocialShare'

const MasterclassThanksPage = () => {
  const SHARE_LINK = 'https://www.learntocodewith.me/masterclass'
  const BODY = `The best thing to do in a volatile, fluid economy and hiring environment is to make sure you stand out as a technologist and a potential candidate. Check out this FREE Masterclass on Future Proofing Your Career: ${SHARE_LINK}`
  const SUBJECT = 'FREE Masterclass Series on Future Proofing Your Career'
  const GOOGLE_CAL_LINK =
    'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=N212MXI3Z2NuMTgybGc2M2lrY3BkM2czZDEgYW15LmhheXdvb2RAY3VwcHl5YXJyaXNoLmNvbQ&tmsrc=amy.haywood%40cuppyyarrish.com'
  const OUTLOOK_LINK = `https://outlook.live.com/owa/?path=/calendar/action/compose&rru=addevent&startdt=2022-12-15T14:00:00&enddt=2022-12-15T15:00:00&subject=${SUBJECT}body=${BODY}location=${SHARE_LINK}}`
  const ICAL_LINK = '/calendar/decemberMasterclass.ics'

  return (
    <>
      <MetaTags title="Masterclass Thanks" />
      <div>
        <PageHeader
          pageTitle="Thank you for Registering"
          subheading="You are In"
        />
      </div>
      <div className="bg-halfSpanishWhite py-12 px-7 text-base md:text-lg max-w-[750px] mx-auto relative mb-[125px]">
        <p className="mb-2">We’re so glad you’ll be joining us to discuss:</p>
        <ul className="mx-0">
          <li className="text-base md:text-lg font-medium">
            Recession-proof your career
          </li>
          <li className="text-base md:text-lg font-medium">
            Industry trends (ChatGPT anyone?!)
          </li>
          <li className="text-base md:text-lg font-medium">
            The skills and resources you need to go from front-end to full-stack
            development, painlessly and quickly.
          </li>
        </ul>
      </div>

      {/* mark your calendar */}
      <div className="text-center mb-[125px]">
        <h3 className="heading-with-flourish mx-auto relative">
          mark your calendar
        </h3>
        <div className="flex justify-center items-center gap-x-20">
          <a
            href={GOOGLE_CAL_LINK}
            target="_blank"
            className="flex flex-col items-center gap-4 text-tealGreen hover:text-sinopia"
            rel="noreferrer"
          >
            <img src="/images/google-calendar.png" alt="Google Calendar" />
            <h4 className="uppercase font-bold text-xl font-body">
              Add to
              <br />
              Google Calendar
            </h4>
          </a>
          <a
            href={OUTLOOK_LINK}
            target="_blank"
            className="flex flex-col items-center gap-4 text-tealGreen hover:text-sinopia"
            rel="noreferrer"
          >
            <img src="/images/outlook.png" alt="Outlook" />
            <h4 className=" uppercase font-bold text-xl font-body">
              Add to
              <br />
              Outlook
            </h4>
          </a>
          <a
            href={ICAL_LINK}
            target="_blank"
            className="flex flex-col items-center gap-4 text-tealGreen hover:text-sinopia"
            rel="noreferrer"
          >
            <img src="/images/ical.png" alt="Apple iCal" />
            <h4 className="uppercase font-bold text-xl font-body">
              Add to
              <br />
              Apple iCal
            </h4>
          </a>
        </div>
      </div>

      {/* sharing is caring */}
      <div className="mb-[200px] max-w-[750px] mx-auto">
        <div className="text-center">
          <h3 className="heading-with-flourish">sharing is caring</h3>
          <p className="text-center font-body text-base md:text-lg font-medium mb-10">
            Know someone else who might benefit? We’d love for you to share this
            with them!
          </p>
        </div>
        {/* social media icons */}
        <div className="flex gap-20 justify-center">
          {/* facebook */}
          <Facebook url={SHARE_LINK} />

          {/* twitter */}
          <Twitter url={SHARE_LINK} />

          {/* email */}
          <Email body={BODY} subject={SUBJECT} />

          {/* what's app */}
          <WhatsApp
            content={`Check out this FREE Masterclass on Future Proofing Your Career: ${SHARE_LINK}`}
          />

          {/* linkedin */}
          <LinkedIn
            url={SHARE_LINK}
            title="FREE Masterclass Series: Future Proofing Your Career"
            summary="The best thing to do in a volatile, fluid economy and hiring environment is to make sure you stand out as a technologist and a potential candidate."
          />
        </div>
      </div>
    </>
  )
}

export default MasterclassThanksPage
