import React from 'react'

import {
  ElemWrapper,
  Td,
  P,
  Img,
  TitleSection,
  Button
} from '.'

const CarElement = ({ make, model, engine, availability, photo }) => {
  let carAvailability = 'Nie'

  if (availability === true) {
    carAvailability = 'Tak'
  }

  return (
    <ElemWrapper>
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
      <Td>{carAvailability}</Td>
      <Td>
        <section>
          <Button>Dostępność</Button>
          <Button>Usuń</Button>
        </section>
      </Td>
    </ElemWrapper>
  )
}

export default CarElement
