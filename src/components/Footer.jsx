import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-wrap">
      <div className="luxury-container">

        {/* Main Footer Sitemap Grid */}
        <div className="footer-grid-main">
          {/* Brand Info */}
          <div>
            <a
              href="#"
              onClick={handleScrollToTop}
              className="footer-brand-wrap interactive"
            >
              <div className="footer-logo-circle">
                <img src="/logo.jpg" alt="MagnifAI Logo" />
              </div>
              <span className="footer-brand-title">
                Magnif<span>AI</span>
              </span>
            </a>
            <p className="footer-brand-desc">
              AI-powered visibility, communication, and audience growth for leaders, creators, organizations, and movements that demand more.
            </p>

            {/* Socials */}
            <div className="footer-socials-row">
              <a href="#" className="footer-social-link interactive">
                INSTAGRAM
              </a>
              <a href="#" className="footer-social-link interactive">
                LINKEDIN
              </a>
              <a href="#" className="footer-social-link interactive">
                X / TWITTER
              </a>
            </div>
          </div>

          {/* Column 1: Services */}
          <div>
            <h4 className="footer-column-title">
              Services
            </h4>
            <ul className="footer-links-list">
              {['AI Viral Content', 'Personal Branding', 'Political Campaigns', 'Content Automation', 'Voice & Avatar AI', 'Digital PR'].map(link => (
                <li key={link}>
                  <a href="#services" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="footer-column-title">
              Company
            </h4>
            <ul className="footer-links-list">
              {['About', 'Our Process', 'Case Studies', 'Team', 'Careers'].map(link => (
                <li key={link}>
                  <a href="#about" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="footer-column-title">
              Contact
            </h4>
            <ul className="footer-links-list">
              {['Book a Strategy Call', 'contact@magnifai.in', 'WhatsApp Us', 'Privacy Policy', 'Terms of Service'].map(link => (
                <li key={link}>
                  <a href="#contact" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom footer bar */}
        <div className="footer-bottom-bar">
          <span className="footer-copyright">
            © 2026 MagnifAI. All rights reserved.
          </span>

          <div className="footer-pills-row">
            {['AI-POWERED', 'INFLUENCE', 'VISIBILITY', 'GROWTH'].map(pill => (
              <span
                key={pill}
                className="footer-pill-tag"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Back to top button */}
          <a
            href="#"
            onClick={handleScrollToTop}
            className="footer-back-to-top interactive"
          >
            <ArrowUp size={16} />
          </a>
        </div>

      </div>
    </footer>
  );
}
