import {useEffect, useState} from 'react';
import MessageList from './MessageList/MessageList.tsx';
import MessageInput from './MessageInput/MessageInput.tsx';
import Sidebar from '../Sidebar/Sidebar.tsx';

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
          .order('created_at', {ascending: true})

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

      const subscribe = supabase
        .channel('messages_chanel')
        .on(
          'postgres_changes',
          {event: 'INSERT', schema: 'public', table: 'messages'},
          (payload) => {
            console.log('message: ', payload.new);
            setMessages((prev) => {
              const isDuplicate = prev.find(m => m.id === (payload.new.id));
              if (isDuplicate) return prev;
              return [...prev, payload.new as IMessageData]
            })
          }
        )
        .subscribe();
      return () => {
        void supabase.removeChannel(subscribe);
      };

  }, [])

  const addMessage = async (text: string) => {
    try {
      const {data: userData, error: userError} = await supabase
        .auth
        .getUser()
      if (userError || !userData) {
        alert(`Error: ${userError?.message}`);
        return
      }
      const {error} = await supabase
        .from('messages')
        .insert([
          {message: text, sender: userData.user?.email}
        ])
        .select();
      if (error) {
        console.log('error', error);
      }
    } catch (err) {
      console.error(err);
    }
  }



  return (
    <>
      <MessageList messages={messages}/>
      <MessageInput onSendMessage={addMessage}/>
      <Sidebar/>
    </>
  )
}

export default ChatWindow