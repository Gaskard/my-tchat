import {useState} from 'react';

import './messageInput.scss'

interface IMessageInputProps {
  onSendMessage: (message: string) => void;
}


const MessageInput = ({onSendMessage}: IMessageInputProps) => {

  const [text, setText] = useState('');

  const sendMessage = () => {
    onSendMessage(text)
    setText('')
}

  return (
    <div className="container">
      <input className='message__input' type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <button className='message__send' onClick={sendMessage}>Send</button>
    </div>
  )
}

export default MessageInput