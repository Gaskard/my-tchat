import 'normalize.css'
import '../../styles/reset.scss'
import '../../styles/base.scss'

import ChatWindow from '../ChatWindow/ChatWindow.tsx';
import Auth from '../../features/Auth/Auth.tsx';

function App() {

  const isAuth = false;

  return (
    <>
      {isAuth ? <ChatWindow/> : <Auth/>}
    </>
  )
}

export default App
