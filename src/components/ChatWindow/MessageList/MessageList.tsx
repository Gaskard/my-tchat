import './messageList.scss'

import {useEffect, useRef} from 'react';
import MessageItem from './MessageItem/MessageItem.tsx';

export interface IMessageData {
  id: number;
  created_at: string;
  message: string;
  sender: string;
  profiles: {
    nickname: string;
  }
}

interface IProps {
  messages: IMessageData[];
  currentUser?: string
}

const MessageList = ({messages, currentUser}: IProps) => {

  const lastMessage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lastMessage.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages])

  return (
    <div className="messages">
      {messages.map((messageData: IMessageData) => (
        <MessageItem key={messageData.id} messageData={messageData} currentUser={currentUser}/>
      ))}
      <div ref={lastMessage} className="message__last"></div>
    </div>
  )
}

export default MessageList