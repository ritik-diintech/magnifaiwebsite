import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import './Problems.css';

export default function Problems() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const expandedIndexRef = useRef(0);
  const rowRefs = useRef([]);
  const isAnimating = useRef(false);
  const intersectionTimeout = useRef(null);

  const addToRefs = (el, idx) => {
    if (el) {
      rowRefs.current[idx] = el;
    }
  };

  // High-Performance Snapping Transition: Sets expanded row and locks observer to prevent jitter
  const changeExpandedIndex = (newIndex, allowCollapse = false) => {
    if (isAnimating.current) return;

    isAnimating.current = true;
    
    let targetIndex = newIndex;
    if (allowCollapse && expandedIndexRef.current === newIndex) {
      targetIndex = null;
    }

    expandedIndexRef.current = targetIndex;
    setExpandedIndex(targetIndex);

    // Lock updates for exactly 500ms while the height smooth transitions
    setTimeout(() => {
      isAnimating.current = false;
    }, 500);
  };

  // Viewport Observer: Automatically expands accordion rows as they pass through center of the screen
  // Added a luxury debounce buffer (300ms) to ensure smooth, calm transitions instead of rapid triggers.
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Narrow center band for precise snap-focusing
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index'), 10);
          if (!isNaN(index)) {
            // Clear any pending snapping timers
            if (intersectionTimeout.current) clearTimeout(intersectionTimeout.current);

            // Wait 300ms. If the user stops or slows down on this item, expand it.
            // This creates a beautiful lag/gap so fast scrolling feels completely static and premium!
            intersectionTimeout.current = setTimeout(() => {
              changeExpandedIndex(index);
            }, 300); // 300ms premium settling delay
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    rowRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
      if (intersectionTimeout.current) clearTimeout(intersectionTimeout.current);
    };
  }, []);

  const problemsList = [
    {
      num: '01',
      title: 'Low Public Visibility',
      leak: '92% LEAKAGE VECTOR',
      problem: 'Revolutionary ideas and leaders remain practically invisible, drowned in digital noise.',
      solution: 'We deploy custom AI-powered branding, high-impact media amplification, and intelligent distribution to guarantee visibility.',
      bullets: ['Media Amplification', 'Omnipresent Branding', 'Authority Synthesis']
    },
    {
      num: '02',
      title: 'Weak Digital Presence',
      leak: '85% LEAKAGE VECTOR',
      problem: 'Public figures and organizations operate with highly inconsistent profiles and outdated communication architectures.',
      solution: 'We construct a premium, synchronized AI-driven digital ecosystem that elevates your brand to elite status.',
      bullets: ['Modern Web Interfaces', 'AI Content Pipelines', 'SEO Dominance']
    },
    {
      num: '03',
      title: 'Competitors Stealing Attention',
      leak: '78% LEAKAGE VECTOR',
      problem: 'Less capable competitors dominate public attention simply because they have superior marketing execution.',
      solution: 'We establish an absolute Attention Advantage using strategic narrative positioning that places you lightyears ahead.',
      bullets: ['Trend Forecasting', 'Narrative Architecture', 'PR Placement']
    },
    {
      num: '04',
      title: 'Inconsistent Content Creation',
      leak: '95% LEAKAGE VECTOR',
      problem: 'Teams struggle constantly to write, edit, and publish high-quality content daily, resulting in audience decay.',
      solution: 'Our AI engines automate, schedule, and optimize premium content pipelines that keep your channels flowing 24/7.',
      bullets: ['Viral Short-form', 'Voice & Avatar Cloning', 'Synthesis Engine']
    },
    {
      num: '05',
      title: 'Absence of Personal Brand',
      leak: '70% LEAKAGE VECTOR',
      problem: 'Audiences might recognize your name, but they fail to connect with your core identity and authentic mission.',
      solution: 'We engineer a deep emotional personal brand framework that positions you as an undisputed authority.',
      bullets: ['Identity Strategy', 'Authority Architecture', 'Emotional Storytelling']
    },
    {
      num: '06',
      title: 'Poor Public Engagement',
      leak: '80% LEAKAGE VECTOR',
      problem: 'You might possess social media followers, but genuine high-value engagement and active trust are extremely low.',
      solution: 'We construct custom AI-assisted community building and response systems that turn followers into loyal advocates.',
      bullets: ['Response Automation', 'Engagement Loops', 'Frictionless Funnels']
    },
    {
      num: '07',
      title: 'Slow Reputation Growth',
      leak: '88% LEAKAGE VECTOR',
      problem: 'Building standard fame, public credibility, and institutional authority organically takes decades.',
      solution: 'We run high-velocity reputation acceleration systems that compress years of organic growth into a few months.',
      bullets: ['Distribution Nodes', 'Authority Building', 'Reputation Shield']
    },
    {
      num: '08',
      title: 'Lack of Elite Communication',
      leak: '75% LEAKAGE VECTOR',
      problem: 'Public figures fail to express their messages clearly, failing to connect emotionally and consistently.',
      solution: 'We engineer highly structured, emotionally resonant communication protocols powered by advanced linguistic models.',
      bullets: ['Linguistic AI Crafting', 'Brand Narratives', 'Luxe Copywriting']
    }
  ];

  return (
    <section id="problems" className="problems-section theme-dark">
      {/* Soft, luxury ambient glow spot in the background */}
      <div className="problems-ambient-glow" />

      {/* Title Header is centered inside the luxury container */}
      <div className="luxury-container">
        <div className="problems-premium-header">
          
          {/* Staggered text tracking animation */}
          <motion.span 
            initial={{ opacity: 0, letterSpacing: '0.05em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.15em' }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="problems-mono-tag"
          >
            ATTENTION LEAKAGE DIAGNOSTICS
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 30, clipPath: 'inset(100% 0% 0% 0%)' }}
            whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="problems-large-title"
          >
            Problems We <span className="gold-accent">Resolve</span>
          </motion.h2>

          {/* Center-Out Expanding Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.6, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="problems-header-line" 
          />

          <motion.p 
            initial={{ opacity: 0, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.4, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="problems-description"
          >
            Great ideas and leaders often remain invisible because they lack the modern systems of digital leverage. Here is how we bridge the gap.
          </motion.p>
        </div>
      </div>

      {/* Accordion container stands outside the luxury-container so rows can span full screen width! */}
      <div className="problems-accordion-container">
        {problemsList.map((item, index) => {
          const isExpanded = index === expandedIndex;
          return (
            <motion.div
              key={index}
              ref={(el) => addToRefs(el, index)}
              data-index={index}
              initial={{ 
                opacity: 0,
                scaleX: 0.94,
                filter: 'blur(8px) brightness(0.5)'
              }}
              whileInView={{ 
                opacity: 1,
                scaleX: 1,
                filter: 'blur(0px) brightness(1)'
              }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ 
                type: 'spring',
                stiffness: 55,
                damping: 18,
                delay: index * 0.1 // Cascade staggered rows
              }}
              className={`problems-accordion-row ${isExpanded ? 'active' : ''}`}
              onClick={() => changeExpandedIndex(index, true)}
            >
              {/* Centered wrapper inside row to enforce the 1200px content width */}
              <div className="accordion-row-centered-wrap">
                {/* Header Row */}
                <div className="accordion-header-row interactive">
                  <div className="header-left-group">
                    <span className="accordion-num">{item.num}</span>
                    <h3 className="accordion-title">{item.title}</h3>
                  </div>

                  <div className="header-right-group">
                    <span className="accordion-leak-tag">{item.leak}</span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="accordion-icon-wrap"
                    >
                      <Plus size={16} className="accordion-icon" />
                    </motion.div>
                  </div>
                </div>

                {/* Animated Body Reveal */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: isExpanded ? 'auto' : 0,
                    opacity: isExpanded ? 1 : 0 
                  }}
                  transition={{ type: 'spring', stiffness: 90, damping: 16 }}
                  className="problems-accordion-body"
                >
                  <div className="accordion-inner-grid">
                    
                    {/* Left Column: Problem description quote */}
                    <div className="accordion-col-problem">
                      <span className="col-label-red">ATTENTION LEAKAGE VECTOR</span>
                      <p className="col-problem-text">
                        “{item.problem}”
                      </p>
                    </div>

                    {/* Right Column: Resolution paragraph */}
                    <div className="accordion-col-solution">
                      <span className="col-label-gold">PROGRAMMATIC RESOLUTION</span>
                      <p className="col-solution-text">
                        {item.solution}
                      </p>

                      {/* Gilded borderless bullet links */}
                      <div className="col-bullets-flex">
                        {item.bullets.map((bullet, idx) => (
                          <React.Fragment key={idx}>
                            <span className="col-bullet-tag">{bullet}</span>
                            {idx < item.bullets.length - 1 && (
                              <span className="col-bullet-divider">•</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
