import {useState} from 'react';
import MessageList from './MessageList/MessageList.tsx';
import MessageInput from './MessageInput/MessageInput.tsx';

import type {IMessageData} from './MessageList/MessageList.tsx';


const ChatWindow = () => {

  const [messages, setMessages] = useState<IMessageData[]>([]);

  const addMessage = (text: string) => {
    const newMessage = {
      id: Date.now(),
      message: text,
      sender: 'Dmytro',
    }
    setMessages([...messages, newMessage]);
  }

  return (
    <>
      <MessageList messages={messages}/>
      <MessageInput onSendMessage={addMessage}/>
    </>
  )
}

export default ChatWindow