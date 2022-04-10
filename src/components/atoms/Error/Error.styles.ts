import styled from 'styled-components';

export const StyledError = styled.p`
  background-color: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.white};
  padding: 5px 10px;
  margin-top: 25px;
  border-radius: 15px;
  max-width: 500px;

  &:first-letter {
    text-transform: uppercase;
  }
`;
