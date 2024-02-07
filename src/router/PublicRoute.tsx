import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

interface Props {
  children: React.ReactNode;
}

export const PublicRoute = ({ children }: Props) => {
  const { session, isLoading } = useAuth();

  if (isLoading) return;

  return (session)
    ? <Navigate replace to="/" />
    : children
}