import React from 'react';
import { Briefcase, MapPin, Search, Filter, ArrowRight } from 'lucide-react';

const jobPostings = [
  { title: 'Registered Nurse (RN)', location: 'New York, NY', type: 'Travel' },
  { title: 'Physical Therapist', location: 'Ibadan, OYO', type: 'Contract' },
  { title: 'Medical Technologist', location: 'Remote', type: 'Per Diem' },
  { title: 'Surgical Scrub Tech', location: 'Jersey City, NJ', type: 'Permanent' },
];

const Careers = () => {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-indigo-900 opacity-80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 animate-fade-in-up">Join Our Team</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
            Build a rewarding career in healthcare. We connect talented professionals with exceptional opportunities.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
            <h2 className="text-3xl font-bold">Featured Opportunities</h2>
            <div className="flex bg-gray-50 border border-gray-200 rounded-full px-6 py-3 items-center w-full md:w-auto max-w-md">
              <Search className="text-gray-400 mr-3" size={20} />
              <input type="text" placeholder="Search roles or locations..." className="bg-transparent border-none focus:ring-0 w-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {jobPostings.map((job, index) => (
              <div key={index} className="p-8 border border-gray-100 rounded-3xl bg-gray-50 hover:bg-blue-50 transition-all flex flex-col md:flex-row md:items-center justify-between group">
                <div className="flex items-center gap-6 mb-4 md:mb-0">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-600">
                    <Briefcase size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                    <div className="flex items-center text-gray-500 mt-1">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm font-medium">{job.location}</span>
                      <span className="mx-3 text-gray-300">•</span>
                      <span className="text-sm font-medium uppercase tracking-wider">{job.type}</span>
                    </div>
                  </div>
                </div>
                <button className="flex items-center text-blue-600 font-bold hover:gap-3 transition-all">
                  Apply Now <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="btn-outline">View All Openings</button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Work with SHC?</h2>
              <div className="space-y-8">
                {[
                  { title: 'Top-tier Facilities', desc: 'Work at the best medical centers and clinics.' },
                  { title: 'Competitive Pay', desc: 'Industry-leading compensation packages and benefits.' },
                  { title: 'Flexible Freedom', desc: 'Choose assignments that fit your lifestyle and goals.' },
                  { title: 'Career Growth', desc: 'Support and resources to help you advance your skills.' }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="w-1.5 h-12 bg-blue-600 rounded-full shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
               <img src="/nurse.png" alt="Nurse" className="rounded-3xl shadow-2xl relative z-10" />
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
