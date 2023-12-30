import { AuthLayout } from '../auth/layout';
import { AuthRoutes } from '../auth/routes';
import { DashboardLayout } from '../expenseflow/layouts';
import { DashboardRoutes } from '../expenseflow/routes';

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