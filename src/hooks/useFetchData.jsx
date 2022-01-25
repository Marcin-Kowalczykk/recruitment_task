import { useCallback } from 'react'
import axios from 'axios'

const useSign = (url, setter) => {
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(url)

      const data = await response.data
      const carData = await data.offers

      setter(carData)
    } catch (error) {
      console.log(error)
    }
  }, [url])

  return fetchData
}

export default useSign
