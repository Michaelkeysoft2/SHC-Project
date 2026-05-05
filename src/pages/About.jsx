import React from 'react';
import { CheckCircle2, Award, Zap, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/about.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in-up">Who We Are</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Leading the way in healthcare staffing with a commitment to quality and integrity.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Empowering Healthcare Professionals</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <strong>SHC</strong> is a leading healthcare staffing agency catering to all specialty areas within the healthcare sector. We specialize in recruiting, placing, and forming strong partnerships with travel nurses, healthcare professionals, and other medical experts.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our distinction lies in our commitment to tailoring high-paying travel assignments that precisely match the unique skillsets of each healthcare professional we work with.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                At SHC, we are driven to provide the best possible experience and take pride in being an integral part of every healthcare professional’s journey.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img src="/lab.jpg" alt="Lab" className="rounded-3xl shadow-2xl" />
            </div>
          </div>

          {/* Differentiators */}
          <div className="bg-blue-50 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2 order-2 lg:order-1">
                <img src="/medlab.png" alt="Medical Lab" className="w-full h-auto" />
             </div>
             <div className="lg:w-1/2 order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">What Sets Us Apart?</h2>
                <ul className="space-y-6">
                  {[
                    "Focus on quality over quantity",
                    "Continuous credential monitoring via BlueSky",
                    "Proactive interaction and performance monitoring",
                    "Industry experts managing top-tier facilities",
                    "24/7/365 self-service portal for urgent needs"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-blue-600 p-1 rounded-full text-white mr-4 mt-1">
                        <CheckCircle2 size={18} />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Expertise Stats */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-5xl font-bold text-blue-400 mb-2">15+</p>
              <p className="text-gray-400 uppercase tracking-widest text-sm">Years of Experience</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-400 mb-2">100%</p>
              <p className="text-gray-400 uppercase tracking-widest text-sm">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-400 mb-2">24/7</p>
              <p className="text-gray-400 uppercase tracking-widest text-sm">Clinical Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Detail */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">What We Do</h2>
              <p className="text-gray-600 mb-6 text-lg">
                As a healthcare staffing agency, SHC plays a crucial role in connecting healthcare professionals with facilities in need of their services.
              </p>
              <p className="text-gray-600 mb-10 text-lg">
                We take pride in our partnership with healthcare organizations, collaborating to foster healthier communities through skilled nursing and allied healthcare professionals.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 border border-gray-100 rounded-2xl bg-gray-50">
                   <Users className="text-blue-600 mb-4" size={32} />
                   <h4 className="font-bold mb-2">Skilled Nursing</h4>
                   <p className="text-sm text-gray-500">Expertly vetted and experienced nurses.</p>
                </div>
                <div className="p-6 border border-gray-100 rounded-2xl bg-gray-50">
                   <ShieldCheck className="text-blue-600 mb-4" size={32} />
                   <h4 className="font-bold mb-2">Allied Health</h4>
                   <p className="text-sm text-gray-500">Specialized diagnostic and therapeutic roles.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="/nurse.png" alt="Nurse" className="rounded-2xl mt-8" />
              <img src="/npager.png" alt="Pager" className="rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
