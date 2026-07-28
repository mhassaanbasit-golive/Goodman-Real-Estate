import React, { useState } from 'react';

interface PropertyListing {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  listingType: 'FOR SALE' | 'LEASE' | 'RENT';
  sqFt: string;
  type: string;
  price: string;
}

interface PropertiesViewProps {
  onOpenConsultation: () => void;
}

export default function PropertiesView({ onOpenConsultation }: PropertiesViewProps) {
  const [activeTab, setActiveTab] = useState<'All' | 'For Sale' | 'Lease' | 'Rent'>('All');

  const PROPERTIES: PropertyListing[] = [
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

  const filteredProperties = PROPERTIES.filter((property) => {
    if (activeTab === 'All') return true;
    return property.listingType.toLowerCase() === activeTab.toLowerCase();
  });

  return (
    <div id="properties-view-container" className="pt-24 bg-[#FAFAFA] min-h-screen">
      
      {/* Page Header */}
      <section id="properties-header" className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-12 pb-8">
        <span className="font-sans text-xs font-bold text-[#C41200] tracking-[0.2em] uppercase block mb-2">
          COMMERCIAL ASSETS
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-dark tracking-tight">
          Curated Commercial Real Estate.
        </h1>
        <p className="font-sans text-brand-gray text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
          Exclusive off-market and listed commercial properties across Texas. Browse our current inventory.
        </p>
      </section>

      {/* Filter Tabs */}
      <section id="properties-filters" className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-12">
        <div className="flex flex-wrap items-center gap-2">
          {(['All', 'For Sale', 'Lease', 'Rent'] as const).map((tab) => (
            <button
              key={tab}
              id={`prop-tab-btn-${tab.toLowerCase().replace(' ', '-')}`}
              onClick={() => setActiveTab(tab)}
              className={`font-sans text-xs font-bold px-6 py-3 rounded-full border transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#C41200] border-[#C41200] text-white shadow-md'
                  : 'bg-white border-gray-200 text-brand-gray hover:border-[#111111] hover:text-[#111111]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section id="properties-grid-section" className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-16">
        <div
          id="properties-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              id={`property-card-item-${property.id}`}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
            >
              {/* Image with overlay badge */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100 shrink-0">
                <img
                  src={property.image}
                  alt={property.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Minimalist status badge on top-left of image */}
                <div className="absolute top-4 left-4">
                  <span className="border border-gray-400 bg-white/95 text-[#111111] rounded-full px-3.5 py-1 text-[11px] font-sans font-bold tracking-widest uppercase shadow-sm">
                    {property.listingType}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                <div className="flex flex-col gap-3">
                  
                  {/* Title & Address */}
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#111111] leading-snug group-hover:text-[#C41200] transition-colors mb-1.5">
                      {property.title}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 text-brand-gray text-xs font-sans">
                      <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="font-medium text-gray-500">{property.location}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <hr className="border-gray-100" />

                  {/* Description: exactly 2 sentences */}
                  <p className="font-sans text-brand-gray text-xs leading-relaxed min-h-[36px]">
                    {property.description}
                  </p>

                  {/* Divider */}
                  <hr className="border-gray-100" />

                  {/* Property Stats Row: exactly 3 inline items with small icons */}
                  <div className="grid grid-cols-3 gap-2 py-1">
                    {/* Sq Ft */}
                    <div className="flex flex-col gap-0.5 text-center bg-[#FAFAFA] py-2 rounded-xl border border-gray-100">
                      <span className="font-sans text-[10px] text-gray-400 font-bold uppercase tracking-wider">Sq Ft</span>
                      <span className="font-sans text-xs font-bold text-brand-dark truncate px-1">
                        {property.sqFt}
                      </span>
                    </div>

                    {/* Class/Type */}
                    <div className="flex flex-col gap-0.5 text-center bg-[#FAFAFA] py-2 rounded-xl border border-gray-100">
                      <span className="font-sans text-[10px] text-gray-400 font-bold uppercase tracking-wider">Type</span>
                      <span className="font-sans text-xs font-bold text-brand-dark truncate px-1">
                        {property.type}
                      </span>
                    </div>

                    {/* Price/Rate */}
                    <div className="flex flex-col gap-0.5 text-center bg-[#FAFAFA] py-2 rounded-xl border border-gray-100">
                      <span className="font-sans text-[10px] text-gray-400 font-bold uppercase tracking-wider">Price</span>
                      <span className="font-sans text-xs font-bold text-[#C41200] truncate px-1">
                        {property.price}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Inquire About This Property Button */}
                <button
                  id={`btn-inquire-property-${property.id}`}
                  onClick={onOpenConsultation}
                  className="w-full border border-gray-200 hover:border-[#111111] hover:bg-[#111111] hover:text-white text-[#111111] font-sans text-xs font-bold py-3.5 rounded-xl transition-all tracking-widest uppercase flex items-center justify-center gap-1.5 cursor-pointer bg-white"
                >
                  Inquire About This Property
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section id="properties-cta-section" className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24 animate-reveal">
        <div
          id="properties-cta-block"
          className="bg-[#F9FAFB] rounded-[24px] p-10 lg:p-12 border border-gray-200/80 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-sm"
        >
          <div className="max-w-xl">
            <span className="font-sans text-xs font-bold text-[#C41200] tracking-[0.2em] uppercase block mb-2">
              Property Search
            </span>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#111111] tracking-tight">
              Looking for a specific commercial asset or off-market deal?
            </h3>
            <p className="font-sans text-brand-gray text-sm mt-3 leading-relaxed">
              We leverage our extensive private networks across Texas to source prime, unlisted commercial properties that align perfectly with your investment criteria.
            </p>
          </div>

          <button
            id="properties-cta-consultation-btn"
            onClick={onOpenConsultation}
            className="bg-[#C41200] hover:bg-[#A30F00] text-white font-sans text-xs font-bold px-8 py-5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all shrink-0 w-full md:w-auto cursor-pointer uppercase tracking-wider"
          >
            REQUEST A CONSULTATION
          </button>
        </div>
      </section>

    </div>
  );
}
