import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Award, Zap,
  Landmark, Sparkles, Cpu, Crown, Globe,
  ArrowUpRight
} from 'lucide-react';
import './TargetAudience.css';

// Import local image assets
import actorsCreatorsImg from '../assets/images/Generate_celebrity_man_image_202605172117.jpeg';
import stageImg from '../assets/images/Man_on_stage_addressing_public_202605172116.jpeg';
import ceoImg from '../assets/images/ceoSection.jpeg';
import gurusImg from '../assets/images/gurusAddressing.jpeg'; // Guru custom asset requested
import activistImg from '../assets/images/Man_activist_with_Indian_profess…_202605210736 (1).jpeg';

export default function TargetAudience() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categories = [
    {
      title: 'Political Leaders & Movements',
      subtitle: 'MASS MOBILIZATION & DYNAMIC PR',
      image: stageImg,
      desc: 'For political figures, candidates, and social campaigns requiring broad-based digital trust, direct-to-constituent reach, and high-velocity message amplification.',
      stats: '✦ 10x Constituency Penetration  |  ✦ Live Narrative Anchoring',
      nodes: ['Direct WhatsApp Mobilization', 'Constituency Mapping Audits', 'Viral Campaign Speeches', 'Mass Scale Opinion Shaping'],
      pageUrl: '/archetypes/politics'
    },
    {
      title: 'Spiritual Gurus & Organizations',
      subtitle: 'WISDOM WITHOUT BORDERS',
      image: gurusImg,
      desc: 'For faith organizations, ashrams, and spiritual leaders seeking to distribute spiritual discourse globally across multi-lingual platforms without losing the profound depth of transmission.',
      stats: '✦ 8+ Global Dialects Synced  |  ✦ Omnipresent Audio Streams',
      nodes: ['Multilingual Speech Adaptation', 'Calm Aesthetics Architecture', 'Profound Discourse Snippets', 'Global Community Management'],
      pageUrl: '/archetypes/gurus'
    },
    {
      title: 'Elite Founders & Executives',
      subtitle: 'UNDISPUTED BRAND AUTHORITY',
      image: ceoImg,
      desc: 'For visionary builders, startup tech founders, and executives who wish to establish absolute authority and drive company metrics via a powerful, premium personal brand.',
      stats: '✦ Compounded Founder Authority  |  ✦ B2B Strategic Growth',
      nodes: ['Executive Thought Leadership', 'Signature Founder Storytelling', 'Zero-Burnout Omnipresence', 'Organic Lead Gen Amplifiers'],
      pageUrl: '#'
    },
    {
      title: 'Actors & Creators',
      subtitle: 'THE ATTENTION ECONOMY MONOPOLY',
      image: actorsCreatorsImg,
      desc: 'For public figures, lifestyle creators, and creators seeking to establish brand independence, scale audience velocity, and monetize influence with strategic precision.',
      stats: '✦ Automated Creative Pipelines  |  ✦ 120% Engagement Growth',
      nodes: ['Predictive Content Hooks', 'Cross-Platform Synced Feeds', 'Premium Digital Identity Kit', 'Vocal Matrix Custom Assets'],
      pageUrl: '/archetypes/celebs'
    },
    {
      title: 'Activists & Change Makers',
      subtitle: 'GLOBAL IMPACT & NARRATIVE LEVERAGE',
      image: activistImg,
      desc: 'For social leaders, reformists, and global advocates driving systemic shifts who require high-credibility amplification, absolute message integrity, and grassroots mobilization leverage.',
      stats: '✦ 10x Grassroots Engagement  |  ✦ Cross-Border Coalition Scale',
      nodes: ['Grassroots Mobilization Matrix', 'High-Trust Broadcast Channels', 'Systemic Narrative Shaping', 'Rapid-Response Advocacy Keys'],
      pageUrl: '/archetypes/activists'
    }
  ];

  // Helper to fetch premium vector icons dynamically
  const getTabIcon = (idx, isActive) => {
    const color = isActive ? 'var(--gold-dim)' : '#7E7C76';
    const size = 15;

    switch (idx) {
      case 0:
        return <Landmark size={size} style={{ color, transition: 'color 0.4s' }} />;
      case 1:
        return <Sparkles size={size} style={{ color, transition: 'color 0.4s' }} />;
      case 2:
        return <Cpu size={size} style={{ color, transition: 'color 0.4s' }} />;
      case 3:
        return <Crown size={size} style={{ color, transition: 'color 0.4s' }} />;
      case 4:
        return <Globe size={size} style={{ color, transition: 'color 0.4s' }} />;
      default:
        return null;
    }
  };

  const getTabLabel = (idx) => {
    switch (idx) {
      case 0: return 'Political Leaders';
      case 1: return 'Spiritual Guru';
      case 2: return 'Founder & CEO';
      case 3: return 'Actors & Artists';
      case 4: return 'Activist & Change Maker';
      default: return '';
    }
  };

  // Keyboard lights up nodes sequence parameters
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.35
      }
    }
  };

  const keyVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 15 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="audience" className="audience-section theme-white">
      {/* Delicate warm gold mesh grid pattern overlay */}
      <div className="audience-grid-overlay" />

      <div className="luxury-container">

        {/* Title */}
        <div className="audience-premium-header">
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.05em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.15em' }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="audience-mono-tag"
          >
            <Users size={11} style={{ marginRight: '6px', color: 'var(--gold-dim)' }} />
            TARGET ARCHETYPES WE SCALE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 35, clipPath: 'inset(100% 0% 0% 0%)' }}
            whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="audience-large-title"
          >
            Built for the <span className="gold-accent">Elite</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="audience-header-line"
          />

          <motion.p
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.4, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="audience-description"
          >
            MagnifAI is specifically engineered for leaders, creators, and institutions who have profound messages but require leverage to scale globally.
          </motion.p>
        </div>

        {/* Segmented Control Capsule Deck - track expansion spring */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.8 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ type: 'spring', stiffness: 50, damping: 15, delay: 0.2 }}
          className="audience-tabs-capsule"
        >
          {categories.map((cat, idx) => {
            const isActive = selectedCategory === idx;
            const labelText = getTabLabel(idx);
            return (
              <button
                key={idx}
                className={`audience-capsule-btn interactive ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedCategory(idx)}
              >
                <span className="tab-btn-icon">{getTabIcon(idx, isActive)}</span>
                <span className="tab-btn-text">{labelText}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Selected Category Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="audience-tab-content-wrap"
          >
            <div className="audience-grid-spread">
            {/* Left Side: Portrait Visual Canvas with horizontal wipe & zoom */}
            <div className="audience-visual-column">
              <motion.div
                initial={{
                  opacity: 0,
                  clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'
                }}
                animate={{
                  opacity: 1,
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                }}
                transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
                className="audience-canvas-frame"
              >
                <motion.img
                  initial={{ scale: 1.18 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                  src={categories[selectedCategory].image}
                  alt={categories[selectedCategory].title}
                  className="audience-canvas-image"
                />

                {/* Inner double gold framing hairlines */}
                <div className="audience-canvas-frame-hairline" />
                <div className="audience-canvas-light-leak" />
              </motion.div>
            </div>

            {/* Right Side: Strategy Matrix HUD */}
            <div className="audience-hud-column">
              <motion.span
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                className="hud-column-tagline"
              >
                <Award size={13} style={{ marginRight: '8px', color: 'var(--gold-dim)' }} />
                {categories[selectedCategory].subtitle}
              </motion.span>

              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.18, ease: 'easeOut' }}
                className="hud-column-title"
              >
                {categories[selectedCategory].title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.26, ease: 'easeOut' }}
                className="hud-column-description"
              >
                “{categories[selectedCategory].desc}”
              </motion.p>

              {/* Gold-Foil Frosted Highlight Metric Banner - scale up spring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="hud-stats-foil-banner"
              >
                <div className="stats-foil-content">
                  {categories[selectedCategory].stats}
                </div>
              </motion.div>

              {/* Interactive Tactical Leverage Keys Grid - keyboard staggered sweep */}
              <div className="hud-nodes-section">
                <span className="hud-nodes-grid-label">
                  DEPLOYED LEVERAGE NODES
                </span>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="hud-nodes-grid"
                >
                  {categories[selectedCategory].nodes.map((node, i) => (
                    <motion.div
                      key={i}
                      variants={keyVariants}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="hud-node-tactile-key interactive"
                    >
                      <div className="node-key-icon-wrap">
                        <Zap size={11} className="node-key-icon" />
                      </div>
                      <span className="node-key-text">{node}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

            </div>
          </div>

            {/* Premium Large CTA Button */}
            <div className="hud-cta-container centered">
              {categories[selectedCategory].pageUrl !== '#' ? (
                <Link 
                  to={categories[selectedCategory].pageUrl} 
                  className="hud-premium-cta-btn interactive"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <span>EXPLORE MORE</span>
                  <ArrowUpRight size={14} className="hud-cta-icon" />
                </Link>
              ) : (
                <a 
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="hud-premium-cta-btn interactive"
                >
                  <span>EXPLORE MORE</span>
                  <ArrowUpRight size={14} className="hud-cta-icon" />
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
