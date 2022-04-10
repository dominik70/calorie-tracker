import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 25px;
`;

export const StyledSearchBar = styled.input`
  height: 45px;
  width: 100%;
  border-radius: 50px;
  border: none;
  font-size: 1.8rem;
  padding: 0 20px;
  padding-right: 50px;

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
`;

export const InputContainer = styled.div`
  max-width: 400px;
  width: 90%;
  position: relative;
`;

export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
`;
