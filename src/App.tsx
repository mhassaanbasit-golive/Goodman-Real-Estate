import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomepageView from './components/HomepageView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import CaseStudiesView from './components/CaseStudiesView';
import CaseStudyDetailView from './components/CaseStudyDetailView';
import UpdatesView from './components/UpdatesView';
import ContactView from './components/ContactView';
import PropertiesView from './components/PropertiesView';
import ConsultationModal from './components/ConsultationModal';
import ChatbotOverlay from './components/ChatbotOverlay';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string>('');
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);

  // Hash Router Logic
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      
      if (hash.startsWith('#case-study-')) {
        const id = hash.replace('#case-study-', '');
        setCurrentPage('case-study-detail');
        setSelectedCaseStudyId(id);
      } else {
        const pageId = hash.replace('#', '');
        // Validate pageId against allowed nav pages, default to home if unmatched
        const validPages = ['home', 'about', 'services', 'case-studies', 'properties', 'updates', 'contact'];
        if (validPages.includes(pageId)) {
          setCurrentPage(pageId);
        } else {
          setCurrentPage('home');
          window.location.hash = '#home';
        }
      }
      // Instantly scroll back to top of page on route change
      window.scrollTo(0, 0);
    };

    // Parse initial route on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll Reveal Observer Effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    const mutationObserver = new MutationObserver(() => {
      const newElements = document.querySelectorAll('.reveal:not(.visible)');
      newElements.forEach((el) => observer.observe(el));
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [currentPage]);

  // Update hash state, which automatically triggers state changes via the listener
  const handlePageChange = (pageId: string) => {
    window.location.hash = `#${pageId}`;
  };

  // Select case study and push to hash router
  const handleSelectCaseStudy = (id: string) => {
    window.location.hash = `#case-study-${id}`;
  };

  // Render the current view dynamically
  const renderCurrentView = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomepageView
            onPageChange={handlePageChange}
            onSelectCaseStudy={handleSelectCaseStudy}
          />
        );
      case 'about':
        return <AboutView />;
      case 'services':
        return <ServicesView />;
      case 'case-studies':
        return (
          <CaseStudiesView
            onSelectCaseStudy={handleSelectCaseStudy}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );
      case 'properties':
        return (
          <PropertiesView
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );
      case 'case-study-detail':
        return (
          <CaseStudyDetailView
            caseStudyId={selectedCaseStudyId}
            onBackToGrid={() => handlePageChange('case-studies')}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );
      case 'updates':
        return <UpdatesView />;
      case 'contact':
        return <ContactView />;
      default:
        return (
          <HomepageView
            onPageChange={handlePageChange}
            onSelectCaseStudy={handleSelectCaseStudy}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-brand-light text-brand-dark overflow-x-hidden selection:bg-[#FCE6E6] selection:text-brand-red">
      
      {/* Fixed Sticky Header */}
      <Header
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16 pt-16">
        <div className="animate-fade-in">
          {renderCurrentView()}
        </div>
      </main>

      {/* Luxury Charcoal Footer */}
      <Footer onPageChange={handlePageChange} />

      {/* Consultation Request Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* AI Advisory Chatbot */}
      <ChatbotOverlay />

    </div>
  );
}
