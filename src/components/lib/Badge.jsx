import styled from 'styled-components';

export const Badge = styled.span`
  border: ${(props) => `3px solid ${props.theme.colors.primary}`};
  border-radius: 30px;
  padding: 0.2em 0.4em;
`;
