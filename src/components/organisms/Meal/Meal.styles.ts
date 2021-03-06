import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  text-align: center;

  &:last-of-type {
    margin-bottom: 40px;
  }
`;

export const MealHeading = styled.h3`
  font-size: 3rem;
  text-align: center;
  margin-top: 50px;
  position: relative;

  &:before,
  &:after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    top: 50%;
    left: -30px;
    transform: translateY(-50%);
  }

  &:after {
    left: auto;
    right: -30px;
  }
`;
