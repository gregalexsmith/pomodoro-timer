import styled, { css } from 'styled-components';

export const H2 = styled.h2`
  font-weight: 900;
  font-size: 28px;
  line-height: 1.2;
  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb};
    `}
`;

export const H3 = styled.h3`
  font-weight: 700;
  font-size: 22px;
`;
