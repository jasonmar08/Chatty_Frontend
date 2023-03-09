import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <main>Hello</main>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
