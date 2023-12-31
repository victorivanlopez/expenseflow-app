import { AuthLayout } from '../auth/layout';
import { AuthRoutes } from '../auth/routes';
import { DashboardLayout } from '../dashboard/layouts';
import { DashboardRoutes } from '../dashboard/routes';

export const AppRouter = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: DashboardRoutes,
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: AuthRoutes,
  },
]