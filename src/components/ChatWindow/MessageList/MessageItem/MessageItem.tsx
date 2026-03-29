import './messageItem.scss'

import type {IMessageData} from '../MessageList.tsx';

interface IMessageItemProps {
  messageData: IMessageData;
  currentUser?: string
}

const MessageItem = ({messageData, currentUser}: IMessageItemProps) => {
  return (
    <div className={messageData.sender === currentUser ?
      'messages__item messages__item--mine' : 'messages__item messages__item--other'}>
      {messageData.sender !== currentUser && <span className="messages__sender">{messageData.sender}</span>}
      {messageData.message}
    </div>
  )
}

export default MessageItem;