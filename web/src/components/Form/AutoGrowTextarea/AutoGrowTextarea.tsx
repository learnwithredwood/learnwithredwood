import { useState } from 'react'

const AutoGrowTextarea = () => {
  const [textareaContent, setTextareaContent] = useState<string>('')

  const handleChange = (event) => {
    setTextareaContent(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div className="inline-grid items-stretch w-full">
      <textarea
        className="gridAreaAutoGrow w-full"
        name="message"
        onChange={handleChange}
        value={textareaContent}
      />
      <span className="invisible whitespace-pre-wrap p-0 gridAreaAutoGrow py-4 px-4">
        {textareaContent}{' '}
      </span>
    </div>
  )
}

export { AutoGrowTextarea }
