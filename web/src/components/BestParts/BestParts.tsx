import { BestPartTech } from '../BestPartTech/BestPartTech'
import reactIcon from './images/logo__react.png'
import reactIcon2x from './images/logo__react@2x.png'
import graphqlIcon from './images/logo__graphql.png'
import graphqlIcon2x from './images/logo__graphql@2x.png'
import prismaIcon from './images/logo__prisma.png'
import prismaIcon2x from './images/logo__prisma@2x.png'
import storybookIcon from './images/logo__storybook.png'
import storybookIcon2x from './images/logo__storybook@2x.png'
import jestIcon from './images/logo__jest.png'
import jestIcon2x from './images/logo__jest@2x.png'
import typescriptIcon from './images/logo__typescript.png'
import typescriptIcon2x from './images/logo__typescript@2x.png'

const BestParts = () => {
  return (
    <div className="grid mx-24 grid-cols-12 mb-20 gap-5">
      <div className="col-start-2 col-span-10">
        <h2 className="font-wide uppercase text-5xl text-cafeRoyale text-center mb-6">
          Built with the Best Parts
        </h2>
      </div>
      <div className="col-start-3 col-span-8 text-center mb-16">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      {/* react */}
      <div className="col-span-4">
        <BestPartTech icon={reactIcon} icon2x={reactIcon2x} tech="React">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut.
        </BestPartTech>
      </div>

      {/* graphql */}
      <div className="col-span-4">
        <BestPartTech icon={graphqlIcon} icon2x={graphqlIcon2x} tech="GraphQL">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut.
        </BestPartTech>
      </div>

      {/* prisma */}
      <div className="col-span-4">
        <BestPartTech icon={prismaIcon} icon2x={prismaIcon2x} tech="Prisma">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut.
        </BestPartTech>
      </div>

      {/* storybook */}
      <div className="col-span-4">
        <BestPartTech
          icon={storybookIcon}
          icon2x={storybookIcon2x}
          tech="Storybook"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut.
        </BestPartTech>
      </div>

      {/* jest */}
      <div className="col-span-4">
        <BestPartTech icon={jestIcon} icon2x={jestIcon2x} tech="Jest">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut.
        </BestPartTech>
      </div>

      {/* typescript */}
      <div className="col-span-4">
        <BestPartTech
          icon={typescriptIcon}
          icon2x={typescriptIcon2x}
          tech="TypeScript"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut.
        </BestPartTech>
      </div>
    </div>
  )
}

export { BestParts }
