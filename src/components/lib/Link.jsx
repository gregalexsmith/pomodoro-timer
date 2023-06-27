import styled from 'styled-components';

export const Link = styled.a`
  color: ${(props) => props.theme.colors.onSurface};
  transition: color 0.1s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
