import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ isPageReady, onBookAudit }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sectionIds = ['about', 'problems', 'services', 'process', 'metrics', 'our-works'];
      const scrollPosition = window.scrollY + 250; // offset of 250px from top

      let currentSection = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = `#${id}`;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Problems', href: '#problems' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Impact', href: '#metrics' },
    { label: 'Works', href: '#our-works' },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={isPageReady ? { y: 0, opacity: 1 } : { y: -60, opacity: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`navbar-outer ${scrolled ? 'scrolled' : ''}`}
      >
        <div className="navbar-bar">
          {/* Left: Logo */}
          <a href="#" className="nav-logo-link interactive" onClick={(e) => scrollTo(e, '#')}>
            <div className="nav-logo-circle">
              <img src="/logo.jpg" alt="MagnifAI" />
            </div>
            <span className="nav-brand-name">
              Magnif<span className="gold">AI</span>
            </span>
          </a>

          {/* Right: Links + Book Audit together */}
          <div className="nav-right-group">
            {links.map((link, i) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  className={`nav-link-item interactive ${activeSection === link.href ? 'active' : ''}`}
                  onClick={(e) => scrollTo(e, link.href)}
                >
                  {link.label}
                </a>
                {i < links.length - 1 && <div className="nav-divider" />}
              </React.Fragment>
            ))}

            {/* Book Audit button inline with links */}
            <a
              href="#contact"
              className="nav-book-btn interactive"
              onClick={(e) => {
                e.preventDefault();
                if (onBookAudit) onBookAudit();
              }}
            >
              <span>Book Audit <ArrowUpRight size={12} /></span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="nav-mobile-toggle interactive"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.div>

      {/* Mobile Fullscreen Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="nav-mobile-overlay"
          >
            <button
              className="nav-mobile-close interactive"
              onClick={() => setMobileOpen(false)}
            >
              <X size={20} />
            </button>

            <ul className="nav-mobile-links">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`nav-mobile-link-item ${activeSection === link.href ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="gold-btn interactive"
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);
                if (onBookAudit) onBookAudit();
              }}
            >
              <span>Book Audit <ArrowUpRight size={14} /></span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
