import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoText = styled.span`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 75px;
  margin-left: 20px;
  font-weight: 700;
`;

export const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const LogoImg = styled.img`
  width: 60px;
  height: 60px;
`;
