import styled from 'styled-components';
import { PageContainer } from '../../atoms/PageContainer/PageContainer';

export const Container = styled(PageContainer)`
  @media (max-width: ${({ theme }) => theme.media.small}) {
    padding-bottom: 25px;
    padding-top: 75px;
  }
`;

export const Subcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 75px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    gap: 25px;
  }
`;

export const Heading = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: clamp(4rem, 6vw, 6rem);
  line-height: 115%;
  text-align: center;
`;

export const Hl = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const Description = styled.p`
  max-width: 30ch;
  margin: 0 auto;
  margin-top: 35px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 75px;

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    margin-top: 50px;
  }
`;

export const Img = styled.img`
  width: clamp(175px, 50%, 400px);
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`;
