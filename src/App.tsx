import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import './App.scss';
import { ChatMain } from './pages/ChatMain/ChatMain';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:userId/chatroom' element={<ChatMain />} />
      </Routes>
    </div>
  );
}

export default App;
