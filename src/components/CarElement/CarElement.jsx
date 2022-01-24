import React, { useState } from 'react'

import './CarElement.styles.scss'

const CarElement = ({ car, id, onDeleteCar }) => {
  const { make, model, engine, availability, photo } = car

  const [isAvailable, setIsAvailable] = useState(availability)

  return (
    <tr className={`elem-wrapper ${isAvailable ? 'available' : 'not-available'}`}>
      <td className='elem-row'>
        <section>
          {photo &&
            <img
              className='img'
              src={photo}
              alt={`Zdjęcie samochodu: ${make} ${model} ${engine}`}
            />}
        </section>
        <section className='name-wrapper'>
          <p>{`${make} ${model} ${engine}`}</p>
        </section>
      </td>
      <td className='elem-row'>{model}</td>
      <td className='elem-row'>{engine}</td>
      <td className='elem-row'>{isAvailable ? 'Tak' : 'Nie'}</td>
      <td className='elem-row'>
        <section className='buttons-wrapper'>
          <button className='button' onClick={() => setIsAvailable((prev) => (!prev))}>
            Dostępność <i className='fas fa-exchange-alt' />
          </button>
          <button className='button' onClick={() => onDeleteCar(id)}>Usuń <i className='fas fa-trash-alt' /></button>
        </section>
      </td>
    </tr>
  )
}

export default CarElement
