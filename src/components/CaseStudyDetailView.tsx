import React from 'react';
import { CASE_STUDIES } from '../data';

interface CaseStudyDetailViewProps {
  caseStudyId: string;
  onBackToGrid: () => void;
  onOpenConsultation: () => void;
}

export default function CaseStudyDetailView({ caseStudyId, onBackToGrid, onOpenConsultation }: CaseStudyDetailViewProps) {
  // Find case study by ID, fallback to first if not found
  const project = CASE_STUDIES.find((study) => study.id === caseStudyId) || CASE_STUDIES[0];

  return (
    <div id="case-study-detail-container" className="pt-16 max-w-[1400px] mx-auto px-6 lg:px-12 pb-24">
      
      {/* Navigation Breadcrumb & Back Button */}
      <div id="detail-nav-header" className="py-8 flex items-center justify-between">
        <button
          id="back-to-portfolio-btn"
          onClick={onBackToGrid}
          className="font-sans text-xs font-bold text-brand-red hover:text-[#A30F00] flex items-center gap-1.5 group cursor-pointer"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Case Studies
        </button>
        <div className="flex items-center gap-1.5 font-sans text-xs text-brand-gray">
          <span>Portfolio</span>
          <svg className="w-3.5 h-3.5 text-brand-gray" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span className="font-semibold text-brand-dark truncate max-w-xs">{project.title}</span>
        </div>
      </div>

      {/* Hero Image (Full-width, max-height 600px, object-fit cover, border-radius 24px) */}
      <section id="detail-hero-image" className="w-full h-[300px] sm:h-[450px] lg:h-[550px] rounded-[24px] overflow-hidden shadow-md shrink-0">
        <img
          src={project.image}
          alt={`Goodman Real Estate Solutions project: ${project.title}`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover rounded-[24px]"
        />
      </section>

      {/* Main Grid Content (2-column split: Left 70%, Right 30%) */}
      <section id="detail-content-grid" className="mt-12 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Column (70% width on desktop) */}
        <div id="detail-left-col" className="w-full lg:w-[70%] flex flex-col gap-8">
          
          {/* Header Meta */}
          <div>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="border border-[#E5E7EB] bg-transparent text-[#111111] rounded-full px-3 py-1 text-xs font-sans font-medium tracking-wide flex items-center">
                {project.category}
              </span>
              <span className="border border-[#E5E7EB] bg-transparent text-[#111111] rounded-full px-3 py-1 text-xs font-sans font-medium tracking-wide flex items-center">
                <span className={`w-1.5 h-1.5 rounded-full mr-1.5 shrink-0 ${
                  project.status === 'COMPLETED' ? 'bg-[#6B7280]' : 'bg-[#EF4444]'
                }`} />
                {project.status === 'COMPLETED' ? 'Completed' : 'Ongoing'}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] leading-tight font-bold text-brand-dark">
              {project.title}
            </h1>

            {/* Location & Client Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-gray-100 py-4 mt-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#C41200]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <span className="block font-sans text-[11px] text-brand-gray uppercase">Location</span>
                  <span className="block font-sans text-sm font-bold text-brand-dark">{project.location}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#C41200]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                    <line x1="9" y1="22" x2="9" y2="16" />
                    <line x1="15" y1="22" x2="15" y2="16" />
                    <line x1="9" y1="16" x2="15" y2="16" />
                    <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M12 6h.01M12 10h.01" />
                  </svg>
                </div>
                <div>
                  <span className="block font-sans text-[11px] text-brand-gray uppercase">Client / Partner</span>
                  <span className="block font-sans text-sm font-bold text-brand-dark">{project.client}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Problem Block */}
          <div id="detail-problem-block" className="bg-brand-white p-8 rounded-2xl border border-gray-100/50 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-brand-dark mb-4 flex items-center gap-2">
              <span className="text-brand-red font-sans text-sm font-bold border border-brand-red px-2 py-0.5 rounded">01</span>
              Problem Statement
            </h2>
            <p className="font-sans text-brand-gray text-base leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution Block */}
          <div id="detail-solution-block" className="bg-brand-white p-8 rounded-2xl border border-gray-100/50 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-brand-dark mb-4 flex items-center gap-2">
              <span className="text-brand-red font-sans text-sm font-bold border border-brand-red px-2 py-0.5 rounded">02</span>
              Advisory &amp; Repositioning Solution
            </h2>
            <p className="font-sans text-brand-gray text-base leading-relaxed">
              {project.solution}
            </p>
          </div>

        </div>

        {/* Right Sidebar (30% width on desktop, sticky) */}
        {/* Under 768px (mobile), all floating absolute or sticky elements become standard relative stack elements. */}
        <div id="detail-right-col" className="w-full lg:w-[30%] lg:sticky lg:top-24">
          <div
            className="bg-brand-white border border-gray-100 p-8 rounded-2xl shadow-md flex flex-col gap-6"
            style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
          >
            <div>
              <h3 className="font-serif text-xl font-bold text-brand-dark pb-3 border-b border-gray-100">
                Project Details
              </h3>
            </div>

            {/* Core Metrics inside the sidebar */}
            <div className="flex flex-col gap-4 font-sans text-sm">
              <div className="flex justify-between py-1 border-b border-gray-50">
                <span className="text-brand-gray">Square Footage</span>
                <span className="font-bold text-brand-dark">{project.squareFootage}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-50">
                <span className="text-brand-gray">Delivery Year</span>
                <span className="font-bold text-brand-dark">{project.completionYear}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-50">
                <span className="text-brand-gray">Primary Sector</span>
                <span className="font-bold text-brand-dark">{project.category}</span>
              </div>
            </div>

            {/* Prime Highlights bulleted list */}
            <div className="pt-2">
              <span className="font-sans text-xs font-bold text-brand-dark uppercase tracking-wider block mb-4">
                Prime Highlights
              </span>
              <ul className="flex flex-col gap-3 font-sans text-xs text-brand-gray">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2.5 leading-relaxed">
                    <svg className="w-3.5 h-3.5 text-[#C41200] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22,4 12,14.01 9,11.01" />
                    </svg>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              id="sidebar-inquiry-btn"
              onClick={onOpenConsultation}
              className="mt-4 bg-brand-red hover:bg-[#A30F00] text-brand-white font-sans text-center font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer w-full uppercase tracking-wider text-xs"
            >
              Inquire About Asset Class
            </button>
          </div>
        </div>

      </section>

    </div>
  );
}
