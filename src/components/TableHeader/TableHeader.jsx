import React from 'react'
import { TABLE_HEADINGS } from './utils'

import { Th } from './styled'

const TableHeader = ({ headings = TABLE_HEADINGS }) => {
  return (
    <tr>
      {headings.map(({ name }) => <Th className='header-row' key={name}>{name}</Th>)}
    </tr>
  )
}

export default TableHeader
