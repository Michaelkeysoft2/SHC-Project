import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Clients', path: '/clients' },
    { name: 'Careers', path: '/careers' },
    { name: 'Search Jobs', path: '/search-jobs' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className={`text-2xl font-bold ${scrolled ? 'text-blue-900' : 'text-white'}`}>SHC</span>
              <span className={`ml-2 text-sm font-medium ${scrolled ? 'text-blue-600' : 'text-blue-200'}`}>Advantage</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? (scrolled ? 'text-blue-600' : 'text-white border-b-2 border-white')
                      : (scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white')
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/dashboard"
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  scrolled 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white text-blue-900 hover:bg-blue-50'
                }`}
              >
                Dashboard
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-600 focus:outline-none`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/dashboard"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-bold text-blue-600 hover:bg-blue-50"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
