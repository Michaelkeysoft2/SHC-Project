import React from 'react';
import { Search, MapPin, Filter, ArrowRight } from 'lucide-react';

const jobs = [
  { title: 'Registered Nurse (RN)', location: 'New York, NY', type: 'Travel' },
  { title: 'Medical Assistant', location: 'Los Angeles, CA', type: 'Full-time' },
  { title: 'Caregiver', location: 'Houston, TX', type: 'Part-time' },
  { title: 'Therapist', location: 'Miami, FL', type: 'Contract' },
  { title: 'Physical Therapist', location: 'Ibadan, OYO', type: 'Permanent' },
];

const SearchJobs = () => {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 animate-fade-in-up">Find Your Next Job</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
            Search thousands of healthcare opportunities and find the perfect match for your career goals.
          </p>

          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/20 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={20} />
                <input 
                  type="text" 
                  placeholder="Job title, specialty..." 
                  className="w-full bg-white/10 border-white/20 rounded-2xl py-4 pl-12 text-white placeholder:text-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={20} />
                <input 
                  type="text" 
                  placeholder="Location, zip code..." 
                  className="w-full bg-white/10 border-white/20 rounded-2xl py-4 pl-12 text-white placeholder:text-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                />
              </div>
              <button className="bg-white text-blue-900 font-extrabold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all shadow-lg active:scale-95">
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Latest Openings</h2>
            <button className="flex items-center text-blue-600 font-bold hover:gap-2 transition-all">
              <Filter className="mr-2" size={20} /> Filters
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {jobs.map((job, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all flex flex-col md:flex-row md:items-center justify-between group">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">{job.title}</h3>
                  <div className="flex items-center text-gray-500">
                    <MapPin size={16} className="mr-2" />
                    <span>{job.location}</span>
                    <span className="mx-3">•</span>
                    <span className="font-medium text-blue-600/70">{job.type}</span>
                  </div>
                </div>
                <button className="mt-4 md:mt-0 flex items-center bg-white border border-gray-200 px-6 py-3 rounded-xl font-bold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all group/btn">
                  Apply Now <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchJobs;
