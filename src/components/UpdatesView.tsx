import React from 'react';
import { PROJECT_UPDATES } from '../data';

export default function UpdatesView() {
  // Split into Featured (with image) and Archive list
  const featuredUpdates = PROJECT_UPDATES.filter((up) => up.isFeatured && up.image);
  const archiveUpdates = PROJECT_UPDATES.filter((up) => !up.isFeatured || !up.image);

  return (
    <div id="updates-view-container" className="pt-16">
      
      {/* Page Header */}
      <section id="updates-header" className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-16 pb-8">
        <span className="font-sans text-xs font-bold text-brand-red tracking-[0.2em] uppercase block mb-2">
          NEWS & INSIGHTS
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-dark">
          Project Updates &amp; Intelligence
        </h1>
        <p className="font-sans text-brand-gray text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
          Stay informed with real-time news regarding active ground-breakings, tenant announcements, panel presentations, and municipal zoning approvals.
        </p>
      </section>

      {/* Featured Section: 2-column grid (two distinct blocks with top-rounded images and bold headlines) */}
      <section id="featured-updates" className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-16">
        <h2 className="font-serif text-2xl font-bold text-brand-dark mb-8">
          Featured Developments
        </h2>
        
        {/* 2-column grid (becomes 1-column under 768px) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredUpdates.map((update) => (
            <div
              key={update.id}
              id={`featured-update-card-${update.id}`}
              className="bg-brand-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group transition-all duration-300 hover:shadow-xl"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
            >
              {/* Image with top-rounded borders */}
              <div className="h-[250px] sm:h-[300px] w-full overflow-hidden shrink-0">
                <img
                  src={update.image}
                  alt={update.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-102"
                />
              </div>

              {/* Bottom detail and typography */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 font-sans text-xs text-brand-gray mb-3.5">
                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-[#C41200]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span>{update.date}</span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <span className={`font-semibold uppercase tracking-wider text-[10px] ${
                      update.status === 'Completed' ? 'text-emerald-600' : 'text-brand-red'
                    }`}>
                      {update.status}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-dark leading-snug group-hover:text-brand-red transition-colors mb-3">
                    {update.title}
                  </h3>

                  <p className="font-sans text-brand-gray text-xs sm:text-sm leading-relaxed mb-6">
                    {update.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-50 flex items-center gap-1.5 text-xs font-bold text-brand-dark group-hover:text-brand-red transition-colors">
                  <svg className="w-4 h-4 text-brand-dark group-hover:text-brand-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                  <span>Read Full Press Release</span>
                  <svg className="w-3 h-3 text-brand-dark opacity-60 group-hover:text-brand-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Archive List: A vertically stacked list of all other updates */}
      <section id="archive-updates-section" className="bg-[#F9FAFB] border-t border-gray-100 py-20 pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="max-w-xl mb-10">
            <h2 className="font-serif text-2xl font-bold text-brand-dark">
              Chronological Activity Logs
            </h2>
            <p className="font-sans text-brand-gray text-xs sm:text-sm mt-1.5">
              Historical digest of professional transactions, zoning rulings, and advisory retainers.
            </p>
          </div>

          {/* Vertically stacked list */}
          <ul id="archive-list" className="flex flex-col gap-6 bg-brand-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">
            {archiveUpdates.map((update, index) => (
              <li
                key={update.id}
                id={`archive-item-${update.id}`}
                className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 ${
                  index !== archiveUpdates.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                {/* Date + Status Pill tag + Text Title */}
                <div className="flex flex-col gap-1.5 max-w-3xl">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-sans text-[11px] text-brand-gray font-semibold">
                      {update.date}
                    </span>
                    <span className="text-gray-300 text-xs">•</span>
                    
                    {/* Status Pill Tag (Green for Completed, Red for Ongoing) */}
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase inline-flex items-center gap-1 ${
                      update.status === 'Completed'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                        : 'bg-red-50 text-brand-red border border-red-100'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        update.status === 'Completed' ? 'bg-emerald-600' : 'bg-brand-red'
                      }`} />
                      {update.status}
                    </span>
                  </div>

                  <h4 className="font-serif text-base sm:text-lg font-bold text-brand-dark leading-snug">
                    {update.title}
                  </h4>
                  
                  <p className="font-sans text-brand-gray text-xs leading-relaxed max-w-2xl">
                    {update.summary}
                  </p>
                </div>

                <div className="text-[11px] font-bold text-brand-gray hover:text-brand-red transition-all cursor-pointer flex items-center gap-1 whitespace-nowrap">
                  <span>Advisory Digest</span>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>

              </li>
            ))}
          </ul>

        </div>
      </section>

    </div>
  );
}
