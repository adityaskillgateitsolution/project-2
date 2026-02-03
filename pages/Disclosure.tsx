
import React from 'react';

const Disclosure: React.FC = () => {
   const documents = [
      { name: 'Society Registration Certificate', date: 'March 2024', size: '1.2 MB' },
      { name: 'NOC from State Government', date: 'Jan 2024', size: '0.8 MB' },
      { name: 'Recognition Certificate (Renewal)', date: 'June 2023', size: '2.1 MB' },
      { name: 'Building Safety Certificate', date: 'Nov 2023', size: '1.5 MB' },
      { name: 'Fire Safety Certificate', date: 'Feb 2024', size: '1.1 MB' },
      { name: 'Water & Hygiene Certificate', date: 'Dec 2023', size: '0.9 MB' },
   ];

   return (
      <div className="pb-24 space-y-20">
         {/* Page Header */}
         <section className="relative h-[40vh] flex items-center justify-center px-6 overflow-hidden">
            <img
               src="https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661462.jpg?semt=ais_hybrid&w=740&q=80"
               className="absolute inset-0 w-full h-full object-cover"
               alt="Public Disclosure Documentation"
            />
            <div className="absolute inset-0 bg-blue-900/75 backdrop-blur-[2px]" />
            <div className="relative z-10 text-center space-y-6">
               <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Mandatory Disclosure</h1>
               <p className="text-blue-100 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">Public information and compliance documentation as per the Department of Matriculation Schools, Tamil Nadu.</p>
            </div>
         </section>

         <div className="max-w-5xl mx-auto px-6 space-y-12 text-left">
            <div className="space-y-8">
               <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[40px] overflow-hidden shadow-sm">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-8 border-b border-slate-200 dark:border-slate-800">
                     <h2 className="font-bold text-2xl">A. General Information</h2>
                  </div>
                  <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10 text-base">
                     <div className="space-y-2">
                        <p className="text-slate-400 uppercase font-black text-[10px] tracking-widest">School Name</p>
                        <p className="font-bold text-lg">St. Xavier's Matriculation Higher Secondary School</p>
                     </div>
                     <div className="space-y-2">
                        <p className="text-slate-400 uppercase font-black text-[10px] tracking-widest">Address</p>
                        <p className="font-bold text-lg">123 School Road, Madurai - 625001</p>
                     </div>
                     <div className="space-y-2">
                        <p className="text-slate-400 uppercase font-black text-[10px] tracking-widest">Principal Name</p>
                        <p className="font-bold text-lg">Dr. R. Meenakshi, M.A., B.Ed., Ph.D.</p>
                     </div>
                     <div className="space-y-2">
                        <p className="text-slate-400 uppercase font-black text-[10px] tracking-widest">Contact Email</p>
                        <p className="font-bold text-lg">principal@stxavier-school.edu</p>
                     </div>
                  </div>
               </div>

               <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[40px] overflow-hidden shadow-sm">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-8 border-b border-slate-200 dark:border-slate-800">
                     <h2 className="font-bold text-2xl">B. Documents & Information</h2>
                  </div>
                  <div className="divide-y divide-slate-100 dark:divide-slate-800">
                     {documents.map((doc, i) => (
                        <div key={i} className="p-8 flex items-center justify-between group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-all">
                           <div className="space-y-2">
                              <p className="font-bold text-xl group-hover:text-blue-700 transition-colors">{doc.name}</p>
                              <p className="text-sm text-slate-500 font-medium">Updated on: {doc.date} • {doc.size}</p>
                           </div>
                           <button className="flex items-center gap-3 text-blue-700 font-bold text-sm bg-blue-50 dark:bg-blue-900/30 px-6 py-3 rounded-full hover:bg-blue-700 hover:text-white transition-all shadow-sm">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                              View PDF
                           </button>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Disclosure;
