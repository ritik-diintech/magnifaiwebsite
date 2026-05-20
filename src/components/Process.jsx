import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Process.css';

// Import our premium grounded roadmap images
import img1 from '../assets/roadMapImages/Real_Path_Concept__Ek_professional_202605181521.jpeg';
import img2 from '../assets/roadMapImages/Notebook_with_flowcharts_and_pen_202605181521.jpeg';
import img3 from '../assets/roadMapImages/Real_Path_Concept__Ek_elite_202605181522.jpeg';
import img4 from '../assets/roadMapImages/Computer_deck_with_live_analytics_202605181527.jpeg';
import img5 from '../assets/roadMapImages/Indian_leader_walking_on_stage_202605181524.jpeg';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const steps = [
    {
      num: '01',
      title: 'Discover',
      deliverable: '360° Audiential Print & Voice Signature Matrix',
      desc: 'We conduct an extensive, AI-assisted audit of your existing digital presence, core audience psychology, competitor vulnerabilities, and unique linguistic tone. Establishing a baseline of who you are and who you must influence is our first priority.',
      image: img1,
      quote: '“Before we project your voice to the world, we map its deep psychological resonance. Influence is not claimed; it is systematically engineered.”',
      subDeliverables: [
        '360° digital footprint analysis',
        'Competitor leakage vector report',
        'Linguistic voice & aesthetic blueprints'
      ]
    },
    {
      num: '02',
      title: 'Strategize',
      deliverable: 'Global Visibility & Narrative Engineering Blueprint',
      desc: 'We map out a customized digital leverage roadmap. We select target platforms, design custom hook profiles, schedule media distributions, and construct automated conversational networks tailored precisely to compress authority building by 10x.',
      image: img2,
      quote: '“A masterfully crafted narrative is only as powerful as the pathways built to deliver it. Strategy is the science of compressed authority.”',
      subDeliverables: [
        'Omnipresent leverage timeline',
        'Strategic hook profile deck',
        'WhatsApp direct communication map'
      ]
    },
    {
      num: '03',
      title: 'Create',
      deliverable: 'Premium Visual & Synthetic Voice Digital Assets',
      desc: 'Our create phase translates strategy into physical resonance. Consisting of veteran narrative architects and leading creative directors, we produce elite-quality Reels, speeches, books, localized language transcripts, and custom cloned voice footprints with unparalleled velocity.',
      image: img3,
      quote: '“Elite aesthetic execution is non-negotiable. If your content does not evoke immediate prestige, your authority remains unestablished.”',
      subDeliverables: [
        'High-impact Reels & Shorts production',
        'Synthetic voice footprint clone',
        'Authority content matrix (90 days)'
      ]
    },
    {
      num: '04',
      title: 'Amplify',
      deliverable: 'Omnichannel Distribution Sync & Algorithmic Blasts',
      desc: 'We push finished content across selected networks, leveraging programmatic seeding, direct-to-audience messaging maps, and micro-engineered SEO signals to trigger algorithmic cascades and guarantee broad-based attention acquisition.',
      image: img4,
      quote: '“True omnipresence requires synchronization. We coordinate distribution to turn quiet ideas into self-scaling global movements.”',
      subDeliverables: [
        'Seeding network trigger codes',
        'Multi-channel sync automation',
        'Algorithmic blast optimization'
      ]
    },
    {
      num: '05',
      title: 'Scale',
      deliverable: 'Compounding Influence Loop & Automated PR Engine',
      desc: 'We establish perpetual, automated audience growth loops. By analyzing performance parameters 24/7, we feed intelligence back into the content engine to build long-term, compounding personal power and unmissable mass scale authority.',
      image: img5,
      quote: '“Influence is a compounding asset. The ultimate objective is a self-sustaining ecosystem of global authority and legacy.”',
      subDeliverables: [
        '24/7 campaign performance audit',
        'Audience growth feedback loops',
        'PR authority acceleration engine'
      ]
    }
  ];

  // Autoplay interval: cycles through steps every 4 seconds.
  // Resets timer when user manually changes tabs or hovers.
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [activeStep, isPaused, steps.length]);

  // Automatically scroll active tab into center on mobile horizontal overflow
  // Direct container scrolling prevents the browser from shifting/scrolling the entire page vertically!
  useEffect(() => {
    const parent = document.querySelector('.process-tabs-container');
    const activeTab = document.querySelector('.process-tab-btn.active');
    
    if (parent && activeTab) {
      const parentWidth = parent.clientWidth;
      const tabOffset = activeTab.offsetLeft;
      const tabWidth = activeTab.clientWidth;
      
      // Center the active tab button within the horizontally scrolling parent
      const targetScrollLeft = tabOffset - parentWidth / 2 + tabWidth / 2;
      
      parent.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      });
    }
  }, [activeStep]);

  return (
    <section id="process" className="process-section theme-dark">
      {/* Clean luxury background accents */}
      <div className="process-bg-glow" />

      <div className="luxury-container">
        
        {/* Section Heading Title */}
        <div className="luxury-title-wrap text-center">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.2em' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="section-label"
          >
            THE MAGNIFAI ROADMAP
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 30, clipPath: 'inset(100% 0% 0% 0%)' }}
            whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="section-h2"
          >
            Narrative Engineering <em>Process</em>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="section-subtitle"
          >
            How we transition brands, leaders, and organizations from raw potential into self-compounding systems of global influence.
          </motion.p>
        </div>

        {/* Minimal High-Prestige Navigation Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="process-tabs-container"
        >
          <div className="process-tabs">
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={step.num}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPaused(true);
                  }}
                  className={`process-tab-btn ${isActive ? 'active' : ''}`}
                >
                  <span className="tab-num">0{idx + 1}</span>
                  <span className="tab-title">{step.title}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="active-tab-line"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Dynamic Editorial Grid */}
        <div className="process-editorial-grid">
          
          {/* Left Column: Premium Editorial Image Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="process-image-frame"
          >
            <div className="image-frame-inner">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeStep}
                  initial={{ opacity: 0, scale: 1.04, filter: 'brightness(0.7) blur(8px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'brightness(0.9) blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.96, filter: 'brightness(0.7) blur(8px)' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="process-editorial-image"
                />
              </AnimatePresence>
              <div className="image-frame-gold-border" />
              <div className="image-step-indicator">
                <span>PHASE {steps[activeStep].num}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Text & Narrative Block */}
          <div className="process-editorial-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20, filter: 'blur(4px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="editorial-content-wrapper"
              >
                <div className="editorial-phase-header">
                  <span className="editorial-phase-num">0{activeStep + 1}</span>
                  <span className="editorial-phase-tag">PHASE {steps[activeStep].num} // {steps[activeStep].title.toUpperCase()}</span>
                </div>

                <h3 className="editorial-deliverable-title">
                  {steps[activeStep].deliverable}
                </h3>

                <p className="editorial-desc">
                  {steps[activeStep].desc}
                </p>

                {/* Sub-deliverables list with elegant golden bullet marks */}
                <div className="editorial-outcomes">
                  <h4 className="outcomes-header">KEY DELIVERABLES</h4>
                  <div className="outcomes-list">
                    {steps[activeStep].subDeliverables.map((item, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
                        className="outcome-item"
                      >
                        <span className="outcome-bullet" />
                        <span className="outcome-text">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Premium human-centric blockquote - replaces techy console */}
                <div className="editorial-quote-box">
                  <span className="quote-mark">“</span>
                  <p className="quote-text">{steps[activeStep].quote}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
