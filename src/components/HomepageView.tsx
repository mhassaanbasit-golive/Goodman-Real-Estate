import React from 'react';
import { HERO_STATS, STATS_CARDS, CASE_STUDIES, PROJECT_UPDATES, TESTIMONIALS } from '../data';
import {
  TrendingUp,
  Briefcase,
  MapPin,
  FileText,
  HardHat,
  ArrowRight,
  Quote,
  Building
} from 'lucide-react';

interface HomepageViewProps {
  onPageChange: (page: string) => void;
  onSelectCaseStudy: (id: string) => void;
}

export default function HomepageView({ onPageChange, onSelectCaseStudy }: HomepageViewProps) {
  // We only show the first 3 case studies as a preview on the homepage
  const previewCaseStudies = CASE_STUDIES.slice(0, 3);

  // We show the 2 most recent project updates (Painted Tree/Trimar references or the first 2 in database)
  const recentUpdates = PROJECT_UPDATES.slice(0, 2);

  // The 3 mock properties for the Teaser
  const mockProperties = [
    {
      id: 'highland-village-shopping-center',
      title: 'Highland Village Shopping Center',
      location: 'Highland Village, TX',
      description: 'Prime retail strip center situated on a high-traffic arterial road with a strong tenant mix.',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1000&q=80',
      listingType: 'FOR SALE',
      sqFt: '24,000 Sq Ft',
      type: 'Retail',
      price: '$3.9M'
    },
    {
      id: '7001-preston-road',
      title: '7001 Preston Road',
      location: 'Dallas, TX',
      description: 'Class A office space with abundant parking and immediate access to the Dallas North Tollway.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
      listingType: 'LEASE',
      sqFt: '16,500 Sq Ft',
      type: 'Office',
      price: '$24/SF'
    },
    {
      id: 'trimar-logistics-warehouse',
      title: 'Trimar Logistics Warehouse',
      location: 'DFW Airport, TX',
      description: 'Large industrial warehouse facility with 28-foot clear heights and 5 loading docks.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
      listingType: 'RENT',
      sqFt: '75,000 Sq Ft',
      type: 'Industrial',
      price: '$8/SF'
    }
  ];

  // Service item details for Service Teaser
  const serviceTeasers = [
    {
      title: 'Asset Management',
      description: 'Defending and optimizing private commercial portfolios.',
      icon: <TrendingUp className="w-5 h-5 text-[#C41200]" />
    },
    {
      title: 'Advisory Services',
      description: 'Unlocking developer asset value through expert feasibility.',
      icon: <FileText className="w-5 h-5 text-[#C41200]" />
    },
    {
      title: 'Leasing',
      description: 'Connecting national tenants with high-yield Texas retail.',
      icon: <Briefcase className="w-5 h-5 text-[#C41200]" />
    },
    {
      title: 'Development & Construction',
      description: 'Outsourced engineering, design, and site delivery.',
      icon: <HardHat className="w-5 h-5 text-[#C41200]" />
    }
  ];

  // Get the Kathleen Koons testimonial
  const featuredTestimonial = TESTIMONIALS.find(t => t.id === 'koons-real-estate-law') || TESTIMONIALS[0];

  return (
    <div id="homepage-container" className="flex flex-col bg-[#FAFAFA] min-h-screen">
      
      {/* SECTION 1: Header & Hero Section */}
      <section id="hero-section" className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-28 pb-12 w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 items-stretch">
          
          {/* Left Column (50%) */}
          <div id="hero-left" className="flex-1 flex flex-col justify-center items-start lg:pr-10 gap-6">
            <span id="hero-eyebrow" className="font-sans text-xs font-bold text-[#C41200] tracking-[0.2em] uppercase">
              Established 2000
            </span>
            
            <h1 id="hero-title" className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] font-bold text-brand-dark">
              Development Management. Texas Commercial Expertise.
            </h1>
            
            <p id="hero-description" className="font-sans text-brand-gray text-base sm:text-lg leading-relaxed max-w-xl">
              Goodman Real Estate Solutions provides outsourced asset and project management for commercial developers, landlords, and institutions across Texas.
            </p>
            
            {/* Three Stat Columns Separated by Thin Vertical Gray Borders */}
            <div id="hero-stats-row" className="grid grid-cols-3 w-full py-6 my-2 border-y border-gray-100">
              {HERO_STATS.map((stat, idx) => (
                <div
                  key={stat.id}
                  id={`hero-stat-col-${stat.id}`}
                  className={`flex flex-col px-4 sm:px-6 ${
                    idx === 0 ? 'pl-0' : 'border-l border-gray-200'
                  } ${idx === 2 ? 'pr-0' : ''}`}
                >
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[11px] text-brand-gray tracking-wider uppercase font-semibold mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Two Inline Buttons */}
            <div id="hero-buttons" className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                id="hero-btn-services"
                onClick={() => onPageChange('services')}
                className="bg-[#C41200] hover:bg-[#A30F00] text-brand-white font-sans text-sm font-bold px-8 py-4 rounded-2xl transition-all hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
              <button
                id="hero-btn-portfolio"
                onClick={() => onPageChange('case-studies')}
                className="border-2 border-brand-dark hover:bg-brand-dark hover:text-brand-white text-brand-dark font-sans text-sm font-bold px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer bg-white"
              >
                View Case Studies
              </button>
            </div>
          </div>
          
          {/* Right Column (50% with background card and large image + floating absolute testimonial card) */}
          <div
            id="hero-right"
            className="flex-1 w-full flex flex-col gap-[24px] p-[16px] md:relative md:p-0 md:gap-0 md:flex-row md:items-center md:justify-center md:min-h-[450px] lg:min-h-[550px]"
          >
            <div className="bg-[#F9FAFB] p-4 md:p-6 lg:p-10 rounded-[24px] w-full h-[280px] md:h-full md:min-h-[450px] flex items-center justify-center border border-gray-100 shrink-0">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <img
                  id="hero-main-img"
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                  alt="Luxury commercial lobby interior designed by Goodman Real Estate Solutions"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-2xl"
                />
                
                {/* Floating Testimonial Card */}
                <div
                  id="hero-floating-card"
                  className="hidden sm:block absolute -left-5 lg:-left-10 bottom-8 max-w-[340px] bg-brand-white p-6 rounded-2xl shadow-2xl border border-gray-50/50 z-10"
                  style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                >
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#C41200] shrink-0">
                      <Quote className="w-4 h-4 text-[#C41200]" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-sans text-[13px] text-brand-gray italic leading-relaxed">
                        "Goodman reorganized our Austin retail portfolio and revitalized our entire lease structure."
                      </p>
                      <div className="border-t border-gray-100 pt-2">
                        <span className="block font-sans text-[11px] font-bold text-brand-dark">
                          Marcus Vance
                        </span>
                        <span className="block font-sans text-[9px] text-brand-gray tracking-wider uppercase">
                          Managing Partner, Vanguard Cap
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile testimonial fallback block */}
            <div className="block sm:hidden bg-brand-white p-5 rounded-2xl shadow-md border border-gray-100 w-full shrink-0">
              <div className="flex gap-3">
                <Quote className="w-4 h-4 text-[#C41200] shrink-0 mt-1" />
                <div>
                  <p className="font-sans text-xs text-brand-gray italic leading-relaxed">
                    "Goodman reorganized our Austin retail portfolio and revitalized our entire lease structure."
                  </p>
                  <div className="mt-2 pt-2 border-t border-gray-100">
                    <span className="block font-sans text-xs font-bold text-brand-dark">Marcus Vance</span>
                    <span className="block font-sans text-[10px] text-brand-gray uppercase">Managing Partner, Vanguard Cap</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </section>

      {/* SECTION 2: "Our Services" Teaser */}
      <section id="services-teaser-section" className="py-20 lg:py-24 bg-white border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="font-sans text-xs font-bold text-[#C41200] tracking-[0.2em] uppercase block mb-3">
            SCOPE OF SERVICES
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark tracking-tight mb-12">
            Core Commercial Capabilities.
          </h3>

          {/* 4-column horizontal row with lightweight visual cards */}
          <div id="services-teaser-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {serviceTeasers.map((srv, idx) => (
              <div
                key={srv.title}
                id={`srv-teaser-card-${idx}`}
                className="bg-transparent border border-gray-100 p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-300 hover:border-gray-200"
              >
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4">
                  {srv.icon}
                </div>
                <h4 className="font-serif text-lg font-bold text-brand-dark mb-2">
                  {srv.title}
                </h4>
                <p className="font-sans text-xs text-brand-gray leading-relaxed">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>

          <button
            id="link-services-full"
            onClick={() => onPageChange('services')}
            className="font-sans text-sm font-bold text-[#C41200] hover:text-[#A30F00] transition-colors underline underline-offset-8 decoration-2 hover:decoration-[#A30F00] cursor-pointer"
          >
            See Full Scope of Services →
          </button>
        </div>
      </section>

      {/* SECTION 3: "Property Listings" Teaser */}
      <section id="property-listings-teaser-section" className="py-20 lg:py-24 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <div className="text-center mb-12">
          <span className="font-sans text-xs font-bold text-[#C41200] tracking-[0.2em] uppercase block mb-3">
            CURRENT COMMERCIAL ASSETS
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark tracking-tight">
            Prime Commercial Properties.
          </h3>
        </div>

        {/* 3 cards row */}
        <div id="property-teaser-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mockProperties.map((property) => (
            <div
              key={property.id}
              id={`prop-teaser-card-${property.id}`}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
            >
              {/* Image & Overlay badge */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100 shrink-0">
                <img
                  src={property.image}
                  alt={property.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Minimal dark-gray outline badge */}
                <div className="absolute top-4 left-4">
                  <span className="border border-gray-400 bg-white/95 text-[#111111] rounded-full px-3.5 py-1 text-[11px] font-sans font-bold tracking-widest uppercase shadow-sm">
                    {property.listingType}
                  </span>
                </div>
              </div>

              {/* Content block */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-3">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#111111] mb-1 group-hover:text-[#C41200] transition-colors leading-snug">
                      {property.title}
                    </h4>
                    <div className="flex items-center gap-1.5 text-brand-gray text-xs font-sans">
                      <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span className="font-medium text-gray-500">{property.location}</span>
                    </div>
                  </div>

                  <hr className="border-gray-100" />
                  
                  <p className="font-sans text-brand-gray text-xs leading-relaxed min-h-[36px]">
                    {property.description}
                  </p>

                  <hr className="border-gray-100" />

                  {/* Property stats row */}
                  <div className="grid grid-cols-3 gap-1 text-center py-1">
                    <div className="bg-[#FAFAFA] py-1.5 rounded-xl border border-gray-100">
                      <span className="font-sans text-[9px] text-gray-400 font-bold uppercase block tracking-wider">Sq Ft</span>
                      <span className="font-sans text-[11px] font-bold text-brand-dark block truncate px-1">{property.sqFt}</span>
                    </div>
                    <div className="bg-[#FAFAFA] py-1.5 rounded-xl border border-gray-100">
                      <span className="font-sans text-[9px] text-gray-400 font-bold uppercase block tracking-wider">Type</span>
                      <span className="font-sans text-[11px] font-bold text-brand-dark block truncate px-1">{property.type}</span>
                    </div>
                    <div className="bg-[#FAFAFA] py-1.5 rounded-xl border border-gray-100">
                      <span className="font-sans text-[9px] text-gray-400 font-bold uppercase block tracking-wider">Price</span>
                      <span className="font-sans text-[11px] font-bold text-[#C41200] block truncate px-1">{property.price}</span>
                    </div>
                  </div>
                </div>

                <button
                  id={`btn-teaser-inquire-${property.id}`}
                  onClick={() => onPageChange('properties')}
                  className="w-full border border-gray-200 hover:border-[#111111] hover:bg-[#111111] hover:text-white text-[#111111] font-sans text-xs font-bold py-3.5 rounded-xl transition-all tracking-widest uppercase flex items-center justify-center gap-1.5 cursor-pointer bg-white"
                >
                  Inquire About Property
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            id="link-properties-all"
            onClick={() => onPageChange('properties')}
            className="font-sans text-sm font-bold text-[#C41200] hover:text-[#A30F00] transition-colors underline underline-offset-8 decoration-2 hover:decoration-[#A30F00] cursor-pointer"
          >
            View All Properties →
          </button>
        </div>
      </section>

      {/* SECTION 4: "Client Testimonials" Teaser */}
      <section id="testimonials-teaser-section" className="py-20 lg:py-24 bg-white border-y border-gray-100 w-full">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div
            id="testimonial-panel"
            className="bg-[#F9FAFB] rounded-2xl p-10 lg:p-12 border border-gray-200/50 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden"
          >
            {/* Small corporate placeholder style/logo to the left */}
            <div id="testimonial-side-logo" className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm">
              <Quote className="w-8 h-8 text-[#C41200]/20" />
            </div>

            <div className="flex-1">
              <p className="font-serif text-lg sm:text-xl md:text-2xl italic text-brand-dark leading-relaxed mb-6">
                "{featuredTestimonial.quote}"
              </p>
              
              <div>
                <span className="block font-sans text-sm font-bold text-brand-dark">
                  {featuredTestimonial.authorName}
                </span>
                <span className="block font-sans text-xs text-brand-gray tracking-wider uppercase mt-0.5">
                  {featuredTestimonial.authorTitle}, {featuredTestimonial.companyName}
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              id="link-testimonials-all"
              onClick={() => onPageChange('contact')}
              className="font-sans text-sm font-bold text-[#C41200] hover:text-[#A30F00] transition-colors underline underline-offset-8 decoration-2 hover:decoration-[#A30F00] cursor-pointer"
            >
              Read More Client Reviews →
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: "Project Updates" Teaser */}
      <section id="project-updates-teaser-section" className="py-20 lg:py-24 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <div className="text-center mb-12">
          <span className="font-sans text-xs font-bold text-[#C41200] tracking-[0.2em] uppercase block mb-3">
            ANNOUNCEMENTS
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark tracking-tight">
            Recent Project Updates.
          </h3>
        </div>

        {/* 2-column grid */}
        <div id="updates-teaser-grid" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {recentUpdates.map((upd) => (
            <div
              key={upd.id}
              id={`upd-teaser-item-${upd.id}`}
              onClick={() => onPageChange('updates')}
              className="bg-white border border-gray-100 p-6 rounded-2xl flex gap-5 items-center group cursor-pointer hover:shadow-md transition-all duration-300 hover:border-gray-200"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                <img
                  src={upd.image}
                  alt={upd.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-sans text-[10px] font-semibold text-brand-gray tracking-wider uppercase block mb-1">
                  {upd.date}
                </span>
                <h4 className="font-serif text-base sm:text-lg font-bold text-brand-dark leading-snug group-hover:text-[#C41200] transition-colors line-clamp-2">
                  {upd.title}
                </h4>
                <p className="font-sans text-xs text-brand-gray leading-relaxed mt-1.5 line-clamp-2">
                  {upd.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            id="link-updates-all"
            onClick={() => onPageChange('updates')}
            className="font-sans text-sm font-bold text-[#C41200] hover:text-[#A30F00] transition-colors underline underline-offset-8 decoration-2 hover:decoration-[#A30F00] cursor-pointer"
          >
            View All Project Updates →
          </button>
        </div>
      </section>

      {/* SECTION 6: "Case Studies" Teaser */}
      <section id="case-studies-teaser-section" className="py-20 lg:py-24 bg-white border-y border-gray-100 w-full">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="font-sans text-xs font-bold text-[#C41200] tracking-[0.2em] uppercase block mb-3">
              CASE WORK EXAMPLES
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark tracking-tight">
              Featured Case Studies
            </h3>
          </div>

          {/* 3 cards row */}
          <div id="case-studies-teaser-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {previewCaseStudies.map((project) => (
              <div
                key={project.id}
                id={`case-teaser-card-${project.id}`}
                className="bg-brand-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
              >
                {/* Image & Status Badge */}
                <div className="relative aspect-[16/9] w-full overflow-hidden shrink-0 bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Minimal transparent outline status badge on top-left of image */}
                  <div className="absolute top-4 left-4">
                    <span className="border border-[#E5E7EB] bg-white/95 text-[#111111] rounded-full px-3.5 py-1.5 text-[11px] font-sans font-medium tracking-wide flex items-center shadow-sm">
                      <span className={`w-1.5 h-1.5 rounded-full mr-2 shrink-0 ${
                        project.status === 'COMPLETED' ? 'bg-[#6B7280]' : 'bg-[#EF4444]'
                      }`} />
                      {project.status === 'COMPLETED' ? 'COMPLETED' : 'ONGOING'}
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="font-sans text-[10px] font-bold text-[#C41200] tracking-wider uppercase">
                      {project.category}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-brand-dark leading-snug group-hover:text-[#C41200] transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex items-center gap-1 text-brand-gray text-xs font-sans mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span className="font-medium text-gray-500">{project.location}</span>
                    </div>
                  </div>

                  <button
                    id={`btn-case-teaser-explore-${project.id}`}
                    onClick={() => onSelectCaseStudy(project.id)}
                    className="w-full border border-gray-200 hover:border-[#111111] hover:bg-[#111111] hover:text-white text-[#111111] font-sans text-xs font-bold py-3.5 rounded-xl transition-all tracking-widest uppercase flex items-center justify-center gap-1.5 cursor-pointer bg-white"
                  >
                    Explore Story →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              id="link-case-studies-all"
              onClick={() => onPageChange('case-studies')}
              className="bg-[#C41200] hover:bg-[#A30F00] text-white font-sans text-xs font-bold px-8 py-5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer uppercase tracking-wider"
            >
              View Full Case Study Portfolio →
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7: Bottom CTA Strip */}
      <section id="homepage-cta-strip" className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div
          id="homepage-cta-block"
          className="bg-[#F9FAFB] rounded-[24px] p-10 lg:p-12 border border-gray-200/80 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-sm"
        >
          <div className="max-w-xl">
            <span className="font-sans text-xs font-bold text-[#C41200] tracking-[0.2em] uppercase block mb-2">
              GET IN TOUCH
            </span>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#111111] tracking-tight">
              Ready to discuss your next development project?
            </h3>
            <p className="font-sans text-brand-gray text-sm mt-2.5 leading-relaxed">
              Our outsourced advisory and project management specialists are ready to help optimize and scale your commercial operations in Texas.
            </p>
          </div>

          <button
            id="homepage-cta-contact-btn"
            onClick={() => onPageChange('contact')}
            className="bg-[#C41200] hover:bg-[#A30F00] text-white font-sans text-xs font-bold px-8 py-5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all shrink-0 w-full md:w-auto cursor-pointer uppercase tracking-wider"
          >
            Get In Touch →
          </button>
        </div>
      </section>

    </div>
  );
}
