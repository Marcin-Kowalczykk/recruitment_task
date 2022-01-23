import React from 'react'

import { Th } from '.'

const TableHeader = () => {
  return (
    <tr>
      <Th>Nazwa</Th>
      <Th>Model</Th>
      <Th>Silnik</Th>
      <Th>Dostępność</Th>
      <Th>Akcje</Th>
    </tr>

  )
}

export default TableHeader
