import {
  Twitter,
  Email,
  Facebook,
  WhatsApp,
  LinkedIn,
} from 'src/components/SocialShare'

interface Props {
  introCopy: string
  shareLink: string
  emailBody: string
  emailSubject: string
  linkedInTitle: string
  linkedInSummary: string
  whatsAppContent: string
}

const SharingIsCaring = ({
  introCopy = '',
  shareLink,
  emailBody,
  emailSubject,
  linkedInTitle,
  linkedInSummary,
  whatsAppContent,
}: Props): JSX.Element => {
  return (
    <div className="mb-[200px] max-w-[750px] mx-auto">
      <div className="text-center">
        <h3 className="heading-with-flourish">sharing is caring</h3>
        <p className="text-center font-body text-base md:text-lg font-medium mb-10">
          {introCopy && introCopy}
        </p>
      </div>
      {/* social media icons */}
      <div className="flex gap-20 justify-center">
        {/* facebook */}
        <Facebook url={shareLink} />

        {/* twitter */}
        <Twitter url={shareLink} />

        {/* email */}
        <Email body={emailBody} subject={emailSubject} />

        {/* what's app */}
        <WhatsApp content={whatsAppContent} />

        {/* linkedin */}
        <LinkedIn
          url={shareLink}
          title={linkedInTitle}
          summary={linkedInSummary}
        />
      </div>
    </div>
  )
}

export { SharingIsCaring }
