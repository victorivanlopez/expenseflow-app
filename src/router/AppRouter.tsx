import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AuthLayout } from '../auth/layout';
import { AuthRoutes } from '../auth/routes';
import { DashboardLayout } from '../dashboard/layout';
import { DashboardRoutes } from '../dashboard/routes';

export const AppRouter = [
  {
    path: '/',
    element:
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>,
    children: DashboardRoutes,
  },
  {
    path: '/auth',
    element:
      <PublicRoute>
        <AuthLayout />
      </PublicRoute>,
    children: AuthRoutes,
  },
]