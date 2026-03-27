import './messageList.scss'

import {useEffect, useRef} from 'react';
import MessageItem from './MessageItem/MessageItem.tsx';

export interface IMessageData {
  id: number;
  message: string;
  sender: string;
}

interface IProps {
  messages: IMessageData[];
}

const MessageList = ({messages}: IProps) => {

  const lastMessage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lastMessage.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages])

  return (
    <div className="messages">
      {messages.map((messageData: IMessageData) => (
        <MessageItem key={messageData.id} messageData={messageData}/>
      ))}
      <div ref={lastMessage} className="message__last"></div>
    </div>
  )
}

export default MessageList