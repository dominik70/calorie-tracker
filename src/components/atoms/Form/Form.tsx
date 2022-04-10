import styled from 'styled-components';
import { Button } from '../../atoms/Button/Button';

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 0 10px;
`;

export const StyledButton = styled(Button)`
  margin-top: 25px;
`;
