import React from 'react'

import { HeaderWrapper, P, FirstArea, SecondArea, ThirdArea } from '.'

const ListHeader = () => {
  return (
    <HeaderWrapper>
      <FirstArea>
        <P>Nazwa</P>
      </FirstArea>
      <SecondArea>
        <P>Model</P>
        <P>Silnik</P>
      </SecondArea>
      <ThirdArea>
        <P>Dostępność</P>
        <P>Akcje</P>
      </ThirdArea>
    </HeaderWrapper>
  )
}

export default ListHeader
