import React, { useState } from 'react'

import {
  ElemWrapper,
  Td,
  Img,
  TitleSection,
  ButtonsSection,
  Button
} from './styled'

const CarElement = ({ car, id, onDeleteCar }) => {
  const { make, model, engine, availability, photo } = car

  const [isAvailable, setIsAvailable] = useState(availability)

  return (
    <ElemWrapper isAvailable={isAvailable}>
      <Td>
        <section>
          {photo &&
            <Img
              src={photo}
              alt={`Zdjęcie samochodu: ${make} ${model} ${engine}`}
            />}
        </section>
        <TitleSection>
          <p>{`${make} ${model} ${engine}`}</p>
        </TitleSection>
      </Td>
      <Td>{model}</Td>
      <Td>{engine}</Td>
      <Td>{isAvailable ? 'Tak' : 'Nie'}</Td>
      <Td>
        <ButtonsSection>
          <Button onClick={() => setIsAvailable((prev) => (!prev))}>
            Dostępność <i className='fas fa-exchange-alt' />
          </Button>
          <Button onClick={() => onDeleteCar(id)}>Usuń <i className='fas fa-trash-alt' /></Button>
        </ButtonsSection>
      </Td>
    </ElemWrapper>
  )
}

export default CarElement
