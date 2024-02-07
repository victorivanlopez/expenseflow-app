import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { supabase } from '../../supabase';
import type { User } from '../../interfaces';

export interface AuthState {
  isAuth: boolean;
  user?: User;

  setUser: (user: User) => void;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}


const storeApi: StateCreator<AuthState> = (set) => ({
  isAuth: false,
  user: undefined,

  setUser: (user: User) => set({ user }),

  signInWithGoogle: async () => {
    try {
      await supabase.auth.signInWithOAuth({ provider: 'google' });
      set({ isAuth: true });
    } catch (error) {
      set({ isAuth: false });
      throw new Error('Ocurrió un error en la autenticación.');
    }
  },
  signOut: async () => {
    try {
      await supabase.auth.signOut();
      set({ isAuth: false });
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