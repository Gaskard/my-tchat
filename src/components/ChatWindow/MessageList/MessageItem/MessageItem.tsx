import './messageItem.scss'

import type {IMessageData} from '../MessageList.tsx';

interface IMessageItemProps {
  messageData: IMessageData;
  currentUser?: string
}

const MessageItem = ({messageData, currentUser}: IMessageItemProps) => {

  const formattedTime = new Date(messageData.created_at).toLocaleTimeString("it-IT").slice(0, -3)

  return (
    <div className="messages">
      <div className={messageData.sender === currentUser ?
        'messages__item messages__item--mine' : 'messages__item messages__item--other'}>
        {messageData.sender !== currentUser && <span className="messages__sender">{messageData.sender}</span>}
        {messageData.message}
        <time className="messages__time">{formattedTime}</time>
      </div>
    </div>
  )
}

export default MessageItem;