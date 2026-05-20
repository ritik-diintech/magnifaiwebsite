import React, { useState } from 'react';
import Preloader from '../../components/Preloader';
import CustomCursor from '../../components/CustomCursor';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Problems from '../../components/Problems';
import Services from '../../components/Services';
import TargetAudience from '../../components/TargetAudience';
import Process from '../../components/Process';
import Metrics from '../../components/Metrics';
import OurWorks from '../../components/OurWorks';
import Testimonials from '../../components/Testimonials';
import Contact from '../../components/Contact';
import CTA from '../../components/CTA';
import Footer from '../../components/Footer';
import AuditModal from '../../components/AuditModal';

import '../../App.css';

export default function Home() {
  const [loaderActive, setLoaderActive] = useState(true);
  const [pageRevealed, setPageRevealed] = useState(false);
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  return (
    <>
      {/* Attractive Luxury Preloader */}
      {loaderActive && (
        <Preloader 
          onStartReveal={() => setPageRevealed(true)}
          onComplete={() => setLoaderActive(false)} 
        />
      )}

      {/* High-end global film noise simulation overlay */}
      <div className="noise-overlay" />
      
      {/* Smooth lagging spring custom cursor */}
      <CustomCursor />
      
      {/* Luxury navigation with blur */}
      <Navbar 
        isPageReady={pageRevealed} 
        onBookAudit={() => setAuditModalOpen(true)} 
      />
      
      {/* Home Page Sections */}
      <main className={`main-content-wrapper ${pageRevealed ? 'reveal-active' : 'reveal-hidden'}`}>
        <Hero 
          isPageReady={pageRevealed} 
          onBookAudit={() => setAuditModalOpen(true)} 
        />
        <About />
        <Problems />
        <Services />
        <TargetAudience />
        <Process />
        <Metrics />
        <OurWorks />
        <Testimonials />
        <Contact />
        <CTA onStartClick={() => setAuditModalOpen(true)} />
      </main>
      
      {/* Sitemap footer & back-to-top nodes */}
      <div className={pageRevealed ? 'reveal-active' : 'reveal-hidden'}>
        <Footer />
      </div>

      {/* Luxury Contact/Audit Booking Modal */}
      <AuditModal 
        isOpen={auditModalOpen} 
        onClose={() => setAuditModalOpen(false)} 
      />
    </>
  );
}
