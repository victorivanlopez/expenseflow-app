import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRouter } from './router';
import { AppTheme } from './theme/AppTheme';
import { useEffect, useState } from 'react';
import { supabase } from './supabase';
import { Session } from '@supabase/supabase-js';

const router = createBrowserRouter(AppRouter);

export const App = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log(session);
      setSession(session);
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log({ session, _event });
      setSession(session);
    })

    return () => subscription.unsubscribe()
  }, [])
  return (
    <AppTheme>
      <RouterProvider router={router} />
    </AppTheme>
  )
}