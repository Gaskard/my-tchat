import {createContext, useContext, useState} from 'react';

interface IAuthContext {
  isAuth: boolean;
  authUpd: (value: boolean) => void;
}

interface IWrapperProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<IAuthContext>({
  isAuth: false,
  authUpd: () => {},
})

const AuthContextProvider = ({ children }: IWrapperProps) => {
  const [isAuth, setIsAuth] = useState<boolean>(false)

  return (
    <AuthContext.Provider value={{
      isAuth: isAuth,
      authUpd: setIsAuth
    }}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext)
export default AuthContextProvider