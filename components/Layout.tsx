
import React, { useState, useEffect } from 'react';
import { Page, Theme } from '../types';
import { NAV_ITEMS } from '../constants';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('school-theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(Theme.LIGHT);
    }
  }, []);

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('school-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/stxavierschool', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
    )},
    { name: 'Instagram', url: 'https://instagram.com/stxavierschool', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    )},
    { name: 'LinkedIn', url: 'https://linkedin.com/school/stxavierschool', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    )},
    { name: 'YouTube', url: 'https://youtube.com/c/stxavierschool', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 00-2.122 2.136C0 8.055 0 12 0 12s0 3.945.501 5.814a3.015 3.015 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.945 24 12 24 12s0-3.945-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    )}
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col">
      {/* Desktop Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-500/40">SX</div>
            <div className="hidden sm:block text-left">
              <h1 className="text-xl font-bold leading-none dark:text-white">St. Xavier's</h1>
              <p className="text-[10px] text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase">Matriculation H.S.S</p>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  currentPage === item.page
                    ? 'text-blue-700 bg-blue-50 dark:bg-blue-900/40 dark:text-blue-300'
                    : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button 
              onClick={() => onNavigate('admissions')}
              className="hidden sm:block bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow overflow-x-hidden">
        {children}
      </main>

      <footer className="bg-slate-100 dark:bg-slate-900 py-16 px-6 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">SX</div>
              <span className="font-bold text-xl">St. Xavier's Matric</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Founded in 1995, we are dedicated to fostering a community of learners who are empowered to excel in a changing world through values and innovation.
            </p>
            <div className="flex gap-4">
               {socialLinks.map(s => (
                 <a 
                   key={s.name} 
                   href={s.url} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-slate-600 dark:text-slate-400 flex items-center justify-center cursor-pointer transition-all"
                   title={s.name}
                 >
                    {s.icon}
                 </a>
               ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Exploration</h4>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              {NAV_ITEMS.map(item => (
                <li key={item.page} onClick={() => onNavigate(item.page)} className="hover:text-blue-600 cursor-pointer transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Contact & Visit</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex gap-3">
                <span className="text-xl">📍</span>
                <span>123 School Road, Near Bus Stand,<br />Madurai, Tamil Nadu - 625001</span>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">📞</span>
                <span>+91 452 2345678<br />+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">✉️</span>
                <span>admin@stxavier-school.edu</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Live Location</h4>
            <div className="w-full h-40 bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-inner grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <img src="https://images.unsplash.com/photo-1577083164850-29f145edb175?auto=format&fit=crop&q=80&w=400" alt="Madurai Location Map" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-medium">
          <p>© 2024 St. Xavier's Matriculation Higher Secondary School. Affiliated to DSE, Tamil Nadu.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-blue-600">Privacy Policy</span>
            <span className="cursor-pointer hover:text-blue-600">Terms of Service</span>
            <span className="cursor-pointer hover:text-blue-600">Sitemap</span>
          </div>
        </div>
      </footer>

      {/* Floating Hamburger for Mobile - Size Optimized */}
      <button 
        onClick={() => setIsMenuOpen(true)}
        className="lg:hidden fixed bottom-10 right-10 w-20 h-20 bg-blue-700 text-white rounded-3xl flex items-center justify-center shadow-[0_25px_60px_rgba(29,78,216,0.4)] z-40 active:scale-90 transition-all border-4 border-white dark:border-slate-800"
        aria-label="Open Menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onNavigate={onNavigate} 
        currentPage={currentPage}
      />
    </div>
  );
};

export default Layout;
