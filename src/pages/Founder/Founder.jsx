import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu, Zap, Award, ShieldAlert,
  ArrowRight, Users, Globe, Play, Pause,
  ShieldCheck, Smartphone, HelpCircle, ArrowUpRight, BarChart3, TrendingUp, Briefcase,
  Plus, Minus, Target, Star, Rocket, Shield, Volume2,
  Radio, Mic, Sparkles
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AuditModal from '../../components/AuditModal';
import CustomCursor from '../../components/CustomCursor';
import './Founder.css';

// Import assets from otherPagesAssets and video
import ceoHeroVideo from '../../assets/video/aboutVideo.mp4';
import ceoImage1 from '../../assets/otherPagesAssests/ceo1.jpeg';
import ceoImage2 from '../../assets/otherPagesAssests/ceo1.jpeg';
import ceoImage3 from '../../assets/otherPagesAssests/ceo4.jpeg';
import ceoImage4 from '../../assets/otherPagesAssests/ceo7.jpg';
import ceoImage5 from '../../assets/otherPagesAssests/ceo5.jpeg';
import ceoImage6 from '../../assets/otherPagesAssests/ceo8.jpeg';

export default function FounderPage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeFaq, setActiveFaq] = useState(null);
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const [companyValue, setCompanyValue] = useState(5000000); // 5M default
  const [strategy, setStrategy] = useState('seriesA');
  const [broadcastMode, setBroadcastMode] = useState('keynote');
  const videoRef = useRef(null);

  const broadcastModes = {
    keynote: {
      title: "Virtual Keynote Addresses",
      subtitle: "GLOBAL NARRATIVE COMMAND",
      desc: "Deploy high-fidelity keynote presentations on global stages. MagnifAI replicates your vocal timbre and executive posture, engaging international audiences in their native dialects while maintaining absolute corporate trust.",
      specs: [
        { label: "Dialect Match", val: "12+ Regional Accents" },
        { label: "Vocal Replication", val: "99.8% Timbre Match" },
        { label: "Media Reach", val: "Bloomberg, Reuters, Forbes" }
      ]
    },
    earnings: {
      title: "Interactive Shareholder Briefings",
      subtitle: "INSTITUTIONAL TRUST SYNDICATION",
      desc: "Transform financial updates, annual reports, and strategic executive letters into premium video briefings in your authentic voice. Dispatched securely to LP vaults and investor relations portals.",
      specs: [
        { label: "Processing Cadence", val: "Under 10 Minutes" },
        { label: "Security Protocol", val: "Cryptographic Timbre" },
        { label: "LP Retention", val: "+28% YoY Engagement" }
      ]
    },
    townhall: {
      title: "Sovereign Executive Townhalls",
      subtitle: "DECENTRALIZED CULTURE RESONANCE",
      desc: "Maintain close corporate alignment with localized weekly greetings addressing regional offices by name, ensuring your vision is felt across global departments without physical constraints.",
      specs: [
        { label: "Translation Span", val: "40+ Languages" },
        { label: "Dynamic Addressing", val: "Personalized Names" },
        { label: "Operational Scale", val: "Unlimited Departments" }
      ]
    }
  };

  const currentBroadcast = broadcastModes[broadcastMode];

  const strategies = [
    { id: 'seed', name: 'ORGANIC ACCELERATION', multiplier: 5.4, weeklyOutputs: 8, desc: 'Daily viral short-form videos, personalized community greets, and automated thread syndication for initial follower growth.' },
    { id: 'seriesA', name: 'VIRAL MULTIPLIER', multiplier: 12.8, weeklyOutputs: 18, desc: 'Multi-platform short-form domination, dynamic video ad variations, and localized multilingual translated reels.' },
    { id: 'unicorn', name: 'OMNIPRESENT SUPERSTAR', multiplier: 28.5, weeklyOutputs: 35, desc: 'Unlimited media scale. Personal video greets dispatched to millions, daily multi-language podcast drops, and global viral ad campaigns.' }
  ];

  const currentStrategy = strategies.find(s => s.id === strategy) || strategies[1];
  const calculatedOutreach = Math.round(companyValue * currentStrategy.multiplier);
  const organicReach = Math.round(calculatedOutreach * 0.75);
  const inorganicReach = Math.round(calculatedOutreach * 0.25);
  const directStakeholders = Math.round(companyValue * 0.05);
  const monthlyOutputs = currentStrategy.weeklyOutputs * 4;

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const getGraphPath = () => {
    const ratio = (companyValue - 1000000) / 99000000; // between 1M and 100M
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

  const graphData = getGraphPath();

  const executiveVisions = [
    {
      id: "01",
      threatTitle: "The Follower Growth Ceiling",
      threatDesc: "Scaling to millions of active followers manually requires endless hours of scripting, video shoots, and post-production, leaving you burned out and distracted from operational growth.",
      solutionTitle: "Viral Video Proliferation",
      solutionDesc: "MagnifAI duplicates your vocal presence and visual charisma to automatically output high-quality daily video shorts and carousels calibrated to viral social media trends."
    },
    {
      id: "02",
      threatTitle: "High-Cost Video Ad Fatigue",
      threatDesc: "Paid advertising campaigns wear out incredibly fast. Recording new ad hooks and angles with studio production crews takes weeks of delays and costs thousands in fees.",
      solutionTitle: "Instant High-Converting Ad Matrix",
      solutionDesc: "Synthesize 50+ localized custom hook ad variations in under 10 minutes. Instantly test different demographics, pitches, and lead magnets without a single camera crew."
    },
    {
      id: "03",
      threatTitle: "Global Fame & Dialect Barriers",
      threatDesc: "Expanding your voice to multi-lingual global markets usually requires dry text subtitles that fail to capture regional nuances, dialects, and the emotional trust needed to go viral.",
      solutionTitle: "Timbre-Preserved Accent Localizer",
      solutionDesc: "Translate your visual reels, keynotes, and ads into 12+ localized languages while preserving your exact voice print, building massive public popularity instantly."
    },
    {
      id: "04",
      threatTitle: "The Engagement Affinity Gap",
      threatDesc: "Your fans expect regular, chiseled video updates and direct greetings. Manually recording personalized outreach to hundreds of thousands of followers is physically impossible.",
      solutionTitle: "Omnipresent Fan Outreach API",
      solutionDesc: "Dispatch personalized visual greetings addressing fans, lead prospects, and brand advocates by their first name in your authentic voice, exploding user loyalty."
    },
    {
      id: "05",
      threatTitle: "Trending Algorithm Lag",
      threatDesc: "Staying famous requires constantly hunting down and adapting to daily social media trending hook formats, leaving you exhausted by the speed of algorithmic shifts.",
      solutionTitle: "AI Trend-Calibrated Video Suite",
      solutionDesc: "Our generative models continuously analyze high-converting hooks in your niche, auto-generating visual scripts that guarantee maximum feed distribution."
    },
    {
      id: "06",
      threatTitle: "Deepfake Security Vulnerabilities",
      threatDesc: "As your public popularity surges, competitors or malicious actors can attempt to synthesize deepfakes of your voice to disrupt your company valuation or leak brand rumors.",
      solutionTitle: "Biometric Closed-Loop Vault",
      solutionDesc: "Secure your high-value visual and vocal assets inside a closed-loop cryptographic ledger. Zero content is ever synthesized without strict multi-party biometric authorization."
    }
  ];

  const brandPillars = [
    {
      num: "01",
      title: "Thought Leadership Domination",
      desc: "Dominate B2B industry narratives on LinkedIn, podcasts, and corporate journals automatically."
    },
    {
      num: "02",
      title: "Hyper-Personalized LP Relations",
      desc: "Maintain absolute investor affinity with automated quarterly updates addressed directly to each LP."
    },
    {
      num: "03",
      title: "Cryptographic Identity Sovereignty",
      desc: "Rest easy with biometric authorized servers protecting your corporate visual and vocal IP assets."
    }
  ];

  const founderTestimonials = [
    {
      name: "Vikram Malhotra",
      role: "Founder & CEO, NexaCorp Systems",
      quote: "Using MagnifAI's visual duplicator, my organic social media followers grew from 10k to 240k in under three months. We deployed custom video ad hooks in our campaigns and saw our direct click-through rates surge by 400%, turning our marketing into a viral customer loop.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Shalini Sen",
      role: "Co-Founder, Zephyr Health",
      quote: "We struggled to scale our ad conversions until we generated personalized video pitches addressing different buyer profiles. The conversion boost was immediate, and my translated short-form content went viral in regional Indian markets.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Vivek Singh",
      role: "Managing Director, Vertex Capital",
      quote: "Scaling my personal brand was a massive challenge. With MagnifAI, I publish 3 high-quality video shorts a day across YouTube, Instagram, and LinkedIn. I became the leading voice in venture capital, and our inbound deal flow tripled.",
      avatar: "https://randomuser.me/api/portraits/men/72.jpg"
    },
    {
      name: "Priya Kapoor",
      role: "Founder, LunaFin Technologies",
      quote: "I wanted global reach. MagnifAI's multilingual timbre translation allowed me to push my thought leadership in Spanish and Portuguese. It went absolutely viral, growing our audience base by half a million across Latin America.",
      avatar: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&h=200&fit=crop&crop=face"
    }
  ];

  const faqs = [
    {
      q: "HOW DOES SYNTHETIC PRESENCE ACCELERATE MY POPULARITY AND FOLLOWERS?",
      a: "MagnifAI clones your exact vocal timbre, visual gestures, and speaking style. By feeding simple bullet points or articles, the system outputs high-fidelity short-form videos, podcast guest recordings, and viral updates 24/7, keeping your social feeds hyper-active and growing without any studio hours."
    },
    {
      q: "CAN WE USE THE CLONED BRAND ASSETS TO RUN HIGH-CONVERTING PAID ADS?",
      a: "Absolutely. Our marketing API allows you to auto-generate thousands of personalized video ad hooks. You can target specific buyer demographics, address prospects by name, and test countless hook variations instantly to maximize your ROAS and lead velocity."
    },
    {
      q: "IS THE MULTILINGUAL TRANSLATION CAPABLE OF DRIVING GLOBAL VIRAL REACH?",
      a: "Yes. Our advanced vocal timbre localizer translates your visual reels and keynotes into 12+ localized accents and dialects while keeping your original vocal signature intact, building strong emotional affinity across global demographics."
    },
    {
      q: "HOW SECURE IS MY EXECUTIVE PERSONAL BRAND AS I GROW FAMOUS?",
      a: "Sovereign identity protection is our top priority. We implement an encrypted closed-loop biometric server ledger, requiring facial biometric authorization scans before any visual or audio asset is generated, keeping you safe from malicious deepfakes."
    }
  ];

  return (
    <div className="page-founder founder-custom-fonts">
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar isPageReady={true} onBookAudit={() => setAuditModalOpen(true)} />

      {/* 1. HERO SECTION — Silicon Obsidian and Purple Glows (sec-dark) */}
      <section className="founder-hero sec-dark">
        <div className="founder-hero-video-wrap">
          <video
            ref={videoRef}
            src={ceoHeroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="founder-hero-video"
          />
          <div className="founder-hero-gradient-overlay" />
          <div className="founder-neon-glow" />
        </div>

        <div className="founder-container founder-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="founder-hero-text"
          >
            <span className="founder-tag">
              <Briefcase size={12} className="founder-icon-pulse" /> EXECUTIVE SYNDICATION
            </span>
            <h1 className="founder-title">
              THE VISIONARY <span className="purple-glowing">OMNIPRESENCE</span>
            </h1>
            <p className="founder-desc">
              Undisputed personal branding and capital amplification for elite Founders and CEOs. Scale your strategic presence, secure LP relations, and command B2B narratives globally in your authentic voice.
            </p>
            <div className="founder-hero-ctas">
              <button onClick={() => setAuditModalOpen(true)} className="founder-btn-primary interactive">
                <span>SCALE YOUR BRANDING <ArrowRight size={13} /></span>
              </button>
              <button onClick={toggleVideo} className="founder-btn-secondary interactive">
                <span>{isPlaying ? <Pause size={12} /> : <Play size={12} />} {isPlaying ? 'PAUSE FEED' : 'PLAY FEED'}</span>
              </button>
            </div>
          </motion.div>
        </div>

        <div className="founder-hero-scroller">
          <span className="scroller-line" />
          <span className="scroller-text">SCROLL TO ANALYZE</span>
        </div>
      </section>

      {/* 2. THE PHILOSOPHY SECTION — High Contrast White (sec-white) */}
      <section className="founder-philosophy sec-white">
        <div className="founder-container">
          <div className="founder-phil-content-wrap">
            <span className="section-label">THE ECONOMY OF ATTENTION</span>
            <h2 className="section-h2">Attention Is Your <em>Ultimate Capital.</em></h2>
            <div className="phil-separator" />
            <p className="founder-phil-body">
              In today's digital landscape, the most famous founders build the most valuable empires. A powerful personal brand is a massive traffic magnet. Yet, scripting, filming, and editing content daily takes vital strategic building hours you simply don't have.
            </p>
            <p className="founder-phil-body">
              MagnifAI solves this attention bottleneck. We duplicate your voice, charisma, and presence to scale your followers, capture millions of organic views, and launch thousands of personalized visual ads instantly.
            </p>
            <blockquote className="founder-quote">
              "True modern scaling is turning your personal brand into an omnipresent media channel that generates traffic and grows followers 24/7."
            </blockquote>
          </div>
        </div>

        <div className="founder-phil-banner">
          <img src={ceoImage4} alt="Founder Corporate Philosophy" className="founder-phil-banner-img" />
          <div className="founder-phil-banner-overlay" />
        </div>
      </section>

      {/* NEW SECTION A: VISIONARY POPULARITY & VALUE ENGINE — Royal Purple (sec-purple) */}
      <section className="founder-growth-multiplier sec-purple">
        <div className="founder-container">
          <div className="founder-title-wrap">
            <span className="section-label">FAME & VIRALITY ACCELERATION</span>
            <h2 className="section-h2">EXPONENTIAL <em>AUDIENCE GROWER</em></h2>
            <p className="section-subtitle">Explode your digital reach, attract hundreds of thousands of active followers, and build a massive cult brand through automated personal syndication.</p>
          </div>

          <div className="growth-pillars-grid">
            <div className="growth-pillar-card">
              <div className="pillar-icon-wrap"><Rocket size={20} /></div>
              <h3>Viral Social Growth</h3>
              <p>Appear on every major social feed automatically. Our advanced visual calibration generates highly engaging daily short-form videos for YouTube Shorts, Instagram Reels, and LinkedIn 24/7 without active recording time.</p>
              <span className="pillar-stat">10X Follower Velocity</span>
            </div>

            <div className="growth-pillar-card">
              <div className="pillar-icon-wrap"><Target size={20} /></div>
              <h3>Global Audience Reach</h3>
              <p>Shatter geographical and language barriers. Translate your visual content and viral updates into 12+ localized dialects, engaging global fans and audiences in their native regional speech.</p>
              <span className="pillar-stat">12+ Global Dialects</span>
            </div>

            <div className="growth-pillar-card">
              <div className="pillar-icon-wrap"><TrendingUp size={20} /></div>
              <h3>High-Performance Ads</h3>
              <p>Scale your sales pipeline effortlessly. Generate thousands of custom video ad hook variations in your authentic cloned voice to test, optimize, and drive massive direct traffic at ultra-low acquisition costs.</p>
              <span className="pillar-stat">+350% Ad Conversion Rate</span>
            </div>
          </div>

          <div className="ceomaterial-split">
            <div className="ceomaterial-img-col">
              <div className="founder-img-frame">
                <img src={ceoImage5} alt="Founder Market Scaling" className="founder-frame-img" />
                <div className="founder-frame-hairline" />
              </div>
            </div>
            <div className="ceomaterial-txt-col">
              <h3>Personalized Audience Connection</h3>
              <p className="ceomaterial-p">
                Address every single lead, fan, or customer personally. MagnifAI's dynamic API enables you to dispatch personalized greetings, onboarding videos, and welcome messages addressing thousands of users by name.
              </p>
              <p className="ceomaterial-p">
                Build deep brand loyalty, grow a highly dedicated community, and command viral organic visibility across the entire web, while your physical self focuses on scaling the core business.
              </p>
              <div className="b2b-badge-deck">
                <span className="b2b-badge"><Shield size={12} /> Biometrically Protected</span>
                <span className="b2b-badge"><Volume2 size={12} /> Flawless Dialect Flow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION B: SYNTHETIC DIGITAL ADVERTISING ENGINE — High Contrast White (sec-white) */}
      <section className="founder-ad-engine sec-white">
        <div className="founder-container">
          <div className="founder-ad-grid">
            <div className="ad-text-col">
              <span className="section-label">EXPLOSIVE GROWTH ENGINE</span>
              <h2 className="section-h2">VIRAL SOCIAL <em>& PAID ADS MATRIX</em></h2>
              <div className="phil-separator" />
              <p className="founder-phil-body">
                Standard social media content and digital video ads take days to coordinate and record. MagnifAI's AI-Powered Ads Matrix automates the entire funnel, outputting daily trending short-form content and localized video ads in the founder's own voice and visual likeness.
              </p>
              <p className="founder-phil-body">
                Launch thousands of custom targeted pitches, test different demographical angles, and run evergreen ad variations to capture absolute digital attention and multiply your followers instantly.
              </p>
              <div className="ad-features-deck">
                <div className="ad-feat-mini">
                  <h4>Viral Content Automation</h4>
                  <p>Simply feed raw bullet points or news articles and let the engine synthesize chiseled trending short videos.</p>
                </div>
                <div className="ad-feat-mini">
                  <h4>Evergreen Ad Variation</h4>
                  <p>Instantly generate dozens of targeted high-converting ad angles to test demographics and boost sales ROAS.</p>
                </div>
              </div>
            </div>

            <div className="ad-img-col">
              <div className="founder-img-frame">
                <img src={ceoImage2} alt="Executive Synthetic Ads" className="founder-frame-img" />
                <div className="founder-frame-hairline" />
                <div className="founder-purple-glow-leak" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE PRESENCE SYNDICATION (NEW SECTION) — Minimalist Widescreen 16:9 Premium Showcase */}
      <section className="founder-keynote sec-dark">
        <div className="founder-container">
          <div className="founder-title-wrap">
            <span className="section-label">EXECUTIVE PRESENCE SYNDICATION</span>
            <h2 className="section-h2">THE NARRATIVE <em>BROADCAST ARENA</em></h2>
            <p className="section-subtitle">
              Scale your physical presence through high-fidelity visual syndication. Broadcast your voice, strategic authority, and executive aura across general sessions, shareholder briefings, and regional offices globally.
            </p>
          </div>

          <div className="keynote-interactive-grid">
            {/* Left column: Controls and specifications */}
            <div className="keynote-controls-panel-clean">
              <div className="controls-mode-buttons-horizontal">
                {Object.keys(broadcastModes).map((modeKey) => (
                  <button
                    key={modeKey}
                    onClick={() => setBroadcastMode(modeKey)}
                    className={`mode-selector-btn-clean ${broadcastMode === modeKey ? 'active' : ''}`}
                  >
                    <span>{broadcastModes[modeKey].title}</span>
                  </button>
                ))}
              </div>

              <div className="controls-mode-details-clean">
                <span className="mode-meta-eyebrow">{currentBroadcast.subtitle}</span>
                <h3 className="mode-meta-title">{currentBroadcast.title}</h3>
                <p className="mode-meta-desc">{currentBroadcast.desc}</p>

                <div className="mode-specs-clean">
                  {currentBroadcast.specs.map((spec, index) => (
                    <div key={index} className="spec-clean-item">
                      <span className="spec-clean-lbl">{spec.label}</span>
                      <span className="spec-clean-val">{spec.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column: 16:9 aspect ratio image showcase with elegant typography caption */}
            <div className="keynote-visual-panel">
              <div className="broadcast-viewport">
                <div className="broadcast-image-frame">
                  <img src={ceoImage6} alt="Executive Broadcast Presentation" className="broadcast-ceo-img" />
                </div>
                
                <div className="broadcast-caption-bar">
                  <span className="caption-left">AUTHENTIC BROADCAST OUTFLOW</span>
                  <span className="caption-right">
                    {broadcastMode === 'keynote' && "Global Keynote Address"}
                    {broadcastMode === 'earnings' && "Interactive Financial Briefing"}
                    {broadcastMode === 'townhall' && "Sovereign Executive Address"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE MOGUL'S LEDGER — Luxury Editorial (sec-dark) */}
      <section className="founder-crisis sec-dark">
        <div className="founder-container">
          <div className="founder-title-wrap">
            <span className="section-label">EMPIRE SCALE OBSTACLES</span>
            <h2 className="section-h2">THE MOGUL'S <em>BLIND SPOTS</em></h2>
            <p className="section-subtitle">Even the most powerful founders hit invisible ceilings. We eliminate every bottleneck between you and global omnipresence.</p>
          </div>

          <div className="mogul-ledger">
            {executiveVisions.map((item) => (
              <div key={item.id} className="ledger-entry">
                <div className="ledger-number-col">
                  <span className="ledger-number">{item.id}</span>
                </div>
                <div className="ledger-body-col">
                  <div className="ledger-obstacle">
                    <span className="ledger-tag obstacle-tag">THE OBSTACLE</span>
                    <h3>{item.threatTitle}</h3>
                    <p>{item.threatDesc}</p>
                  </div>
                  <div className="ledger-gold-rule" />
                  <div className="ledger-resolution">
                    <span className="ledger-tag resolution-tag">THE RESOLUTION</span>
                    <h3>{item.solutionTitle}</h3>
                    <p>{item.solutionDesc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE SIMULATOR — Obsidian Dark (sec-dark) */}
      <section className="founder-metrics sec-dark">
        <div className="founder-container">
          <div className="founder-title-wrap">
            <span className="section-label">EXECUTIVE CAPITAL RESONANCE MATRIX</span>
            <h2 className="section-h2">BRAND <em>EQUITY RADAR</em></h2>
            <p className="section-subtitle">Configure your company funding scale and marketing intensity to view dynamic brand projections in real-time.</p>
          </div>

          <div className="radar-grid">
            {/* Input Deck */}
            <div className="radar-input-deck glass-panel-dark">
              <div className="deck-glow" />
              <div className="deck-header">
                <h3>Executive Command Dashboard</h3>
                <p>Configure funding limits and thought leadership scales</p>
              </div>

              {/* Slider */}
              <div className="radar-slider-wrap">
                <div className="slider-meta">
                  <span className="slider-lbl">
                    <BarChart3 size={12} style={{ marginRight: '8px', color: 'var(--purple-light)' }} />
                    COMPANY VALUATION / FUNDING
                  </span>
                  <span className="slider-val">${(companyValue / 1000000).toFixed(0)}M Base</span>
                </div>
                <div className="slider-control-bar">
                  <input
                    type="range"
                    min="1000000"
                    max="100000000"
                    step="1000000"
                    value={companyValue}
                    onChange={(e) => setCompanyValue(Number(e.target.value))}
                    className="radar-input-range"
                  />
                  <div className="slider-progress" style={{ width: `${((companyValue - 1000000) / 99000000) * 100}%` }} />
                </div>
                <div className="slider-limits">
                  <span>$1M SEED</span>
                  <span>$100M UNICORN</span>
                </div>
              </div>

              {/* Strategy selectors */}
              <div className="radar-strategy-wrap">
                <span className="strategy-lbl">AMPLIFICATION STAGE PROTOCOL</span>
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

            {/* Output Deck */}
            <div className="radar-output-deck glass-panel-dark">
              <div className="deck-glow" />
              <div className="deck-header">
                <h3>Resonance Outcomes</h3>
                <p>Live compiled thought leadership leverage metrics</p>
              </div>

              <div className="radar-stats-list">
                {/* Hero Reach Card */}
                <div className="stat-hero-card">
                  <span className="hero-lbl">PROJECTED AUDIENCE IMPRESSIONS</span>
                  <div className="hero-val-wrap">
                    <span className="hero-val purple-glowing-text">
                      {calculatedOutreach.toLocaleString()}
                    </span>
                    <span className="hero-suffix">Target Organic Views</span>
                  </div>
                </div>

                {/* Compound Graph SVG */}
                <div className="dynamic-graph-container purple-graph">
                  <span className="graph-label">BRAND CAPITAL PENETRATION COMPRESSION</span>
                  <div className="graph-canvas-wrap">
                    <svg className="growth-graph-svg" viewBox="0 0 310 115">
                      <defs>
                        <linearGradient id="purpleGraphFillDark" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.22)" />
                          <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
                        </linearGradient>
                        <filter id="neonPurpleGlow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="2.5" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Horizontal Dotted Grids */}
                      <line x1="25" y1="20" x2="285" y2="20" stroke="rgba(139, 92, 246, 0.03)" strokeWidth="1" strokeDasharray="3 4" />
                      <line x1="25" y1="40" x2="285" y2="40" stroke="rgba(139, 92, 246, 0.05)" strokeWidth="1" strokeDasharray="3 4" />
                      <line x1="25" y1="60" x2="285" y2="60" stroke="rgba(139, 92, 246, 0.07)" strokeWidth="1" strokeDasharray="3 4" />

                      {/* Axis Lines */}
                      <line x1="25" y1="10" x2="25" y2="80" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
                      <line x1="25" y1="80" x2="295" y2="80" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />

                      {/* Arrow terminals */}
                      <path d="M 22,14 L 25,9 L 28,14" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
                      <path d="M 290,77 L 295,80 L 290,83" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />

                      {/* Milestone labels */}
                      <text x="18" y="23" textAnchor="end" fill="rgba(255, 255, 255, 0.3)" fontSize="7" fontFamily="monospace">MAX</text>
                      <text x="18" y="52" textAnchor="end" fill="rgba(255, 255, 255, 0.2)" fontSize="7" fontFamily="monospace">MID</text>
                      <text x="18" y="83" textAnchor="end" fill="rgba(255, 255, 255, 0.3)" fontSize="7" fontFamily="monospace">0</text>

                      {/* Vertical grids */}
                      {graphData.points.map((pt, i) => (
                        <line
                          key={`evg-${i}`}
                          x1={pt.x}
                          y1={15}
                          x2={pt.x}
                          y2={80}
                          stroke="rgba(139, 92, 246, 0.05)"
                          strokeWidth="1"
                          strokeDasharray="2 3"
                        />
                      ))}

                      {/* Fill area */}
                      <path
                        d={`${graphData.path} L 285,80 L 25,80 Z`}
                        fill="url(#purpleGraphFillDark)"
                      />

                      {/* Stroke path */}
                      <path
                        d={graphData.path}
                        fill="none"
                        stroke="var(--purple-solid)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        filter="url(#neonPurpleGlow)"
                      />

                      {/* Nodes */}
                      {graphData.points.map((pt, i) => {
                        const isLast = i === graphData.points.length - 1;
                        return (
                          <g key={i}>
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
                              fill={isLast ? "#FFFFFF" : "var(--purple-light)"}
                              stroke={isLast ? "var(--purple-solid)" : "#0d0806"}
                              strokeWidth="1.5"
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

                {/* splits grid */}
                <div className="reach-split-grid">
                  <div className="split-card organic">
                    <div className="split-meta">
                      <span className="split-lbl">ORGANIC SOCIAL FOLLOWERS (75%)</span>
                      <span className="split-val">{organicReach.toLocaleString()}</span>
                    </div>
                    <div className="split-bar-wrap">
                      <div className="split-bar-fill organic-fill" style={{ width: '75%' }} />
                    </div>
                    <span className="split-desc">YouTube shorts, Instagram reels, LinkedIn posts, and viral community growth.</span>
                  </div>

                  <div className="split-card inorganic">
                    <div className="split-meta">
                      <span className="split-lbl">HIGH-CONVERTING PAID ADS (25%)</span>
                      <span className="split-val">{inorganicReach.toLocaleString()}</span>
                    </div>
                    <div className="split-bar-wrap">
                      <div className="split-bar-fill inorganic-fill" style={{ width: '25%' }} />
                    </div>
                    <span className="split-desc">Evergreen video ad variations, custom lead magnets, and localized marketing.</span>
                  </div>
                </div>

                {/* Cadence Outcome Grid */}
                <div className="details-outcome-grid">
                  <div className="outcome-item">
                    <div className="outcome-meta">
                      <span className="outcome-lbl">MONTHLY INBOUND LEADS & SIGNUPS</span>
                      <span className="outcome-val">{directStakeholders.toLocaleString()} Leads</span>
                    </div>
                    <p className="outcome-desc">Targeted, high-intent prospects captured directly through personalized visual ad outflow.</p>
                  </div>

                  <div className="outcome-item">
                    <div className="outcome-meta">
                      <span className="outcome-lbl">VIRAL DAILY VIDEO SHORTS & ADS</span>
                      <span className="outcome-val">{currentStrategy.weeklyOutputs} / Week ({monthlyOutputs} / Month)</span>
                    </div>
                    <p className="outcome-desc">Automated trending content synthesized directly in your custom voice, pitch, and posture parameters.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOVEREIGN SECURITY VAULT — Deep Purple (sec-purple) */}
      <section className="founder-vault sec-purple">
        <div className="founder-container">
          <div className="vault-split-layout">
            <div className="vault-left">
              <span className="section-label">IP SECURITY STANDARD</span>
              <h2 className="section-h2">Sovereign <em>Biometric Encryption.</em></h2>
              <p className="vault-p">
                We understand that your visual and vocal identity is a high-value corporate asset. MagnifAI NEVER stores candidate models on open centralized cloud drives. Your visual signatures and voice parameters are protected inside a secure closed-loop cryptographic ledger.
              </p>

              <div className="vault-features-list">
                <div className="vault-feat-item">
                  <div className="feat-icon"><ShieldCheck size={18} /></div>
                  <div className="feat-info">
                    <h4>Multi-Party Biometric Signatures</h4>
                    <p>Requires authorized facial validation scans before synthesizing any public communications.</p>
                  </div>
                </div>
                <div className="vault-feat-item">
                  <div className="feat-icon"><Cpu size={18} /></div>
                  <div className="feat-info">
                    <h4>Cryptographic IP Watermarks</h4>
                    <p>All synthetically generated audio and video carry encrypted traceable metadata signatures for instant public verification.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="vault-right">
              <div className="founder-img-frame">
                <img src={ceoImage3} alt="Biometric Security Vault" className="founder-frame-img" />
                <div className="founder-frame-hairline" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOUNDER TESTIMONIALS — High Contrast White (sec-white) */}
      <section className="founder-testimonials sec-white">
        <div className="founder-container">
          <div className="founder-title-wrap">
            <span className="section-label">CREDIBILITY ASSURANCE</span>
            <h2 className="section-h2">VISIONARY <em>RESONANCE</em></h2>
            <p className="section-subtitle">Read authentic scaling narratives from elite corporate leaders who transformed their digital capital.</p>
          </div>

          <div className="testimonials-grid">
            {founderTestimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card-obsidian">
                <div className="t-quote-mark">“</div>
                <p className="t-body">
                  {t.quote}
                </p>
                <div className="t-profile-row">
                  <div className="t-avatar-circle">
                    <img src={t.avatar} alt={t.name} />
                  </div>
                  <div className="t-meta">
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. EXECUTIVE FAQ ACCORDION — Obsidian Dark (sec-dark) */}
      <section className="founder-faqs sec-dark">
        <div className="founder-container">
          <div className="founder-title-wrap">
            <span className="section-label">SYSTEM KNOWLEDGE</span>
            <h2 className="section-h2">EXECUTIVE <em>PROTOCOLS</em></h2>
            <p className="section-subtitle">Common questions regarding personal brand virality, high-performance video ads, and security.</p>
          </div>

          <div className="faq-accordion-wrap">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className={`faq-accordion-item ${activeFaq === idx ? 'active' : ''}`}
              >
                <div className="faq-question-bar">
                  <h3>{faq.q}</h3>
                  <button className="faq-toggle-btn">
                    {activeFaq === idx ? <Minus size={14} /> : <Plus size={14} />}
                  </button>
                </div>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="faq-answer-pane"
                    >
                      <p className="text-dark-desc">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LUXURY INVITATION — Deep Purple (sec-purple) */}
      <section className="founder-cta sec-purple">
        <div className="founder-container">
          <div className="founder-cta-block">
            <div className="cta-decorative-rule" />
            <span className="cta-eyebrow">AN EXCLUSIVE INVITATION</span>
            <h2 className="cta-headline">Your Brand Deserves<br /><em>Exponential Virality.</em></h2>
            <p className="cta-body">
              Step into a confidential 20-minute growth session with our executive personal brand architects. We'll map your vocal profile, design your dynamic ad strategy, and create a presence that dominates every social feed automatically.
            </p>
            <button onClick={() => setAuditModalOpen(true)} className="cta-luxury-btn interactive">
              <span>BOOK YOUR PRIVATE SESSION <ArrowUpRight size={13} /></span>
            </button>
            <div className="cta-decorative-rule bottom-rule" />
          </div>
        </div>
      </section>

      <Footer />
      <AuditModal open={auditModalOpen} onClose={() => setAuditModalOpen(false)} />
    </div>
  );
}
