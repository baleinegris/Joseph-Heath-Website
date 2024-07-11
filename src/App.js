import './App.css';
import Navbar from './components/navbar';
import Homepage from './pages/homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="http://individual.utoronto.ca/jheath/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
