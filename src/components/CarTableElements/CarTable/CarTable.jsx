import React, { useState, useEffect } from 'react'
// import axios from 'axios'

import { TableContainer } from './styled'

import TableHeader from '../TableHeader'
import CarElement from '../CarElement'
import useFetchData from '../../../hooks/useFetchData'

const CARS_DATA_PATH = './data.json'

const CarTable = () => {
  const [carsArray, setCarsArray] = useState([])
  const fetchData = useFetchData(CARS_DATA_PATH, setCarsArray)

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const deleteCarHandler = (id) => {
    const filteredCars = carsArray.filter((el) => `${el.model}-${el.photo}` !== id)
    setCarsArray(filteredCars)
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
              onDeleteCar={deleteCarHandler}
            />
          )
        })}
      </tbody>
    </TableContainer>
  )
}

export default CarTable
