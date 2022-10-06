interface CardProps {
  children: JSX.Element
  title: string
}

const Card = ({ title, children }: CardProps): JSX.Element => (
  <div>
    <h3>{title}</h3>
    <p>{children}</p>
  </div>
)

const CourseYouWill = () => {
  return (
    <div>
      <div>
        <h2 className="section-heading">In this Self Paced Course You Will</h2>
      </div>
      <div>
        <Card />
      </div>
    </div>
  )
}

export { CourseYouWill }
