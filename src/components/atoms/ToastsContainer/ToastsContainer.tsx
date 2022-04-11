import { StyledToastContainer } from './ToastsContainer.styles';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ToastsContainer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    toast.dismiss();
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <StyledToastContainer
      position="bottom-center"
      autoClose={5000}
      newestOnTop
      closeOnClick
      draggable
      pauseOnFocusLoss={false}
      pauseOnHover
      limit={5}
      style={{ borderRadius: '25px' }}
    />
  );
};
