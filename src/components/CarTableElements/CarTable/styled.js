import styled, { keyframes } from 'styled-components'

const animationShow = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`

export const TableContainer = styled.table`
  background: ${(theme) => theme.theme.color.white};
  margin: 2.5%;
  width: 95%;
  box-shadow: ${({ theme }) => theme.ui.boxShadow.primary};
  text-align: left;
  animation: ${animationShow} 1s ease-in-out;
  border-radius: ${({ theme }) => theme.ui.borderRadius.normal};
`
