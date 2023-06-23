import styled, {css} from 'styled-components'

export const Box = styled.div`
  ${props => props.flex && css`
    display:flex;
    ${props.column && css`
      flex-direction: column;
    `}
    ${props.al && css`
      align-items: ${props.al}
    `}
    ${props.jc && css`
      justify-content: ${props.jc}
    `}
    ${props.flexGrow && css`
      flex-grow: 1
    `}
  `}
  ${props => props.height && css`
    height: ${props.height};
  `}
  ${props => props.textCenter && css`
    text-align: center;
  `}
  ${props => props.padding && css`
    padding: ${props.padding};
  `}
`

export const Surface = styled(Box)`
  background-color: ${props => props.theme.colors.surface};
  border: ${props => `3px solid ${props.theme.colors.onBackground}`};
  border-radius: 20px;
  color: ${props => props.theme.colors.onSurface};
`