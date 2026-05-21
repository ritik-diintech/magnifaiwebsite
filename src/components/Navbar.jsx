import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ChevronDown, Landmark, Sparkles, Cpu, Crown, Globe } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ isPageReady, onBookAudit }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();

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
    { label: 'Elite Archetypes', isMega: true },
    { label: 'Process', href: '#process' },
    { label: 'Impact', href: '#metrics' },
    { label: 'Works', href: '#our-works' },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);

    // Check if we are not on the Home page
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) {
          const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      }, 150);
      return;
    }

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
          <Link
            to="/"
            className="nav-logo-link interactive"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                scrollTo(e, '#');
              } else {
                e.preventDefault();
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <div className="nav-logo-circle">
              <img src="/logo.jpg" alt="MagnifAI" />
            </div>
            <span className="nav-brand-name">
              Magnif<span className="gold">AI</span>
            </span>
          </Link>

          {/* Right: Links + Book Audit together */}
          <div className="nav-right-group">
            {links.map((link, i) => (
              <React.Fragment key={link.label}>
                {link.isMega ? (
                  <div
                    className="nav-mega-container"
                    onMouseEnter={() => setMegaOpen(true)}
                    onMouseLeave={() => setMegaOpen(false)}
                  >
                    <button
                      className={`nav-link-item interactive nav-mega-trigger ${megaOpen ? 'active' : ''}`}
                    >
                      {link.label} <ChevronDown size={10} style={{ marginLeft: '4px', opacity: 0.7 }} />
                    </button>

                    {/* The Mega Menu Dropdown Panel */}
                    <AnimatePresence>
                      {megaOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, x: '-50%' }}
                          animate={{ opacity: 1, y: 0, x: '-50%' }}
                          exit={{ opacity: 0, y: 10, x: '-50%' }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="nav-mega-dropdown glass-panel"
                        >
                          <div className="mega-grid">
                            <Link to="/archetypes/politics" className="mega-item item-politics interactive" onClick={() => setMegaOpen(false)}>
                              <div className="mega-icon-wrap"><Landmark size={14} /></div>
                              <div className="mega-info">
                                <span className="mega-item-tag orange-text">POLITICS</span>
                                <h4>Political Leaders</h4>
                                <p>Mass mobilization, crisis PR, and 10x regional dialect outreach.</p>
                              </div>
                            </Link>

                            <Link to="/archetypes/celebs" className="mega-item item-celebs interactive" onClick={() => setMegaOpen(false)}>
                              <div className="mega-icon-wrap"><Crown size={14} /></div>
                              <div className="mega-info">
                                <span className="mega-item-tag blue-text">ARTISTS</span>
                                <h4>Actors & Artists</h4>
                                <p>Monopolize attention with synthetic voice cloning & omnipresence.</p>
                              </div>
                            </Link>

                            <a href="#" className="mega-item item-founders interactive" onClick={(e) => { e.preventDefault(); }}>
                              <div className="mega-icon-wrap"><Cpu size={14} /></div>
                              <div className="mega-info">
                                <span className="mega-item-tag gold-text">FOUNDER</span>
                                <h4>Founder & CEO</h4>
                                <p>Undisputed personal branding & founder lead amplification.</p>
                              </div>
                            </a>

                            <Link to="" className="mega-item item-gurus interactive" onClick={() => setMegaOpen(false)}>
                              <div className="mega-icon-wrap"><Sparkles size={14} /></div>
                              <div className="mega-info">
                                <span className="mega-item-tag guru-text">GURUS</span>
                                <h4>Spiritual Guru</h4>
                                <p>Wisdom without borders, global Ashrams mapping, and audio streams.</p>
                              </div>
                            </Link>

                            <a href="#" className="mega-item item-activists interactive" onClick={(e) => { e.preventDefault(); }}>
                              <div className="mega-icon-wrap"><Globe size={14} /></div>
                              <div className="mega-info">
                                <span className="mega-item-tag activist-text">ACTIVIST</span>
                                <h4>Activist & Change Maker</h4>
                                <p>Systemic message amplification and global solidarity networks.</p>
                              </div>
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className={`nav-link-item interactive ${activeSection === link.href ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, link.href)}
                  >
                    {link.label}
                  </a>
                )}
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
                  {link.isMega ? (
                    <div className="mobile-mega-section">
                      <span className="mobile-mega-label">Elite Archetypes</span>
                      <ul className="mobile-mega-sublinks">
                        <li><a href="/archetypes/politics" className="mobile-sublink-item" onClick={() => setMobileOpen(false)}>Political Leaders</a></li>
                        <li><a href="/archetypes/celebs" className="mobile-sublink-item" onClick={() => setMobileOpen(false)}>Actors & Artists</a></li>
                        <li><a href="#" className="mobile-sublink-item" onClick={(e) => { e.preventDefault(); }}>Founder & CEO</a></li>
                        <li><Link to="/archetypes/gurus" className="mobile-sublink-item" onClick={() => setMobileOpen(false)}>Spiritual Guru</Link></li>
                        <li><a href="#" className="mobile-sublink-item" onClick={(e) => { e.preventDefault(); }}>Activist & Change Maker</a></li>
                      </ul>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      className={`nav-mobile-link-item ${activeSection === link.href ? 'active' : ''}`}
                      onClick={(e) => scrollTo(e, link.href)}
                    >
                      {link.label}
                    </a>
                  )}
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
