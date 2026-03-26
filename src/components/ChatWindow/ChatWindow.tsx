import {useEffect, useState} from 'react';
import MessageList from './MessageList/MessageList.tsx';
import MessageInput from './MessageInput/MessageInput.tsx';

import type {IMessageData} from './MessageList/MessageList.tsx';

import {supabase} from '../../supabase.ts';


const ChatWindow = () => {

  const [messages, setMessages] = useState<IMessageData[]>([]);

  useEffect(() => {
      const fetchMessages = async () => {
      try {
        const {data, error} = await supabase
        .from('messages')
        .select('*')

        if (error) {
          console.log('error', error);
        } else if (data) {
          setMessages(data);
        }
      }
      catch (err) {
        console.log('error:', err);
      }
      }
      void fetchMessages();
  }, [])

  const addMessage = async (text: string) => {
    try {
      const {data, error} = await supabase
        .from('messages')
        .insert([
          {message: text, sender: 'Dmytro'}
        ])
        .select();
      if (error) {
        console.log('error', error);
      } else if (data) {
        setMessages([...messages, data[0]]);
      }
    } catch (err) {
      console.error(err);
    }
  }



  return (
    <>
      <MessageList messages={messages}/>
      <MessageInput onSendMessage={addMessage}/>
    </>
  )
}

export default ChatWindow