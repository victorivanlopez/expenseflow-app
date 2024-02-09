import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../stores';

interface Props {
  children: React.ReactNode;
}

export const PublicRoute = ({ children }: Props) => {
  const statusSession = useAuthStore(state => state.statusSession);

  if (statusSession === 'pending') return;

  return (statusSession === 'authorized')
    ? <Navigate replace to="/" />
    : children
}