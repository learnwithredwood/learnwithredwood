import { useEffect, useState } from 'react'

export const useGetData = (url: string)=> {
  const [data, setData] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch(url)
        const foundData = await response.json()
        setData(foundData.data.default)
      } catch (err) {
        console.error(err.message)
      }
    })()
  }, [url])

  return data
}
