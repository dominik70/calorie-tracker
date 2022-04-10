import { forwardRef, SelectHTMLAttributes } from 'react';
import { StyledSelect, Label } from './Select.styles';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  values: string[] | number[];
  id: string;
  label: string;
}

export const Select = forwardRef<HTMLSelectElement, Props>(
  ({ id, label, values, ...props }: Props, ref) => {
    return (
      <Label htmlFor={id}>
        {label}:
        <StyledSelect id={id} {...props} ref={ref}>
          {values.map((value: string | number) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </StyledSelect>
      </Label>
    );
  }
);
