import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star, ChevronRight, ExternalLink, ArrowRight } from 'lucide-react';
import './OurWorks.css';

// Import images from assets
import aiTota1 from '../assets/ourWorkImages/aiTotaImages/aiTota1.png';
import aitota2 from '../assets/ourWorkImages/aiTotaImages/aitota2.png';
import aiTota3 from '../assets/ourWorkImages/aiTotaImages/aiTota3.png';

import yovo1 from '../assets/ourWorkImages/yovoAiImages/yovo1.png';
import yovo2 from '../assets/ourWorkImages/yovoAiImages/yovo2.png';
import yovo3 from '../assets/ourWorkImages/yovoAiImages/yovo3.png';

export default function OurWorks() {
  const projects = [
    {
      id: 'aitota',
      title: 'aiTota',
      subtitle: 'Next-Gen Conversational AI Voice Platform',
      desc: 'Aitota is revolutionizing communication with cutting-edge conversational AI, connecting people and businesses with ultra-realistic AI Voice automation.',
      images: [aiTota1, aitota2, aiTota3],
      tags: ['Conversational AI', 'AI Voice', 'Real-time Latency', 'Cognitive Mapping'],
      stats: [
        { label: 'Voice Latency', val: '< 150ms' },
        { label: 'User Engagement', val: '+ 180%' },
        { label: 'Languages Supported', val: '40+' }
      ],
      colorTheme: 'var(--gold)',
      link: 'https://aitota.com'
    },
    {
      id: 'yovo',
      title: 'Yovo AI',
      subtitle: 'Intelligent UGC Campaign & Creator Platform',
      desc: 'Connect with top creators, automate organic UGC campaigns, and scale authentic marketing using Yovo AI, the intelligent platform designed for modern brands.',
      images: [yovo1, yovo2, yovo3],
      tags: ['Creator Automation', 'Organic UGC', 'Authentic Reach', 'AI Scaling'],
      stats: [
        { label: 'Campaign Velocity', val: '10x Faster' },
        { label: 'ROI Improvement', val: '4.2x' },
        { label: 'Active Creators', val: '25K+' }
      ],
      colorTheme: '#E5C158',
      link: 'https://yovoai.com'
    }
  ];

  return (
    <section id="our-works" className="works-section theme-white">
      {/* Dynamic luxury grid pattern overlay */}
      <div className="grid-overlay" style={{ opacity: 0.05 }} />

      {/* Narrative Concentric Ripples in background of title */}
      <div className="works-bg-ripples">
        <div className="w-ripple w-ripple-1" />
        <div className="w-ripple w-ripple-2" />
      </div>

      <div className="luxury-container">
        
        {/* Title Block */}
        <div className="luxury-title-wrap text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="section-label"
          >
            <Sparkles size={12} style={{ color: 'var(--gold)' }} />
            PORTFOLIO & CASE STUDIES
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-h2"
          >
            Grow with <em>Us</em>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="section-subtitle"
          >
            Explore how we build narrative authority, conversational excellence, and modern UGC automation for high-impact brands.
          </motion.p>

          {/* Luxury Divider Ornament */}
          <div className="luxury-divider">
            <span className="divider-line" />
            <Star size={10} className="divider-icon" />
            <span className="divider-line" />
          </div>
        </div>

        {/* Projects List Container */}
        <div className="works-list">
          {projects.map((proj, idx) => (
            <ProjectRow key={proj.id} project={proj} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

// Single Project Row Component with internal slideshow state
function ProjectRow({ project, index }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto transition slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % project.images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [project.images.length]);

  const isEven = index % 2 === 0;

  return (
    <div className={`work-row-item ${isEven ? 'row-normal' : 'row-reversed'}`}>
      
      {/* Left/Right Text Column */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="work-content-col"
      >
        <div className="work-ledger-top">
          <span className="work-index-num">[ 0{index + 1} ]</span>
          <span className="work-subtitle-tag">{project.subtitle}</span>
        </div>

        <h3 className="work-project-title">
          {project.title}
        </h3>

        <p className="work-project-desc">
          {project.desc}
        </p>

        {/* Tags Block */}
        <div className="work-tags-wrap">
          {project.tags.map((tag, i) => (
            <span key={i} className="work-tag-pill">
              {tag}
            </span>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="work-stats-grid">
          {project.stats.map((stat, i) => (
            <div key={i} className="work-stat-card">
              <span className="work-stat-val">{stat.val}</span>
              <span className="work-stat-lbl">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Premium Action Callout */}
        <div className="work-cta-wrap">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="work-editorial-link interactive">
            <span>Visit {project.link.replace('https://', '')}</span>
            <ExternalLink size={13} className="arrow-icon" />
          </a>
        </div>
      </motion.div>

      {/* Left/Right Visual Slideshow Column */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="work-visual-col"
      >
        {/* Ambient Decorative Backdrop Glow */}
        <div className="visual-ambient-glow" style={{ background: `radial-gradient(circle, ${project.colorTheme}12 0%, transparent 70%)` }} />

        {/* Premium Slide Container Deck */}
        <div className="slideshow-vessel interactive">
          
          {/* Main Slideshow Frame */}
          <div className="slideshow-frame-inner">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={project.images[currentSlide]}
                alt={`${project.title} Screenshot ${currentSlide + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="slideshow-image"
              />
            </AnimatePresence>

            {/* Glowing metallic border frames inside */}
            <div className="slideshow-border-overlay" />
            <div className="slideshow-corners-accent" />
          </div>

          {/* Luxury Slide Indicators / Dots */}
          <div className="slideshow-controls">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`slide-bullet ${currentSlide === i ? 'bullet-active' : ''}`}
                style={{ '--active-color': project.colorTheme }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Absolute floating project tag badge */}
          <div className="floating-project-badge">
            <Sparkles size={10} className="badge-spark" />
            <span>ACTIVE METRIC LEDGER</span>
          </div>

        </div>
      </motion.div>

    </div>
  );
}
