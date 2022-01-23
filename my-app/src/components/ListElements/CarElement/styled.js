import styled from 'styled-components'

export const ElemWrapper = styled.tr`

  &:nth-child(2n+2) {
  background: ${(props) => props.theme.color.darkListBg};
}
`

export const TitleSection = styled.div`
  display: flex;
  margin-top: 0.5em;
`

export const Td = styled.td`
  color: ${(props) => props.theme.color.mediumFont};
  font-size: ${(props) => props.theme.fontSize.large};
  padding: 1em;
`

export const P = styled.p`
  margin-left: 0.3em;
`

export const Button = styled.button`
  padding: 0.5em;
  background: ${(props) => props.theme.color.lightPurpleBg};
  border: none;
  border-radius: 0.5em;
  color: ${(props) => props.theme.color.lightFont};
  width: 6.5em;
  margin-left: 0.1em;
  cursor: pointer;
  outline: none;

  transition: background 0.5s ease-in;

  &:hover, &:focus {
    background: ${(props) => props.theme.color.darkPurpleBg};
  }


`
