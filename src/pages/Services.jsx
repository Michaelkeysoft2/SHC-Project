import React from 'react';
import ServicesSection from '../components/ServicesSection';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <video autoPlay muted loop playsinline className="w-full h-full object-cover">
            <source src="/intro.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in-up">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Comprehensive staffing solutions tailored to the needs of modern healthcare facilities.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img src="/nurse.png" alt="Nurse" className="rounded-3xl shadow-xl z-10 relative" />
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-100 rounded-3xl -z-10"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-left">What We Do</h2>
              <p className="text-lg text-gray-600 mb-6 text-left">
                SHC takes pride in its partnership with healthcare organizations, collaborating to foster healthier communities by delivering impactful services through our skilled nursing and allied health care professionals.
              </p>
              <p className="text-lg text-gray-600 mb-10 text-left">
                We offer highly skilled and qualified candidates, backed by more than 15 years of healthcare staffing experience. Our team of staffing experts ensures meticulous vetting and personalized matching for our clients.
              </p>
              <div className="space-y-4">
                {["Skilled Nursing", "Allied Healthcare", "Meticulous Vetting", "Personalized Matching"].map((item) => (
                  <div key={item} className="flex items-center space-x-3 text-gray-700 font-semibold">
                    <CheckCircle2 className="text-blue-600" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <ServicesSection />

      {/* Recruitment Process Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">Our Recruitment & Placement Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Thorough Screening", desc: "Detailed background and credential checks." },
              { step: "02", title: "In-depth Interviews", desc: "Assessing skills and cultural fit." },
              { step: "03", title: "Credential Verification", desc: "Ensuring all licenses are up-to-date." },
              { step: "04", title: "Placement", desc: "Matching the right professional to the right role." }
            ].map((item, i) => (
              <div key={i} className="relative p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                <span className="text-6xl font-black text-white/10 absolute top-4 right-4">{item.step}</span>
                <h4 className="text-xl font-bold mb-4 relative z-10">{item.title}</h4>
                <p className="text-blue-100/70 relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Promo Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-gray-50 rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between border border-gray-100">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Available Jobs</h2>
                <p className="text-lg text-gray-600 max-w-xl">
                  SHC assists healthcare facilities in the recruitment and placement of permanent staff, helping to fill critical and ongoing positions within the organization.
                </p>
              </div>
              <button className="btn-primary flex items-center group whitespace-nowrap">
                See Available Jobs
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
