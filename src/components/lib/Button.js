import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.onPrimary};
  border-radius: 100px;
  font-size: 16px;
  font-weight: 700;
  padding: 0.6em 2em;
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.primaryLight};
  }
`