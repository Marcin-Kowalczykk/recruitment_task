import React from 'react'

import {
  ElemWrapper,
  Td,
  P,
  Img,
  TitleSection,
  Button
} from './styled'

const CarElement = ({ car }) => {
  const { make, model, engine, availability, photo } = car

  return (
    <ElemWrapper isAvaible={availability}>
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
      <Td>{availability ? 'Tak' : 'Nie'}</Td>
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
