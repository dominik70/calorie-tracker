import { StyledError } from './Error.styles';
import { FieldErrors } from 'react-hook-form';

interface Props {
  errors: FieldErrors;
}

export const Error = ({ errors }: Props) => {
  const errorList = Object.values(errors).map((error) => error.message);

  return errorList.length > 0 ? <StyledError>{errorList.join(', ')}</StyledError> : null;
};
