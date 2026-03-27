import './auth.scss'
import {useState} from 'react';
import {useAuth} from '../../AuthContext/AuthContext.tsx';
import {supabase} from '../../supabase.ts';

const Auth = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);

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
      const {error} = await supabase
        .auth
        .signUp({email, password})
      if (error) {
        alert(error.message)
      } else {
        alert('Check your email address for confirmation link!');
        setEmail('');
        setPassword('');
      }
    }
    catch {
      console.log('Error signing up')
    }
    finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="auth">
      <input type="email"
             className="auth__email"
             value={email}
             onChange={(e) => setEmail(e.target.value)} />
      <input type="password"
             className="auth__password"
             value={password}
             onChange={(e) => setPassword(e.target.value)} />
      <button className="auth__login" disabled={isLoading} onClick={handleLogin}>{isLoading ? 'loading...' : 'Sign in'}</button>
      <button className="auth__registration" disabled={isLoading} onClick={handleSignUp}>{isLoading ? 'loading...' : 'Sign Up'}</button>
    </div>
  )
}

export default Auth;