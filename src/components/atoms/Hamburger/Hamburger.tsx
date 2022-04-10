import { StyledHamburger } from './Hamburger.styles';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Hamburger = ({ isOpen, setIsOpen }: Props) => {
  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <StyledHamburger type='button' onClick={handleOpen} isOpen={isOpen} aria-expanded={isOpen}>
      <span className='hamburger-bar' aria-hidden='true'></span>
      <span className='visually-hidden'>Open menu</span>
    </StyledHamburger>
  );
};
