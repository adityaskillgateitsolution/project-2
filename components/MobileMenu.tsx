
import React from 'react';
import { Page, NavItem } from '../types';
import { NAV_ITEMS } from '../constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate, currentPage }) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-[90] ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Side Menu */}
      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white dark:bg-slate-900 shadow-2xl z-[100] transition-transform duration-400 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-slate-800">
          <span className="text-xl font-bold text-blue-700 dark:text-blue-400">Navigation</span>
          <button onClick={onClose} className="p-2 text-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="flex flex-col p-6 space-y-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.page}
              onClick={() => {
                onNavigate(item.page);
                onClose();
              }}
              className={`text-left text-lg font-medium py-3 px-4 rounded-xl transition-colors ${
                currentPage === item.page 
                ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' 
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-10 left-0 right-0 px-10 text-center">
            <button 
              onClick={() => onNavigate('admissions')}
              className="w-full bg-blue-600 text-white py-4 rounded-full font-bold shadow-lg shadow-blue-500/30"
            >
                Apply Now
            </button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
