
import React from 'react';
import { LEADERSHIP_DATA } from '../constants';

const About: React.FC = () => {
  const coreValues = [
    { title: 'Discipline', desc: 'The bedrock of our institution; we believe character is built through consistent habits.', icon: '🛡️' },
    { title: 'Compassion', desc: 'Developing empathy for the community and environment through social service programs.', icon: '❤️' },
    { title: 'Dedication', desc: 'A tireless commitment to teaching and learning, from faculty to students.', icon: '🔥' },
    { title: 'Integrity', desc: 'Ensuring honesty and fairness in all academic and personal pursuits.', icon: '⚖️' }
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Page Header */}
      <section className="relative h-[50vh] flex items-center justify-center px-6 overflow-hidden">
        <img
          src="https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661462.jpg?semt=ais_hybrid&w=740&q=80"
          className="absolute inset-0 w-full h-full object-cover"
          alt="School Main Campus Building"
        />
        <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-[1px]" />
        <div className="relative z-10 text-center space-y-6">
          <span className="text-blue-200 font-black uppercase tracking-[0.3em] text-sm">Our Legacy Since 1995</span>
          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight">Roots in Values, <br />Wings for Dreams</h1>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full" />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white dark:bg-slate-900 p-12 rounded-[3.5rem] shadow-sm border border-slate-100 dark:border-slate-800 space-y-6 flex flex-col justify-center hover:shadow-xl transition-all">
          <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-[2rem] flex items-center justify-center text-4xl">👁️</div>
          <h2 className="text-4xl font-bold">Our Vision</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xl">
            To be a center of excellence in education, fostering students who are intellectually competent, morally upright, socially committed, and spiritually inspired to lead a better Tamil Nadu and India.
          </p>
        </div>
        <div className="bg-blue-700 p-12 rounded-[3.5rem] shadow-2xl text-white space-y-6 flex flex-col justify-center hover:scale-[1.02] transition-transform">
          <div className="w-20 h-20 bg-white/20 rounded-[2rem] flex items-center justify-center text-4xl">🚀</div>
          <h2 className="text-4xl font-bold">Our Mission</h2>
          <p className="text-blue-50 leading-relaxed text-xl">
            To provide high-quality education through the Samacheer Kalvi framework, balanced with modern STEM technology, sports parity, and a deep-rooted focus on holistic individual growth.
          </p>
        </div>
      </section>

      {/* Detailed History */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-6 bg-blue-600/10 rounded-[4rem] blur-3xl group-hover:bg-blue-600/20 transition-all" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="data:image/jpeg;base64,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" className="w-full h-full object-cover aspect-[4/5]" alt="St. Xavier's Academic Block" />
            </div>
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold leading-tight">A Legacy of <br /><span className="text-blue-700">Service & Excellence</span></h2>
              <div className="w-24 h-2 bg-blue-700 rounded-full" />
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              What began with just 4 classrooms and 50 eager students in 1995 has blossomed into a landmark institution in Madurai. St. Xavier's Matriculation H.S.S was born from a vision to provide world-class education accessible to all sections of society.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              Over the last 29 years, we have achieved 100% board results consistently, while integrating state-level sports championships and national science awards into our DNA. We are not just a school; we are a community that believes in the transformative power of education.
            </p>
            <div className="flex gap-10">
              <div>
                <h4 className="text-4xl font-black text-blue-700">1995</h4>
                <p className="text-xs uppercase font-bold text-slate-400 mt-1 tracking-widest">Year Founded</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-blue-700">15</h4>
                <p className="text-xs uppercase font-bold text-slate-400 mt-1 tracking-widest">Acre Campus</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-blue-700">8k+</h4>
                <p className="text-xs uppercase font-bold text-slate-400 mt-1 tracking-widest">Alumni Global</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Expansion */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The SX Code</h2>
            <p className="text-slate-500 text-lg">Four fundamental values that every Xavierite carries into the world.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {coreValues.map((value, i) => (
              <div key={i} className="p-10 bg-white dark:bg-slate-900 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-800 text-center space-y-6">
                <div className="text-5xl">{value.icon}</div>
                <h3 className="text-2xl font-bold">{value.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Gallery */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">Our Visionary Leadership</h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto">A combined experience of over 60 years in academic management and child welfare.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {LEADERSHIP_DATA.map((leader, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 p-12 rounded-[4rem] border border-slate-100 dark:border-slate-800 text-center space-y-8 shadow-sm group hover:shadow-2xl transition-all">
              <div className="relative w-40 h-40 mx-auto">
                <div className="absolute inset-0 bg-blue-700 rounded-[2.5rem] rotate-6 opacity-10 group-hover:rotate-12 transition-transform" />
                <img src={leader.img} alt={leader.name} className="relative w-40 h-40 rounded-[2.5rem] mx-auto object-cover shadow-lg border-2 border-white dark:border-slate-800" />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">{leader.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-black uppercase text-xs tracking-[0.3em]">{leader.role}</p>
              </div>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed italic text-lg">"{leader.bio}"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
