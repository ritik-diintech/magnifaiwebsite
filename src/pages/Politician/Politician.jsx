import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Flame, Zap, Award, Landmark, ShieldAlert, Cpu, 
  ArrowRight, Plus, Minus, Tv, Play, Pause, Users, Globe,
  ShieldCheck, Smartphone, HelpCircle, ArrowUpRight
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AuditModal from '../../components/AuditModal';
import CustomCursor from '../../components/CustomCursor';
import './Politician.css';

// Import assets from otherPagesAssests
import politicianHeroVideo from '../../assets/otherPagesAssests/videoPolitician.mp4';
import politician1 from '../../assets/otherPagesAssests/politician1.jpeg';
import politician2 from '../../assets/otherPagesAssests/politican2.jpeg';
import politician3 from '../../assets/otherPagesAssests/politican3.jpeg';
import politician4 from '../../assets/otherPagesAssests/politican4.jpeg';
import politician5 from '../../assets/otherPagesAssests/polictican5.jpeg';
import politician7 from '../../assets/otherPagesAssests/politician7.jpeg';
import politicianStage from '../../assets/images/Man_on_stage_addressing_public_202605172116.jpeg';

export default function PoliticianPage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeFaq, setActiveFaq] = useState(null);
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const [voterBase, setVoterBase] = useState(250000);
  const [strategy, setStrategy] = useState('active');

  const strategies = [
    { id: 'grassroots', name: 'GRASSROOTS', multiplier: 3.2, weeklyVideos: 3, desc: 'Targeting local community heads & village elders.' },
    { id: 'active', name: 'ACTIVE CAMPAIGN', multiplier: 6.5, weeklyVideos: 7, desc: 'Active ward-level daily updates and citizen responses.' },
    { id: 'omnipresent', name: 'OMNIPRESENT', multiplier: 9.8, weeklyVideos: 14, desc: 'Complete ward-level video flooding and maximum narrative domination.' }
  ];

  const currentStrategy = strategies.find(s => s.id === strategy) || strategies[1];
  const calculatedTotalReach = Math.round(voterBase * currentStrategy.multiplier);
  const calculatedOrganic = Math.round(calculatedTotalReach * 0.70);
  const calculatedInorganic = Math.round(calculatedTotalReach * 0.30);
  const calculatedTargetAudience = Math.round(voterBase * 0.45);
  const calculatedMonthlyVideos = currentStrategy.weeklyVideos * 4;

  const getGraphPath = () => {
    const ratio = (voterBase - 50000) / 950000;
    
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
    
    const selectedMonths = [1, 4, 6, 8, 12];
    const points = selectedMonths.map(m => {
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
    
    return {
      path,
      points
    };
  };

  const graphData = getGraphPath();
  const protocolStages = [
    {
      roman: "I",
      badge: "PHASE 01 / AUDIENCE SCANNING",
      title: "Target Demographic Mapping",
      desc: "We map distinct voter blocks, regional demographics, and village forums to identify key local issues and tailor your messaging.",
      detail: "Finds exactly what topics matter most to rural families, farmers, and young voters in every ward."
    },
    {
      roman: "II",
      badge: "PHASE 02 / CONTENT GENERATION",
      title: "Hyper-Personalized Content",
      desc: "Type brief updates, festival wishes, or policy points to instantly generate high-quality video statements in your authentic voice.",
      detail: "Produces thousands of custom videos with perfect speaking style and natural regional accents."
    },
    {
      roman: "III",
      badge: "PHASE 03 / WHATSAPP SYNDICATION",
      title: "Viral WhatsApp Broadcasting",
      desc: "Send lightweight, optimized voice notes and response videos directly into local ward group chats and community phone lists.",
      detail: "Ensures your messaging spreads organically and rapidly through local peer-to-peer forwarded channels."
    },
    {
      roman: "IV",
      badge: "PHASE 04 / LEADER OMNIPRESENCE",
      title: "24/7 Ward-Level Presence",
      desc: "Your digital clone delivers daily greetings and local ward updates, keeping you active in every ward simultaneously.",
      detail: "Helps establish an intimate, personal, and highly trusted connection with every citizen."
    }
  ];

  const toggleVideo = () => {
    const video = document.getElementById('hero-video');
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const faqs = [
    {
      q: "HOW DOES SECURE DIRECT MOBILE MOBILIZATION WORK?",
      a: "Our system integrates directly with certified secure messaging protocols. We map your voter constituency records to dynamic broadcasting networks, delivering highly personalized, vocal cloned announcements from the candidate directly to their smartphone without data latency."
    },
    {
      q: "HOW DO YOU MAINTAIN ABSOLUTE DIGITAL IDENTITY SECURITY?",
      a: "Security is our highest priority. Every piece of voice synthesis and visual output generated by our engine is protected by encrypted military-grade digital watermarks. We configure closed-loop servers that require multi-party biometric authorization before any media assets are released to the public."
    },
    {
      q: "CAN THE VOICE SYSTEM ADAPT TO MULTIPLE REGIONAL DIALECTS?",
      a: "Yes. Our Vocal Matrix platform adapts your core speech profile into over 8 regional languages and local dialects. The engine retains your exact pitch, accentuation, and emotional warmth, allowing a candidate to address diverse populations with absolute linguistic harmony."
    },
    {
      q: "HOW FAST CAN A DYNAMIC RESPONSE SPEECH BE GENERATED DURING A CRISIS?",
      a: "Within less than 15 minutes of a crisis scenario. The candidate inputs text or draft bullet points via our secure dashboard. The engine synthesizes a high-fidelity video statement complete with lip-syncing and correct micro-expressions, allowing immediate narrative anchoring before public rumors spread."
    },
    {
      q: "HOW DO YOU PREVENT THE CREATION OF UNAUTHORIZED DEEPFAKES?",
      a: "We deploy secure cryptographic verification ledgers. Every authorized campaign broadcast is tagged with a unique, traceable digital seal. This allows media outlets and voters to immediately verify the authenticity of any statement via our public verification gateway, completely neutralizing hostile deepfakes."
    },
    {
      q: "IS THIS PLATFORM COMPLIANT WITH NATIONAL ELECTION COMMISSION CODES?",
      a: "Absolute regulatory compliance is built into our core framework. Our automated scripts contain mandatory disclosure tags, adhere strictly to campaign silence windows, and comply with digital advertisement authorization laws, providing complete legal defense."
    },
    {
      q: "HOW ARE THE LOCALIZED VOTER DATABASES PROTECTED AGAINST LEAKS?",
      a: "All voter profiles, ward statistics, and contact databases are protected under localized decentralized encryption standards. MagnifAI never retains voter details in centralized cloud storages, ensuring zero database vulnerability."
    },
    {
      q: "WHAT LEVEL OF PHYSICAL COGNITION AND INPUT IS REQUIRED FROM THE CANDIDATE?",
      a: "Minimal. After a secure 20-minute vocal calibration and profile setup session, the candidate simply feeds draft policies, scripts, or public announcements. The platform handles the entire localized translation, regional accent adaptation, and media dispatch automatically."
    }
  ];

  // The 9 detailed problems and solutions
  const narrativeCrisisData = [
    {
      id: "01",
      threatTitle: "Local Voter Familiarity Gap",
      threatDesc: "Traditional banners, flyers, and billboards fail to build close personal relationships. Rural blocks and localized ward voters feel completely disconnected, not knowing the candidate's authentic character or voice.",
      solutionTitle: "Personalized Voice Broadcasts",
      solutionDesc: "MagnifAI deploys automated voice notes that address local citizens by their first names in the candidate's authentic voice, explaining specific ward resolutions directly to their smartphones."
    },
    {
      id: "02",
      threatTitle: "Regional Dialect & Slang Barriers",
      threatDesc: "Generic Hindi or English campaign announcements sound robotic and standard, failing to capture hyper-local accents, regional slangs, and warm tones that establish direct community trust in smaller wards.",
      solutionTitle: "Vocal Matrix Accent Calibration",
      solutionDesc: "Our speech engine adapts the candidate's voice into 8+ regional dialects with absolute linguistic accuracy, making them sound like a born-and-raised local in every village."
    },
    {
      id: "03",
      threatTitle: "Split-Second WhatsApp Rumor Mills",
      threatDesc: "Opposition groups spread malicious rumors and false campaigns on local WhatsApp chats within minutes. Scheduling, recording, and editing a physical video response takes 24-48 hours, letting rumors settle.",
      solutionTitle: "15-Minute Broadcast Engine",
      solutionDesc: "The candidate inputs a brief text response, and our secure dashboard immediately generates a high-fidelity vocal and video broadcast statement, ready to be dispatched to local chats in under 15 minutes."
    },
    {
      id: "04",
      threatTitle: "Generic Digital Ad Fatigue",
      threatDesc: "Running the same generic video ad across an entire constituency results in low click-through rates and high voter boredom because distinct agricultural and urban voter segments are treated identically.",
      solutionTitle: "Micro-Targeted Localized Ads",
      solutionDesc: "Dynamically outputs hundreds of micro-targeted video ads addressing distinct neighborhood issues (e.g., local farm water vs. town youth jobs), multiplying digital conversion rates."
    },
    {
      id: "05",
      threatTitle: "Social Algorithm & Posting Fatigue",
      threatDesc: "Maintaining organic relevance requires daily high-quality posting across Facebook, Instagram, YouTube, and WhatsApp, leaving the candidate physically exhausted and draining vital campaign hours.",
      solutionTitle: "Automated Social Omnipresence",
      solutionDesc: "Generative clones automatically produce high-quality daily campaign updates, Reels, and Shorts based on approved policies, maintaining 24/7 channel presence with zero candidate effort."
    },
    {
      id: "06",
      threatTitle: "Ward-Level Meeting Constraints",
      threatDesc: "A candidate cannot physically visit thousands of remote houses or hold personal conversations with every family, leaving distant constituents feeling politically neglected and ignored.",
      solutionTitle: "Ward-Level Custom greetings",
      solutionDesc: "Generates custom audio and video greetings tailored to the specific problems of every single village and council ward, scaling the candidate's warm presence infinitely."
    },
    {
      id: "07",
      threatTitle: "Ignored Social Inboxes & Comments",
      threatDesc: "Voters leave thousands of comments and questions on campaign posts. A standard campaign team cannot reply to everyone, causing voters to feel ignored by the leadership.",
      solutionTitle: "AI Orator Inbox Assistants",
      solutionDesc: "Sets up secure, automated voice-response channels that instantly answer citizen messages in the candidate's authentic voice, based entirely on verified policy guidelines."
    },
    {
      id: "08",
      threatTitle: "WhatsApp Forward Spam Flags",
      threatDesc: "Mass-forwarding standard copy-paste texts or long video files leads to campaign phone numbers getting blocked by WhatsApp and ignored by local voters who swipe away spam.",
      solutionTitle: "Interactive Voice Responders",
      solutionDesc: "Routes secure, light, and optimized voice notes directly through constituency databases, guaranteeing maximum audio play rates without being flagged."
    },
    {
      id: "09",
      threatTitle: "Grassroots Volunteer Drifting",
      threatDesc: "Local campaign managers, volunteers, and ward spokespeople often present mismatched policy viewpoints in different neighborhoods, causing public confusion and narrative errors.",
      solutionTitle: "Centralized Policy Control Hub",
      solutionDesc: "All campaign voice automation, digital ad variables, and social media synthetic scripts are authorized from a singular secure hub, maintaining absolute campaign discipline."
    }
  ];

  return (
    <div className="page-politician politician-custom-fonts">
      {/* Noise overlay and custom cursor */}
      <div className="noise-overlay" />
      <CustomCursor />

      {/* Premium Navigation Header */}
      <Navbar isPageReady={true} onBookAudit={() => setAuditModalOpen(true)} />

      {/* 1. HERO SECTION (Dark background, deep terracotta amber neons, Cinzel fonts) */}
      <section className="politician-hero sec-dark">
        <div className="politician-hero-video-wrap">
          <video 
            id="hero-video"
            src={politicianHeroVideo} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="politician-hero-video"
          />
          <div className="politician-hero-gradient-overlay" />
          <div className="politician-neon-glow" />
        </div>

        <div className="luxury-container politician-hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="politician-hero-text"
          >
            <span className="politician-tag">
              <Flame size={12} className="politician-icon-pulse" /> ORATORICAL RESPLENDENCE
            </span>
            <h1 className="politician-title">
              THE VOICE OF <span className="orange-glowing">LEADERSHIP</span>
            </h1>
            <p className="politician-desc">
              Unrivaled digital mobilization for leaders who dictate history. Reach every district in their native dialect with absolute identity sovereignty and secure cryptographic verification.
            </p>
            <div className="politician-hero-ctas">
              <button onClick={() => setAuditModalOpen(true)} className="politician-btn-primary interactive">
                <span>REQUEST STRATEGY SESSION <ArrowRight size={13} /></span>
              </button>
              <button onClick={toggleVideo} className="politician-btn-secondary interactive">
                <span>{isPlaying ? <Pause size={12} /> : <Play size={12} />} {isPlaying ? 'PAUSE FOOTAGE' : 'PLAY FOOTAGE'}</span>
              </button>
            </div>
          </motion.div>
        </div>

        <div className="politician-hero-scroller">
          <span className="scroller-line" />
          <span className="scroller-text">SCROLL TO ANALYZE</span>
        </div>
      </section>

      {/* 2. THE PHILOSOPHY SECTION (Majestic White background, dark text, Cormorant fonts) */}
      <section className="politician-philosophy sec-white">
        <div className="luxury-container">
          <div className="politician-philosophy-grid">
            <div className="politician-phil-left">
              <span className="section-label">CAMPAIGN DOCTRINE</span>
              <h2 className="section-h2">The Architecture of <em>Mass Resonance.</em></h2>
              <div className="phil-separator" />
              <p className="politician-phil-body">
                Power is no longer measured solely by physical presence; it belongs to those who possess narrative leverage. In modern sovereign campaigns, a candidate must transcend boundaries to address millions, while retaining the absolute intimacy of a personal, direct conversation.
              </p>
              <p className="politician-phil-body">
                By integrating candidate visual profiles with high-trust local accents, we resolve the tension between regional diversity and absolute unity. We empower you to occupy every household, council, and screen simultaneously—delivering profound authenticity without physical weariness.
              </p>
              <blockquote className="politician-quote">
                "To lead a nation is to resonate within the heart of every single citizen in their own local tongue."
              </blockquote>
            </div>

            <div className="politician-phil-right">
              <div className="politician-img-frame">
                <img src={politician3} alt="Political Campaign Philosophy" className="politician-frame-img" />
                <div className="politician-frame-hairline" />
                <div className="politician-orange-glow-leak" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE CRISIS (9 Detailed Problems & Solutions, Deep Dark background, neon orange gradients) */}
      <section className="politician-crisis sec-dark">
        <div className="luxury-container">
          <div className="luxury-title-wrap">
            <span className="section-label">THE 9 BATTLEGROUNDS</span>
            <h2 className="section-h2">THE NARRATIVE <em>WARFARE</em></h2>
            <p className="section-subtitle">A comprehensive analysis of critical campaign challenges and our automated solutions.</p>
          </div>

          <div className="politician-crisis-detailed-grid">
            {narrativeCrisisData.map((item, index) => (
              <div 
                key={item.id}
                className="crisis-detailed-card"
              >
                {/* Threat Side */}
                <div className="card-threat-block">
                  <div className="block-header">
                    <span className="card-index-num">{item.id}.</span>
                    <span className="threat-label">THE CRITICAL THREAT</span>
                  </div>
                  <h3>{item.threatTitle}</h3>
                  <p>{item.threatDesc}</p>
                </div>

                <div className="card-block-divider" />

                {/* Solution Side */}
                <div className="card-solution-block">
                  <div className="block-header">
                    <span className="solution-label">THE RESOLUTION</span>
                  </div>
                  <h3>{item.solutionTitle}</h3>
                  <p>{item.solutionDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DEPLOYED LEVERAGE NODES (High-Contrast Vibrant Orangish/Rust Background, dark text) */}
      <section className="politician-nodes sec-orange">
        <div className="luxury-container">
          <div className="politician-nodes-layout">
            <div className="politician-nodes-left">
              <div className="politician-img-frame">
                <img src={politician2} alt="Political Deployed Leverage" className="politician-frame-img" />
                <div className="politician-frame-hairline" />
              </div>
            </div>

            <div className="politician-nodes-right">
              <span className="section-label dark-label">TACTICAL PLAYBOOK</span>
              <h2 className="section-h2 dark-title">DEPLOYED <em>LEVERAGE</em></h2>
              <div className="politician-nodes-list">
                <div className="node-item dark-node">
                  <div className="node-num">01</div>
                  <div className="node-info">
                    <h4>Constituency Mobile Broadcasts</h4>
                    <p>Integrate verified voter lists with custom voice calibrations to deliver immediate announcements directly to mobile lines.</p>
                  </div>
                </div>
                <div className="node-item dark-node">
                  <div className="node-num">02</div>
                  <div className="node-info">
                    <h4>Micro-Demographic Calibration</h4>
                    <p>Analyze local ward concerns and generate high-fidelity candidate recordings matching regional speech coordinates.</p>
                  </div>
                </div>
                <div className="node-item dark-node">
                  <div className="node-num">03</div>
                  <div className="node-info">
                    <h4>High-Trust Crisis Defenses</h4>
                    <p>Create secure visual updates in under 15 minutes to address, counter, and neutralize public rumors instantly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MULTILINGUAL DIALECTS (Dark Background with Glowing Calibration Dashboard) */}
      <section className="politician-dialects sec-dark">
        <div className="luxury-container">
          <div className="luxury-title-wrap">
            <span className="section-label">VOCAL ALIGNMENT MATRIX</span>
            <h2 className="section-h2">Multi-Dialect <em>Assimilation</em></h2>
            <p className="section-subtitle">Perfect regional accents and vocal weight calibrator details in action.</p>
          </div>

          <div className="dialect-fullwidth-card">
            <div className="dialect-card-info">
              <div className="dialect-info-text-col">
                <span className="organic-accent-tag">Linguistic Resonance Calibration</span>
                <h3>Timbre & Tone Harmonization</h3>
                <p>
                  Our Vocal Matrix platform adapts the candidate's authentic vocal patterns and micro-pauses into regional accents. This preserves absolute natural warmth and direct community affinity, establishing strong regional trust.
                </p>
              </div>

              <div className="dialect-info-stats-col">
                <div className="dialect-stats-capsule">
                  <div className="dialect-stat-item">
                    <span className="stat-number-accent">8+</span>
                    <span className="stat-label-accent">Regional Accent Profiles</span>
                  </div>
                  <div className="dialect-stat-divider" />
                  <div className="dialect-stat-item">
                    <span className="stat-number-accent">100%</span>
                    <span className="stat-label-accent">Pitch & Timbre Fidelity</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="dialect-card-media">
              <img src={politicianStage} alt="Vocal Alignment Stage" className="dialect-card-img" />
              <div className="dialect-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. PERFORMANCE & IMPACT (Interactive Resonance Matrix - Dark theme, glowing neons) */}
      <section className="politician-metrics sec-dark">
        <div className="luxury-container">
          <div className="luxury-title-wrap">
            <span className="section-label">CAMPAIGN RESONANCE MATRIX</span>
            <h2 className="section-h2">TACTICAL <em>REACH RADAR</em></h2>
            <p className="section-subtitle">
              Configure your constituency size and campaign intensity to audit dynamic organic, inorganic, and target audience mobilization in real-time.
            </p>
          </div>

          <div className="radar-grid">
            {/* Left Deck: Dynamic Calculator Inputs */}
            <div className="radar-input-deck glass-panel-dark">
              <div className="deck-glow" />
              <div className="deck-header">
                <h3>Constituency Command Center</h3>
                <p>Configure campaign scales and mobilization intensity</p>
              </div>

              {/* Slider for Voter Base */}
              <div className="radar-slider-wrap">
                <div className="slider-meta">
                  <span className="slider-lbl">
                    <Users size={12} style={{ marginRight: '8px', color: 'var(--orange-light)' }} />
                    TARGET CONSTITUENCY BASE
                  </span>
                  <span className="slider-val">{voterBase.toLocaleString()} Voters</span>
                </div>
                <div className="slider-control-bar">
                  <input 
                    type="range" 
                    min="50000" 
                    max="1000000" 
                    step="10000"
                    value={voterBase}
                    onChange={(e) => setVoterBase(Number(e.target.value))}
                    className="radar-input-range"
                  />
                  <div className="slider-progress" style={{ width: `${((voterBase - 50000) / 950000) * 100}%` }} />
                </div>
                <div className="slider-limits">
                  <span>50K WARD</span>
                  <span>1M DISTRICT</span>
                </div>
              </div>

              {/* Selectors for Strategy */}
              <div className="radar-strategy-wrap">
                <span className="strategy-lbl">CAMPAIGN DISPATCH INTENSITY</span>
                <div className="strategy-buttons">
                  {strategies.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setStrategy(s.id)}
                      className={`strategy-btn ${strategy === s.id ? 'active' : ''}`}
                    >
                      <span>{s.name}</span>
                    </button>
                  ))}
                </div>
                <p className="strategy-desc">{currentStrategy.desc}</p>
              </div>
            </div>

            {/* Right Deck: Dynamic Visual Matrix Outputs */}
            <div className="radar-output-deck glass-panel-dark">
              <div className="deck-glow" />
              <div className="deck-header">
                <h3>Resonance Projections</h3>
                <p>Live calculated projections of your digital outreach footprint</p>
              </div>

              <div className="radar-stats-list">
                
                {/* Total Reach (Major Hero Card) */}
                <div className="stat-hero-card">
                  <span className="hero-lbl">TOTAL PROJECTED REACH</span>
                  <div className="hero-val-wrap">
                    <span className="hero-val orange-glowing-text">
                      {calculatedTotalReach.toLocaleString()}
                    </span>
                    <span className="hero-suffix">Impressions</span>
                  </div>
                </div>

                {/* Dynamic Compounding Wave Graph Visualizer (Terracotta Wave in Dark Deck) */}
                <div className="dynamic-graph-container orange-graph">
                  <span className="graph-label">CONSTITUENCY PENETRATION TRAJECTORY</span>
                  <div className="graph-canvas-wrap">
                    <svg className="growth-graph-svg" viewBox="0 0 310 115">
                      <defs>
                        <linearGradient id="orangeGraphFillDark" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(234, 92, 10, 0.22)" />
                          <stop offset="100%" stopColor="rgba(234, 92, 10, 0)" />
                        </linearGradient>
                        <filter id="neonOrangeGlow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="2.5" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      
                      {/* Horizontal Dotted Grids */}
                      <line x1="25" y1="20" x2="285" y2="20" stroke="rgba(234, 92, 10, 0.03)" strokeWidth="1" strokeDasharray="3 4" />
                      <line x1="25" y1="40" x2="285" y2="40" stroke="rgba(234, 92, 10, 0.05)" strokeWidth="1" strokeDasharray="3 4" />
                      <line x1="25" y1="60" x2="285" y2="60" stroke="rgba(234, 92, 10, 0.07)" strokeWidth="1" strokeDasharray="3 4" />

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
                      {graphData.points.map((pt, i) => (
                        <line 
                          key={`pvgrid-${i}`} 
                          x1={pt.x} 
                          y1={15} 
                          x2={pt.x} 
                          y2={80} 
                          stroke="rgba(234, 92, 10, 0.06)" 
                          strokeWidth="1" 
                          strokeDasharray="2 3"
                        />
                      ))}
                      
                      {/* Fill */}
                      <path 
                        d={`${graphData.path} L 285,80 L 25,80 Z`}
                        fill="url(#orangeGraphFillDark)"
                        className="graph-fill-path"
                      />
                      
                      {/* Path */}
                      <path 
                        d={graphData.path}
                        fill="none"
                        stroke="var(--orange-solid)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        filter="url(#neonOrangeGlow)"
                        className="graph-stroke-path"
                      />
                      
                      {/* Nodes */}
                      {graphData.points.map((pt, i) => {
                        const isLast = i === graphData.points.length - 1;
                        return (
                          <g key={i} className="graph-node-group">
                            {isLast && (
                              <circle 
                                cx={pt.x} 
                                cy={pt.y} 
                                r="6" 
                                className="graph-pulse-ring"
                              />
                            )}
                            <circle 
                              cx={pt.x} 
                              cy={pt.y} 
                              r={isLast ? "4" : "3"} 
                              fill={isLast ? "#FFFFFF" : "var(--orange-light)"} 
                              stroke={isLast ? "var(--orange-solid)" : "#0d0806"} 
                              strokeWidth="1.5" 
                              className="graph-node-circle"
                            />
                            <text 
                              x={pt.x} 
                              y="96" 
                              textAnchor="middle" 
                              className="graph-node-text"
                            >
                              {pt.label}
                            </text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                </div>

                {/* Grid for Organic & Inorganic */}
                <div className="reach-split-grid">
                  <div className="split-card organic">
                    <div className="split-meta">
                      <span className="split-lbl">ORGANIC REACH (70%)</span>
                      <span className="split-val">{calculatedOrganic.toLocaleString()}</span>
                    </div>
                    <div className="split-bar-wrap">
                      <div className="split-bar-fill organic-fill" style={{ width: '70%' }} />
                    </div>
                    <span className="split-desc">Peer forwards, viral WhatsApp groups & local organic shares</span>
                  </div>

                  <div className="split-card inorganic">
                    <div className="split-meta">
                      <span className="split-lbl">DIRECTED / PAID REACH (30%)</span>
                      <span className="split-val">{calculatedInorganic.toLocaleString()}</span>
                    </div>
                    <div className="split-bar-wrap">
                      <div className="split-bar-fill inorganic-fill" style={{ width: '30%' }} />
                    </div>
                    <span className="split-desc">Dynamic broadcast lists & micro-targeted visual statements</span>
                  </div>
                </div>

                {/* Grid for Target Audience & Video Posts */}
                <div className="details-outcome-grid">
                  <div className="outcome-item">
                    <div className="outcome-meta">
                      <span className="outcome-lbl">TARGET HIGH-ENGAGED AUDIENCE (45%)</span>
                      <span className="outcome-val">{calculatedTargetAudience.toLocaleString()} Voters</span>
                    </div>
                    <p className="outcome-desc">Core village opinion makers, dedicated volunteers, and warm responsive swing voters.</p>
                  </div>

                  <div className="outcome-item">
                    <div className="outcome-meta">
                      <span className="outcome-lbl">PERSONALIZED VIDEO VOLUME</span>
                      <span className="outcome-val">{currentStrategy.weeklyVideos} / Week ({calculatedMonthlyVideos} / Month)</span>
                    </div>
                    <p className="outcome-desc">Custom dynamic greetings and ward updates generated in your voice & dialect.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6b. THE CRISIS DISPATCH PROTOCOL — Deep Amber-Dark bg, luxury workflow stepper
      ═══════════════════════════════════════════ */}
      <section className="politician-crisis-protocol sec-dark" style={{ backgroundImage: `url(${politician7})` }}>
        <div className="luxury-container">
          <div className="luxury-title-wrap">
            <span className="section-label">MAXIMUM CONSTITUENCY REACH</span>
            <h2 className="section-h2">THE OMNIPRESENT <em>LEADER ENGINE</em></h2>
            <p className="section-subtitle">A professional four-step outreach system engineered to scale your direct presence, engage local communities, and make you the household choice.</p>
          </div>
          
          <div className="luxury-protocol-layout">
            {/* Left Column: Asymmetrical Editorial Narrative */}
            <div className="protocol-editorial-narrative">
              <div className="editorial-divider-line" />
              <span className="narrative-tag">VIRAL COMMUNITY MOBILIZATION</span>
              <h3 className="narrative-quote">
                "To win a constituency, you must speak directly to every family, in their own <em>village dialect.</em>"
              </h3>
              <p className="narrative-body">
                Our Campaign Reach Protocol is designed to scale your presence infinitely. By combining highly personalized video messages with automated WhatsApp broadcasts, we ensure you build direct, meaningful trust with every single voter before election day.
              </p>
              
              <div className="luxury-defense-badge">
                <div className="defense-badge-circle">
                  <div className="defense-badge-pulse" />
                  <ShieldCheck size={18} className="defense-badge-icon" />
                </div>
                <div className="defense-badge-text">
                  <h4>OMNIPRESENCE ACTIVE</h4>
                  <p>Active voter engagement engine</p>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Minimal Stepper Accordion */}
            <div className="protocol-luxury-steps">
              {protocolStages.map((stage, idx) => {
                const isActive = activeStage === idx;
                return (
                  <div 
                    key={idx}
                    className={`luxury-step-row ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveStage(idx)}
                  >
                    <div className="luxury-step-num-col">
                      <span className="luxury-step-roman">{stage.roman}</span>
                    </div>
                    
                    <div className="luxury-step-content-col">
                      <span className="luxury-step-badge">{stage.badge}</span>
                      <h3 className="luxury-step-title">{stage.title}</h3>
                      <p className="luxury-step-desc">{stage.desc}</p>
                      
                      {/* Elegant subtle drawer detail for the active stage */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="luxury-step-detail-drawer"
                          >
                            <div className="detail-drawer-inner">
                              <span className="detail-dot" />
                              <p>{stage.detail}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQS (Warm Orangish/Rust Background with Frosted Glass Panels) */}
      <section className="politician-faqs sec-warm-rust">
        <div className="luxury-container">
          <div className="luxury-title-wrap">
            <span className="section-label dark-label">QUESTIONS & ANSWERS</span>
            <h2 className="section-h2 dark-title">CAMPAIGN <em>FAQS</em></h2>
            <p className="section-subtitle dark-label">Addressing critical campaign queries with complete clarity.</p>
          </div>

          <div className="faq-accordion-wrap">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`faq-accordion-item glass-panel border-dark-glass ${isOpen ? 'active' : ''}`}
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                >
                  <div className="faq-question-bar">
                    <h3>{faq.q}</h3>
                    <button className="faq-toggle-btn text-dark">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </button>
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="faq-answer-pane"
                      >
                        <p className="text-dark-desc">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. LUXURY BOTTOM CALL-TO-ACTION (Dark background, orange glows) */}
      <section className="politician-cta sec-dark">
        <div className="luxury-container">
          <div className="politician-cta-inner glass-panel">
            <div className="politician-cta-glow" />
            <span className="mono-tag">LIMITED REGIONAL COMPLIANCE</span>
            <h2>READY TO SECURE NARRATIVE HEGEMONY?</h2>
            <p>
              We prioritize security, message integrity, and local compliance. Onboarding is limited to selected campaigns to ensure absolute coordination.
            </p>
            <button onClick={() => setAuditModalOpen(true)} className="politician-btn-primary interactive">
              <span>SECURE STRATEGY BRIEFING <ArrowRight size={13} /></span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer & Audit Modal */}
      <Footer />
      <AuditModal isOpen={auditModalOpen} onClose={() => setAuditModalOpen(false)} />
    </div>
  );
}
