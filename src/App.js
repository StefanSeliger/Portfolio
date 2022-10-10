// General
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';

// Components 
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';

// Pages
import Main from './pages/main.js';
import About from './pages/about.js';
import CV from './pages/cv.js';
import Portfolio from './pages/portfolio.js';
import Contact from './pages/contact.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
