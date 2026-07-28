import React, { useState } from 'react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: 'General Advisory',
    scope: 'Repositioning',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      interest: 'General Advisory',
      scope: 'Repositioning',
      message: ''
    });
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm transition-opacity"
        onClick={handleReset}
      />

      {/* Modal Card */}
      <div className="relative bg-brand-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl z-10 border border-gray-100 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-brand-light">
          <div>
            <h3 className="font-serif text-xl font-bold text-brand-dark">
              Request Advisory Consultation
            </h3>
            <p className="font-sans text-xs text-brand-gray mt-1">
              Direct access to Goodman Real Estate Solutions principal.
            </p>
          </div>
          <button
            onClick={handleReset}
            className="p-2 text-brand-gray hover:text-brand-dark hover:bg-gray-200/50 rounded-full transition-all cursor-pointer"
          >
            <svg className="w-5 h-5 text-[#1A1D20]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Form Body */}
        <div className="overflow-y-auto p-6 flex-1">
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <svg className="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22,4 12,14.01 9,11.01" />
                </svg>
              </div>
              <h4 className="font-serif text-2xl font-bold text-brand-dark mb-2">
                Consultation Request Received
              </h4>
              <p className="font-sans text-brand-gray text-sm max-w-sm mx-auto mb-6 leading-relaxed">
                Thank you, <strong className="text-brand-dark">{formData.fullName}</strong>. Herb Goodman or a senior representative will contact you at <strong className="text-brand-dark">{formData.email}</strong> within 1 business day to review your requirements.
              </p>
              
              <div className="bg-brand-light p-4 rounded-xl text-left w-full max-w-md border border-gray-100 mb-8">
                <span className="text-xs font-semibold text-brand-gray uppercase tracking-wider block mb-2">Submission Details:</span>
                <div className="grid grid-cols-2 gap-y-2 text-xs">
                  <span className="text-brand-gray">Interest Field:</span>
                  <span className="font-medium text-brand-dark">{formData.interest}</span>
                  <span className="text-brand-gray">Preferred Scope:</span>
                  <span className="font-medium text-brand-dark">{formData.scope}</span>
                  <span className="text-brand-gray">Phone Number:</span>
                  <span className="font-medium text-brand-dark">{formData.phone || 'N/A'}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="bg-brand-dark hover:bg-brand-red text-brand-white font-sans text-sm font-bold px-8 py-3.5 rounded-2xl transition-all cursor-pointer shadow-md w-full max-w-xs"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-xs font-bold text-brand-dark uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Johnathan Sterling"
                  className="bg-white border border-gray-200 text-brand-dark text-sm p-3.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs font-bold text-brand-dark uppercase tracking-wider">
                    Professional Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@sterlingcap.com"
                    className="bg-white border border-gray-200 text-brand-dark text-sm p-3.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs font-bold text-brand-dark uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. (512) 555-0199"
                    className="bg-white border border-gray-200 text-brand-dark text-sm p-3.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs font-bold text-brand-dark uppercase tracking-wider">
                    Property Asset Class
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="bg-white border border-gray-200 text-brand-dark text-sm p-3.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                  >
                    <option>Retail & Lifestyle centers</option>
                    <option>Industrial & Cold-Storage</option>
                    <option>Advisory / Portfolio Valuation</option>
                    <option>Mixed-Use / Master Planning</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs font-bold text-brand-dark uppercase tracking-wider">
                    Project Primary Scope
                  </label>
                  <select
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="bg-white border border-gray-200 text-brand-dark text-sm p-3.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                  >
                    <option>Asset Repositioning</option>
                    <option>Entitlement & Zoning</option>
                    <option>Development Management</option>
                    <option>Advisory / Transaction Retainer</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-xs font-bold text-brand-dark uppercase tracking-wider">
                  Brief Project Overview *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline site location, square footage, and key objectives (e.g. re-tenanting local Austin strip mall or obtaining logistics zoning approvals)."
                  className="bg-white border border-gray-200 text-brand-dark text-sm p-3.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="text-xs text-brand-gray leading-relaxed flex items-start gap-2 bg-brand-light p-3.5 rounded-xl border border-gray-100">
                <svg className="w-4 h-4 text-[#C41200] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>By submitting, you agree to secure transmission. All discussions are protected under standard commercial non-disclosure agreements (NDA).</span>
              </div>

              <button
                type="submit"
                className="mt-2 bg-brand-red hover:bg-[#A30F00] text-brand-white font-sans text-sm font-bold p-4 rounded-2xl cursor-pointer transition-all hover:shadow-lg hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22,2 15,22 11,13 2,9 22,2" />
                </svg>
                Submit Consultation Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
