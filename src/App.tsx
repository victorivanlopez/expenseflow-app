import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRouter } from './router';
import { AppTheme } from './theme/AppTheme';

const router = createBrowserRouter(AppRouter);

export const App = () => {
  return (
    <AppTheme>
      <RouterProvider router={router} />
    </AppTheme>
  )
}