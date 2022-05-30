import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const StyledToastContainer = styled(ToastContainer)`
  padding: 10px;

  .Toastify__toast {
    border-radius: 20px;
  }

  .Toastify__toast-body {
    div:first-letter {
      text-transform: uppercase;
    }
  }
`;
