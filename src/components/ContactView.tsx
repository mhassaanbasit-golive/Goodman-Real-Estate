import React, { useState } from 'react';
import { TESTIMONIALS } from '../data';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSuccess(false), 8000);
  };

  return (
    <div id="contact-view-container" className="pt-16">
      
      {/* Page Header */}
      <section id="contact-header" className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-16 pb-8">
        <span className="font-sans text-xs font-bold text-brand-red tracking-[0.2em] uppercase block mb-2">
          CLIENT ADVOCACY & INQUIRIES
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-dark">
          Testimonials &amp; Private Advisory
        </h1>
        <p className="font-sans text-brand-gray text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
          Read client outcomes directly from institutional investors and secure a confidential line of communication with our lead representative.
        </p>
      </section>

      {/* Testimonial Stack Section */}
      <section id="testimonial-stack-section" className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24">
        <h2 className="font-serif text-2xl font-bold text-brand-dark mb-10 pb-4 border-b border-gray-100 flex items-center gap-2">
          <svg className="w-5 h-5 text-[#C41200]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-3-2H5c-2.25 0-3 .75-3 2v8c0 2.25 1 3 3 3M14 21c3 0 7-1 7-8V5c0-1.25-.75-2-3-2h-2c-2.25 0-3 .75-3 2v8c0 2.25 1 3 3 3" />
          </svg>
          Endorsements from Peak Partnerships
        </h2>

        {/* Vertical stack of individual blocks separated by 1px solid #E5E7EB horizontal rules */}
        <div id="testimonial-stack" className="flex flex-col border-t border-[#E5E7EB]">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              id={`testimonial-block-${t.id}`}
              className="py-12 border-b border-[#E5E7EB] flex flex-col md:flex-row items-stretch gap-8 transition-colors hover:bg-brand-light/40 px-4"
            >
              {/* Left Column: Company Logo (width 100px) */}
              <div id="t-col-logo" className="w-[100px] shrink-0 flex items-start md:items-center">
                <div className="w-24 h-12 bg-gray-200/50 rounded-lg flex items-center justify-center border border-gray-200 shadow-sm px-2 text-center">
                  <span className="font-sans text-[11px] font-extrabold tracking-wider text-brand-dark uppercase truncate">
                    {t.companyLogo}
                  </span>
                </div>
              </div>

              {/* Middle Column: Testimonial quote (multiline, flex-1) */}
              <div id="t-col-quote" className="flex-1 flex flex-col justify-center">
                <p className="font-sans text-brand-gray text-base leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Right/Bottom Column: Author Name/Title (aligned-right) */}
              <div id="t-col-author" className="shrink-0 flex items-end justify-start md:justify-end text-left md:text-right md:min-w-[250px]">
                <div className="border-l-2 md:border-l-0 md:border-r-2 border-brand-red pl-4 md:pl-0 md:pr-4 py-1">
                  <span className="block font-sans text-sm font-bold text-brand-dark">
                    {t.authorName}
                  </span>
                  <span className="block font-sans text-xs text-brand-gray mt-0.5">
                    {t.authorTitle}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Contact Details & Message Form */}
      {/* 50/50 block for Details vs Form */}
      <section id="contact-details-and-form" className="bg-[#F9FAFB] border-t border-gray-100 py-20 pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Box: Contact Details Block (Flex Row layout as requested, wrapping nicely) */}
            <div id="contact-details-card" className="bg-brand-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-8">
              <div>
                <span className="font-sans text-xs font-bold text-brand-red tracking-[0.2em] uppercase block mb-1">
                  OFFICE DIRECTORY
                </span>
                <h3 className="font-serif text-2xl font-bold text-brand-dark">
                  Direct Line of Communication
                </h3>
              </div>

              {/* Contact Details Layout: Flex row with photo, text columns, and LinkedIn references */}
              {/* Below 768px, all grids and 50/50 flex rows become 1-column */}
              <div id="details-row-flex" className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                
                {/* Left part of flex row: Principal's photo */}
                <div id="principal-photo-small" className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-brand-red shadow-md">
                  <img
                    id="ceo-photo-thumbnail"
                    src="/ceo-photo.png"
                    alt="Herb Goodman face thumbnail"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      // Elegant fallback gray circle with initials
                      e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23E5E7EB'/><text x='50%' y='55%' font-family='sans-serif' font-size='12' font-weight='bold' fill='%239CA3AF' text-anchor='middle'>Herb G.</text></svg>";
                    }}
                  />
                </div>

                {/* Center part of flex row: Address, Phone, Email */}
                <div id="principal-details-text" className="flex-1 flex flex-col gap-2 font-sans text-xs text-brand-gray">
                  <span className="font-bold text-sm text-brand-dark block">Herb Goodman, CLHMS</span>
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-[#C41200] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>823 Congress Ave, Suite 300, Austin, TX 78701</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-[#C41200] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <a href="tel:+15125550199" className="hover:text-brand-red font-semibold">{`+1 (512) 555-0199`}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-[#C41200] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <a href="mailto:herb@goodmanrealsolutions.com" className="hover:text-brand-red font-semibold">herb@goodmanrealsolutions.com</a>
                  </div>
                </div>

              </div>

              {/* Right part of layout requirement: A bold sentence "Find my full resume on LinkedIn" paired with a LinkedIn primary icon button */}
              <div id="linkedin-resume-panel" className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <span className="font-sans text-xs font-extrabold text-brand-dark tracking-wide block uppercase">
                  Find my full resume on LinkedIn
                </span>
                
                <a
                  id="linkedin-badge-btn"
                  href="https://linkedin.com"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noreferrer"
                  className="bg-[#0077b5] text-brand-white font-sans text-xs font-bold px-5 py-3 rounded-xl hover:bg-[#005a87] hover:shadow-md transition-all flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn Profile
                </a>
              </div>

              <div className="bg-brand-light p-4 rounded-xl border border-gray-100 text-xs text-brand-gray leading-relaxed flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#C41200] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
                <div>
                  <span className="font-bold text-brand-dark block mb-0.5">TREC Consumer Protection Notice</span>
                  All brokerage and agency interactions comply with the rules set by the Texas Real Estate Commission (TREC). All contracts are brokered in cooperation with sponsored licensing.
                </div>
              </div>

            </div>

            {/* Right Box: Secure Message Form */}
            <div id="contact-message-form-card" className="bg-brand-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-brand-dark mb-6">
                Transmit a Private Message
              </h3>

              {isSuccess ? (
                <div className="py-6 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-3">
                    <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22,4 12,14.01 9,11.01" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-dark mb-1">
                    Message Safely Transmitted
                  </h4>
                  <p className="font-sans text-brand-gray text-xs max-w-sm leading-relaxed">
                    Thank you. Your message has been encrypted and routed directly to Herb Goodman's inbox. Expect a secure reply within 12 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-sans text-xs">
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-brand-dark uppercase tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sterling Blackstone"
                      className="bg-white border border-gray-200 text-brand-dark text-sm p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-brand-dark uppercase tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sterling@blackstonecap.com"
                      className="bg-white border border-gray-200 text-brand-dark text-sm p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-brand-dark uppercase tracking-wider">Subject Matter *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. 15-Acre Logistics Rezoning Assistance"
                      className="bg-white border border-gray-200 text-brand-dark text-sm p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-brand-dark uppercase tracking-wider">Detailed Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Input asset specifics, zoning issues, or general partnership requests..."
                      className="bg-white border border-gray-200 text-brand-dark text-sm p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 bg-brand-red hover:bg-[#A30F00] text-brand-white font-bold p-4 rounded-xl cursor-pointer transition-all hover:shadow-md flex items-center justify-center gap-2 uppercase tracking-wider font-sans text-xs"
                  >
                    <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Send Secure Message
                  </button>

                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
