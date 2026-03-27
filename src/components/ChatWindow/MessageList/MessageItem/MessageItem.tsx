import type {IMessageData} from '../MessageList.tsx';

interface IMessageItemProps {
  messageData: IMessageData;
}

const MessageItem = ({messageData}: IMessageItemProps) => {
  return (
    <div className={messageData.sender === 'Dmytro' ?
      'messages__item messages__item--mine' : 'messages__item messages__item--other'}>
      {messageData.message}
    </div>
  )
}

export default MessageItem;