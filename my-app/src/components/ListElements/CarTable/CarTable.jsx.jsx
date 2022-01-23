import React from 'react'
import { TableContainer } from '.'

import TableHeader from '../TableHeader'
import CarElement from '../CarElement'

import Data from '../../../data/CarsData/data.json'

const CarTable = () => {
  return (
    <TableContainer>
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        {Data.offers.map((element) => {
          return (
            <CarElement
              key={Math.random()}
              make={element.make}
              model={element.model}
              engine={element.engine}
              availability={element.availability}
              photo={element.photo}
            />
          )
        })}
      </tbody>
    </TableContainer>
  )
}

export default CarTable
