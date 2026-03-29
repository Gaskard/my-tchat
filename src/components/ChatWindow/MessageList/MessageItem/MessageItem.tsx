import type {IMessageData} from '../MessageList.tsx';

interface IMessageItemProps {
  messageData: IMessageData;
  currentUser?: string
}

const MessageItem = ({messageData, currentUser}: IMessageItemProps) => {
  return (
    <div className={messageData.sender === currentUser ?
      'messages__item messages__item--mine' : 'messages__item messages__item--other'}>
      {messageData.message}
    </div>
  )
}

export default MessageItem;