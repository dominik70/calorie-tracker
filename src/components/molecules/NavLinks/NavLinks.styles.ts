import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.media.medium}) {
    flex-direction: row;
  }
`;

export const ListItem = styled.li`
  margin: 20px 0;
`;

const activeLinkStyle = css`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};

  @media (min-width: ${({ theme }) => theme.media.medium}) {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid transparent;
  border-radius: 50px;
  padding: 3px 15px;
  transition: 0.15s;
  outline: none;

  &:focus,
  &.active {
    ${activeLinkStyle}
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.media.medium}) {
    color: ${({ theme }) => theme.colors.black};
    text-transform: uppercase;
    font-weight: bold;
    margin: 0 10px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};
      border: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;
