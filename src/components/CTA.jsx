import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './CTA.css';

export default function CTA({ onStartClick }) {
  return (
    <section className="cta-section theme-dark">
      {/* Film grain style overlay */}
      <div className="grid-overlay" style={{ opacity: 0.15 }} />

      {/* Elegant large luxury brand watermark */}
      <div className="cta-watermark">
        MAGNIFY
      </div>

      <div className="luxury-container cta-container">
        
        {/* Subtitle tag with decorative golden side borders */}
        <div className="cta-label-wrap">
          <span className="cta-label">READY TO BEGIN</span>
        </div>

        {/* Breathtaking luxury serif heading */}
        <h2 className="cta-h2">
          Your Audience <br />
          Is Already <span className="gold-serif">Online<span className="gold-dot"><span className="pulse-ring"></span></span></span>
        </h2>

        {/* Copy describing our omnipresence audit */}
        <p className="cta-desc">
          The question is whether they can ignore you. Let MagnifAI build the influence infrastructure that makes invisibility impossible.
        </p>

        {/* Action button triggers */}
        <div className="cta-actions">
          
          <button 
            className="gold-btn interactive cta-primary-btn" 
            onClick={onStartClick}
          >
            <span>Start Building Your Influence <ArrowRight size={14} /></span>
          </button>

          <a 
            href="#services" 
            className="outlined-btn interactive"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('services');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>Explore Services</span>
          </a>

        </div>

      </div>
    </section>
  );
}
