import * as yup from 'yup';
import { MEAL_NAMES } from '../utils/constants';

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

export const searchCardSchema = yup.object().shape({
  quantity: yup.number().typeError('quantity must be a number').min(1).max(15000),
  meal: yup.mixed().oneOf(MEAL_NAMES),
  date: yup.date().max(new Date(), 'date must be earlier or equal to today'),
});

export const nutrientsGoalSchema = yup.object().shape({
  kcal: yup.number().typeError('kcal must be a number').min(1).max(15000),
  carb: yup.number().typeError('carb must be a number').min(1).max(15000),
  protein: yup.number().typeError('protein must be a number').min(1).max(15000),
  fat: yup.number().typeError('fat must be a number').min(1).max(15000),
});

export const personalInfoSchema = yup.object().shape({
  weight: yup.number().typeError('weight must be a number').min(40).max(250),
  height: yup.number().typeError('height must be a number').min(100).max(250),
  age: yup.number().typeError('age must be a number').min(1).max(120),
});
