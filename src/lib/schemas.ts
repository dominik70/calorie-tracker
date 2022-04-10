import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  email: yup.string().email('invalid email format').required(),
  password: yup
    .string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+\-=]{6,30}$/, 'Password must be between 6 and 30 characters, contain at least 1 uppercase character and 1 digit')
    .required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'passwords must match'),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email('invalid email format').max(40).required(),
  password: yup.string().min(6).max(30).required(),
});
