
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
          src="assets/school maincampus building.png"
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
              <img src="assets/academic book.png" className="w-full h-full object-cover aspect-[4/5]" alt="St. Xavier's Academic Block" />
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
