import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { supabase } from '../../supabase';
import { Session } from '@supabase/supabase-js';
import type { AlertResponse, User } from '../../interfaces';

export interface AuthState {
  statusSession: AuthStatus;
  user?: User;
  isChangingPass: boolean;
  changedPassword: boolean;

  setSession: (session: Session | null) => void;
  signInWithGoogle: () => Promise<AlertResponse | void>;
  signInWithEmail: (email: string, password: string) => Promise<AlertResponse | void>;
  signUpNewUser: (email: string, password: string, fullName?: string) => Promise<AlertResponse>;
  signOut: () => Promise<AlertResponse | void>;
  setIsChangingPass: (newState: boolean) => void;
  sendEmailPasswordReset: (email: string) => Promise<AlertResponse>;
  resetPassword: (password: string) => Promise<AlertResponse>;
}

export type AuthStatus = 'authorized' | 'unauthorized' | 'pending';

const storeApi: StateCreator<AuthState, [["zustand/devtools", never]]> = (set) => ({
  statusSession: 'pending',
  user: undefined,
  isChangingPass: false,
  changedPassword: false,

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
      if (error) {
        return { message: error.message, type: 'error' };
      }
    } catch (error) {
      set({ statusSession: 'unauthorized' });
      return { message: 'Ocurrió un error en la autenticación con Google.', type: 'error' };
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
      return { message: 'Error al registrarte.', type: 'error' };
    }
  },
  signOut: async () => {
    try {
      await supabase.auth.signOut();
      set({ statusSession: 'unauthorized', user: undefined }, false, 'signOut');
    } catch (error) {
      return { message: 'Ocurrió un error durante el cierre de sesión.', type: 'error' };
    }
  },
  setIsChangingPass: (newState: boolean) => set({ isChangingPass: newState }),

  sendEmailPasswordReset: async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'http://localhost:5173/auth/reset-password'
      });

      if (error) {
        return { message: error.message, type: 'error' };
      }
      return { message: `Hemos enviado un correo electrónico a ${email} para restablecer la contraseña de acceso.`, type: 'success' };
    } catch (error) {
      return { message: 'Error al enviar el correo electrónico.', type: 'error' };
    }
  },

  resetPassword: async (password: string) => {
    try {
      const { error } = await supabase.auth.updateUser({
        password
      });
      if (error) {
        return { message: error.message, type: 'error' };
      }
      set({ changedPassword: true })
      return { message: 'Contraseña restablecida con éxito.', type: 'success' };
    } catch (error) {
      return { message: 'Ha ocurrido un error al restablecer la contraseña.', type: 'error' };
    }
  },
});

export const useAuthStore = create<AuthState>()(
  devtools(
    storeApi,
  )
);