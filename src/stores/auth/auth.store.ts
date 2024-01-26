import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface AuthState {
  status: AuthStatus;
  // signInWithGoogle: () => Promise<void>;
}

export type AuthStatus = 'authorized' | 'unauthorized' | 'pending';

const storeApi: StateCreator<AuthState> = () => ({
  status: 'pending',
});

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      storeApi,
      { name: 'user-storage' }
    )
  )
);