import React, { useState } from 'react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleNavClick = (id: string) => {
    onPageChange(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#1A1D20] text-gray-300 py-20 border-t border-brand-dark/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 pb-16 border-b border-gray-800">
          
          {/* Column 1: Contact Info + Brand */}
          <div id="footer-col-1" className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center text-brand-white">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                  <line x1="9" y1="22" x2="9" y2="16" />
                  <line x1="15" y1="22" x2="15" y2="16" />
                  <line x1="9" y1="16" x2="15" y2="16" />
                  <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M12 6h.01M12 10h.01" />
                </svg>
              </div>
              <div>
                <span className="block font-serif text-lg font-bold tracking-tight text-white">
                  GOODMAN
                </span>
                <span className="block font-sans text-[9px] tracking-[0.2em] uppercase text-gray-400 -mt-1 font-semibold">
                  Real Estate Solutions
                </span>
              </div>
            </div>
            
            <p className="font-sans text-sm text-gray-400 leading-relaxed max-w-sm">
              Providing premier commercial real estate advisory, asset management, and project re-development services across the state of Texas.
            </p>

            <div className="flex flex-col gap-3 font-sans text-sm mt-2">
              <div className="flex items-center gap-3 text-gray-400">
                <svg className="w-4 h-4 text-[#C41200] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>823 Congress Ave, Suite 300, Austin, TX 78701</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <svg className="w-4 h-4 text-[#C41200] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+15125550199" className="hover:text-white transition-colors">+1 (512) 555-0199</a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <svg className="w-4 h-4 text-[#C41200] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:herb@goodmanrealsolutions.com" className="hover:text-white transition-colors">herb@goodmanrealsolutions.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-2">
              <a
                id="linkedin-footer-link"
                href="https://linkedin.com"
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-brand-red hover:text-white flex items-center justify-center text-gray-400 transition-all"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-[18px] h-[18px] text-[#1A1D20] hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div id="footer-col-2" className="flex flex-col gap-6">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Quick Navigation
            </h4>
            
            <div className="grid grid-cols-2 gap-4 font-sans text-sm">
              <div className="flex flex-col gap-3">
                <button
                  id="footer-nav-home"
                  onClick={() => handleNavClick('home')}
                  className="text-left text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-1 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 text-[#1A1D20] opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7,7 17,7 17,17" />
                  </svg>
                  Homepage
                </button>
                <button
                  id="footer-nav-about"
                  onClick={() => handleNavClick('about')}
                  className="text-left text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-1 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 text-[#1A1D20] opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7,7 17,7 17,17" />
                  </svg>
                  About Principal
                </button>
                <button
                  id="footer-nav-services"
                  onClick={() => handleNavClick('services')}
                  className="text-left text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-1 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 text-[#1A1D20] opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7,7 17,7 17,17" />
                  </svg>
                  Scope of Services
                </button>
              </div>
              <div className="flex flex-col gap-3">
                <button
                  id="footer-nav-studies"
                  onClick={() => handleNavClick('case-studies')}
                  className="text-left text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-1 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 text-[#1A1D20] opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7,7 17,7 17,17" />
                  </svg>
                  Case Studies
                </button>
                <button
                  id="footer-nav-properties"
                  onClick={() => handleNavClick('properties')}
                  className="text-left text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-1 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 text-[#1A1D20] opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7,7 17,7 17,17" />
                  </svg>
                  Available Properties
                </button>
                <button
                  id="footer-nav-updates"
                  onClick={() => handleNavClick('updates')}
                  className="text-left text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-1 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 text-[#1A1D20] opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7,7 17,7 17,17" />
                  </svg>
                  Project Updates
                </button>
                <button
                  id="footer-nav-contact"
                  onClick={() => handleNavClick('contact')}
                  className="text-left text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-1 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 text-[#1A1D20] opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7,7 17,7 17,17" />
                  </svg>
                  Testimonials & Contact
                </button>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-gray-800/40 border border-gray-800 text-[12px] text-gray-400 leading-relaxed">
              <span className="font-semibold text-white block mb-1">State License Status</span>
              Herb Goodman is a licensed Real Estate Salesperson in the State of Texas, operating under sponsored brokerage compliance with TREC standards.
            </div>
          </div>

          {/* Column 3: Newsletter Form */}
          <div id="footer-col-3" className="flex flex-col gap-6">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Market Intelligence Newsletter
            </h4>
            <p className="font-sans text-sm text-gray-400 leading-relaxed">
              Subscribe to receive curated analysis on commercial zoning updates, repositioning case studies, and North Texas industrial developments.
            </p>

            {subscribed ? (
              <div className="p-4 bg-emerald-950/40 border border-emerald-900 text-emerald-400 rounded-2xl flex items-start gap-3">
                <svg className="w-[18px] h-[18px] text-emerald-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22,4 12,14.01 9,11.01" />
                </svg>
                <div>
                  <span className="font-bold block text-sm">Subscription Confirmed</span>
                  <span className="text-[12px] opacity-90">Thank you for subscribing to our Texas development updates.</span>
                </div>
              </div>
            ) : (
              <form id="newsletter-form" onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  id="newsletter-email-input"
                  type="email"
                  required
                  placeholder="Enter your professional email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-sm p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all w-full"
                />
                <button
                  id="newsletter-submit-btn"
                  type="submit"
                  className="bg-brand-red hover:bg-[#A30F00] text-white font-sans text-sm font-bold p-4 rounded-2xl cursor-pointer transition-all hover:shadow-lg hover:scale-[1.01]"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Row - Disclaimer and Copyright */}
        <div id="footer-bottom-row" className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-sans">
          <div>
            © {new Date().getFullYear()} Goodman Real Estate Solutions. All rights reserved.
          </div>
          <div className="flex gap-6 max-w-2xl text-center md:text-right leading-relaxed">
            <span>Disclaimer: All transaction stats and valuation figures reflect combined career achievements of the principal and associated partnership ventures. Information herein is for informational purposes and does not constitute formal financial underwriting.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
