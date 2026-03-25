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
    <div className="container">
      {messages.map((message: IMessageData, index) => (
        <div key={index}>
          <div className="message">
            {message.message}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MessageList