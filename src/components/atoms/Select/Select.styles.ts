import styled from 'styled-components';

export const StyledSelect = styled.select`
  width: 100px;
  height: 35px;
  border-radius: 25px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding-left: 8px;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
  gap: 3px;
`;
