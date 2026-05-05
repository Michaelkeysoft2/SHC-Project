import React from 'react';
import { Globe, Camera, Briefcase, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">SHC</span>
              <span className="ml-2 text-sm font-medium text-blue-400">Advantage</span>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed">
              SHC is a leading healthcare staffing agency catering to all specialty areas within the healthcare sector.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="hover:text-blue-400 transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-pink-400 transition-colors"><Camera size={20} /></a>
              <a href="#" className="hover:text-blue-300 transition-colors"><MessageCircle size={20} /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Briefcase size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
              <li><Link to="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link to="/clients" className="hover:text-blue-400 transition-colors">Clients</Link></li>
              <li><Link to="/search-jobs" className="hover:text-blue-400 transition-colors">Search Jobs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Get In Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="mr-4 text-blue-400 flex-shrink-0" size={20} />
                <span>3, BARIKA, OPPO U.I SECOND GATE, IBADAN, OYO STATE</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-4 text-blue-400 flex-shrink-0" size={20} />
                <span>+234 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-4 text-blue-400 flex-shrink-0" size={20} />
                <span>info@shcadvantage.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-gray-400 mb-6">Stay updated with latest news and opportunities.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 text-white"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 SHC Advantage Services. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
