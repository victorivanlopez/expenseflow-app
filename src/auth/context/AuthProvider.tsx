import { AuthContext } from './';

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  return (
    <AuthContext.Provider value={{

    }}>
      {children}
    </AuthContext.Provider>
  )
}