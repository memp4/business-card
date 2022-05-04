import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Contact from './components/Contact';
import About from './components/About';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="business-card/" element={<Main />} />
        <Route path="business-card/about" element={<About />} />
        <Route path="business-card/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
