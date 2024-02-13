import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { supabase } from '../../supabase';
import { AuthResponse, Session } from '@supabase/supabase-js';
import type { User } from '../../interfaces';

export interface AuthState {
  statusSession: AuthStatus;
  user?: User;

  setSession: (session: Session | null) => void;
  signInWithGoogle: () => Promise<void>;
  signUpNewUser: (email: string, password: string, fullName: string) => Promise<AuthResponse>;
  signOut: () => Promise<void>;
}

export type AuthStatus = 'authorized' | 'unauthorized' | 'pending';

const storeApi: StateCreator<AuthState, [["zustand/devtools", never]]> = (set) => ({
  statusSession: 'pending',
  user: undefined,

  setSession: (session: Session | null) => {
    if (session) {
      set({
        statusSession: 'authorized',
        user: {
          id: session.user.id,
          email: session.user?.email,
          fullName: session.user.user_metadata.full_name,
        }
      }, false, 'setSession');
    } else {
      set({ statusSession: 'unauthorized' }, false, 'setSession');
    }
  },

  signInWithGoogle: async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
      if (error) throw new Error(error.message);
    } catch (error) {
      set({ statusSession: 'unauthorized' });
      throw new Error('Ocurrió un error en la autenticación con Google.');
    }
  },
  signUpNewUser: async (email: string, password: string, fullName: string) => {
    try {
      const response = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName
          }
        }
      });
      if (response.error) throw new Error(response.error.message);
      return response;
    } catch (error) {
      set({ statusSession: 'unauthorized' });
      throw new Error('Ocurrió un error al registrar usuario.');
    }
  },
  signOut: async () => {
    try {
      await supabase.auth.signOut();
      set({ statusSession: 'unauthorized', user: undefined }, false, 'signOut');
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