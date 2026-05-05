import React from 'react';
import { Users, Clock, ShieldCheck, Building2, Landmark, Hospital, Activity, Heart, ArrowRight } from 'lucide-react';

const clientServices = [
  { title: 'Hospitals', desc: 'Reliable staffing solutions for hospitals and health systems.', icon: <Hospital size={32} /> },
  { title: 'Nursing Homes', desc: 'Qualified nurses and caregivers for assisted living facilities.', icon: <Heart size={32} /> },
  { title: 'Clinics', desc: 'Flexible staffing solutions for clinics and outpatient centers.', icon: <Activity size={32} /> },
  { title: 'Private Practices', desc: 'Recruitment of skilled healthcare professionals.', icon: <Building2 size={32} /> },
  { title: 'Government Facilities', desc: 'Workforce solutions for public health institutions.', icon: <Landmark size={32} /> },
  { title: 'Rehabilitation Centers', desc: 'Specialized professionals for therapy and rehab support.', icon: <Users size={32} /> },
];

const Clients = () => {
  return (
    <div className="pt-20">
      <section className="relative py-32 bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 animate-fade-in-up">Healthcare Partners</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
            We partner with leading healthcare facilities to provide quality staffing solutions that ensure exceptional patient care.
          </p>
          <button className="btn-primary">Request Staff Now</button>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Who We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse pool of healthcare professionals is ready to support various medical environments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientServices.map((service, index) => (
              <div key={index} className="p-8 border border-gray-100 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all group">
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Why Clients Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Qualified Staff', desc: 'We provide rigorously vetted and trained professionals.', icon: <Users className="text-blue-600" size={40} /> },
              { title: 'Fast Hiring', desc: 'Quick placement of professionals to fill critical gaps.', icon: <Clock className="text-blue-600" size={40} /> },
              { title: 'Compliance', desc: 'All staff meet regulatory and licensing requirements.', icon: <ShieldCheck className="text-blue-600" size={40} /> },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="bg-blue-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Staffing Support?</h2>
                <p className="text-xl text-blue-100 mb-10">Let us help you find the right talent for your facility.</p>
                <button className="px-10 py-4 bg-white text-blue-600 font-extrabold rounded-full hover:bg-blue-50 transition-all flex items-center mx-auto">
                  Contact Us <ArrowRight className="ml-2" />
                </button>
             </div>
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
