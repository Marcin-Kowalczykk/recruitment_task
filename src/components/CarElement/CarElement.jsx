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

  const [currentAvailability, setCurrentAvailability] = useState(availability)

  return (
    <ElemWrapper isAvaible={currentAvailability}>
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
      <Td>{currentAvailability ? 'Tak' : 'Nie'}</Td>
      <Td>
        <ButtonsSection>
          <Button onClick={() => setCurrentAvailability((prev) => (!prev))}>
            Dostępność <i className='fas fa-exchange-alt' />
          </Button>
          <Button onClick={() => onDeleteCar(id)}>Usuń <i className='fas fa-trash-alt' /></Button>
        </ButtonsSection>
      </Td>
    </ElemWrapper>
  )
}

export default CarElement
