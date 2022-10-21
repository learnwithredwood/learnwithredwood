import Laptop from './images/laptop.png'

const WhatWeBuild = () => {
  return (
    <div className="page grid grid-cols-12 gap-x-5 mb-20">
      <div className="col-span-4">
        <h2 className="section-heading leading-[6.1rem] mb-6">
          What will we Build?
        </h2>
        <p>
          In this course, we’ll build “Rotten Ratings,” a Rotten Tomatoes
          knock-off. We’ll pull data from the Movie Database API. We’ll build a
          user authentication system, where users can login, search, bookmark
          and flag movies to watch later, and create playlists.
        </p>
      </div>
      <div className="col-span-8">
        <img src={Laptop} alt="Laptop with Rotten Ratings Screenshot" />
      </div>
    </div>
  )
}

export { WhatWeBuild }
