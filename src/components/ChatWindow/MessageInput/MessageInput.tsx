import {useState} from 'react';
import { type KeyboardEventHandler } from 'react';

import './messageInput.scss'

interface IMessageInputProps {
  onSendMessage: (message: string) => void;
}


const MessageInput = ({onSendMessage}: IMessageInputProps) => {

  const [text, setText] = useState('');

  const sendMessage = () => {
    if (text.trim() === '') {
      setText('')
      return;
    } else {
      onSendMessage(text)
      setText('')
    }
}

  const handleKeydown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  }

  return (
    <div className="container">
      <input className='message__input' type="text" value={text} onKeyDown={handleKeydown} onChange={(e) => setText(e.target.value)}/>
      <button className='message__send' onClick={sendMessage}>Send</button>
    </div>
  )
}

export default MessageInput