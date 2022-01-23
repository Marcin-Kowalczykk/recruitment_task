import React from 'react'

import {
  LiWrapper,
  P,
  FirstArea,
  TitleSection,
  SecondArea,
  ThirdArea,
  Button
} from '.'

const CarElement = () => {
  return (
    <LiWrapper>
      <FirstArea>
        <section>
          <img src='' alt='zdjęcie samochodu' />
        </section>
        <TitleSection>
          <P>Volkswagen</P>
          <P>Golf</P>
          <P>1.6 TDI</P>
        </TitleSection>
      </FirstArea>
      <SecondArea>
        <P>Golf IV</P>
        <P>1.6 TDI</P>
      </SecondArea>
      <ThirdArea>
        <P>Tak</P>
        <Button>Usuń</Button>
      </ThirdArea>
    </LiWrapper>
  )
}

export default CarElement
