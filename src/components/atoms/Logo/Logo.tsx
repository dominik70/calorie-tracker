import { LogoText, LogoLink, LogoImg } from './Logo.styles';

export const Logo = () => {
  return (
    <LogoLink to='/'>
      <LogoImg src='./img/logo192.png' alt='carrot illustration' />
      <LogoText>my calorie</LogoText>
    </LogoLink>
  );
};
