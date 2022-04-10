import { forwardRef, InputHTMLAttributes } from 'react';
import { Label, StyledInput } from './Input.styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 's' | 'l';
  label: string;
  id: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ id, label, inputSize = 's', ...props }: Props, ref) => {
    return (
      <Label htmlFor={id} inputSize={inputSize}>
        {label}:
        <StyledInput id={id} inputSize={inputSize} {...props} ref={ref} />
      </Label>
    );
  }
);
