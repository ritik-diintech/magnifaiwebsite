import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, ShieldAlert, Cpu, ArrowRight, Plus, Minus,
  Play, Pause, Tv, Globe, Mic, Zap, Shield, Star, Users
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AuditModal from '../../components/AuditModal';
import CustomCursor from '../../components/CustomCursor';
import './Celebrity.css';

import celebsHeroVideo from '../../assets/otherPagesAssests/videoCelebs.mp4';
import celebsDemoVideo from '../../assets/otherPagesAssests/celbsVideo2.mp4';
import celebs1 from '../../assets/otherPagesAssests/celebs7.jpg';
import celebs2 from '../../assets/otherPagesAssests/celebs2.jpeg';
import celebs3 from '../../assets/otherPagesAssests/celebs3.jpeg';

export default function CelebrityPage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeFaq, setActiveFaq] = useState(null);
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState('threats');

  const [fanBase, setFanBase] = useState(1500000);
  const [syndicationStrategy, setSyndicationStrategy] = useState('omnipresence');

  const syndicationStrategies = {
    localization: {
      name: "REGIONAL LOCALIZATION",
      multiplier: 4.0,
      description: "Applies Vocal Matrix custom accents to translate and lip-sync core content across 3+ localized geographic markets."
    },
    omnipresence: {
      name: "DAILY OMNIPRESENCE",
      multiplier: 8.5,
      description: "Deploys daily automated high-fidelity cloned Reels, Shorts, and TikTok clips to flood algorithmic feeds 24/7."
    },
    blockbuster: {
      name: "GLOBAL BLOCKBUSTER SYNDICATION",
      multiplier: 14.5,
      description: "Launches fully automated localized brand endorsement campaigns, virtual interactive avatars, and 8+ language lip-synced networks."
    }
  };

  const selectedStrategy = syndicationStrategies[syndicationStrategy];
  const projectedFanReach = Math.round(fanBase * selectedStrategy.multiplier);
  const internationalReach = Math.round(projectedFanReach * 0.80);
  const regionalReach = Math.round(projectedFanReach * 0.20);
  const coreFansEngaged = Math.round(fanBase * 0.70);
  const weeklyOutputs = syndicationStrategy === 'localization' ? 12 : syndicationStrategy === 'omnipresence' ? 28 : 56;
  const personalizedWishesPerWeek = Math.round(fanBase * 0.005 * (syndicationStrategy === 'blockbuster' ? 3 : 1));

  const getCelebGraphPath = () => {
    const ratio = (fanBase - 100000) / 4900000;
    const startX = 25;
    const endX = 285;
    const startY = 80;
    const peakY = 80 - ratio * 55;

    const pathPoints = [];
    const steps = 20;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const x = startX + t * (endX - startX);
      const compoundingFactor = Math.pow(t, 1.8);
      const y = startY - (startY - peakY) * compoundingFactor;
      pathPoints.push({ x, y });
    }

    let path = `M ${pathPoints[0].x},${pathPoints[0].y}`;
    for (let i = 1; i < pathPoints.length; i++) {
      path += ` L ${pathPoints[i].x.toFixed(1)},${pathPoints[i].y.toFixed(1)}`;
    }

    const points = [1, 4, 6, 8, 12].map(m => {
      const t = (m - 1) / 11;
      const x = startX + t * (endX - startX);
      const compoundingFactor = Math.pow(t, 1.8);
      const y = startY - (startY - peakY) * compoundingFactor;
      return {
        x: Math.round(x * 10) / 10,
        y: Math.round(y * 10) / 10,
        label: `M${m}`
      };
    });

    return { path, points };
  };

  const celebGraphData = getCelebGraphPath();

  const toggleVideo = () => {
    const video = document.getElementById('cc-hero-vid');
    if (video) {
      isPlaying ? video.pause() : video.play();
      setIsPlaying(!isPlaying);
    }
  };

  const creatorCrisisData = [
    { id: "01", threatTitle: "Global Localization Barriers", threatDesc: "Creative superstars only speak their native language. Sub-titles feel cheap and fail to capture local accents, causing global fans to disconnect.", solutionTitle: "Vocal Matrix Multi-Dialect Synthesis", solutionDesc: "Translates video releases into 8+ global languages in the celebrity's authentic voice, pitch, and timbre, ensuring absolute regional warmth." },
    { id: "02", threatTitle: "High-Quality Daily Publishing Burnout", threatDesc: "Modern algorithms demand daily posting across Shorts, Reels, TikTok, and X. Physically recording every day drains valuable artistic creation time.", solutionTitle: "Automated Synthetic Omnipresence", solutionDesc: "Generative clones automatically produce daily Reels and Shorts based on approved scripts, maintaining constant presence with zero physical exhaustion." },
    { id: "03", threatTitle: "Unlicensed Vocal & Visual Deepfakes", threatDesc: "Hostile actors generate unauthorized vocal and face-swapped deepfakes. This ruins brand deals, threatens reputation, and creates legal crises.", solutionTitle: "Cryptographic IP Verification Stamps", solutionDesc: "Applies traceable encrypted digital watermarks to all authorized celebrity releases, instantly verifying authenticity via a public verification page." },
    { id: "04", threatTitle: "Time-Zone Fan Engagement Fatigue", threatDesc: "High-profile creators receive millions of messages daily. Standard teams cannot answer them all, leaving global fans feeling ignored by the celebrity.", solutionTitle: "24/7 Voice Orator Assistants", solutionDesc: "Engages with comments and messages in the celebrity's authentic voice, answering in real time based on approved guidelines." },
    { id: "05", threatTitle: "Brand Endorsement Scalability Limits", threatDesc: "Signing global endorsement deals requires days of physical travel and studio recording. This limits the number of sponsors a celebrity can handle per year.", solutionTitle: "Scaled Virtual Brand Ambassadors", solutionDesc: "Lets sponsors license approved digital clones for custom regional ads, multiplying B2B monetization channels without additional travel." },
    { id: "06", threatTitle: "Audiobook, Podcast & Narratives Backlog", threatDesc: "Publishing podcasts, voiceovers, and audiobooks requires hours of studio recording, keeping creators stuck behind a microphone.", solutionTitle: "Zero-Setup Studio Speech Synthesis", solutionDesc: "Generates complete high-fidelity audiobooks, narration, and podcast episodes from raw text inputs in under 15 minutes." },
    { id: "07", threatTitle: "Dynamic Regional Slang Translation", threatDesc: "Standard translations sound robotic, failing to capture hyper-local slang, regional vocabulary, and warm emotional tones.", solutionTitle: "Contextual Dialect Adaptors", solutionDesc: "Injects local cultural references, jokes, and regional slang into translated audio, making the celebrity sound like a native resident." },
    { id: "08", threatTitle: "Fan Club Personalization Constraints", threatDesc: "Global fan clubs want personalized birthday wishes and individual messages, which a celebrity cannot physically record for everyone.", solutionTitle: "Personalization Voice API", solutionDesc: "Generates thousands of dynamic, customized audio-video wishes addressing fans by their first name in the celebrity's authentic voice." },
    { id: "09", threatTitle: "IP Rights & Governance Vulnerabilities", threatDesc: "Leaving voice cloning files and visual templates with third-party agencies leads to identity leaks and loose governance control.", solutionTitle: "Secure Sovereign Identity Ledger", solutionDesc: "Houses all vocal models and visual datasets inside a highly encrypted, closed-loop biometric server, keeping celebrity IP safe." },
  ];

  const leverageItems = [
    { num: "01", icon: <Globe size={20} />, title: "Multi-Dialect Vocal Clone", desc: "Deploy your voice in 8+ regional languages with exact pitch and timbre preservation across every market." },
    { num: "02", icon: <Zap size={20} />, title: "Predictive Content Hooks", desc: "AI-seeded engagement triggers embedded in the first 3 seconds for maximum watch retention and algorithm reach." },
    { num: "03", icon: <Users size={20} />, title: "Cross-Platform Omnipresence", desc: "Simultaneous publishing across Instagram, YouTube, TikTok, X with platform-native formatting and copy." },
    { num: "04", icon: <Mic size={20} />, title: "Studio Speech Synthesis", desc: "Audiobooks, podcasts, and voiceovers from raw text in under 15 minutes with full studio quality output." },
    { num: "05", icon: <Shield size={20} />, title: "IP Sovereignty Ledger", desc: "Encrypted biometric servers with multi-party authorization required before any media asset is released." },
    { num: "06", icon: <Star size={20} />, title: "Virtual Brand Ambassadors", desc: "License approved digital clones to premium sponsors for localized regional ad campaigns without travel." },
  ];

  const faqs = [
    { q: "HOW DOES VIRTUAL CLONING PRESERVE MY AUTHENTIC IDENTITY?", a: "MagnifAI utilizes high-fidelity Vocal Matrix Custom Synthesis and 3D facial node mapping. We replicate the unique micro-cadences, vocal weight, and physical expressions that compose your signature digital aura, ensuring 100% natural, high-trust transmission without looking artificial." },
    { q: "WHAT PLATFORMS ARE SYNCED IN THE OMNIPRESENT FEEDS?", a: "We deploy unified feeds directly onto Instagram, YouTube, TikTok, X (Twitter), and premium community portals. The engine dynamically reformats and adapts the content layout, visual tone, and description copy to fit each platform's distinct algorithmic priority." },
    { q: "WILL MY DIGITAL CLONE CAUSE AUDIENCE ALIENATION?", a: "Not at all. We employ absolute transparency boundaries. The clone is used strictly for scaling routine content, translation of multi-dialect feeds, and interactive assets, allowing you to focus your physical presence exclusively on high-touch events, premium masterclasses, and editorial features." },
    { q: "HOW IS CONTENT SEEDED WITH PREDICTIVE HOOKS?", a: "Our AI engine analyzes real-time cultural drift, trending audio signatures, and attention metrics. It pre-embeds high-engagement behavioral hooks into the cloned scripts, triggering optimal platform reach and retaining viewer interest within the critical first 3 seconds." },
    { q: "HOW DO YOU PREVENT THE CREATION OF UNAUTHORIZED DEEPFAKES?", a: "Every piece of voice synthesis and visual output generated by our engine is protected by encrypted military-grade digital watermarks. We configure closed-loop servers that require multi-party biometric authorization before any media assets are released to the public." },
    { q: "IS THIS PLATFORM COMPLIANT WITH COPYRIGHT LAWS?", a: "Absolutely. You maintain 100% intellectual property sovereignty. The synthesized voices and visuals are completely owned by you, guarded behind a secure cryptographic ledger that prevents unauthorized replication." },
    { q: "HOW MUCH STUDIO RECORDING TIME IS REQUIRED?", a: "Just one initial 20-minute secure vocal calibration session. Our platform maps your vocal dynamics, cadence, and accents, after which the clone can synthesize infinite media clips from simple text transcripts." },
    { q: "HOW ARE BRAND ENDORSEMENT COLLABORATIONS HANDLED?", a: "Sponsors can license approved virtual ambassador campaigns. You authorize the scripts, and our engine automatically generates localized regional ads, saving you days of travel and studio recording." },
  ];

  return (
    <div className="page-celebrity">
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar isPageReady={true} onBookAudit={() => setAuditModalOpen(true)} />

      {/* ═══════════════════════════════════════════
          1. HERO — Dark, immersive video
      ═══════════════════════════════════════════ */}
      <section className="cc-hero">
        <motion.div 
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="cc-hero-video-bg"
        >
          <video id="cc-hero-vid" src={celebsHeroVideo} autoPlay loop muted playsInline className="cc-hero-video" />
          <div className="cc-hero-overlay" />
        </motion.div>
        <div className="cc-container cc-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="cc-hero-inner"
          >
            <div className="cc-hero-badge">
              <Sparkles size={10} />
              <span>THE ATTENTION ECONOMY MONOPOLY</span>
            </div>
            <h1 className="cc-hero-h1">
              MONOPOLIZE<br />YOUR <span className="cc-h1-blue">DIGITAL</span><br /><span className="cc-h1-italic">AURA</span>
            </h1>
            <p className="cc-hero-sub">
              For public figures, elite creators, and cultural icons who require infinite global omnipresence. Scale your influence across multi-platform networks without burning out your physical self.
            </p>
            <div className="cc-hero-actions">
              <button onClick={() => setAuditModalOpen(true)} className="cc-btn-primary">
                RESERVE AN AUDIT <ArrowRight size={14} />
              </button>
              <button onClick={toggleVideo} className="cc-btn-ghost">
                {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                {isPlaying ? 'PAUSE' : 'PLAY'}
              </button>
            </div>
          </motion.div>
          <div className="cc-hero-scroll">
            <div className="cc-scroll-line" />
            <span>SCROLL TO ASCEND</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. PHILOSOPHY — Pure WHITE, editorial split
      ═══════════════════════════════════════════ */}
      <section className="cc-philosophy cc-white">
        <div className="cc-phil-bg-num">02</div>
        <div className="cc-container">
          <div className="cc-phil-layout">
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="cc-phil-left"
            >
              <span className="cc-label-blue">EDITORIAL PHILOSOPHY</span>
              <h2 className="cc-h2-dark">Infinite Presence.<br /><em>Zero Burnout.</em></h2>
              <blockquote className="cc-pull-quote">
                "The ultimate asset in the 21st century is not just attention — it is the freedom to decide where you give it."
              </blockquote>
              <div className="cc-phil-line" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="cc-phil-right"
            >
              <p className="cc-body-dark">
                Historically, the reach of a cultural icon was constrained by their physical body. The demands of creation led directly to creative fatigue and digital saturation.
              </p>
              <p className="cc-body-dark">
                MagnifAI changes this fundamental dynamic. We separate your creative genius from your physical time. By building an elite digital clone with perfect emotional resonance and lip-synchronized multi-dialect capability, we allow you to occupy every virtual screen simultaneously.
              </p>
              <div className="cc-phil-img-wrap">
                <img src={celebs1} alt="Creator Editorial Philosophy" className="cc-phil-img" />
                <div className="cc-phil-img-stripe" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. CRISIS — Deep Navy Blue bg
      ═══════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════
          3. CRISIS & RESOLUTION TABLE — Deep Navy Blue bg
      ═══════════════════════════════════════════ */}
      <section className="cc-crisis cc-navy">
        <div className="cc-container">
          <div className="cc-section-head-center">
            <span className="cc-label-sky">THE BATTLEGROUNDS MATRIX</span>
            <h2 className="cc-h2-white">THE CREATOR <em>DECAY TRAP</em></h2>
            <p className="cc-subtitle-dim">Why standard content systems fail the world's most prominent creative forces — and how MagnifAI resolves them.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="cc-table-wrapper"
          >
            <table className="cc-matrix-table">
              <thead>
                <tr>
                  <th className="cc-col-num">NO.</th>
                  <th className="cc-col-threat">THE CHALLENGE (DECAY TRAP)</th>
                  <th className="cc-col-solution">THE MAGNIFAI WAY (RESOLUTION)</th>
                </tr>
              </thead>
              <tbody>
                {creatorCrisisData.map((item, idx) => (
                  <tr key={idx} className="cc-matrix-row">
                    <td className="cc-cell-num">{item.id}</td>

                    <td className="cc-cell-threat">
                      <div className="cc-cell-content">
                        <div className="cc-crisis-dot-indicator red" />
                        <div>
                          <h4 className="cc-cell-title red">{item.threatTitle}</h4>
                          <p className="cc-cell-desc">{item.threatDesc}</p>
                        </div>
                      </div>
                    </td>

                    <td className="cc-cell-solution">
                      <div className="cc-cell-content">
                        <div className="cc-crisis-dot-indicator green" />
                        <div>
                          <h4 className="cc-cell-title green">{item.solutionTitle}</h4>
                          <p className="cc-cell-desc">{item.solutionDesc}</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Mobile-Only Matrix Ledger Cards */}
          <div className="cc-mobile-matrix-container">
            <div className="cc-mobile-matrix-list">
              {creatorCrisisData.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="cc-mobile-matrix-card"
                >
                  <div className="cc-mobile-card-top-row">
                    <span className="cc-mobile-card-idx">{item.id}</span>
                  </div>

                  {/* Challenge (Dilemma) Block */}
                  <div className="cc-mobile-card-section threat">
                    <div className="cc-crisis-dot-indicator red" />
                    <div className="cc-mobile-card-content">
                      <h4 className="cc-mobile-card-title red">{item.threatTitle}</h4>
                      <p className="cc-mobile-card-desc">{item.threatDesc}</p>
                    </div>
                  </div>

                  {/* Clean Dashed Separator Divider */}
                  <div className="cc-mobile-card-divider" />

                  {/* Solution (Resolution) Block */}
                  <div className="cc-mobile-card-section solution">
                    <div className="cc-crisis-dot-indicator green" />
                    <div className="cc-mobile-card-content">
                      <h4 className="cc-mobile-card-title green">{item.solutionTitle}</h4>
                      <p className="cc-mobile-card-desc">{item.solutionDesc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. LEVERAGE — White bg, numbered feature list
      ═══════════════════════════════════════════ */}
      <section className="cc-leverage cc-white">
        <div className="cc-container">
          <div className="cc-lev-header">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="cc-lev-header-left"
            >
              <span className="cc-label-blue">TACTICAL PLAYBOOK</span>
              <h2 className="cc-h2-dark">DEPLOYED <em>LEVERAGE</em></h2>
              <p className="cc-body-dark">Six precision instruments engineered to multiply your cultural and commercial reach without physical constraints.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="cc-lev-header-img-wrap"
            >
              <img src={celebs2} alt="Deployed Leverage" className="cc-lev-img" />
              <div className="cc-lev-img-overlay" />
            </motion.div>
          </div>
          <div className="cc-lev-grid">
            {leverageItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.02 }}
                className="cc-lev-card"
              >
                <div className="cc-lev-card-top">
                  <span className="cc-lev-card-num">{item.num}</span>
                  <div className="cc-lev-card-icon">{item.icon}</div>
                </div>
                <h4 className="cc-lev-card-title">{item.title}</h4>
                <p className="cc-lev-card-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. DEMO — Dark bg, side-by-side
      ═══════════════════════════════════════════ */}
      <section className="cc-demo cc-dark">
        <div className="cc-container">
          <div className="cc-demo-layout">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="cc-demo-left"
            >
              <span className="cc-label-sky">TECHNOLOGY IN ACTION</span>
              <h2 className="cc-h2-white">THE VOCAL <em>MATRIX SYSTEM</em></h2>
              <p className="cc-body-light">
                Our proprietary generative engines align high-resolution lip-sync coordinates with synthetic audio feeds. This guarantees absolute natural posture, expressive eye micro-movements, and perfect dynamic vocal weight adjustment.
              </p>
              <div className="cc-demo-metrics">
                <div className="cc-demo-metric">
                  <span className="cc-demo-num">99.8%</span>
                  <span className="cc-demo-lbl">Timbre Alignment Score</span>
                </div>
                <div className="cc-demo-metric-divider" />
                <div className="cc-demo-metric">
                  <span className="cc-demo-num">&lt;15ms</span>
                  <span className="cc-demo-lbl">Lip-Sync Coherence Delay</span>
                </div>
              </div>
              <button onClick={() => setAuditModalOpen(true)} className="cc-btn-primary cc-mt">
                SEE IT IN ACTION <ArrowRight size={13} />
              </button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ perspective: 1000 }}
              className="cc-demo-right"
            >
              <div className="cc-demo-screen">
                <video src={celebsDemoVideo} autoPlay loop muted playsInline className="cc-demo-video" />
                <div className="cc-demo-corner tl" />
                <div className="cc-demo-corner tr" />
                <div className="cc-demo-corner bl" />
                <div className="cc-demo-corner br" />

                <div className="cc-demo-scan" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. METRICS — Solid Blue bg, giant numbers
      ═══════════════════════════════════════════ */}
      <section className="cc-metrics cc-blue">
        <div className="cc-container">
          <div className="cc-metrics-header">
            <div>
              <span className="cc-label-white-dim">AUDIENCE METRICS</span>
              <h2 className="cc-h2-white">THE 120% <em>ENGAGEMENT SPIKE</em></h2>
            </div>
            <p className="cc-metrics-tagline">
              By multiplying platforms and maintaining pristine narrative control, our client base experiences compounding digital growth, unlocking massive B2B sponsorships and global fan monetization.
            </p>
          </div>
          <div className="cc-metrics-numbers">
            <motion.div 
              initial={{ opacity: 0, scale: 0.85, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
              className="cc-metric-item"
            >
              <span className="cc-metric-giant">120%</span>
              <span className="cc-metric-label">Average Audience Engagement Spike</span>
            </motion.div>
            <div className="cc-metric-vline" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.85, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
              className="cc-metric-item"
            >
              <span className="cc-metric-giant">8+</span>
              <span className="cc-metric-label">Global Dialects Perfectly Synced</span>
            </motion.div>
            <div className="cc-metric-vline" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.85, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
              className="cc-metric-item"
            >
              <span className="cc-metric-giant">10x</span>
              <span className="cc-metric-label">Content Distribution Rate Multiplier</span>
            </motion.div>
            <div className="cc-metric-vline" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.85, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.4 }}
              className="cc-metric-item"
            >
              <span className="cc-metric-giant">3</span>
              <span className="cc-metric-label">Exclusive Clients Per Quarter</span>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="cc-metrics-img-strip"
          >
            <img src={celebs3} alt="Celebrity Impact" className="cc-metrics-img" />
            <div className="cc-metrics-img-fade" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6b. THE PIPELINE — Dark Navy bg, gorgeous interactive lifecycle
      ═══════════════════════════════════════════ */}
      <section className="cc-pipeline cc-dark">
        <div className="cc-container">
          <div className="cc-pipeline-header">
            <span className="cc-label-sky">THE SYNDICATION PIPELINE</span>
            <h2 className="cc-h2-white">THE LIKENESS <em>SYNTHESIS PROCESS</em></h2>
            <p className="cc-body-light">Four engineered phases transforming a single 20-minute physical session into infinite, secure, global digital omnipresence.</p>
          </div>

          <div className="cc-pipeline-grid">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="cc-pipeline-card"
            >
              <div className="cc-pipe-num">PHASE 01</div>
              <div className="cc-pipe-icon-wrap"><Mic size={18} /></div>
              <h4 className="cc-pipe-title">Precision Capture</h4>
              <p className="cc-pipe-desc">A secure, encrypted 20-minute voice and video calibration records micro-accents, vocal ranges, and facial metrics.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="cc-pipeline-card"
            >
              <div className="cc-pipe-num">PHASE 02</div>
              <div className="cc-pipe-icon-wrap"><Cpu size={18} /></div>
              <h4 className="cc-pipe-title">Vocal & Tone Calibration</h4>
              <p className="cc-pipe-desc">Our proprietary neural engine maps the capture data, aligning vocal resonance and lip-sync coordinates for seamless output.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="cc-pipeline-card"
            >
              <div className="cc-pipe-num">PHASE 03</div>
              <div className="cc-pipe-icon-wrap"><Shield size={18} /></div>
              <h4 className="cc-pipe-title">Cryptographic Lock</h4>
              <p className="cc-pipe-desc">Injects immutable digital watermarks and cryptographic stamps to verify authorized streams and completely block deepfakes.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="cc-pipeline-card"
            >
              <div className="cc-pipe-num">PHASE 04</div>
              <div className="cc-pipe-icon-wrap"><Globe size={18} /></div>
              <h4 className="cc-pipe-title">Omnipresent Dispatch</h4>
              <p className="cc-pipe-desc">Instantly dispatch localized visual statements, podcast streams, and media content in 8+ dialects simultaneously.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6c. DYNAMIC AMPLIFICATION RADAR (VIRTUAL RESONANCE MATRIX)
      ═══════════════════════════════════════════ */}
      <section className="celeb-calculator-lux cc-navy">
        <div className="cc-container">
          <div className="cc-section-head-center">
            <span className="cc-label-sky">DYNAMIC AMPLIFICATION RADAR</span>
            <h2 className="cc-h2-white">VIRTUAL RESONANCE <em>MATRIX</em></h2>
            <p className="cc-subtitle-dim">
              Configure your core global fanbase size and syndication intensity to audit synthetic reach, weekly output cadence, and market distribution in real-time.
            </p>
          </div>

          <div className="celeb-radar-grid">
            {/* Input Deck */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="celeb-glass-panel-dark"
            >
              <div className="celeb-deck-glow" />

              <div className="celeb-deck-header">
                <h3>RESONANCE CRITERIA</h3>
                <p>Define your star scale and syndication level</p>
              </div>

              {/* Slider for Fan Base */}
              <div className="celeb-radar-slider-wrap">
                <div className="celeb-slider-meta">
                  <span className="celeb-slider-lbl">GLOBAL FAN BASE</span>
                  <span className="celeb-slider-val">{fanBase.toLocaleString()} FANS</span>
                </div>
                <div className="celeb-slider-control-bar">
                  <div
                    className="celeb-slider-progress"
                    style={{ width: `${((fanBase - 100000) / 4900000) * 100}%` }}
                  />
                  <input
                    type="range"
                    min="100000"
                    max="5000000"
                    step="50000"
                    value={fanBase}
                    onChange={(e) => setFanBase(Number(e.target.value))}
                    className="celeb-radar-input-range"
                  />
                </div>
                <div className="celeb-slider-limits">
                  <span>100K (CULT STAR)</span>
                  <span>5M (GLOBAL ICON)</span>
                </div>
              </div>

              {/* Strategy Selector */}
              <div className="celeb-radar-strategy-wrap">
                <span className="celeb-strategy-lbl">SYNDICATION LEVEL</span>
                <div className="celeb-strategy-buttons">
                  {Object.keys(syndicationStrategies).map((stratKey) => {
                    const strat = syndicationStrategies[stratKey];
                    const isActive = syndicationStrategy === stratKey;
                    return (
                      <button
                        key={stratKey}
                        onClick={() => setSyndicationStrategy(stratKey)}
                        className={`celeb-strategy-btn ${isActive ? 'active' : ''}`}
                      >
                        {strat.name} ({strat.multiplier}x)
                      </button>
                    );
                  })}
                </div>
                <p className="celeb-strategy-desc">
                  "{selectedStrategy.description}"
                </p>
              </div>
            </motion.div>

            {/* Output Deck */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="celeb-radar-stats-list"
            >
              {/* Giant Reach Card */}
              <div className="celeb-stat-hero-card">
                <span className="celeb-hero-lbl">PROJECTED SYNTHETIC IMPACT</span>
                <div className="celeb-hero-val-wrap">
                  <span className="celeb-hero-val celeb-glowing-text">
                    {projectedFanReach.toLocaleString()}
                  </span>
                  <span className="celeb-hero-suffix">IMPRESSIONS / YEAR</span>
                </div>
              </div>

              {/* Compounding wave chart */}
              <div className="celeb-dynamic-graph-container">
                <span className="celeb-graph-label">AUDIENCE RESONANCE & POPULARITY PATHWAY</span>
                <div className="celeb-graph-canvas-wrap">
                  <svg className="celeb-growth-graph-svg" viewBox="0 0 310 115">
                    <defs>
                      <linearGradient id="celebGraphFillDark" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(59, 158, 255, 0.22)" />
                        <stop offset="100%" stopColor="rgba(59, 158, 255, 0)" />
                      </linearGradient>
                      <filter id="neonBlueGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2.5" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Horizontal Dotted Grids */}
                    <line x1="25" y1="20" x2="285" y2="20" stroke="rgba(59, 158, 255, 0.03)" strokeWidth="1" strokeDasharray="3 4" />
                    <line x1="25" y1="40" x2="285" y2="40" stroke="rgba(59, 158, 255, 0.05)" strokeWidth="1" strokeDasharray="3 4" />
                    <line x1="25" y1="60" x2="285" y2="60" stroke="rgba(59, 158, 255, 0.07)" strokeWidth="1" strokeDasharray="3 4" />

                    {/* Axis lines */}
                    <line x1="25" y1="10" x2="25" y2="80" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" />
                    <line x1="25" y1="80" x2="295" y2="80" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" />

                    {/* Arrowheads */}
                    <path d="M 22,14 L 25,9 L 28,14" fill="none" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" />
                    <path d="M 290,77 L 295,80 L 290,83" fill="none" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" />

                    {/* Ticks */}
                    <text x="18" y="23" textAnchor="end" fill="rgba(255, 255, 255, 0.4)" fontSize="7" fontFamily="monospace">MAX</text>
                    <text x="18" y="52" textAnchor="end" fill="rgba(255, 255, 255, 0.3)" fontSize="7" fontFamily="monospace">MID</text>
                    <text x="18" y="83" textAnchor="end" fill="rgba(255, 255, 255, 0.4)" fontSize="7" fontFamily="monospace">0</text>

                    {/* Vertical projections */}
                    {celebGraphData.points.map((pt, i) => (
                      <line
                        key={`cvgrid-${i}`}
                        x1={pt.x}
                        y1={15}
                        x2={pt.x}
                        y2={80}
                        stroke="rgba(59, 158, 255, 0.06)"
                        strokeWidth="1"
                        strokeDasharray="2 3"
                      />
                    ))}

                    {/* Fill */}
                    <motion.path
                      key={celebGraphData.path}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.0 }}
                      d={`${celebGraphData.path} L 285,80 L 25,80 Z`}
                      fill="url(#celebGraphFillDark)"
                      className="celeb-graph-fill-path"
                    />

                    {/* Path */}
                    <motion.path
                      key={celebGraphData.path + "-stroke"}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.8, ease: "easeInOut" }}
                      d={celebGraphData.path}
                      fill="none"
                      stroke="var(--cc-blue-sky)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      filter="url(#neonBlueGlow)"
                      className="celeb-graph-stroke-path"
                    />

                    {/* Nodes */}
                    {celebGraphData.points.map((pt, i) => {
                      const isLast = i === celebGraphData.points.length - 1;
                      return (
                        <g key={i} className="celeb-graph-node-group">
                          {isLast && (
                            <circle
                              cx={pt.x}
                              cy={pt.y}
                              r="6"
                              className="celeb-graph-pulse-ring"
                            />
                          )}
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r={isLast ? "4" : "3"}
                            fill={isLast ? "#FFFFFF" : "var(--cc-blue-sky)"}
                            stroke={isLast ? "var(--cc-blue)" : "#03060f"}
                            strokeWidth="1.5"
                            className="celeb-graph-node-circle"
                          />
                          <text
                            x={pt.x}
                            y="96"
                            textAnchor="middle"
                            className="celeb-graph-node-text"
                          >
                            {pt.label}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>

              {/* Geographic Distribution Splits */}
              <div className="celeb-reach-split-grid">
                <div className="celeb-split-card">
                  <div className="celeb-split-meta">
                    <span className="celeb-split-lbl">INTERNATIONAL MARKETS (80%)</span>
                    <span className="celeb-split-val">{internationalReach.toLocaleString()}</span>
                  </div>
                  <div className="celeb-split-bar-wrap">
                    <div className="celeb-split-bar-fill" style={{ width: '80%', background: 'linear-gradient(90deg, var(--cc-blue), var(--cc-blue-sky))' }} />
                  </div>
                  <p className="celeb-split-desc">Synthesized global voice translations and dynamic dialect tracks driving rapid adoption outside native markets.</p>
                </div>

                <div className="celeb-split-card">
                  <div className="celeb-split-meta">
                    <span className="celeb-split-lbl">REGIONAL CORE (20%)</span>
                    <span className="celeb-split-val">{regionalReach.toLocaleString()}</span>
                  </div>
                  <div className="celeb-split-bar-wrap">
                    <div className="celeb-split-bar-fill" style={{ width: '20%', background: 'linear-gradient(90deg, var(--cc-blue-light), var(--cc-blue-sky))' }} />
                  </div>
                  <p className="celeb-split-desc">Direct platform engagement inside native regional markets utilizing custom localization features.</p>
                </div>
              </div>

              {/* Weekly Synthesized outputs detail */}
              <div className="celeb-details-outcome-grid">
                <div className="celeb-outcome-item">
                  <div className="celeb-outcome-meta">
                    <span className="celeb-outcome-lbl">WEEKLY SYNTHESIZED OMNIPRESENT OUTPUTS</span>
                    <span className="celeb-outcome-val">{weeklyOutputs} CLONED CLIPS / WEEK</span>
                  </div>
                  <p className="celeb-outcome-desc">
                    YouTube Shorts, TikToks, and Instagram Reels generated automatically in your authentic voice and posture.
                  </p>
                </div>

                <div className="celeb-outcome-item">
                  <div className="celeb-outcome-meta">
                    <span className="celeb-outcome-lbl">HIGH-ENGAGEMENT FAN RELATIONS</span>
                    <span className="celeb-outcome-val">{coreFansEngaged.toLocaleString()} HIGH-ACTIVE FANS</span>
                  </div>
                  <p className="celeb-outcome-desc">
                    Synthesized 24/7 fan response modules retaining core artistic connections without direct physical interaction.
                  </p>
                </div>

                <div className="celeb-outcome-item">
                  <div className="celeb-outcome-meta">
                    <span className="celeb-outcome-lbl">DYNAMIC PERSONALIZED STAR WISHES</span>
                    <span className="celeb-outcome-val">{personalizedWishesPerWeek.toLocaleString()} WISHES / WEEK</span>
                  </div>
                  <p className="celeb-outcome-desc">
                    Vocal matrix system automatically dispatching custom audio messages to fan club members addressing them by their first name.
                  </p>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. FAQS — White bg, clean accordion
      ═══════════════════════════════════════════ */}
      <section className="cc-faqs cc-white">
        <div className="cc-container">
          <div className="cc-faqs-layout">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="cc-faqs-sticky-head"
            >
              <span className="cc-label-blue">QUESTIONS & ANSWERS</span>
              <h2 className="cc-h2-dark">CREATOR <em>FAQS</em></h2>
              <p className="cc-body-dark">Addressing critical creator security, identity, and integration concerns with complete clarity.</p>
            </motion.div>
            <div className="cc-faqs-list">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className={`cc-faq-item ${isOpen ? 'cc-faq-open' : ''}`}
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                  >
                    <div className="cc-faq-q">
                      <span className="cc-faq-num">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="cc-faq-text">{faq.q}</span>
                      <button className="cc-faq-toggle">
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </button>
                    </div>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                          className="cc-faq-a"
                        >
                          <p>{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. CTA — Dark with blue drama
      ═══════════════════════════════════════════ */}
      <section className="cc-cta cc-dark">
        <div className="cc-cta-glow-left" />
        <div className="cc-cta-glow-right" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.93, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="cc-container cc-cta-inner"
        >
          <span className="cc-label-sky">LIMITED VIP INTEGRATION</span>
          <h2 className="cc-cta-h2">
            READY TO SECURE<br /><span className="cc-h2-blue-underline">SYSTEMIC DOMINANCE?</span>
          </h2>
          <p className="cc-cta-sub">
            We onboard only 3 high-profile celebrity campaigns per quarter to guarantee absolute production polish. Secure your exclusive audit today.
          </p>
          <button onClick={() => setAuditModalOpen(true)} className="cc-btn-primary cc-btn-lg">
            SECURE AN EXCLUSIVE AUDIT <ArrowRight size={15} />
          </button>
        </motion.div>
      </section>

      <Footer />
      <AuditModal isOpen={auditModalOpen} onClose={() => setAuditModalOpen(false)} />
    </div>
  );
}
