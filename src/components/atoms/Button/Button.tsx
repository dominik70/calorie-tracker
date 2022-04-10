import styled, { css } from 'styled-components';

const outlined = css`
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

const contained = css`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

interface Props {
  variant: 'contained' | 'outlined';
  size?: 's' | 'l';
}

export const Button = styled.button<Props>`
  padding: 8px 30px;
  font-size: 1.8rem;
  border-radius: 25px;
  ${({ variant }) => (variant === 'outlined' ? outlined : contained)};
  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: 0.1s;
  white-space: nowrap;

  ${({ size }) => {
    if (size === 's') {
      return css`
        height: 35px;
        padding: 0 20px;
        font-size: 1.6rem;
      `;
    }
  }}

  &:hover,
  &:focus {
    transform: scale(0.98);
    box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.45);
  }
`;
