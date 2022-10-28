import egghead from './images/egghead.png'
import freeCodeCamp from './images/free-code-camp.png'
import logRocket from './images/log-rocket.png'
import smashingMagazine from './images/smashing-magazine.png'

const LogoParade = () => {
  return (
    <div className="flex justify-between bg-starkWhite bg-opacity-40 mix-blend-multiply mx-12 px-20 py-6 mb-24">
      {/* smashing magazine */}
      <div className="center mix-blend-multiply">
        <img src={smashingMagazine} alt="Smashing Magazine" />
      </div>

      {/* log rocket */}
      <div className="center mix-blend-multiply">
        <img src={logRocket} alt="Log Rocket" />
      </div>

      {/* free code camp */}
      <div className="center mix-blend-multiply">
        <img src={freeCodeCamp} alt="Free Code Camp" />
      </div>

      {/* egghead */}
      <div className="center mix-blend-multiply">
        <img src={egghead} alt="Egghead.io" />
      </div>
    </div>
  )
}

export { LogoParade }
