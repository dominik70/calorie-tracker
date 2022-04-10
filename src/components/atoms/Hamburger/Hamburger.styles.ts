import styled from 'styled-components';

interface Props {
  isOpen: boolean;
}

export const StyledHamburger = styled.button<Props>`
  width: 30px;
  height: 25px;
  position: fixed;
  background-color: transparent;
  border: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  top: 25px;
  right: 15px;
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.hamburger};

  &:after,
  &:before,
  .hamburger-bar {
    content: '';
    width: 100%;
    height: 3px;
    background-color: ${({ theme, isOpen }) => (isOpen ? theme.colors.white : theme.colors.black)};
    transition: 0.15s;
    pointer-events: none;
  }

  .hamburger-bar {
    opacity: ${({ isOpen }) => isOpen && 0};
  }

  &:before {
    margin-bottom: 3px;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(11px)  rotate(-45deg)' : null)};
  }

  &:after {
    margin-top: 3px;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(-11px) rotate(45deg)  ' : null)};
  }

  @media (min-width: ${({ theme }) => theme.media.medium}) {
    display: none;
  }
`;
