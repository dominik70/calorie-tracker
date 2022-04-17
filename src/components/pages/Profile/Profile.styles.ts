import styled from 'styled-components';
import { PageContainer } from '../../atoms/PageContainer/PageContainer';

export const Container = styled(PageContainer)`
  justify-content: flex-start;
`;

export const Subheading = styled.h3`
  font-size: 2.4rem;
  margin-bottom: 15px;
  margin-top: 20px;
  text-align: center;

  &:nth-of-type(2) {
    margin-top: 50px;
  }
`;
