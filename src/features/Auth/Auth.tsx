import './auth.scss'
import {useState} from 'react';
import {useAuth} from '../../AuthContext/AuthContext.tsx';
import {supabase} from '../../supabase.ts';

const Auth = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  const {setIsAuth} = useAuth()

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const {error} = await supabase
      .auth
      .signInWithPassword({email, password})
      if (error) {
        alert(error.message)
      } else {
        setIsAuth(true);
      }
    }
    catch {
      console.log('Error logging in')
    }
    finally {
      setIsLoading(false);
    }
  }

  const handleSignUp = async () => {
    setIsLoading(true);
    try {
      const {data, error} = await supabase
        .auth
        .signUp({email, password})
      if (error) {
        alert(error.message)
      } else {
        const {error} = await supabase
          .from('profiles')
          .insert({
            id: data.user?.id,
            nickname: nickname
          })
        if (error) {
          alert(error.message)
        } else {
            alert('Check your email address for confirmation link!');
            setEmail('');
            setPassword('');
        }
      }
    }
    catch {
      console.log('Error signing up')
    }
    finally {
      setIsLoading(false);
    }
  }

  const handleStartRegistration = () => {
    setIsRegisterMode(true);
  }

  return (
    <div className="auth">
      <input type="email"
             placeholder="enter email"
             className="auth__email"
             value={email}
             onChange={(e) => setEmail(e.target.value)} />
      <input type="password"
             placeholder="enter password"
             className="auth__password"
             value={password}
             onChange={(e) => setPassword(e.target.value)} />
      <button className={isRegisterMode ? 'auth__registration-start auth__registration-start-hide' : 'auth__registration-start'} onClick={handleStartRegistration}>registration</button>
        {isRegisterMode &&
          <>
            <input placeholder='enter nickname'
                   type="text"
                   className="auth__nickname"
                   value={nickname}
                   onChange={(e) => setNickname(e.target.value)} />
            <button className="auth__registration"
                    disabled={isLoading}
                    onClick={handleSignUp}>{isLoading ? 'loading...' : 'registration'}</button>
          </>
        }
      <button className={isRegisterMode ? 'auth__login auth__login-hide' : 'auth__login'}
              disabled={isLoading}
              onClick={handleLogin}>{isLoading ? 'loading...' : 'login'}</button>
    </div>
  )
}

export default Auth;