import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
