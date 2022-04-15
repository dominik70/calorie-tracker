import { Button } from '../../atoms/Button/Button';
import { Container, Heading, Hl, Description, ButtonContainer, Actions, Img, Subcontainer } from './Home.styles';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import illustration from '../../../assets/illustration.png';

export const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <Container>
      <Subcontainer>
        <Img src={illustration} alt='two bowls with vegetables, green drink with ice cubes' />
        <div>
          <Heading>
            Be fit with <Hl>my calorie</Hl>
          </Heading>
          <Description>
            <Hl>My calorie</Hl> is a calorie tracker app that allows you to control your calories and nutrients intake and help to follow your diet.
          </Description>
        </div>
      </Subcontainer>
      <Actions>
        {!user && (
          <>
            <ButtonContainer>
              <Button variant='contained' onClick={() => navigate('/sign-in')}>
                Sign in
              </Button>
              <Button variant='outlined' onClick={() => navigate('/sign-up')}>
                Sign up
              </Button>
            </ButtonContainer>
            <p>or</p>
          </>
        )}
        <Button variant='contained' onClick={() => navigate('/search')}>
          Search food
        </Button>
      </Actions>
    </Container>
  );
};
