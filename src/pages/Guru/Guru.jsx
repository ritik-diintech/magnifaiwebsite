import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, Heart, Compass, ShieldAlert, Cpu, ArrowRight, Plus, Minus,
  Play, Pause, Volume2, Globe, Disc, Zap, Shield, Sun, Activity
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AuditModal from '../../components/AuditModal';
import CustomCursor from '../../components/CustomCursor';
import './Guru.css';

// Import our specialized guru image asset
import gurusImg from '../../assets/images/gurusAddressing.jpeg';

export default function GuruPage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeFaq, setActiveFaq] = useState(null);
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [activeStage, setActiveStage] = useState(0);

  const pillars = [
    {
      num: "01",
      icon: <Volume2 size={22} />,
      title: "Divine Cadence Clone",
      desc: "Captures the calm pauses, sacred timber, and warm, emotional pitch of your voice, preserving spiritual transmission in 12+ dialects."
    },
    {
      num: "02",
      icon: <Globe size={22} />,
      title: "Multilingual Satsang",
      desc: "Distributes discourse globally in Hindi, English, Spanish, Tamil, Sanskrit, and more, matching local dialect accents perfectly."
    },
    {
      num: "03",
      icon: <Shield size={22} />,
      title: "Sovereign Wisdom Ledger",
      desc: "A highly secure, biometric ledger where all sacred texts and cloned datasets are stored, preventing unauthorized access."
    },
    {
      num: "04",
      icon: <Heart size={22} />,
      title: "Universal Darshan Engine",
      desc: "Broadcasts personalized blessings and guidance to millions of global devotees, addressing each by name with native warmth."
    },
    {
      num: "05",
      icon: <Sun size={22} />,
      title: "Calm Aura Protection",
      desc: "A powerful, 24/7 threat-matrix that automatically flags, reports, and neutralizes unauthorized audio/visual deepfakes."
    },
    {
      num: "06",
      icon: <Activity size={22} />,
      title: "Zero-Setup Audio Casts",
      desc: "Generate complete, studio-quality daily podcasts, scripture readings, and audio-guided meditations directly from raw text."
    }
  ];

  const processStages = [
    {
      phase: "PHASE 01",
      title: "Vocal Resonance Calibration",
      desc: "A private, peaceful 15-minute vocal session. We record clean, high-fidelity sound waves to map your micro-tonality, serene pauses, and meditative pitch signatures."
    },
    {
      phase: "PHASE 02",
      title: "Emotional Timbre Synthesis",
      desc: "Our neural engines process your voice pattern, mapping emotional depth, breathing intervals, and speech velocity to ensure that the clone speaks with pure soul and absolute warmth."
    },
    {
      phase: "PHASE 03",
      title: "Multi-Dialect Satsang Mapping",
      desc: "The synthetic engine is calibrated into 12+ international and regional languages. Translated streams naturally sound like a native resident addressing their local community."
    },
    {
      phase: "PHASE 04",
      title: "Sovereign Ledger Lockdown",
      desc: "Your digital aura datasets are locked within secure, biometric servers. Multi-factor consent protocol ensures you have 100% control over every broadcast, release, or synthetic audio wave."
    }
  ];

  const faqs = [
    {
      q: "HOW DOES VIRTUAL CLONING PRESERVE THE SACRED DEPTH OF MY MESSAGE?",
      a: "MagnifAI is engineered to avoid mechanical or robotic synthesis. We specifically map physical micro-cadences, breath intervals, and warm meditative pitches. This ensures that the dynamic spiritual clone retains the exact peaceful, soothing aura of a physical satsang, maintaining profound emotional transmission."
    },
    {
      q: "WHICH DIALECTS AND LANGUAGES ARE CURRENTLY SUPPORTED?",
      a: "Our Multilingual Synthesis currently supports 12+ major global and regional languages—including Sanskrit, Hindi, English, Tamil, Spanish, French, Japanese, and Telugu. The accent is dynamically calibrated to match local cultural nuances for absolute regional warmth."
    },
    {
      q: "IS MY SOVEREIGN IP AND SACRED DATA COMPLETELY PROTECTED?",
      a: "Absolutely. We build a custom closed-loop biometric server system. Your voice models, visual assets, and sacred scriptures are hosted inside an encrypted Sovereign Ledger. No release, broadcast, or generation can occur without multi-party biometric confirmation from you."
    },
    {
      q: "HOW MUCH PREPARATION OR STUDIO RECORDING IS REQUIRED?",
      a: "Just one initial 15-minute vocal calibration session. Our peaceful studio environment captures your vocal weight and serene frequencies, after which the clone can synthesize infinite daily discourse, audiobooks, and meditations from raw text transcripts."
    },
    {
      q: "CAN DEVOLUTION OR UNAUTHORIZED DEEPFAKES BE PREVENTED?",
      a: "Yes. Every media asset generated by our platform is cryptographically watermarked. Our active 'Calm Aura' matrix monitors the web continuously for unlicensed audio-visual clones, instantly flagging and neutralizing unauthorized content to preserve absolute digital trust."
    }
  ];

  return (
    <div className="page-guru">
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar isPageReady={true} onBookAudit={() => setAuditModalOpen(true)} />

      {/* ═══════════════════════════════════════════
          1. HERO — Cosmic Pink-Violet Aura Hero
      ═══════════════════════════════════════════ */}
      <section className="gk-hero">
        <div className="gk-hero-mesh-bg">
          <div className="gk-mesh-glow-left" />
          <div className="gk-mesh-glow-right" />
          <div className="gk-stars-pattern" />
        </div>
        
        <div className="gk-container gk-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="gk-hero-inner"
          >
            <div className="gk-hero-badge">
              <Sparkles size={11} className="gk-sparkle-pink" />
              <span>WISDOM WITHOUT BORDERS</span>
            </div>
            
            <h1 className="gk-hero-h1">
              TRANSCEND<br />
              YOUR <span className="gk-h1-gradient">PHYSICAL</span><br />
              <span className="gk-h1-italic">PRESENCE</span>
            </h1>
            
            <p className="gk-hero-sub">
              For spiritual leaders, global gurus, and profound organizations. Cast your timeless wisdom globally in 12+ dialects simultaneously while maintaining absolute emotional depth and divine connection.
            </p>
            
            <div className="gk-hero-actions">
              <button onClick={() => setAuditModalOpen(true)} className="gk-btn-primary">
                ONBOARD YOUR SANCTUARY <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
          
          <div className="gk-hero-scroll">
            <div className="gk-scroll-mouse">
              <div className="gk-scroll-wheel" />
            </div>
            <span>SCROLL TO TRANSMIT</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. PHILOSOPHY — Soft Gilded Split Grid
      ═══════════════════════════════════════════ */}
      <section className="gk-philosophy">
        <div className="gk-container">
          <div className="gk-phil-layout">
            <div className="gk-phil-left">
              <span className="gk-label-violet">SACRED TRANSMISSION</span>
              <h2 className="gk-h2-dark">Finite Time.<br /><em>Infinite Sat-Sang.</em></h2>
              <blockquote className="gk-pull-quote">
                “Wisdom is not meant to be restricted by geography, physical burnout, or language barriers. It is meant to flow like water.”
              </blockquote>
              <div className="gk-phil-line" />
            </div>
            
            <div className="gk-phil-right">
              <p className="gk-body-dark">
                Throughout history, the voice of a spiritual guide was bound to a physical location—a dynamic ashram, a single lecture hall, or a specific region. Physical exhaustion and travel demands constrained global transmission.
              </p>
              <p className="gk-body-dark">
                MagnifAI eliminates these barriers. We synthesize a highly resonant dynamic clone that preserves your peaceful tone, comforting pauses, and authentic timber. Broadcast your spiritual discourses globally, allowing thousands of seekers to connect in their native languages simultaneously.
              </p>
              
              <div className="gk-phil-img-wrap">
                <img src={gurusImg} alt="Spiritual Guru Satsang" className="gk-phil-img" />
                <div className="gk-phil-img-stripe" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. PILLARS — Dark Mesh Cards Grid
      ═══════════════════════════════════════════ */}
      <section className="gk-pillars">
        <div className="gk-container">
          <div className="gk-pillars-header">
            <span className="gk-label-pink">CORE PILLARS</span>
            <h2 className="gk-h2-white">THE GLOBAL SATSANG <em>MATRIX</em></h2>
            <p className="gk-body-light">Custom technologies engineered to multiply spiritual engagement while keeping your identity highly verified and protected.</p>
          </div>

          <div className="gk-pillars-grid">
            {pillars.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="gk-pillar-card interactive"
              >
                <div className="gk-pillar-top">
                  <div className="gk-pillar-num">{item.num}</div>
                  <div className="gk-pillar-icon">{item.icon}</div>
                </div>
                <h4 className="gk-pillar-title">{item.title}</h4>
                <p className="gk-pillar-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. THE LIFECYCLE PROCESS — Interactive Tab Panel
      ═══════════════════════════════════════════ */}
      <section className="gk-lifecycle">
        <div className="gk-container">
          <div className="gk-lifecycle-header">
            <span className="gk-label-violet">THE PROCESS</span>
            <h2 className="gk-h2-dark">THE RESONANCE <em>SYNTHESIS</em></h2>
            <p className="gk-body-dark">Four peaceful stages designed to map your authentic digital identity with complete privacy and zero creative burnout.</p>
          </div>

          <div className="gk-lifecycle-interactive">
            {/* Left side Tab selectors */}
            <div className="gk-lifecycle-tabs">
              {processStages.map((stage, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  className={`gk-stage-tab-btn interactive ${activeStage === idx ? 'active' : ''}`}
                >
                  <span className="gk-tab-num">{stage.phase}</span>
                  <span className="gk-tab-title">{stage.title}</span>
                </button>
              ))}
            </div>

            {/* Right side animated Content card */}
            <div className="gk-lifecycle-content-box">
              <div className="gk-box-card-glow" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="gk-stage-card-body"
                >
                  <div className="gk-stage-badge">{processStages[activeStage].phase}</div>
                  <h3 className="gk-stage-main-title">{processStages[activeStage].title}</h3>
                  <p className="gk-stage-description">{processStages[activeStage].desc}</p>
                  
                  <div className="gk-stage-features-hud">
                    <div className="gk-hud-item">
                      <Shield size={12} className="gk-icon-pink" />
                      <span>Sovereign Encryption</span>
                    </div>
                    <div className="gk-hud-item">
                      <Compass size={12} className="gk-icon-pink" />
                      <span>Zero Loss of Timbre</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. FAQ ACCORDION — Premium Gilded Cards
      ═══════════════════════════════════════════ */}
      <section className="gk-faq-section">
        <div className="gk-container">
          <div className="gk-faq-header">
            <span className="gk-label-pink">COMMON SATSANG INQUIRIES</span>
            <h2 className="gk-h2-white">AURA & TRUST <em>ASSURANCE</em></h2>
            <p className="gk-body-light">Addressing theological, technical, and security standards regarding dynamic voice synthesis and visual presence.</p>
          </div>

          <div className="gk-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className={`gk-faq-card ${isOpen ? 'open' : ''} interactive`}
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                >
                  <div className="gk-faq-question-row">
                    <span className="gk-faq-question">{faq.q}</span>
                    <div className="gk-faq-icon-wrap">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </div>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="gk-faq-answer-row"
                      >
                        <p className="gk-faq-answer">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. CTA BANNER — High Violet Glassmorphism
      ═══════════════════════════════════════════ */}
      <section className="gk-cta-section">
        <div className="gk-cta-glow-left" />
        <div className="gk-cta-glow-right" />
        
        <div className="gk-container gk-cta-inner">
          <span className="gk-label-pink">EXCLUSIVE SANCTUARY AUDIT</span>
          
          <h2 className="gk-cta-h2">
            READY TO EXPAND<br />
            <span className="gk-cta-gradient">YOUR GLOBAL REVENUE?</span>
          </h2>
          
          <p className="gk-cta-sub">
            We partner with a highly selected circle of ashrams, trust organizations, and global spiritual advocates annually to guarantee pure production caliber. Secure your exclusive aura audit today.
          </p>
          
          <button onClick={() => setAuditModalOpen(true)} className="gk-btn-primary gk-btn-lg">
            SECURE AN AURA AUDIT <ArrowRight size={15} />
          </button>
        </div>
      </section>

      <Footer />
      <AuditModal isOpen={auditModalOpen} onClose={() => setAuditModalOpen(false)} />
    </div>
  );
}
