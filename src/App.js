import './App.css';
import Navbar from './components/general/navbar.js';
import Homepage from './pages/homepage.js';
import Books from './pages/books.js';
import Articles from './pages/articles.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/general/footer.js';
import ScrollToTop from './components/general/scrollToTop.js';
import Commentary from './pages/commentary.js';
import Contact from './pages/contact.js';

function App() {
  return (
    <BrowserRouter basename="/jheath">
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="books" element={<Books/>}/>
        <Route path="articles" element={<Articles/>}/>
        <Route path="commentary" element={<Commentary/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='*' element={<Homepage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;