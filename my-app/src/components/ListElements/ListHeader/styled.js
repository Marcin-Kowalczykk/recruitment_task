import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5em;
  background: ${(props) => props.theme.color.headerBg};
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
`

export const P = styled.p`
  color: ${(props) => props.theme.color.lightFont};
  font-size: ${(props) => props.theme.fontSize.extraLarge};
  font-weight: bold;
`

export const FirstArea = styled.div`
  width: 20vh;
  margin-left: 2vh;
`

export const SecondArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30vh;
`

export const ThirdArea = styled(SecondArea)`
  width: 40vh;
  margin-right: 5vh;
`
