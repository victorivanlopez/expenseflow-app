import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../supabase';

interface Props {
  children: JSX.Element;
}

export const PublicRoute: React.FC<Props> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    })

    return () => subscription.unsubscribe()
  }, [])

  return (session)
    ? <Navigate to="/" />
    : children
}