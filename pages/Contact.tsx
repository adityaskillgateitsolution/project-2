
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const schoolWhatsAppNumber = '919876543210'; // Replace with actual school WhatsApp number
  const schoolLocation = 'https://maps.google.com/?q=9.931232992898718,78.1186835147934'; // Madurai coordinates

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create professional WhatsApp message
    const whatsappMessage = `Hi, I'm ${formData.name}. I want to know about ${formData.subject}.

${formData.message}

My contact details are as below:
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Redirect to WhatsApp
    window.open(`https://wa.me/${schoolWhatsAppNumber}?text=${encodedMessage}`, '_blank');
  };

  const contactCards = [
    {
      icon: '📍',
      title: 'Main Campus',
      content: '123 School Road, Near Bus Stand,\nMadurai, Tamil Nadu - 625001',
      link: schoolLocation,
      type: 'location'
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+91 452 2345678\n+91 98765 43210',
      link: 'tel:+914522345678',
      type: 'phone'
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'info@stxavier-school.edu\nadmissions@stxavier-school.edu',
      link: 'mailto:info@stxavier-school.edu',
      type: 'email'
    },
    {
      icon: '🕒',
      title: 'Office Hours',
      content: 'Mon - Sat: 8:30 AM - 4:30 PM\nSunday: Closed',
      link: null,
      type: 'hours'
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook', url: 'https://facebook.com', icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z" /></svg>
      )
    },
    {
      name: 'Instagram', url: 'https://instagram.com', icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
      )
    },
    {
      name: 'LinkedIn', url: 'https://linkedin.com', icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
      )
    },
    {
      name: 'YouTube', url: 'https://youtube.com', icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 00-2.122 2.136C0 8.055 0 12 0 12s0 3.945.501 5.814a3.015 3.015 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.945 24 12 24 12s0-3.945-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
      )
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Connect With Us</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">We are here to answer your questions and welcome you to our growing community of learners and visionaries.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {contactCards.map((card, index) => {
              const CardWrapper = card.link ? 'a' : 'div';
              const cardProps = card.link ? {
                href: card.link,
                target: card.type === 'location' ? '_blank' : undefined,
                rel: card.type === 'location' ? 'noopener noreferrer' : undefined,
                className: "space-y-4 group cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/10 p-6 rounded-3xl transition-all border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800"
              } : {
                className: "space-y-4 group p-6 rounded-3xl"
              };

              return (
                <CardWrapper key={index} {...cardProps}>
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-700 rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110">{card.icon}</div>
                  <h4 className="font-bold text-xl">{card.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed whitespace-pre-line">{card.content}</p>
                </CardWrapper>
              );
            })}
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-2xl">Follow Our Journey</h4>
            <div className="flex gap-4">
              {socialLinks.map(s => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-600 hover:text-blue-600 flex items-center justify-center transition-all shadow-sm"
                  title={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <a
            href={schoolLocation}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-[40px] overflow-hidden h-96 shadow-2xl grayscale dark:invert dark:opacity-80 group cursor-pointer relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.982928135835!2d78.1186835147934!3d9.931232992898718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7290a1e84a!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1625471234567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, pointerEvents: 'none' }}
              allowFullScreen={true}
              loading="lazy"
              title="Google Map Location"
              className="group-hover:scale-110 transition-transform duration-[2s]"
            ></iframe>
            <div className="absolute inset-0 bg-transparent hover:bg-blue-500/5 transition-colors flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-blue-700 text-white px-6 py-3 rounded-full font-bold shadow-xl">
                Open in Google Maps
              </div>
            </div>
          </a>
        </div>

        <div className="bg-white dark:bg-slate-900 p-12 rounded-[56px] shadow-2xl border border-slate-100 dark:border-slate-800 space-y-8 h-fit text-left">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Send Us a Message</h2>
            <p className="text-slate-500 text-sm">Fill out the form below and we'll connect via WhatsApp.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 uppercase tracking-widest px-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-5 bg-slate-50 dark:bg-slate-800 rounded-3xl border-2 border-transparent focus:border-blue-700 transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 uppercase tracking-widest px-1">Email Address</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-5 bg-slate-50 dark:bg-slate-800 rounded-3xl border-2 border-transparent focus:border-blue-700 transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 uppercase tracking-widest px-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-6 py-5 bg-slate-50 dark:bg-slate-800 rounded-3xl border-2 border-transparent focus:border-blue-700 transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 uppercase tracking-widest px-1">Subject</label>
                <input
                  type="text"
                  placeholder="Admission Inquiry, Facilities, etc."
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-6 py-5 bg-slate-50 dark:bg-slate-800 rounded-3xl border-2 border-transparent focus:border-blue-700 transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 uppercase tracking-widest px-1">Message</label>
                <textarea
                  placeholder="Write your message here..."
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-5 bg-slate-50 dark:bg-slate-800 rounded-3xl border-2 border-transparent focus:border-blue-700 transition-all outline-none resize-none"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-6 rounded-3xl font-bold text-xl hover:bg-blue-800 shadow-xl shadow-blue-500/20 transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
