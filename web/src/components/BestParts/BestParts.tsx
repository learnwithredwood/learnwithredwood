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
    <div className="grid mx-6 lg:mx-24 grid-cols-12 mb-0 lg:mb-20 gap-5">
      <div className="col-start-2 col-span-10">
        <h2 className="section-heading text-center mb-6">
          Built with the Best Parts
        </h2>
      </div>
      <div className="col-start-2 col-span-10 text-center m-6 lg:mb-16">
        <p>
          <strong>RedwoodJS</strong> is built on top of the best libraries and
          frameworks that make the developer experience exceptional and your
          application stable.
        </p>
      </div>
      {/* react */}
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <BestPartTech icon={reactIcon} icon2x={reactIcon2x} tech="React">
          React is the most popular JavaScript framework. It handles the "view"
          layer, or the part that people see and interact with. React makes it
          easy to create reusable components that can be used throughout your
          entire application.
        </BestPartTech>
      </div>

      {/* graphql */}
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <BestPartTech icon={graphqlIcon} icon2x={graphqlIcon2x} tech="GraphQL">
          GraphQL allows you to work with your data, giving exactly what you
          need, and nothing more. -- This makes it easier to evolve your APIs
          over time and enables powerful developer tools.
        </BestPartTech>
      </div>

      {/* prisma */}
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <BestPartTech icon={prismaIcon} icon2x={prismaIcon2x} tech="Prisma">
          Prisma is the easiest way to interact with your database. You can
          create your database structure in a way that's human-readable. Then,
          read and write to the database safely and intuitively.
        </BestPartTech>
      </div>

      {/* storybook */}
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <BestPartTech
          icon={storybookIcon}
          icon2x={storybookIcon2x}
          tech="Storybook"
        >
          Storybook allows you to build UI components and pages in isolation and
          provides a single interface for development, testing, and
          documentation. This becomes essential as your app grows.
        </BestPartTech>
      </div>

      {/* jest */}
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <BestPartTech icon={jestIcon} icon2x={jestIcon2x} tech="Jest">
          Jest is a JavaScript testing framework. It gives you the confidence
          that your application is working correctly, and as it scales, changes
          won't break existing features.
        </BestPartTech>
      </div>

      {/* typescript */}
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <BestPartTech
          icon={typescriptIcon}
          icon2x={typescriptIcon2x}
          tech="TypeScript"
        >
          A lot of people will complain that JavaScript is a "loosey goosey"
          language. Anything goes. TypeScript solves this in the best way. It
          improves your tooling and catches errors.
        </BestPartTech>
      </div>
    </div>
  )
}

export { BestParts }
