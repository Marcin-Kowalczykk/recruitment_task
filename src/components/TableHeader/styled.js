import styled from 'styled-components'

export const Th = styled.th`
  padding: 1em 1em 1em 2em;
  background: ${({ theme }) => theme.color.lightPurpleBg};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.extraLarge};
  font-weight: bold;

  &:first-child {
  border-top-left-radius: 1em;
  }

  &:last-child {
  border-top-right-radius: 1em;
  }
`
