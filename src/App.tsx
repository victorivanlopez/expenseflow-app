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
      console.log({ _event, session })
      if (_event === 'INITIAL_SESSION') {
        setSession(session);
      } else if (_event === 'PASSWORD_RECOVERY') {
        setSession(null);
        setIsChangingPass(true);
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