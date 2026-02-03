
import React from 'react';
import { Page } from '../types';
import { ACHIEVEMENTS, TESTIMONIALS } from '../constants';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 pb-24 text-left">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-950 dark:to-blue-950/20 transition-colors duration-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full -z-10 animate-pulse" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold tracking-wider uppercase">
              Admissions 2024 - 2025 Now Open
            </span>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] tracking-tight">
              Crafting <br /> <span className="text-blue-700 dark:text-blue-500">Character</span> & <br /> Excellence.
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              At St. Xavier's, we believe in holistic development. We combine the rigorous Samacheer Kalvi curriculum with modern technology and moral ethics to prepare our students for global challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => onNavigate('admissions')}
                className="px-10 py-5 bg-blue-700 hover:bg-blue-800 text-white rounded-[2rem] font-bold text-lg shadow-2xl shadow-blue-500/30 transition-all hover:scale-105 active:scale-95"
              >
                Apply for Admission
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-10 py-5 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-[2rem] font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95"
              >
                Explore Legacy
              </button>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] relative group">
              <img
                src="https://stclaretemschoolchimur.edu.in/wp-content/uploads/2023/09/Chimur-Website-Photos.jpg"
                alt="Students laughing and learning"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
            </div>

            <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 max-w-[240px]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-2xl flex items-center justify-center font-bold text-2xl">
                  100%
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Board Results</p>
                  <p className="font-bold text-lg">X & XII</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Young Scholars', val: '2,950+' },
            { label: 'Dedicated Staff', val: '145+' },
            { label: 'Educational Legacy', val: '29 Yrs' },
            { label: 'District Ranks', val: '45+' }
          ].map((stat, i) => (
            <div key={i} className="text-center p-10 bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-4xl font-bold text-blue-700 dark:text-blue-500 mb-1 tracking-tight">{stat.val}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl font-bold">Why St. Xavier's?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">We focus on building a strong foundation for both life and career.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'NEET/JEE Coaching', desc: 'Specialized foundational courses starting from Class 6, led by experienced faculty to ensure national competitive success.', icon: '🎓' },
              { title: 'Moral Education', desc: 'Developing strong ethical leaders through daily value-based sessions and civic responsibility projects.', icon: '🕊️' },
              { title: 'Modern Pedagogy', desc: 'A blend of activity-based learning and digital classrooms to keep students engaged and curious.', icon: '💡' }
            ].map((item, i) => (
              <div key={i} className="group p-12 bg-white dark:bg-slate-900 rounded-[40px] border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 hover:bg-blue-50/10 transition-all duration-500">
                <div className="text-5xl mb-8 transform group-hover:scale-125 transition-transform duration-300 origin-left">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto bg-blue-700 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mt-32" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mb-48" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight">Ready to begin the journey?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto opacity-80">Join a community where every child is a star. Admissions are open for all grades.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => onNavigate('admissions')} className="px-10 py-5 bg-white text-blue-700 rounded-[2rem] font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg shadow-black/10">Apply Online</button>
              <button onClick={() => onNavigate('contact')} className="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-[2rem] font-bold text-lg hover:bg-white/10 transition-colors">Campus Visit</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
