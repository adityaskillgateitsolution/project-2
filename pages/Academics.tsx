
import React from 'react';

const Academics: React.FC = () => {
  const topStudents = [
    {
      name: 'Selvan. K. Rahul',
      rank: 'State 3rd Rank',
      mark: '494/500',
      percent: '98.8%',
      img: 'assets/1st rank.png',
      class: 'Class XII (Biology/Maths)'
    },
    {
      name: 'Selvi. M. Deepa',
      rank: 'School 2nd Rank',
      mark: '491/500',
      percent: '98.2%',
      img: 'assets/1st rank.png',
      class: 'Class XII (Computer Science)'
    },
    {
      name: 'Selvan. S. Karthik',
      rank: 'School 3rd Rank',
      mark: '489/500',
      percent: '97.8%',
      img: 'assets/1st rank.png',
      class: 'Class XII (Biology/Maths)'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Samacheer Kalvi & Beyond</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">Following the equitable Tamil Nadu State Education System, enriched with integrated competitive foundations.</p>
      </div>

      {/* Curriculum Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Academic Spectrum</h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full" />
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed text-left">
            Our curriculum adheres strictly to the Tamil Nadu State Board (Matriculation) syllabus, renowned for its strong conceptual grounding in core sciences and languages. We extend this with the 'X-Factor' modules in communication and logic.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {[
              { title: 'Mathematics', desc: 'Advanced analytical and problem-solving skills.' },
              { title: 'Integrated Science', desc: 'Conceptual physics, chemistry & bio-diversity.' },
              { title: 'Language Arts', desc: 'Tamil, English & optional Hindi/French.' },
              { title: 'Social Studies', desc: 'Focus on Indian heritage & global civics.' },
              { title: 'Computer Tech', desc: 'Hands-on coding, AI & Digital Literacy.' },
              { title: 'NEET Foundation', desc: 'Early prep for national entrance exams.' }
            ].map((sub, i) => (
              <div key={i} className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all">
                <h4 className="font-bold text-blue-700 dark:text-blue-500 mb-2">{sub.title}</h4>
                <p className="text-xs text-slate-500">{sub.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative text-left">
          <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] blur-2xl" />
          <div className="relative bg-blue-50 dark:bg-blue-900/10 p-12 rounded-[3rem] border border-blue-100 dark:border-blue-800 space-y-8">
            <h2 className="text-3xl font-bold">The Pedagogy</h2>
            <ul className="space-y-8">
              <li className="flex gap-6">
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center justify-center text-3xl shrink-0">🔬</div>
                <div>
                  <h4 className="font-bold text-xl">Inquiry-Based Learning</h4>
                  <p className="text-slate-500 text-sm mt-1">Students are encouraged to ask "Why?" and "How?", moving beyond rote memorization to deep logic.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center justify-center text-3xl shrink-0">🤝</div>
                <div>
                  <h4 className="font-bold text-xl">Collaborative Projects</h4>
                  <p className="text-slate-500 text-sm mt-1">Inter-disciplinary group work helps build leadership, team-spirit, and real-world execution skills.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center justify-center text-3xl shrink-0">📊</div>
                <div>
                  <h4 className="font-bold text-xl">Skill Assessments</h4>
                  <p className="text-slate-500 text-sm mt-1">Evaluation is based on portfolios, presentations, and practical skills alongside board exams.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Academic Highlights Photo Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="h-80 rounded-[2.5rem] overflow-hidden shadow-lg group">
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="Primary Classes" />
        </div>
        <div className="h-80 rounded-[2.5rem] overflow-hidden shadow-lg group translate-y-8">
          <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="Laboratory Work" />
        </div>
        <div className="h-80 rounded-[2.5rem] overflow-hidden shadow-lg group">
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="Computer Lab" />
        </div>
      </section>

      {/* Board Results */}
      <section className="bg-slate-900 text-white rounded-[4rem] p-12 md:p-24 text-center space-y-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <h2 className="text-5xl font-bold">Public Exam Performance</h2>
        <p className="text-slate-400 max-w-3xl mx-auto text-lg italic">"A consistent track record of 100% first-class passes in SSLC and Higher Secondary examinations for 18 consecutive years."</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
          <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10">
            <h3 className="text-6xl font-black text-blue-500 mb-4">490+</h3>
            <p className="text-xl font-bold">SSLC Toppers</p>
            <p className="text-sm opacity-60 mt-2">Scoring above 95% consistently</p>
          </div>
          <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10">
            <h3 className="text-6xl font-black text-blue-500 mb-4">1180+</h3>
            <p className="text-xl font-bold">HSC Achievement</p>
            <p className="text-sm opacity-60 mt-2">Average score in major streams</p>
          </div>
          <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10">
            <h3 className="text-6xl font-black text-blue-500 mb-4">95%</h3>
            <p className="text-xl font-bold">Medical/Eng. Entry</p>
            <p className="text-sm opacity-60 mt-2">Professional course placement rate</p>
          </div>
        </div>
      </section>

      {/* Top Achievers Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold">Our Shining Stars</h2>
          <p className="text-slate-500 text-lg">Top Performers of the Public Examination 2023-24</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {topStudents.map((student, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all group text-left">
              <div className="relative mb-8">
                <img src={student.img} alt={student.name} className="w-full aspect-square object-cover rounded-[2.5rem] shadow-lg group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-blue-700 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                  {student.rank}
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-2xl font-bold text-slate-800 dark:text-white leading-tight">{student.name}</h4>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-bold mt-1">{student.class}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    Mark: {student.mark}
                  </span>
                  <span className="bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-xl text-sm font-black flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    {student.percent}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Academics;
