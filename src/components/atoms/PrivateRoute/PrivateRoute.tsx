import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

export const PrivateRoute = () => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to='/sign-in' replace />;
};
