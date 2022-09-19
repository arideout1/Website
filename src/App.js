import './App.css';
import Homepage from './components/MainPages/Homepage';
import About from './components/MainPages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/MainPages/Contact';
import Portfolio from './components/MainPages/Portfolio';
import Hobbies from './components/MainPages/Hobbies';
import Palantir from './components/PorfolioPages/Palantir';
import MMS from './components/PorfolioPages/MMS';
import AMP from './components/PorfolioPages/AMP';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/portfolio/palantir" element={<Palantir />} />
        <Route path="/portfolio/mms" element={<MMS />} />
        <Route path="/portfolio/amp" element={<AMP />} />
      </Routes>
    </Router>);
}

export default App;
