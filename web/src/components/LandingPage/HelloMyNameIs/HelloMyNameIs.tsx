import Amy from './images/amy.png'

const HelloMyNameIs = () => {
  return (
    <div className="grid grid-cols-12 gap-5 mx-10 lg:mx-24 mb-16 lg:mb-36">
      <div className="col-span-12 lg:col-span-6">
        <img
          src={Amy}
          alt="Amy Dutton"
          className="rotate-[-1.65deg] shadow-[16px_16px_13px_rgba(62,44,15,0.25)] mx-auto"
        />
      </div>

      {/* hello, my name is */}
      <div className="col-span-12 lg:col-span-6">
        <div className="flex gap-5">
          <h2 className="mb-6">
            <div className="font-script text-gossamer text-3xl lg:text-6xl lowercase font-normal mb-2">
              hello my name is
            </div>
            <div className="section-heading font-normal">Amy Dutton</div>
          </h2>
        </div>
        {/* bio */}
        <h3 className="uppercase font-wide text-lg mb-4">
          I will be your full-stack instructor
        </h3>
        <p className="font-medium">
          I have over 20+ years of web experience and have expertise in product
          design, frontend, and backend development. I’ve developed multiple
          technology courses like{' '}
          <a
            href="http://everythingsvelte.com"
            target="_blank"
            rel="noreferrer"
          >
            Everything Svelte
          </a>
          ,{' '}
          <a href="http://leveluptuts.com" target="_blank" rel="noreferrer">
            KeystoneJS
          </a>
          , and{' '}
          <a href="http://adventofcss.com" target="_blank" rel="noreferrer">
            Advent of CSS
          </a>{' '}
          and{' '}
          <a href="http://adventofjs.com" target="_blank" rel="noreferrer">
            JavaScript
          </a>
          . I’ve written curriculum for the University of Florida, in their
          Master’s program and have spoken about full stack development around
          the world. My podcast,{' '}
          <a href="http://compressed.fm" target="_blank" rel="noreferrer">
            Compressed.fm
          </a>{' '}
          supports thousands of frontend developers wanting to become full stack
          (like you!) with design and engineering tips. I have built hundreds of
          websites and products for enterprise companies, startups, and even
          major recording artists. As an instructor, I help designers and
          developers build with confidence so they can take their projects and
          careers to the next level.
        </p>
      </div>
    </div>
  )
}

export { HelloMyNameIs }
