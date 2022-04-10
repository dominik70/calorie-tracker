import { useState } from 'react';
import { StyledNav, Container, SubContainer, Menu, LoggedUser } from './Nav.styles';
import { Logo } from '../../atoms/Logo/Logo';
import { Hamburger } from '../../atoms/Hamburger/Hamburger';
import { Button } from '../../atoms/Button/Button';
import { NavLinks } from '../../molecules/NavLinks/NavLinks';
import { useAuth } from '../../../context/AuthContext';
import { useOuterClick } from '../../../hooks/useOuterClick';
import { useNavigate } from 'react-router-dom';

export const Nav = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const innerRef = useOuterClick(() => setIsOpen(false));

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/sign-in');
      setIsOpen(false);
    } catch {
      console.log('failed to log out');
    }
  };

  return (
    <Container>
      <StyledNav ref={innerRef}>
        <Logo />
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        <Menu isOpen={isOpen}>
          <NavLinks />
          {user ? (
            <SubContainer>
              <LoggedUser>Logged as {user.email}</LoggedUser>
              <Button type='button' variant='outlined' onClick={handleLogout} size='s'>
                Log out
              </Button>
            </SubContainer>
          ) : (
            <SubContainer>
              <Button type='button' variant='contained' onClick={() => navigate('/sign-in')} size='s'>
                Sign in
              </Button>
              <Button type='button' variant='outlined' onClick={() => navigate('/sign-up')} size='s'>
                Sign up
              </Button>
            </SubContainer>
          )}
        </Menu>
      </StyledNav>
    </Container>
  );
};
