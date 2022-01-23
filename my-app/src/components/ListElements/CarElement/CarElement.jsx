import React, { useState } from 'react'

import {
  ElemWrapper,
  Td,
  P,
  Img,
  TitleSection,
  Button
} from './styled'

const CarElement = ({ car, id, onDeleteCar }) => {
  const { make, model, engine, availability, photo } = car

  const [currentAvailability, setCurrentAvailability] = useState(availability)

  return (
    <ElemWrapper isAvaible={currentAvailability}>
      <Td>
        <section>
          <Img src={photo} alt={`Zdjęcie samochodu: ${make} ${model} ${engine}`} />
        </section>
        <TitleSection>
          <P>{make}</P>
          <P>{model}</P>
          <P>{engine}</P>
        </TitleSection>
      </Td>
      <Td>{model}</Td>
      <Td>{engine}</Td>
      <Td>{currentAvailability ? 'Tak' : 'Nie'}</Td>
      <Td>
        <section>
          <Button onClick={() => setCurrentAvailability((prev) => (!prev))}>
            Dostępność
          </Button>
          <Button onClick={() => onDeleteCar(id)}>Usuń</Button>
        </section>
      </Td>
    </ElemWrapper>
  )
}

export default CarElement
