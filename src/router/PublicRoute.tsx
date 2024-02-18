import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../stores';

interface Props {
  children: React.ReactNode;
}

export const PublicRoute = ({ children }: Props) => {
  const statusSession = useAuthStore(state => state.statusSession);
  const isChangingPass = useAuthStore(state => state.isChangingPass);

  if (statusSession === 'pending') return;

  return (statusSession === 'authorized' && !isChangingPass)
    ? <Navigate replace to="/" />
    : children
}