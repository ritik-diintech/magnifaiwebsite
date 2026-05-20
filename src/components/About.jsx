import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import './About.css';

// Import our CEO image asset
import ceoImg from '../assets/images/Man_sitting_as_CEO_202605172115.jpeg';

export default function About() {
  const statsList = [
    { num: '10×', label: 'NEURAL ACCELERATION', desc: '10x Faster Output Cycles' },
    { num: '5+', label: 'GLOBAL LOCALIZATION', desc: 'Sovereign Multi-language Synthesis' },
    { num: '360°', label: 'REPUTATION SECURED', desc: 'Active Omnipresence Coverage' },
    { num: 'Native', label: 'HYPER-ENGAGEMENT', desc: 'Emotionally Resonant Pipelines' }
  ];

  return (
    <section id="about" className="about-section theme-white">
      {/* Light mesh grid alignment lines for high-fashion blueprint aesthetic */}
      <div className="about-grid-lines" />

      <div className="luxury-container">
        <div className="about-editorial-grid">

          {/* Left Column: Visual Canvas with Double Gold Frames */}
          <div className="about-visual-canvas">
            {/* Background offset gold hairline frame - Parallax entrance */}
            <motion.div
              initial={{ opacity: 0, x: 45, y: 45 }}
              whileInView={{ opacity: 0.8, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="about-frame-offset"
            />

            {/* Main Picture Box with diagonal wipe and kinetic zoom */}
            <motion.div
              initial={{
                opacity: 0,
                clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
              }}
              whileInView={{
                opacity: 1,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
              }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
              className="about-portrait-frame interactive"
            >
              <div className="about-image-shading" />

              {/* Internal Image slow scale pan */}
              <motion.img
                initial={{ scale: 1.22 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
                src={ceoImg}
                alt="MagnifAI Authority Representation"
                className="about-portrait-source"
              />

              {/* Minimal Luxury Stamp */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="about-stamp-badge"
              >

              </motion.div>
            </motion.div>

            {/* Floating minimal quote container */}
            <motion.div
              initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="about-editorial-quote"
            >
              <span className="quote-mark">“</span>
              <p className="quote-body">
                Leverage is the path to omnipresence.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Copywriting & Luxury Ledger Matrix */}
          <div className="about-editorial-content">

            {/* Elegant Tagline - letter-spacing track wipe */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: '0.05em' }}
              whileInView={{ opacity: 1, letterSpacing: '0.2em' }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="about-tagline-wrap"
            >
              <span className="about-vertical-line" />
              <span className="about-tag-mono">ABOUT MAGNIFAI</span>
            </motion.div>

            {/* Architectural Heading - Horizon masked reveal */}
            <motion.h2
              initial={{ opacity: 0, y: 50, clipPath: 'inset(100% 0% 0% 0%)' }}
              whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="about-main-heading"
            >
              We Don't Just Market.<br />
              <span className="gold-text-glow">We Engineer Influence.</span>
            </motion.h2>

            {/* Premium Copywriting - Soft blur focused fades */}
            <motion.div
              initial={{ opacity: 0, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="about-copy-paragraphs"
            >
              <p className="about-desc-para">
                MagnifAI is a high-end, AI-native visibility and reputation architecture agency. We represent a selected circle of political figures, spiritual institutions, ambitious startup founders, and public leaders who refuse to let their ideas remain unseen.
              </p>

              <p className="about-desc-para para-highlight">
                In the modern hyper-competitive landscape, attention is not simply earned — it is programmatically acquired and systematically retained. We unite human narrative depth with state-of-the-art neural engines to guarantee absolute market dominance.
              </p>
            </motion.div>

            {/* Luxury Ledger Matrix (Stats Grid) */}
            <div className="about-ledger-matrix">
              {statsList.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 1.0, delay: 0.2 + idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="about-ledger-row interactive"
                >
                  {/* Left accent vertical gold drawer - height transition */}
                  <motion.div
                    initial={{ height: '0%' }}
                    whileInView={{ height: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="ledger-accent-bar"
                  />

                  {/* Subtle hover gradient glow */}
                  <div className="row-hover-bg" />

                  <div className="ledger-left">
                    {/* Database index number serial */}
                    <span className="ledger-index">[ 0{idx + 1} ]</span>

                    {/* Rich metallic gold gradient stat */}
                    <span className="ledger-num-gradient">{stat.num}</span>

                    <div className="ledger-details">
                      <h4 className="ledger-title">{stat.desc}</h4>
                      {/* Interactive gilded glass badge */}
                      <span className="ledger-mono-badge">{stat.label}</span>
                    </div>
                  </div>

                  <div className="ledger-arrow">
                    <span className="ledger-arrow-line" />
                    <ArrowRight size={13} className="ledger-chevron" />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
