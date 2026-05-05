import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import Values from '../components/Values';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <main>
      <Hero />
      
      {/* Short About Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80" 
                alt="Medical Professionals" 
                className="relative z-10 rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center space-x-4 animate-bounce-slow">
                <div className="bg-blue-600 p-3 rounded-full text-white">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                  <p className="text-gray-500 text-sm">Verified Staff</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4 text-left">About SHC</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 text-left leading-tight">
                Empowering Healthcare through <span className="text-blue-600">Strategic Staffing</span>
              </h3>
              <p className="text-lg text-gray-600 mb-6 text-left">
                SHC is a leading healthcare staffing agency that caters to all specialty areas within the healthcare sector. Our focus lies in recruiting, placing, and forming partnerships with travel nurses and various healthcare professionals.
              </p>
              <p className="text-lg text-gray-600 mb-10 text-left">
                At SHC, we address the dynamic staffing needs of healthcare organizations, ensuring they have access to qualified and reliable professionals.
              </p>
              
              <ul className="space-y-4 mb-10">
                {['Credentialed Experts', 'Flexible Assignments', '24/7 Support', 'Nationwide Network'].map((item) => (
                  <li key={item} className="flex items-center text-gray-700 font-semibold">
                    <CheckCircle2 className="text-blue-600 mr-3" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              
              <button className="btn-outline flex items-center group">
                Learn More About Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      
      <Values />

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Advance Your Healthcare Career?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join our network of elite healthcare professionals and find assignments that match your skills and lifestyle.
          </p>
          <button className="px-10 py-5 bg-white text-blue-600 font-extrabold rounded-full hover:bg-blue-50 transition-all shadow-2xl hover:shadow-white/20 active:scale-95">
            Join Our Team Today
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
