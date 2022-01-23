import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

import { TableContainer } from './styled'

import TableHeader from '../TableHeader'
import CarElement from '../CarElement'

const CarTable = () => {
  const [carsArray, setCarsArray] = useState([])

  const fetchCarsDataHandler = useCallback(async () => {
    try {
      const response = await axios.get('./data.json')

      if (response.status !== 200) {
        throw new Error(`${response.status} error text: ${response.statusText}`)
      }

      const data = await response.data
      const carData = await data.offers

      setCarsArray(carData)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchCarsDataHandler()
  }, [fetchCarsDataHandler])

  const deletCarHandler = (carId) => {
    const filteredArray = carsArray.filter((el) => `${el.model}-${el.photo}` !== carId)
    setCarsArray(filteredArray)
  }

  return (
    <TableContainer>
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        {carsArray.map((car) => {
          return (
            <CarElement
              key={`${car.model}-${car.photo}`}
              id={`${car.model}-${car.photo}`}
              car={car}
              onDeleteCar={deletCarHandler}
            />
          )
        })}
      </tbody>
    </TableContainer>
  )
}

export default CarTable
