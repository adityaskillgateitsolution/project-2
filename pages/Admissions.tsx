
import React from 'react';

const Admissions: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
      {/* Page Header */}
      <div className="text-center space-y-6">
        <span className="text-blue-700 font-black uppercase tracking-[0.2em] text-xs">Admissions 2024-2025</span>
        <h1 className="text-6xl font-bold tracking-tight">Your Child's Journey <br />Starts Here</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-xl">Guided by excellence, powered by technology, and rooted in values.</p>
      </div>

      <div className="max-w-5xl mx-auto space-y-16">
        {/* Process & Info */}
        <div className="space-y-10">
          <h2 className="text-4xl font-bold text-center">Admission Journey</h2>
          <div className="space-y-8 relative">
            {/* Connector line */}
            <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800" />

            {[
              { step: '01', title: 'Registration & Inquiry', desc: 'Fill our online inquiry form or visit our campus for a prospectus and a friendly introduction.' },
              { step: '02', title: 'Campus Visit & Interactive Session', desc: 'Experience our world-class facilities and participate in a casual interaction session with our educators.' },
              { step: '03', title: 'Document Submission', desc: 'Provide necessary documentation including Birth Certificate, Aadhar, and TC for final processing.' },
              { step: '04', title: 'Welcome to St. Xavier\'s', desc: 'Complete the fee formalities to secure your seat and join our community of learners.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group relative z-10">
                <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-slate-900 border-2 border-blue-700 text-blue-700 rounded-2xl flex items-center justify-center font-black text-lg group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                  {item.step}
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-2xl group-hover:text-blue-700 transition-colors">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-10 bg-blue-700 rounded-[40px] text-white space-y-6 shadow-2xl">
          <h3 className="font-bold text-2xl">Required Documents (Tamil Nadu Board)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Original Birth Certificate',
              'Transfer Certificate (Original)',
              'Community Certificate (Copy)',
              'Aadhar Card (Student/Parents)',
              '5 Passport Size Photos',
              'Previous Report Card'
            ].map(doc => (
              <div key={doc} className="flex items-center gap-3 text-sm font-medium bg-white/10 p-4 rounded-2xl">
                <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">✓</div>
                {doc}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-blue-900/20 p-12 rounded-[40px] text-center space-y-6 border border-blue-100 dark:border-blue-900">
          <h3 className="text-3xl font-bold">Ready to Begin?</h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            For admission inquiries and more information, please visit our Contact page or reach out to us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="tel:+914522345678"
              className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-3xl font-bold text-lg shadow-xl shadow-blue-500/20 transition-all active:scale-95"
            >
              📞 Call Us Now
            </a>
            <a
              href="mailto:admissions@stxavier-school.edu"
              className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-3xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95"
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
