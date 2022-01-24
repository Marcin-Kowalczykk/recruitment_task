import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

import './CarTable.style.scss'

import TableHeader from '../TableHeader'
import CarElement from '../CarElement'

const CARS_DATA_PATH = './data.json'

const CarTable = () => {
  const [carsArray, setCarsArray] = useState([])

  const fetchCarsData = useCallback(async () => {
    try {
      const response = await axios.get(CARS_DATA_PATH)

      const data = await response.data
      const carData = await data.offers

      setCarsArray(carData)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchCarsData()
  }, [fetchCarsData])

  const deleteCarHandler = (id) => {
    const filteredCars = carsArray.filter((el) => `${el.model}-${el.photo}` !== id)
    setCarsArray(filteredCars)
  }

  return (
    <table className='table-container'>
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
    </table>
  )
}

export default CarTable
