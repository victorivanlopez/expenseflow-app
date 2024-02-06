import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRouter } from './router';
import { AppTheme } from './theme/AppTheme';
import { AuthProvider } from './auth/context';

const router = createBrowserRouter(AppRouter);

export const App = () => {

  return (
    <AppTheme>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </AppTheme>
  )
}