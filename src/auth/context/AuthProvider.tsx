import { useEffect, useState } from 'react';
import { AuthContext } from './';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../../supabase';

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoading(false);
      if(session) {
        setSession(session);
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{
      session,
      isLoading,
    }}>
      {children}
    </AuthContext.Provider>
  )
}