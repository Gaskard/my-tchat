import './auth.scss'
import {useState} from 'react';

const Auth = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <button className="auth__login">Sign in</button>
      <button className="auth__registration">Sign up</button>
    </div>
  )
}

export default Auth;