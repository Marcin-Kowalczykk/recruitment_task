import React from 'react'
import { ListContainer } from '.'

import ListHeader from '../ListHeader'
import CarElement from '../CarElement'

const CartList = () => {
  return (
    <ListContainer>
      <ListHeader />
      <ul>
        <CarElement />
        <CarElement />
        <CarElement />
        <CarElement />
        <CarElement />
        <CarElement />
      </ul>
    </ListContainer>
  )
}

export default CartList
