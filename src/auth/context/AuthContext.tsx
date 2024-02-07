import { Session } from '@supabase/supabase-js';
import { createContext } from 'react';

interface ContextProps {
  session: Session | null;
  isLoading?: boolean;
}

const defaultState = {
  session: null,
};

export const AuthContext = createContext<ContextProps>(defaultState);