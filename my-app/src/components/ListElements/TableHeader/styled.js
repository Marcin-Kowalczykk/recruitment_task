import styled from 'styled-components'

export const Th = styled.th`
  padding: 1em;
  background: ${(props) => props.theme.color.lightPurpleBg};
  color: ${(props) => props.theme.color.lightFont};
  font-size: ${(props) => props.theme.fontSize.extraLarge};
  font-weight: bold;

  &:first-child {
  border-top-left-radius: 1em;
  }

  &:last-child {
  border-top-right-radius: 1em;
  }
`
