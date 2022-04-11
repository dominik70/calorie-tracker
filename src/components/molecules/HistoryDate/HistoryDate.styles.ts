import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 15px;
  margin-bottom: 50px;
  margin-top: 25px;
  flex-wrap: wrap;
  max-width: 380px;

  @media (max-width: ${({ theme }) => theme.media.small}) {
    max-width: 320px;
  }
`;

export const DateElement = styled.p`
  margin: auto 50px;
  font-size: 1.8rem;

  @media (max-width: ${({ theme }) => theme.media.small}) {
    margin: auto 15px;
  }
`;
