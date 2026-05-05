import React from 'react';
import { Target, Heart, Award } from 'lucide-react';

const Values = () => {
  const valueItems = [
    {
      title: 'Our Mission',
      content: 'We aim to collaborate with healthcare institutions to deliver patient and family care that is based on partnership, intelligent, effective, efficient, and timely services.',
      icon: <Target className="text-white" size={32} />,
      color: 'bg-blue-600',
    },
    {
      title: 'Our Vision',
      content: 'We aim to set the standard for the institutions we serve by delivering services that offer a distinct advantage in the healthcare community.',
      icon: <Award className="text-white" size={32} />,
      color: 'bg-indigo-600',
    },
    {
      title: 'Our Values',
      content: 'Guided by the principles of integrity and respect, we uphold a reputation for outstanding healthcare services and fostering self-worth in each individual.',
      icon: <Heart className="text-white" size={32} />,
      color: 'bg-blue-800',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Core Principles</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900">The Values We Live By</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {valueItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`${item.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transform -rotate-6 hover:rotate-0 transition-transform duration-300 shadow-xl`}>
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed italic">"{item.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
