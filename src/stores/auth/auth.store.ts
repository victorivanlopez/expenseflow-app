import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { supabase } from '../../supabase';
import type { User } from '../../interfaces';
import { Session } from '@supabase/supabase-js';

export interface AuthState {
  statusSession: AuthStatus;
  user?: User;

  setSession: (session: Session | null) => void;
  signInWithGoogle: () => Promise<void>;
  signUpNewUser: (email: string, password: string, fullName: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export type AuthStatus = 'authorized' | 'unauthorized' | 'pending';

const storeApi: StateCreator<AuthState> = (set) => ({
  statusSession: 'pending',
  user: undefined,

  setSession: (session: Session | null) => {
    if (session) {
      set({
        statusSession: 'authorized',
        user: {
          id: session.user.id,
          email: session.user.user_metadata.email,
          fullName: session.user.user_metadata.full_name,
        }
      })
    } else {
      set({ statusSession: 'unauthorized' })
    }
  },

  signInWithGoogle: async () => {
    try {
      await supabase.auth.signInWithOAuth({ provider: 'google' });
    } catch (error) {
      throw new Error('Ocurrió un error en la autenticación con Google.');
    }
  },
  signUpNewUser: async (email: string, password: string, fullName: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            email,
          }
        }
      });
      if (error) throw new Error('Ocurrió un error al registrar usuario.');
      console.log(data)
    } catch (error) {
      throw new Error('Ocurrió un error al registrar usuario.');
    }
  },
  signOut: async () => {
    try {
      await supabase.auth.signOut();
      set({ statusSession: 'unauthorized', user: undefined });
    } catch (error) {
      throw new Error('Ocurrió un error durante el cierre de sesión.');
    }
  }
});

export const useAuthStore = create<AuthState>()(
  devtools(
    storeApi,
  )
);