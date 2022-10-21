interface VideoEmbedProps {
  embed: string
}

const VideoEmbed = ({ embed }: VideoEmbedProps) => {
  if (embed)
    return (
      <div className="page mx-[140px] mb-20">
        <div className="relative h-0 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            width="560"
            height="315"
            src={embed}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    )
  return null
}

export { VideoEmbed }
