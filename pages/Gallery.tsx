
import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Academic', 'Sports', 'Events', 'Infrastructure', 'Cultural'];

  const images = [
    { src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop', title: 'Biology Lab Session', category: 'Academic' },
    { src: 'assets/athletic meet.png', title: 'State Level Athletics Meet', category: 'Sports' },
    { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop', title: 'Robotics Workshop', category: 'Academic' },
    { src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop', title: 'Annual Day Celebrations', category: 'Events' },
    { src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop', title: 'Secondary Academic Block', category: 'Infrastructure' },
    { src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop', title: 'Tech Hub Center', category: 'Infrastructure' },
    { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop', title: 'Primary Education Group', category: 'Academic' },
    { src: 'https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?q=80&w=800&auto=format&fit=crop', title: 'Cultural Dance Performance', category: 'Cultural' },
    { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop', title: 'Smart Classroom View', category: 'Infrastructure' },
    { src: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop', title: 'Graduation Day 2024', category: 'Events' },
    { src: 'assets/athletic meet.png', title: 'Library Study Hour', category: 'Academic' },
    { src: 'assets/athletic meet.png', title: 'Science Exhibition', category: 'Academic' },
    { src: 'https://images.unsplash.com/photo-1461280360983-bd93eaa5051b?q=80&w=800&auto=format&fit=crop', title: 'Football Team Practice', category: 'Sports' },
    { src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop', title: 'Music Academy Workshop', category: 'Cultural' },
    { src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop', title: 'Computer Programming Lab', category: 'Academic' },
  ];

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center space-y-6 mb-16">
        <h1 className="text-6xl font-bold tracking-tight">Capturing Every Moment</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-xl">Explore our journey through these snapshots of academic brilliance, sporting spirit, and cultural richness.</p>

        <div className="flex flex-wrap justify-center gap-3 pt-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${filter === cat
                ? 'bg-blue-700 text-white shadow-xl shadow-blue-500/30'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredImages.map((img, i) => (
          <div key={i} className="group relative rounded-[40px] overflow-hidden shadow-2xl aspect-[4/3] cursor-pointer animate-in fade-in zoom-in duration-500">
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-3 text-left">{img.category}</span>
              <h3 className="text-white font-bold text-2xl leading-tight text-left">{img.title}</h3>
            </div>
            <div className="absolute inset-0 border border-white/10 rounded-[40px] pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
