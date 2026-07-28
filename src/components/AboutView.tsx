import React from 'react';
import { VERIFIED_ACCOLADES, CREDENTIALS, AFFILIATIONS } from '../data';

// Helper to resolve icon based on name
function AffiliationIcon({ name, size = 20 }: { name: string; size?: number }) {
  switch (name) {
    case 'Award':
      return (
        <svg className="w-5 h-5 text-[#C41200] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      );
    case 'ShieldCheck':
      return (
        <svg className="w-5 h-5 text-[#C41200] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 11 11 13 15 9" />
        </svg>
      );
    case 'Globe':
      return (
        <svg className="w-5 h-5 text-[#C41200] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case 'Building':
      return (
        <svg className="w-5 h-5 text-[#C41200] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="9" y1="22" x2="9" y2="16" />
          <line x1="15" y1="22" x2="15" y2="16" />
          <line x1="9" y1="16" x2="15" y2="16" />
          <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M12 6h.01M12 10h.01" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5 text-[#C41200] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      );
  }
}

export default function AboutView() {
  return (
    <div id="about-view-container" className="pt-16">
      
      {/* About Hero (Full-width dark charcoal #1A1D20, 100px padding, centered) */}
      <section id="about-hero" className="bg-[#1A1D20] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="font-sans text-xs font-bold text-brand-red tracking-[0.25em] uppercase block mb-3">
            FOUNDER & LEAD ADVISOR
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Herb Goodman, CLHMS
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-400 max-w-xl mx-auto font-medium">
            Licensed Texas Real Estate Salesperson & Commercial Development Strategist
          </p>
        </div>
      </section>

      {/* About Body (50/50 flex row, gap 40px) */}
      <section id="about-body" className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left: Principal's Headshot with verified accolades card */}
          <div id="about-left" className="flex-1 w-full relative flex flex-col items-center">
            <div className="relative max-w-lg mx-auto z-10 flex justify-center">
              <img
                id="ceo-photo"
                src="/ceo-photo.png"
                alt="Herb Goodman, CLHMS - Principal of Goodman Real Estate Solutions"
                referrerPolicy="no-referrer"
                style={{ width: '100%', maxWidth: '320px', height: 'auto', borderRadius: '16px', objectFit: 'cover' }}
                className="shadow-xl"
                onError={(e) => {
                  // Elegant gray placeholder SVG fallback
                  e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='400' viewBox='0 0 320 400'><rect width='320' height='400' fill='%23E5E7EB'/><text x='50%' y='50%' font-family='sans-serif' font-size='14' fill='%239CA3AF' text-anchor='middle'>Herb Goodman Photo</text></svg>";
                }}
              />
            </div>

            {/* Accolades Card */}
            <div
              id="accolades-overlay"
              className="mt-6 w-full max-w-md bg-brand-white p-5 rounded-xl shadow-lg border border-gray-100"
            >
                <div className="flex items-center gap-2 mb-3 border-b border-gray-100 pb-2">
                  <svg className="w-5 h-5 text-[#C41200]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                  <span className="font-sans text-xs font-bold text-brand-dark uppercase tracking-wider">
                    Verified Accolades
                  </span>
                </div>
                <ul className="flex flex-col gap-2">
                  {VERIFIED_ACCOLADES.map((accolade) => (
                    <li key={accolade.id} className="flex items-start gap-2 text-xs text-brand-gray font-medium">
                      <svg className="w-3.5 h-3.5 text-[#C41200] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22,4 12,14.01 9,11.01" />
                      </svg>
                      <span>{accolade.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

            {/* Mobile accolades card fallback (only visible on mobile) */}
            <div className="block sm:hidden mt-4 bg-brand-white p-5 rounded-2xl shadow-md border border-gray-100 w-full">
              <div className="flex items-center gap-2 mb-3 border-b border-gray-100 pb-2">
                <svg className="w-5 h-5 text-[#C41200]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
                <span className="font-sans text-xs font-bold text-brand-dark uppercase tracking-wider">
                  Verified Accolades
                </span>
              </div>
              <ul className="flex flex-col gap-2">
                {VERIFIED_ACCOLADES.map((accolade) => (
                  <li key={accolade.id} className="flex items-start gap-2 text-xs text-brand-gray font-medium">
                    <svg className="w-3.5 h-3.5 text-[#C41200] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22,4 12,14.01 9,11.01" />
                    </svg>
                    <span>{accolade.text}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right: Biography + Badges */}
          <div id="about-right" className="flex-1 flex flex-col gap-8 justify-center">
            <div>
              <span className="font-sans text-xs font-bold text-brand-red tracking-[0.2em] uppercase">
                BIOGRAPHY & TRACK RECORD
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mt-2 mb-6">
                The Journey of a Trusted Advisor
              </h2>
              
              <div className="font-sans text-brand-gray text-base leading-relaxed flex flex-col gap-4">
                <p>
                  With more than twenty-five years of transaction and development advisory expertise, Herb Goodman has built a reputation for navigating complex, high-stakes municipal entitlement environments. Under his leadership, Goodman Real Estate Solutions has driven over $1.2 Billion in transactional volume across industrial distribution hubs, high-density retail corridors, and mixed-use transit-oriented zoning segments.
                </p>
                <p>
                  Mr. Goodman specializes in identifying highly structural opportunities—frequently helping private equity desks, institutional funds, and family offices convert underperforming assets into thriving retail spaces or class-A logistics centers. By utilizing deep local relationships and rigorous financial modeling, Herb brings unparalleled deal-velocity and security to every transaction.
                </p>
              </div>
            </div>

            {/* Credential Badges: two columns of rounded pills */}
            <div id="credential-section">
              <span className="font-sans text-xs font-bold text-brand-dark uppercase tracking-widest block mb-4">
                Active Board Credentials
              </span>
              <div className="grid grid-cols-2 gap-3">
                {CREDENTIALS.map((badge, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 border border-brand-dark/20 bg-brand-white px-4 py-2.5 rounded-full shadow-sm text-xs font-bold text-brand-dark transition-colors hover:border-brand-red"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Affiliations Section */}
      <section id="affiliations-section" className="bg-[#F9FAFB] border-t border-gray-100 py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="max-w-2xl mb-12">
            <span className="font-sans text-xs font-bold text-brand-red tracking-[0.2em] uppercase">
              RECOGNIZED COMPLIANCE
            </span>
            <h2 className="font-serif text-3xl font-bold text-brand-dark mt-2">
              Affiliations & Industry Standards
            </h2>
            <p className="font-sans text-brand-gray text-sm sm:text-base mt-2">
              Strictly aligned with the state and national bodies dictating the peak standards of commercial underwriting.
            </p>
          </div>

          {/* Vertical list of affiliations divided by thin rules */}
          <div id="affiliations-list" className="flex flex-col border-t border-gray-200">
            {AFFILIATIONS.map((aff) => (
              <div
                key={aff.id}
                className="flex items-center justify-between py-6 border-b border-gray-200 group transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-white flex items-center justify-center border border-gray-100 shadow-sm">
                    <AffiliationIcon name={aff.iconName} />
                  </div>
                  <span className="font-serif text-base sm:text-lg font-bold text-brand-dark group-hover:text-brand-red transition-colors">
                    {aff.title}
                  </span>
                </div>
                <div className="text-brand-gray group-hover:text-brand-dark transition-colors">
                  <svg className="w-5 h-5 text-[#1A1D20] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7,7 17,7 17,17" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
