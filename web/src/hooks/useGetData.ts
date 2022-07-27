import { useEffect, useState } from 'react'

export const useGetData = (url: string) => {
  const [data, setData] = useState()

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url)
      const foundData = await response.json()
      setData(foundData.data.default)
    }

    getData()
  }, [url])

  return data
}
