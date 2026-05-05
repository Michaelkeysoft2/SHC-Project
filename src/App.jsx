import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Clients from './pages/Clients';

// Placeholder pages for now
const SearchJobs = () => <div className="pt-32 pb-20 text-center text-3xl font-bold">Search Jobs Page Coming Soon</div>;
const Dashboard = () => <div className="pt-32 pb-20 text-center text-3xl font-bold">Dashboard Coming Soon</div>;

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/search-jobs" element={<SearchJobs />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
