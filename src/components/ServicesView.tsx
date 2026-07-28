import React from 'react';
import { SERVICE_CARDS } from '../data';

// Helper to match service card icons using 1px thin-line SVGs
function ServiceIcon({ name, size = 20 }: { name: string; size?: number }) {
  switch (name) {
    case 'TrendingUp':
      return (
        <svg className="w-5 h-5 text-[#C41200]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case 'FileText':
      return (
        <svg className="w-5 h-5 text-[#C41200]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      );
    case 'Briefcase':
      return (
        <svg className="w-5 h-5 text-[#C41200]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case 'HardHat':
      return (
        <svg className="w-5 h-5 text-[#C41200]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V12M12 2v2M2 12h2M20 12h2" />
          <path d="M12 4a8 8 0 0 1 8 8v2H4v-2a8 8 0 0 1 8-8z" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5 text-[#C41200]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
  }
}

export default function ServicesView() {
  return (
    <div id="services-view-container" className="pt-16">
      
      {/* Services Title Section */}
      <section id="services-header" className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-16 pb-6">
        <span className="font-sans text-xs font-bold text-brand-red tracking-[0.2em] uppercase block mb-2">
          WHAT WE DELIVER
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-dark max-w-2xl">
          Comprehensive Commercial Capabilities
        </h1>
        <p className="font-sans text-brand-gray text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
          Goodman Real Estate Solutions manages complex, high-yield development, transactional re-structuring, and land entitlement projects from concept to close.
        </p>
      </section>

      {/* Services Grid: 2-column layout */}
      <section id="services-grid-section" className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24">
        {/* 2-column grid (becomes 1-column on mobile <768px) */}
        <div
          id="services-cards-grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {SERVICE_CARDS.map((card) => (
            <div
              key={card.id}
              id={`service-card-${card.id}`}
              className="bg-brand-white border border-gray-100/80 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
            >
              <div>
                {/* Top-Left: Red icon inside background: #FCE6E6 circle (40px) */}
                <div className="w-10 h-10 rounded-full bg-[#FCE6E6] flex items-center justify-center mb-6 shrink-0">
                  <ServiceIcon name={card.iconName} />
                </div>

                <h3 className="font-serif text-xl font-bold text-brand-dark mb-3">
                  {card.title}
                </h3>

                <p className="font-sans text-brand-gray text-sm leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* Service list items */}
              <div className="border-t border-gray-100 pt-5">
                <span className="font-sans text-[11px] font-bold text-brand-dark uppercase tracking-wider block mb-3">
                  Delivered Competencies
                </span>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {card.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-xs text-brand-gray font-medium"
                    >
                      <svg className="w-3.5 h-3.5 text-[#C41200] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22,4 12,14.01 9,11.01" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Additional information note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FCE6E6]/30 border border-[#FCE6E6] text-brand-dark flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="w-10 h-10 rounded-full bg-brand-red text-brand-white flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <div>
            <span className="font-serif text-sm font-bold block mb-0.5">Underwriting Integrity Commitment</span>
            <p className="font-sans text-xs text-brand-gray leading-relaxed">
              Every asset management strategy and feasibility review is backed by historical capital expenditure analysis, local zoning compliance reviews, and fully vetted commercial real estate data engines.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}
