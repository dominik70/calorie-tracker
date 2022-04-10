import styled, { css } from 'styled-components';

export const Container = styled.p<{ hasShortNames: boolean }>`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${({ hasShortNames }) =>
    hasShortNames
      ? css`
          gap: 10px;
          font-size: 1.6rem;
        `
      : css`
          font-size: 1.8rem;
          @media (max-width: ${({ theme }) => theme.media.small}) {
            flex-direction: column;
          }
        `}
`;

export const SingleNutrient = styled.span`
  margin-top: 5px;
  margin-left: 25px;
  position: relative;

  &:before {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -15px;
  }

  &:first-of-type {
    margin-left: 0;

    &:before {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.small}) {
    margin-left: 0;

    &:before {
      display: none;
    }
  }
`;

export const NutrientValue = styled.span`
  font-weight: bold;
`;

export const NutrientName = styled.span`
  text-decoration: none;
  margin-right: 4px;
`;
