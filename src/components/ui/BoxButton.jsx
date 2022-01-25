import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
  padding: 0.8em;
  background: ${({ theme }) => theme.color.lightPurpleBg};
  border: none;
  border-radius: 1em;
  color: ${({ theme }) => theme.color.white};
  width: 9em;
  margin-top: 1em;
  cursor: pointer;
  outline: none;

  transition: background 0.5s ease-in, padding 0.3s linear;

  &:hover, &:focus {
    background: ${({ theme }) => theme.color.darkPurpleBg};
  }

  &:active {
    padding: 1em;
  }
`

const BoxButton = ({ children, className, type, onClick }) => {
  return <Button className={className} type={type || 'button'} onClick={onClick}>{children}</Button>
}

export default BoxButton
