import './Messages.scss';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../api/apiConfig';
import axios from 'axios';
import ScrollableFeed from 'react-scrollable-feed';

export const Messages = () => {
  const [messages, setMessages] = useState<
    {
      status: string;
      text: string;
      timestamp: string;
      sender: { email: string };
      fileUrl: string;
      _id: string;
    }[]
  >([]);
  const [id, setId] = useState('jasonmar08@gmail.com');

  useEffect(() => {
    const getMessages = async () => {
      const res = await axios.get(
        `${BASE_URL}/63f9aff29c6b694e59040161/groupChats/64055e804a5e7db182d5bd94`
      );
      setMessages(res.data.combinedMessages);
      console.log(res);
    };
    getMessages();
  }, []);

  return (
    <div className='messages-container'>
      <ScrollableFeed>
        <div>
          {messages.map(({ status, text, timestamp, sender, fileUrl, _id }) => (
            <div>
              <div
                key={_id}
                className={
                  sender.email === id ? 'message-right' : 'message-left'
                }
              >
                <div>
                  <p>{sender.email}</p>
                  {text ? <h4>{text}</h4> : <img src={fileUrl} alt='image' />}
                  <p>{status}</p>
                </div>
              </div>
              <p>
                {status === 'sent' ? '✅' : '❌'} {timestamp}
              </p>
            </div>
          ))}
        </div>
        <input placeholder={`Message to Teddy...`}></input>
        <button>Send</button>
      </ScrollableFeed>
    </div>
  );
};
