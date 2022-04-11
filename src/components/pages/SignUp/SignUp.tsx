import { Button } from '../../atoms/Button/Button';
import { SectionTitle } from '../../atoms/SectionTitle/SectionTitle';
import { PageContainer } from '../../atoms/PageContainer/PageContainer';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../../atoms/Input/Input';
import { ErrorType, Register } from '../../../types';
import { loginSchema } from '../../../lib/schemas';
import { Form, StyledButton } from '../../atoms/Form/Form';
import { Error } from '../../atoms/Error/Error';
import { SignInfo } from './SignUp.styles';
import { toast } from 'react-toastify';

export const SignUp = () => {
  const navigate = useNavigate();
  const { user, signUp } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Register>({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
    criteriaMode: 'all',
  });

  const onSubmit = async ({ email, password }: Register) => {
    setIsLoading(true);
    try {
      await signUp(email, password);
      navigate('/');
    } catch (error) {
      const err = error as ErrorType;
      toast.error(err.message);
      setIsLoading(false);
    }
  };

  if (user) {
    return <Navigate to={'/'} replace />;
  }

  return (
    <PageContainer>
      <SectionTitle>Sign up</SectionTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {!isLoading ? (
          <>
            <Input label='Email' id='email' type='email' placeholder='Your email...' autoComplete='email' inputSize='l' {...register('email')} />
            <Input label='Password' id='password' type='password' placeholder='Your password...' autoComplete='current-password' inputSize='l' {...register('password')} />
            <Input label='Confirm password' id='confirm-password' type='password' placeholder='Confirm password...' autoComplete='new-password' inputSize='l' {...register('confirmPassword')} />
            <StyledButton type='submit' variant='contained' disabled={isLoading}>
              Register
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
          sign-up
        </Button>
      </SignInfo>
    </PageContainer>
  );
};
