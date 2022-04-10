import styled, { css } from 'styled-components';

export const Svg = styled.svg<{ size: number; color?: string }>`
  fill: ${({ theme, color }) => color && theme.colors[color]};
  ${({ size }) =>
    css`
      width: ${size}px;
      height: ${size}px;
    `}
`;
