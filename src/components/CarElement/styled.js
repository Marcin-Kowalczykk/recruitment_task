import styled from 'styled-components'

export const ElemWrapper = styled.tr`

  /* Na początku myślałem, że bez względu na dostępność co drugi wiersz ma się lekko podświetlać:
   &:nth-child(2n+2) {
  background: ${(props) => props.theme.color.darkListBg};
} */

background: ${(props) => props.isAvailable ? props.theme.color.white : props.theme.color.error};
`

export const Td = styled.td`
  color: ${(props) => props.theme.color.darkOpacity};
  font-size: ${(props) => props.theme.fontSize.large};
  padding: 1em 0 1em 2.5em;
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

export const ButtonsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const Button = styled.button`
  padding: 0.8em;
  background: ${(props) => props.theme.color.lightPurpleBg};
  border: none;
  border-radius: 1em;
  color: ${(props) => props.theme.color.white};
  width: 9em;
  /* margin: 0.3em; */
  margin-top: 1em;
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
