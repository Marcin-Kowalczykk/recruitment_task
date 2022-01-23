import React from 'react'
import { TableContainer } from '.'

import TableHeader from '../TableHeader'
import CarElement from '../CarElement'

const CarTable = () => {
  return (
    <TableContainer>
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        <CarElement />
        <CarElement />
        <CarElement />
        <CarElement />
      </tbody>
    </TableContainer>
  )
}

export default CarTable
