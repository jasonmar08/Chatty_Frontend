import { ChatThreads } from '../../components/ChatThreads/ChatThreads';
import { Messages } from '../../components/Messages/Messages';
import { ChatDetails } from '../../components/ChatDetails/ChatDetails';
import './ChatMain.scss';
import { AccountBar } from '../../components/AccountBar/AccountBar';
import { Contacts } from '../../components/Contacts/Contacts';
import { ChatBar } from '../../components/ChatBar/ChatBar';

export const ChatMain = () => {
  return (
    <div className='main-screen-container'>
      <div className='sidebar'></div>
      <section className='left-pane'>
        <AccountBar />
        <Contacts />
        <ChatThreads />
      </section>
      <section className='middle-pane'>
        <ChatBar />
        <Messages />
      </section>
      <section className='right-pane'>
        <div className='right-bar'>
          <h1>Contact detail</h1>
        </div>
        <ChatDetails />
      </section>
    </div>
  );
};
