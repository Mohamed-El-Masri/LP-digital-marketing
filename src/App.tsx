import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import PartnersPage from './components/PartnersPage';
import NumbersPage from './components/NumbersPage';
import PortfolioPage from './components/PortfolioPage';
import OffersPage from './components/OffersPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/numbers" element={<NumbersPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/offers" element={<OffersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
