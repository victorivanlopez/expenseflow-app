import { Navigate } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';


export const AuthRoutes = [
  {
    index: true,
    element: <Navigate to='/auth/login' />
  },
  {
    path: 'login',
    element: <LoginPage />
  },
  {
    path: 'register',
    element: <RegisterPage />
  },
]