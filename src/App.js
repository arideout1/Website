import './App.css';
import Homepage from './components/Homepage';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact';
import Web3 from './components/Web3';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/web3" element={<Web3 />} />

      </Routes>
    </Router>);
}

export default App;
