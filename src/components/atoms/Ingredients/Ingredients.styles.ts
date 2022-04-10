import styled from 'styled-components';

export const IngredientsWrapper = styled.p`
  font-size: 1.4rem;
  margin-top: 15px;
`;

export const ShowButton = styled.button`
  margin-left: 10px;
  display: inline-block;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  transform: translateY(5px);

  &:hover {
    transform: translateY(6px);
  }
`;
