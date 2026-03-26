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
        <div className='messages__item' key={index}>
            {message.message}
        </div>
      ))}
    </div>
  )
}

export default MessageList