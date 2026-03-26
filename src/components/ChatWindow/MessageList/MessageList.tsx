import './messageList.scss'

export interface IMessageData {
  id: number;
  message: string;
  sender: string;
}

interface IProps {
  messages: IMessageData[];
}

const MessageList = ({messages}: IProps) => {

  return (
    <div className="messages">
      {messages.map((message: IMessageData, index) => (
        <div className={message.sender === 'Dmytro' ? 'messages__item messages__item--mine' : 'messages__item messages__item--other'} key={index}>
            {message.message}
        </div>
      ))}
    </div>
  )
}

export default MessageList