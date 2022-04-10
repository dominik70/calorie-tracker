import styled, { css } from 'styled-components';

interface Props {
  inputSize?: 's' | 'l';
}

export const StyledInput = styled.input<Props>`
  border-radius: 50px;
  padding-left: 12px;
  padding-right: 0;
  font-size: 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};

  ${({ inputSize }) => {
    if (inputSize === 's') {
      return css`
        width: 70px;
        height: 35px;
      `;
    } else {
      return css`
        width: 200px;
        height: 40px;
      `;
    }
  }}

  &[type= 'date' ] {
    width: 120px;
    padding-left: 5px;

    ::-webkit-datetime-edit-month-field {
      padding: 0;
    }
    ::-webkit-datetime-edit-day-field {
      padding: 0;
    }
    ::-webkit-datetime-edit-year-field {
      padding: 0;
    }
    ::-webkit-calendar-picker-indicator {
      margin: 0;
    }
  }
`;

export const Label = styled.label<Props>`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 5px;

  ${({ inputSize }) => {
    if (inputSize === 's') {
      return css`
        font-size: 1.4rem;
        font-weight: 600;
        gap: 3px;
      `;
    }
  }}
`;
