import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { supabase } from '../../supabase';

export interface AuthState {
  isAuth: boolean,
  signInWithGoogle: () => Promise<void>;
}


const storeApi: StateCreator<AuthState> = (set) => ({
  isAuth: false,
  
  signInWithGoogle: async () => {
    try {
      await supabase.auth.signInWithOAuth({ provider: 'google' });
      set({ isAuth: true });
    } catch (error) {
      set({ isAuth: false });
      throw new Error('Ocurrió un error en la autenticación.');
    }
  }
});

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      storeApi,
      { name: 'user-storage' }
    )
  )
);