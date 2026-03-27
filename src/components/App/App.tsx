import 'normalize.css'
import '../../styles/reset.scss'
import '../../styles/base.scss'

import ChatWindow from '../ChatWindow/ChatWindow.tsx';
import Auth from '../../features/Auth/Auth.tsx';
import {useAuth} from '../../AuthContext/AuthContext.tsx';

function App() {

  const {isAuth} = useAuth()

  return (
    <>
      {isAuth ? <ChatWindow/> : <Auth/>}
    </>
  )
}

export default App
