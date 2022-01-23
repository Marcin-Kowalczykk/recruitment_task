import React from 'react'

import {
  ElemWrapper,
  Td,
  P,
  TitleSection,
  Button
} from '.'

const CarElement = () => {
  return (
    <ElemWrapper>
      <Td>
        <section>
          <img src='' alt='zdjęcie samochodu' />
        </section>
        <TitleSection>
          <P>Volkswagen</P>
          <P>Golf</P>
          <P>1.6 TDI</P>
        </TitleSection>
      </Td>
      <Td>Golf IV</Td>
      <Td>1.6 TDI</Td>
      <Td>Tak</Td>
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
