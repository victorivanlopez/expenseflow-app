import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

interface Props {
  children: React.ReactNode;
}

export const PrivateRoute = ({ children }: Props) => {
  const { session, isLoading } = useAuth();

  if (isLoading) return;

  return (session)
    ? children
    : <Navigate replace to="auth/login" />
}