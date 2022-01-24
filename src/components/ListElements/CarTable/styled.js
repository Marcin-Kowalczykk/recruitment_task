import styled, { keyframes } from 'styled-components'

const animationShow = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`

export const TableContainer = styled.table`
  background: ${(props) => props.theme.color.white};
  border-radius: 1em;
  margin: 2.5%;
  width: 95%;
  border-collapse: collapse;
  border-spacing: 0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  text-align: left;
  animation: ${animationShow} 1s ease-in-out;
`
