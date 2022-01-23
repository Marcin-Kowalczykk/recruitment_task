import styled from 'styled-components'

export const LiWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
`

export const P = styled.p`
  color: ${(props) => props.theme.color.mediumFont};
  font-size: ${(props) => props.theme.fontSize.large};
  margin-left: 0.3em;
`

export const FirstArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 34vh;
  margin-left: 1em;
`

export const TitleSection = styled.section`
  display: flex;
  margin-top: 0.5em;
`

export const SecondArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 31vh;
  margin-right: 13vh;
`

export const ThirdArea = styled(SecondArea)`
  width: 41vh;
  margin-right: 4vh;
`

export const Button = styled.button`
  padding: 0.5em;
  background: purple;
  border: none;
  border-radius: 0.5em;
  color: white;
  width: 6em;
`
