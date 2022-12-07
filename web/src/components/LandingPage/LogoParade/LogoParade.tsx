import jamstack from './images/jamstack.png'
import levelup from './images/levelup-tutorials.png'
import prisma from './images/prisma.png'
import ufl from './images/ufl.png'

const LogoParade = () => {
  return (
    <div className="flex justify-between bg-starkWhite bg-opacity-40 mix-blend-multiply mx-12 px-20 py-6 mb-24">
      {/* jamstack */}
      <div className="center mix-blend-multiply">
        <img src={jamstack} alt="Jamstack Conference" />
      </div>

      {/* university of florida */}
      <div className="center mix-blend-multiply">
        <img src={ufl} alt="University of Florida" />
      </div>

      {/* prisma */}
      <div className="center mix-blend-multiply">
        <img src={prisma} alt="Prisma Day 2022" />
      </div>

      {/* levelup */}
      <div className="center mix-blend-multiply">
        <img src={levelup} alt="Level Up Tutorials" />
      </div>
    </div>
  )
}

export { LogoParade }
