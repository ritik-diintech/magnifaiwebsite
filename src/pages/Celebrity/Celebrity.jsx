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
        <div className="cc-hero-video-bg">
          <video id="cc-hero-vid" src={celebsHeroVideo} autoPlay loop muted playsInline className="cc-hero-video" />
          <div className="cc-hero-overlay" />
        </div>
        <div className="cc-container cc-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
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
            <div className="cc-phil-left">
              <span className="cc-label-blue">EDITORIAL PHILOSOPHY</span>
              <h2 className="cc-h2-dark">Infinite Presence.<br /><em>Zero Burnout.</em></h2>
              <blockquote className="cc-pull-quote">
                "The ultimate asset in the 21st century is not just attention — it is the freedom to decide where you give it."
              </blockquote>
              <div className="cc-phil-line" />
            </div>
            <div className="cc-phil-right">
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
            </div>
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

          <div className="cc-table-wrapper">
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
          </div>

          {/* Mobile-Only Matrix Ledger Cards */}
          <div className="cc-mobile-matrix-container">
            <div className="cc-mobile-matrix-list">
              {creatorCrisisData.map((item, idx) => (
                <div key={idx} className="cc-mobile-matrix-card">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AuditModal isOpen={auditModalOpen} onClose={() => setAuditModalOpen(false)} />
    </div>
  );
}
