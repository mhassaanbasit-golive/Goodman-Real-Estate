import React, { useState } from 'react';
import { CASE_STUDIES } from '../data';

interface CaseStudiesViewProps {
  onSelectCaseStudy: (id: string) => void;
  onOpenConsultation: () => void;
}

// Map the 10 case studies exactly to their respective filter groups
const COMMERCIAL_IDS = [
  'raleigh-kitchen101-violet',
  'industrial-relocation',
  'strip-center-development',
  'post-katrina-rehab',
  'value-add-opportunity'
];

const RETAIL_HOSPITALITY_IDS = [
  'rustic-expansion',
  'painted-tree-marketplace',
  'bowl-barrel-expansion',
  'rib-crib-growth',
  'retail-redevelopment'
];

const INDUSTRIAL_IDS = [
  'industrial-relocation'
];

export default function CaseStudiesView({ onSelectCaseStudy, onOpenConsultation }: CaseStudiesViewProps) {
  const [activeTab, setActiveTab] = useState<'All' | 'Commercial' | 'Retail & Hospitality' | 'Industrial'>('All');

  // Extracts the first 2 sentences of the text
  const getFirstTwoSentences = (text: string) => {
    if (!text) return '';
    const sentences = text.match(/[^.!?]+[.!?]+/g);
    if (!sentences || sentences.length === 0) return text;
    if (sentences.length === 1) return sentences[0].trim();
    return (sentences[0] + ' ' + sentences[1]).trim();
  };

  // Filter listings based on the active tab
  const filteredStudies = CASE_STUDIES.filter((study) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Commercial') return COMMERCIAL_IDS.includes(study.id);
    if (activeTab === 'Retail & Hospitality') return RETAIL_HOSPITALITY_IDS.includes(study.id);
    if (activeTab === 'Industrial') return INDUSTRIAL_IDS.includes(study.id);
    return true;
  });

  return (
    <div id="case-studies-view-container" className="pt-24 bg-[#FAFAFA] min-h-screen">
      
      {/* Portfolio Header */}
      <section id="portfolio-header" className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-12 pb-8">
        <span className="font-sans text-xs font-bold text-brand-red tracking-[0.2em] uppercase block mb-2">
          CASE STUDIES
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-dark tracking-tight">
          Curated Development Stories.
        </h1>
        <p className="font-sans text-brand-gray text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
          Browse our active and completed advisory portfolios across major Texas markets.
        </p>
      </section>

      {/* Filter Tabs: Clickable pill buttons */}
      <section id="portfolio-filters" className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-12">
        <div className="flex flex-wrap items-center gap-2">
          {(['All', 'Commercial', 'Retail & Hospitality', 'Industrial'] as const).map((tab) => (
            <button
              key={tab}
              id={`tab-btn-${tab.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              onClick={() => setActiveTab(tab)}
              className={`font-sans text-xs font-bold px-6 py-3 rounded-full border transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#111111] border-[#111111] text-brand-white shadow-md'
                  : 'bg-white border-gray-200 text-brand-gray hover:border-[#111111] hover:text-[#111111]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid: 3-column grid layout */}
      <section id="portfolio-grid-section" className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-16">
        <div
          id="portfolio-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredStudies.map((project) => (
            <div
              key={project.id}
              id={`property-card-${project.id}`}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
            >
              {/* Image & Badge Overlay */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100 shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Minimalist transparent outline status badge on top-left of image */}
                <div className="absolute top-4 left-4">
                  <span className="border border-[#E5E7EB] bg-white/95 text-[#111111] rounded-full px-3.5 py-1.5 text-[11px] font-sans font-medium tracking-wide flex items-center shadow-sm">
                    <span className={`w-1.5 h-1.5 rounded-full mr-2 shrink-0 ${
                      project.status === 'COMPLETED' ? 'bg-[#6B7280]' : 'bg-[#EF4444]'
                    }`} />
                    {project.status === 'COMPLETED' ? 'COMPLETED' : 'ONGOING'}
                  </span>
                </div>
              </div>

              {/* Card Body & Content */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                <div className="flex flex-col gap-3">
                  
                  {/* Category Indicator */}
                  <span className="font-sans text-[10px] font-bold text-brand-red tracking-wider uppercase">
                    {project.category}
                  </span>

                  {/* Title & Location */}
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#111111] leading-snug group-hover:text-brand-red transition-colors mb-1.5">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 text-brand-gray text-xs font-sans">
                      <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="font-medium text-gray-500">{project.location}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <hr className="border-gray-100" />

                  {/* Description: exactly first 2 sentences of Problem */}
                  <p className="font-sans text-brand-gray text-xs leading-relaxed">
                    {getFirstTwoSentences(project.problem)}
                  </p>
                </div>

                {/* Explore Case Study button with thin outline, full width */}
                <button
                  id={`btn-explore-listing-${project.id}`}
                  onClick={() => onSelectCaseStudy(project.id)}
                  className="w-full border border-gray-200 hover:border-[#111111] hover:bg-[#111111] hover:text-white text-[#111111] font-sans text-xs font-bold py-3.5 rounded-xl transition-all tracking-widest uppercase flex items-center justify-center gap-1.5 cursor-pointer bg-white"
                >
                  Explore Case Study →
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section id="portfolio-cta-section" className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24">
        <div
          id="portfolio-cta-block"
          className="bg-white rounded-[24px] p-10 lg:p-12 border border-gray-200/80 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-md"
        >
          <div className="max-w-xl">
            <span className="font-sans text-xs font-bold text-brand-red tracking-[0.2em] uppercase block mb-2">
              Partnership & Advisory
            </span>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#111111] tracking-tight">
              Looking for a specific commercial asset?
            </h3>
            <p className="font-sans text-brand-gray text-sm mt-3 leading-relaxed">
              Our specialists offer deep Texas market insights, full-service asset positioning, site evaluation, and commercial real estate acquisition programs.
            </p>
          </div>

          <button
            id="portfolio-cta-consultation-btn"
            onClick={onOpenConsultation}
            className="bg-brand-red hover:bg-[#A30F00] text-brand-white font-sans text-xs font-bold px-8 py-5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all shrink-0 w-full md:w-auto cursor-pointer uppercase tracking-wider"
          >
            Request a Consultation
          </button>
        </div>
      </section>

    </div>
  );
}
