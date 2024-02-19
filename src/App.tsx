import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRouter } from './router';
import { AppTheme } from './theme/AppTheme';
import { useEffect } from 'react';
import { supabase } from './supabase';
import { useAuthStore } from './stores';

const router = createBrowserRouter(AppRouter);

export const App = () => {
  const setSession = useAuthStore(state => state.setSession);
  const setIsChangingPass = useAuthStore(state => state.setIsChangingPass);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (_event === 'PASSWORD_RECOVERY') {
        setSession(null);
        return setIsChangingPass(true);
      } else {
        setSession(session)
      }
    });

    return () => subscription.unsubscribe()
  }, []);

  return (
    <AppTheme>
      <RouterProvider router={router} />
    </AppTheme>
  )
}