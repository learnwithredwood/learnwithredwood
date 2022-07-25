import avatar from './images/avatar.png'
import avatar2x from './images/avatar@2x.png'

const HelloMyNameIs = () => {
  return (
    <div className="grid grid-cols-12 gap-5 mx-10 lg:mx-24 mb-16 lg:mb-36">
      {/* hello, my name is */}
      <div className="col-span-12 lg:col-span-6">
        <div className="flex mb-6 gap-5">
          <div>
            <img
              src={avatar}
              alt="Amy Dutton"
              srcSet={`${avatar2x} 2x, ${avatar} 1x`}
            />
          </div>
          <h2>
            <div className="font-script text-gossamer text-3xl lg:text-6xl lowercase font-normal mb-4 mt-4">
              hello my name is
            </div>
            <div className="section-heading font-normal">Amy Dutton</div>
          </h2>
        </div>
        {/* bio */}
        <p className="large-body">
          I love️ teaching people. I love seeing that “ah-ha” moment when the
          light bulb goes off and it finally clicks.
        </p>
        <p className="font-medium">
          I'm the Director of Design at{' '}
          <a href="http://codingzeal.com" target="_blank" rel="noreferrer">
            ZEAL
          </a>
          . I have over 20 years of web experience, officially making me a
          granny in Internet years. I live in Nashville, TN with my husband, 3
          adorable kids, and 2 dogs. If I'm not sitting in front of my computer
          making things, I'm hanging out with family and friends. I love
          streaming all the things, playing cards, reading, and drinking coffee.
          Lots of coffee.
        </p>
      </div>

      {/* divider */}
      <div className="lg:col-span-2 text-center hidden lg:block">
        <div className="h-full opacity-40 bg-white w-2 mx-auto" />
      </div>

      {/* who is this for? */}
      <div className="col-span-12 lg:col-span-4">
        <h2 className="section-heading mb-8 text-center">
          <div className="block md:inline lg:block">Who is </div>
          <div className="block md:inline lg:block">this for</div>
        </h2>
        <p className="font-medium">
          These lessons are perfect for beginner to intermediate developers who
          want to become more comfortable with full stack.
        </p>
        <p className="font-medium">
          Before starting, you should have a basic understanding of HTML and
          CSS. You don't need to be a JavaScript expert, but you do need to be
          comfortable with the language: writing variables, arrow functions, and
          promises.
        </p>
        <p className="font-medium">
          This course doesn't require any prior knowledge of backend
          development, Node, or database management. We've got your covered.
        </p>
      </div>
    </div>
  )
}

export { HelloMyNameIs }
