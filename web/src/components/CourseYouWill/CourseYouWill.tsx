import { useMDXComponent } from 'src/hooks/useMDXComponent'
import data from '../../../.contentlayer/generated/CourseYouWill/_index.json'

interface CardProps {
  content: string
  title: string
  key: number
}

const Card = ({ title, content }: CardProps): JSX.Element => {
  const Component = useMDXComponent(content)

  return (
    <div className="bg-alpine px-6 pt-6 pb-0 md:pb-6">
      <h3 className="font-narrow text-4xl md:text-5xl uppercase mb-5">
        {title}
      </h3>
      <div className="text-white">
        <Component />
      </div>
    </div>
  )
}

const CourseYouWill = () => {
  return (
    <div className="px-8 py-10 lg:py-16 mx-8 grid grid-cols-12 gap-5 bg-bgCourseYouWill bg-cover mb-[100px]">
      <div className="col-span-12 lg:col-span-5">
        <h2 className="section-heading text-narrow">
          In this Self Paced Course You Will
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 lg:col-span-7 col-span-12">
        {data?.map((item, index: number) => (
          <Card key={index} title={item.title} content={item.body.code} />
        ))}
      </div>
    </div>
  )
}

export { CourseYouWill }
