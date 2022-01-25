import styled from 'styled-components'

export const ElemWrapper = styled.tr`

  /* Na początku myślałem, że bez względu na dostępność co drugi wiersz ma się lekko podświetlać:
   &:nth-child(2n+2) {
  background: ${(props) => props.theme.color.darkListBg};
} */

background: ${({ isAvailable, theme }) => theme.color[isAvailable ? 'white' : 'error']};
`

export const Td = styled.td`
  color: ${({ theme }) => theme.color.darkOpacity};
  font-size: ${({ theme }) => theme.fontSize.large};
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
