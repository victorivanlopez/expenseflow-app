import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { supabase } from '../../supabase';

export interface AuthState {
  status: AuthStatus;
  signInWithGoogle: () => Promise<void>;
}

export type AuthStatus = 'authorized' | 'unauthorized' | 'pending';

const storeApi: StateCreator<AuthState> = (set) => ({
  status: 'pending',
  
  signInWithGoogle: async () => {
    try {
      await supabase.auth.signInWithOAuth({ provider: 'google' });
      set({ status: 'authorized' });
    } catch (error) {
      set({ status: 'unauthorized' });
      throw new Error('Ocurrió un error.');
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