import { DashboardLayout } from '../dashboard/layout';
import { AuthLayout } from '../auth/layout';
import { PrivateRoute } from './PrivateRoute';
import { DashboardRoutes } from '../dashboard/routes';
import { AuthRoutes } from '../auth/routes';
import { PublicRoute } from './PublicRoute';

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