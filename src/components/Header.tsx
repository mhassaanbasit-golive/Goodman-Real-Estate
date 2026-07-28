import React, { useState, useEffect } from 'react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onOpenConsultation: () => void;
}

export default function Header({ currentPage, onPageChange, onOpenConsultation }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'properties', label: 'Properties' },
    { id: 'updates', label: 'Updates' },
    { id: 'contact', label: 'Testimonials & Contact' }
  ];

  const handleNavClick = (id: string) => {
    onPageChange(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#C41200]/85 backdrop-blur-md shadow-lg py-0 md:py-4 border-b border-[#C41200]/20'
          : 'bg-[#C41200] py-0 md:py-5 border-b border-[#C41200]/10'
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between p-[12px_20px] md:p-0 md:px-6 lg:px-12">
        {/* Brand Logo */}
        <button
          id="logo-button"
          onClick={() => handleNavClick('home')}
          className="flex items-center text-left group cursor-pointer"
        >
          <img
            id="brand-logo"
            src="/logo.svg"
            alt="Goodman Real Estate Solutions"
            style={{
              height: '36px',
              width: 'auto',
              objectFit: 'contain',
              flexShrink: 0,
              filter: 'brightness(0) invert(1)'
            }}
            onError={(e) => {
              e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 72' width='300' height='72'><text x='0' y='42' font-family='Impact, Arial Black, sans-serif' font-size='50' font-weight='900' fill='%23111111' letter-spacing='-0.5px'>GOODMAN</text><text x='2' y='64' font-family='Inter, sans-serif' font-size='11.5' font-weight='700' fill='%23111111' letter-spacing='3.1px'>REAL ESTATE SOLUTIONS</text></svg>";
            }}
          />
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`font-sans text-sm font-semibold tracking-wide transition-colors cursor-pointer pb-1 ${
                currentPage === item.id || (item.id === 'case-studies' && currentPage.startsWith('case-study-'))
                  ? 'text-white border-b-2 border-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Consultation Button (Desktop) */}
        <div className="hidden md:block">
          <button
            id="consultation-btn-desktop"
            onClick={onOpenConsultation}
            className="font-sans text-sm font-bold px-6 py-3 rounded-[50px] transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex items-center gap-2 cursor-pointer bg-white text-[#C41200] hover:bg-white/90"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Consultation
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 transition-colors cursor-pointer text-white hover:text-white/80"
          style={{ marginRight: '0px', paddingRight: '0px' }}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className={`md:hidden absolute top-full left-0 right-0 border-t border-white/10 shadow-xl py-6 px-6 transition-all duration-300 ${
            isScrolled
              ? 'bg-[#C41200]/95 backdrop-blur-md'
              : 'bg-[#C41200]'
          }`}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans text-base font-semibold text-left py-2 border-b border-white/10 transition-colors ${
                  currentPage === item.id || (item.id === 'case-studies' && currentPage.startsWith('case-study-'))
                    ? 'text-white font-bold pl-2 border-l-2 border-l-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              id="consultation-btn-mobile"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="mt-2 font-sans text-center font-bold py-3.5 rounded-[50px] transition-all duration-300 flex items-center justify-center gap-2 w-full cursor-pointer bg-white text-[#C41200] hover:bg-white/90"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Request Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
