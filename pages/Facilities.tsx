
import React from 'react';
import { FACILITIES_DATA } from '../constants';

const Facilities: React.FC = () => {
  const extraFacilities = [
    {
      title: 'Smart Learning Classrooms',
      desc: 'Every classroom is equipped with interactive smart boards, audio-visual systems, and ergonomic seating to enhance the daily learning experience.',
      img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
      icon: '💡'
    },
    {
      title: 'Multipurpose Auditorium',
      desc: 'A 1,200-seater air-conditioned auditorium with professional lighting and acoustics for seminars, cultural festivals, and ceremonies.',
      img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800',
      icon: '🎭'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Campus Architecture & Facilities</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">A 15-acre sprawling green campus designed to provide the perfect balance of technology, nature, and inspiration.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
        {[...FACILITIES_DATA, ...extraFacilities].map((fac, i) => (
          <div key={i} className="group overflow-hidden bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
            <div className="h-72 overflow-hidden relative">
              <img src={fac.img} alt={fac.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-8 left-8 w-16 h-16 bg-white/95 dark:bg-slate-800/95 rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                {fac.icon}
              </div>
            </div>
            <div className="p-10 space-y-4 flex-grow">
              <h3 className="text-3xl font-bold group-hover:text-blue-700 transition-colors leading-tight">{fac.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg">{fac.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Safety & Logistics Feature */}
      <section className="bg-blue-700 rounded-[4rem] p-12 md:p-24 text-white text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Safety & Support Infrastructure</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div className="space-y-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-xl">🛡️</div>
                  <h4 className="font-bold text-xl">24/7 Security</h4>
                  <p className="text-blue-100/70 text-sm">Full CCTV coverage and manned entry points with biometric tracking systems for staff and students.</p>
               </div>
               <div className="space-y-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-xl">🚌</div>
                  <h4 className="font-bold text-xl">GPS Transport</h4>
                  <p className="text-blue-100/70 text-sm">Fleet of 22 modern buses with real-time GPS tracking for parents via our dedicated mobile application.</p>
               </div>
               <div className="space-y-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-xl">💧</div>
                  <h4 className="font-bold text-xl">RO Water Plant</h4>
                  <p className="text-blue-100/70 text-sm">Industrial-grade reverse osmosis purification systems providing clean, safe drinking water campus-wide.</p>
               </div>
               <div className="space-y-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-xl">🩺</div>
                  <h4 className="font-bold text-xl">Health Center</h4>
                  <p className="text-blue-100/70 text-sm">In-house medical infirmary with a full-time certified nurse and quarterly periodic checkups for all grades.</p>
               </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="School Transport and Campus" />
          </div>
        </div>
      </section>

      {/* Extra-Curricular Spaces */}
      <div className="text-center space-y-12">
        <h2 className="text-4xl font-bold">The Creative Courtyard</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
           {[
             { title: 'Art Studio', img: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=400' },
             { title: 'Dance Hall', img: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=400' },
             { title: 'Music Room', img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=400' },
             { title: 'Yoga Deck', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400' }
           ].map((e, i) => (
             <div key={i} className="group relative h-64 rounded-3xl overflow-hidden shadow-md">
                <img src={e.img} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt={e.title} />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity opacity-100 group-hover:opacity-60">
                   <h5 className="text-white font-bold text-xl">{e.title}</h5>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
