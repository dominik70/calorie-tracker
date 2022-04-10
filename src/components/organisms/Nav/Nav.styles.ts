import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`;

export const Container = styled.div`
  width: 100%;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: ${({ theme }) => theme.zIndex.nav};
  top: 0px;
  height: 75px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
`;

export const Menu = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  width: 250px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  top: 0;
  right: ${({ isOpen }) => (isOpen ? 0 : '-300px')};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.3s;
  box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.3);

  @media (min-width: ${({ theme }) => theme.media.medium}) {
    position: static;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.black};
    width: auto;
    height: 75px;
    box-shadow: none;
    flex-direction: row;
  }
`;

export const SubContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  margin-bottom: 35px;

  @media (min-width: ${({ theme }) => theme.media.medium}) {
    position: static;
    transform: translateX(0);
    flex-direction: row;
    margin: 0;
  }
`;

export const LoggedUser = styled.p`
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    max-width: 80px;
    margin-left: 15px;
    word-wrap: break-word;
  }
`;
