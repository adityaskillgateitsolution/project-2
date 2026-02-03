
import React, { useState, useEffect, Suspense } from 'react';
import Layout from './components/Layout';
import { Page } from './types';

// Lazy loading pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Academics = React.lazy(() => import('./pages/Academics'));
const Admissions = React.lazy(() => import('./pages/Admissions'));
const Facilities = React.lazy(() => import('./pages/Facilities'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Disclosure = React.lazy(() => import('./pages/Disclosure'));

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      const validPages: Page[] = ['home', 'about', 'academics', 'admissions', 'facilities', 'gallery', 'contact', 'disclosure'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: Page) => {
    window.location.hash = page;
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={navigateTo} />;
      case 'about': return <About />;
      case 'academics': return <Academics />;
      case 'admissions': return <Admissions />;
      case 'facilities': return <Facilities />;
      case 'gallery': return <Gallery />;
      case 'contact': return <Contact />;
      case 'disclosure': return <Disclosure />;
      default: return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={navigateTo}>
      <Suspense fallback={
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-blue-700 border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <div className="animate-in fade-in duration-700">
          {renderPage()}
        </div>
      </Suspense>
    </Layout>
  );
};

export default App;
