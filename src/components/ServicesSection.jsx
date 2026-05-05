import React from 'react';
import { 
  UserPlus, 
  Users, 
  Stethoscope, 
  HeartPulse, 
  Activity, 
  Clock, 
  Globe, 
  ClipboardCheck, 
  Briefcase, 
  BarChart3, 
  GraduationCap, 
  UserCog 
} from 'lucide-react';

const services = [
  {
    title: 'Temporary Staffing',
    description: 'Short-term staff to address seasonal demand or peak patient loads.',
    icon: <Users className="text-blue-600" size={32} />,
  },
  {
    title: 'Permanent Placement',
    description: 'Fill critical and ongoing positions with qualified healthcare staff.',
    icon: <UserPlus className="text-blue-600" size={32} />,
  },
  {
    title: 'Locum Tenens',
    description: 'Placement of temporary professionals to cover absences or shortages.',
    icon: <Stethoscope className="text-blue-600" size={32} />,
  },
  {
    title: 'Travel Nursing',
    description: 'Assignments in different locations, offering flexibility and varied experiences.',
    icon: <Globe className="text-blue-600" size={32} />,
  },
  {
    title: 'Allied Health Staffing',
    description: 'Physical therapists, radiologic technologists, and specialized roles.',
    icon: <HeartPulse className="text-blue-600" size={32} />,
  },
  {
    title: 'Per Diem Staffing',
    description: 'On-call staffing solutions for facilities needing staff on short notice.',
    icon: <Clock className="text-blue-600" size={32} />,
  },
];

const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
    <div className="mb-4 bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
      {React.cloneElement(icon, { className: 'group-hover:text-white transition-colors duration-300' })}
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
    <button className="mt-6 text-blue-600 font-semibold flex items-center hover:text-blue-800">
      Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
    </button>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Our Services</h2>
        <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">Staffing Solutions for Your Success</h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          SHC identifies and recruits qualified healthcare professionals through thorough screening and verification.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
