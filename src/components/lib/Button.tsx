import styled, { css } from 'styled-components';

type ButtonProps = {
  secondary?: boolean;
  p?: string;
};

export const Button = styled.button<ButtonProps>`
  border: 3px transparent solid;
  border-radius: 100px;
  padding: 0.3em 0.6em;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Arial', sans-serif;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.onPrimary};
  transition: 0.15s all;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primaryLight};
  }

  ${(props) =>
    props.secondary &&
    css`
      padding: 0.1em 0.4em;
      background-color: transparent;
      color: ${(props) => props.theme.colors.primary};
      border: 3px solid ${(props) => props.theme.colors.primary};
      &:hover {
        background-color: ${(props) => props.theme.colors.primaryLight};
        color: ${(props) => props.theme.colors.onPrimary};
      }

      ${(props) =>
        props.p &&
        css`
          padding: ${props.p};
        `}
    `}
`;
