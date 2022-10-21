import Terminal from './images/terminal.png'
import Terminal2x from './images/terminal@2x.png'

const Who = () => {
  return (
    <div className="page grid grid-cols-12 gap-x-5 mb-20">
      <div className="col-span-7">
        <img
          src={Terminal}
          alt="Terminal"
          srcSet={`${Terminal2x} @2x, ${Terminal} 1x`}
        />
      </div>
      <div className="col-span-5 my-7">
        <h2 className="section-heading leading-[6.1rem] mb-6">
          Who is this course for?
        </h2>
        <p>
          Learn with Redwood is for{' '}
          <strong className="text-sinopia">
            Learn with Redwood is for frontend developers wanting to become
            fullstack.
          </strong>{' '}
          You want to become more comfortable and confident in Full Stack
          development. You should have a basic understanding of HTML and CSS.
          You don't need to be a JavaScript expert, but you should know the
          basics: writing variables, arrow functions, and promises. This course
          doesn't require any prior knowledge of backend development, Node, or
          database management.{' '}
        </p>
      </div>
    </div>
  )
}

export { Who }
