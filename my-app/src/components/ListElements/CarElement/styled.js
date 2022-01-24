import styled from 'styled-components'

export const ElemWrapper = styled.tr`

  /* Na początku myślałem, że bez względu na dostępność co drugi wiersz ma się lekko podświetlać:
   &:nth-child(2n+2) {
  background: ${(props) => props.theme.color.darkListBg};
} */

background: ${(props) => props.isAvaible ? props.theme.color.lightListBg : props.theme.color.darkListBg};
`

export const Td = styled.td`
  color: ${(props) => props.theme.color.mediumFont};
  font-size: ${(props) => props.theme.fontSize.large};
  padding: 0.5em 0 0.5em 2em;
  vertical-align: middle;
`

export const Img = styled.img`
  width: 320px;
  height: 180px;
  border-radius: 0.5em;
  transition: transform 0.5s linear;

  &:hover {
    transform: scaleX(-1);
  }
`

export const TitleSection = styled.div`
  display: flex;
  margin-top: 0.5em;
`

export const Button = styled.button`
  padding: 0.8em;
  background: ${(props) => props.theme.color.lightPurpleBg};
  border: none;
  border-radius: 1em;
  color: ${(props) => props.theme.color.lightFont};
  width: 7em;
  margin-left: 0.5em;
  cursor: pointer;
  outline: none;

  transition: background 0.5s ease-in, padding 0.3s linear;

  &:hover, &:focus {
    background: ${(props) => props.theme.color.darkPurpleBg};
  }

  &:active {
    padding: 1em;
  }
`
