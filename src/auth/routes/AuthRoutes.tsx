import { Navigate } from 'react-router-dom';
import { LoginPage } from '../pages';


export const AuthRoutes = [
  {
    index: true,
    element: <Navigate to='/auth/login' />
  },
  {
    path: 'login',
    element: <LoginPage />
  },
]