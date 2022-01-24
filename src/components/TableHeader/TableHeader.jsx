import React from 'react'
import { TABLE_HEADINGS } from './utils'

import './TableHeader.style.scss'

const TableHeader = ({ headings = TABLE_HEADINGS }) => {
  return (
    <tr>
      {headings.map(({ name }) => <th className='header-row' key={name}>{name}</th>)}
    </tr>
  )
}

export default TableHeader
