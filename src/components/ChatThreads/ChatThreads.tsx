import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../api/apiConfig';
import './ChatThreads.scss';

export const ChatThreads = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const getThreads = async () => {
      const res = await axios.get(
        `${BASE_URL}/users/63f6e28a6f800b32b57057b8/messages`
      );
      setThreads(res.data.combinedThreads);
      console.log(threads);
    };
    getThreads();
  }, []);

  return (
    <div className='chat-threads-container'>
      <h1>Messages</h1>
      <div>
        {threads.map((thread: any) => (
          <div key={thread._id} className='thread-grid'>
            <h3>{thread.lastActive}</h3>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};
