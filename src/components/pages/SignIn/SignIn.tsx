import { Button } from '../../atoms/Button/Button';
import { SectionTitle } from '../../atoms/SectionTitle/SectionTitle';
import { PageContainer } from '../../atoms/PageContainer/PageContainer';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../../atoms/Input/Input';
import { ErrorType, Login } from '../../types';
import { loginSchema } from '../../../lib/schemas';
import { Form, StyledButton } from '../../atoms/Form/Form';
import { Error } from '../../atoms/Error/Error';
import { SignInfo } from '../SignUp/SignUp.styles';

export const SignIn = () => {
  const navigate = useNavigate();
  const { user, signIn } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
    criteriaMode: 'all',
  });

  const onSubmit = async ({ email, password }: Login) => {
    setIsLoading(true);
    try {
      await signIn(email, password);
      navigate('/');
    } catch (error) {
      const err = error as ErrorType;
      console.log(err.message);
      setIsLoading(false);
    }
  };

  if (user) {
    return <Navigate to={'/'} replace />;
  }

  return (
    <PageContainer>
      <SectionTitle>Sign in</SectionTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {!isLoading ? (
          <>
            <Input label='Email' id='email' type='email' placeholder='Your email...' autoComplete='email' inputSize='l' {...register('email')} />
            <Input label='Register' id='password' type='password' placeholder='Your password...' autoComplete='current-password' inputSize='l' {...register('password')} />
            <StyledButton type='submit' variant='contained' disabled={isLoading}>
              Sign in
            </StyledButton>
            <Error errors={errors} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Form>
      <SignInfo>
        <span>Need an account?</span>
        <Button type='button' variant='outlined' size='s' onClick={() => navigate('/sign-up')}>
          Sign up
        </Button>
      </SignInfo>
    </PageContainer>
  );
};
