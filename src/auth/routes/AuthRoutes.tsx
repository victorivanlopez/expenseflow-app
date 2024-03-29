import { Navigate } from 'react-router-dom';
import { ForgotPasswordPage, LoginPage, RegisterPage, ResetPasswordPage } from '../pages';


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
  {
    path: 'forgot-password',
    element: <ForgotPasswordPage />
  },
  {
    path: 'reset-password',
    element: <ResetPasswordPage />
  }
]