import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/intro.mp4" type="video/mp4" />
          {/* Fallback image if video fails */}
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80" alt="Healthcare background" className="w-full h-full object-cover" />
        </video>
        <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up">
          Exceptional Care Starts with <span className="text-blue-400">Exceptional Staffing</span>
        </h1>
        <p className="text-lg md:text-xl text-blue-50 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
          SHC addresses the growing demand for telehealth and on-site healthcare services by providing professionals who specialize in remote and clinical patient care.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-300">
          <button className="btn-primary flex items-center group">
            Start Your Job Search
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button className="text-white font-bold hover:text-blue-300 transition-colors">
            Learn More About Our Services
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 rounded-full bg-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-3 rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
