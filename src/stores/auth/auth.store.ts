import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { supabase } from '../../supabase';
import { Session } from '@supabase/supabase-js';
import type { AlertResponse, User } from '../../interfaces';

export interface AuthState {
  statusSession: AuthStatus;
  user?: User;

  setSession: (session: Session | null) => void;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<AlertResponse | void>;
  signUpNewUser: (email: string, password: string, fullName?: string) => Promise<AlertResponse>;
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

  signInWithEmail: async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        return { message: error.message, type: 'error' };
      }
    } catch (error) {
      set({ statusSession: 'unauthorized' });
      return { message: 'Ocurrió un error al iniciar sesión.', type: 'error' };
    }
  },

  signUpNewUser: async (email: string, password: string, fullName?: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName
          }
        }
      });

      if (error) {
        return { message: error.message, type: 'error' };
      }
      if (data.user?.identities?.length === 0) {
        return { message: 'El correo electrónico ya está registrado.', type: 'error' };
      }
      return { message: 'Registro realizado con éxito. Por favor, revisa tu email para confirmar la cuenta.', type: 'success' };
    } catch (error) {
      set({ statusSession: 'unauthorized' });
      return { message: 'Ocurrió un error en la autenticación con Google.', type: 'error' };
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