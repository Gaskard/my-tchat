import {createContext, useContext, useEffect, useState} from 'react';

import {supabase} from '../supabase.ts';

interface IAuthContext {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
}

interface IWrapperProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<IAuthContext>({
  isAuth: false,
  setIsAuth: () => {},
})

const AuthContextProvider = ({ children }: IWrapperProps) => {
  const [isAuth, setIsAuth] = useState<boolean>(false)

  useEffect(() => {
      const getUserSession = async () => {
        try {
          const {data, error} = await supabase
          .auth
          .getSession()
      if (error) {
        alert(error.message)
      } else if (data.session !== null) {
        setIsAuth(true)
      }
        }
        catch {
          console.log('Error getting session');
        }
      }
      void getUserSession()
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuth: isAuth,
      setIsAuth: setIsAuth
    }}>
      {children}
    </AuthContext.Provider>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext)
export default AuthContextProvider