import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, Heart, ArrowRight, Plus, Minus,
  Play, Pause, Volume2, Globe, Shield, Sun, Activity,
  Eye, Lock, CheckCircle2, ChevronRight, Award, Users, Mic, Zap,
  Compass, Feather, HeartHandshake, BookOpen
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AuditModal from '../../components/AuditModal';
import CustomCursor from '../../components/CustomCursor';
import './Guru.css';

import guru1 from '../../assets/otherPagesAssests/guru1.jpeg';
import guru2 from '../../assets/otherPagesAssests/guru2.jpeg';
import guru3 from '../../assets/otherPagesAssests/guru3.jpeg';
import guru4 from '../../assets/otherPagesAssests/guru4.jpeg';
import guru5 from '../../assets/otherPagesAssests/guru5.jpeg';
import guru6 from '../../assets/otherPagesAssests/guru6.jpeg';
import videoGuru from '../../assets/otherPagesAssests/videoGuru.mp4';

export default function GuruPage() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [devoteeBase, setDevoteeBase] = useState(250000);
  const [flowStrategy, setFlowStrategy] = useState('daily');
  const videoRef = useRef(null);

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

  const amplificationStrategies = [
    { id: 'organic', name: 'ORGANIC INFLUENCE', multiplier: 3.5, weeklyVideos: 3, desc: 'Steady weekly scripture dispatches and meditation guides to build core devotee followers.' },
    { id: 'daily', name: 'DAILY ENGAGEMENT', multiplier: 7.2, weeklyVideos: 7, desc: 'Daily automated scripture lessons and peaceful blessings in local dialects for rapid follower scaling.' },
    { id: 'infinite', name: 'MAXIMUM POPULARITY', multiplier: 11.5, weeklyVideos: 14, desc: 'Complete visual saturation, reaching all global channels and spiritual influencer hubs for ultimate popularity.' }
  ];

  const selectedStrat = amplificationStrategies.find(s => s.id === flowStrategy) || amplificationStrategies[1];
  const totalReach = Math.round(devoteeBase * selectedStrat.multiplier);
  const organicReach = Math.round(totalReach * 0.85);
  const inorganicReach = Math.round(totalReach * 0.15);
  const highlyEngaged = Math.round(devoteeBase * 0.60);
  const monthlyReels = selectedStrat.weeklyVideos * 4;

  const getGuruGraphPath = () => {
    const ratio = (devoteeBase - 50000) / 1950000;
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

  const graphData = getGuruGraphPath();

  const sacredChallenges = [
    {
      id: "I",
      threat: "Geographic Confinement",
      threatDesc: "A spiritual guide's physical presence is strictly confined to one physical ashram or location. Because of this, traditional broadcast formats fail to engage global seekers dynamically, slowing down your follower reach to a crawl, and leaving millions of potential seekers without a direct daily connection to your wisdom.",
      solution: "Omnipresent Global Reach",
      solutionDesc: "MagnifAI dissolves all physical limits, dynamically synthesizing your virtual avatar and voice to broadcast personalized daily blessings and discourses across global digital spaces, instantly scaling your follower base ten-fold and expanding your spiritual authority globally."
    },
    {
      id: "II",
      threat: "Linguistic Fragmentation",
      threatDesc: "Discourses delivered in only one dialect or language fail to capture the algorithms and viral loops in foreign countries, immediately alienating and excluding more than 80% of potential global followers who are searching for real enlightenment in their own local language.",
      solution: "Multilingual Timbre Cloning",
      solutionDesc: "Clone your exact warm voice timbre, tranquil pitch, and calm breathing rhythm into 12+ international dialects. Your teachings flow natively, sparking massive viral trends and organic shares across thousands of local social channels and devotee groups."
    },
    {
      id: "III",
      threat: "Devotional & Physical Exhaustion",
      threatDesc: "Manually scripting, recording, and editing daily spiritual shorts, guided meditations, and personalized video messages for social media drains the physical vessel entirely, leaving no time or energy for essential deep silence, spiritual retreats, and personal meditation.",
      solution: "Infinite Viral Content Engine",
      solutionDesc: "An automated, high-fidelity generative engine that converts scriptural texts and past transcripts into daily studio-quality shorts, video streams, and audio podcasts, keeping your presence highly viral and active on the web while your physical body rests in perfect silence."
    },
    {
      id: "IV",
      threat: "Fame & Rep Deepfakes",
      threatDesc: "Rogue AI software, voice-cloning bots, and unauthorized fan pages siphon off your hard-earned followers by publishing altered doctrines and counterfeit blessings, putting your sacred legacy and digital authority at massive reputational risk.",
      solution: "Sovereign Fame Vault",
      solutionDesc: "Seal your unique biological voice model and visual avatar within your own secure, cryptographic biometric vault. No new content can ever be synthesized or published across global networks without your explicit, multi-party biometric authorization key."
    }
  ];

  const pillars = [
    { num: "01", icon: <Compass className="luxury-icon" />, title: "Viral Resonance Synthesis", desc: "Clones your comforting pauses and pristine vocal frequency, generating high-engagement audio and video assets optimized for social algorithms." },
    { num: "02", icon: <Globe className="luxury-icon" />, title: "Global Follower Multiplier", desc: "Instantly translate and lip-sync your discourses into Sanskrit, Hindi, Tamil, English, Spanish, Japanese, and more to tap into massive global follower bases." },
    { num: "03", icon: <Shield className="luxury-icon" />, title: "The Sovereign Identity Vault", desc: "Strict biometric protection for your virtual avatar model, ensuring absolute control over your global image, viral channels, and intellectual assets." },
    { num: "04", icon: <Feather className="luxury-icon" />, title: "Personalized Blessing Loops", desc: "Generate thousands of individual, hyper-realistic video blessings addressing seekers by their personal names, triggering massive organic virality on WhatsApp." },
    { num: "05", icon: <HeartHandshake className="luxury-icon" />, title: "High-Frequency Reels Casting", desc: "Effortlessly convert scriptural reflections and texts into daily high-fidelity shorts and podcasts that dominate YouTube, Spotify, and Instagram feeds." },
    { num: "06", icon: <BookOpen className="luxury-icon" />, title: "Calm Fame Sentinel", desc: "An automated web-scraping AI system that monitors global channels for unauthorized clone accounts, taking them down immediately to protect your followers." }
  ];

  const processStages = [
    { roman: "I", badge: "CALIBRATION", title: "15-Minute Fame Calibration", desc: "A brief, non-intrusive 15-minute calibration session in your private retreat. We map your vocal range, speech speed, and authentic warm cadence.", detail: "Conducted with absolute ease. Requires zero studio setups, microphones, or exhaustion." },
    { roman: "II", badge: "SYNTHESIS", title: "AI Aura Virality Synthesis", desc: "Our neural engines calibrate the clone model, preserving the highly engaging, magnetic frequency of your voice rather than creating a flat synthetic speech pattern.", detail: "The output sounds natural and organic, driving up audience retention and follower loyalty." },
    { roman: "III", badge: "EXPANSION", title: "Global Reach Expansion", desc: "Your authentic AI voice is expanded into 12+ international dialects. The speech matches native pronunciation, making your teachings instantly accessible to worldwide seekers.", detail: "Allows you to easily expand your global brand and spiritual influence into brand-new continents." },
    { roman: "IV", badge: "SOVEREIGN GUARD", title: "Sovereign Follower Guard", desc: "All synthesis models are sealed in your private cryptographic server. New video releases or broadcasts can only be triggered with your unique biometric authorization key.", detail: "Absolute control of your global digital brand and virtual presence remains exclusively in your hands." }
  ];

  const archiveChronology = [
    {
      img: guru1,
      title: "Viral Vedic Discourse Campaign",
      location: "Rishikesh Sanctum",
      reach: "Significant Follower Reach",
      dialect: "Sanskrit & Hindi",
      description: "Traditional Sanskrit discourses translated dynamically into Hindi dialects, sparking viral loops and high digital engagement across national channels."
    },
    {
      img: guru3,
      title: "Mega Southern Digital Darshan",
      location: "Coimbatore Retreat",
      reach: "Devotees Scaled",
      dialect: "Tamil & Telugu",
      description: "Meditation sessions broadcasted with hyper-local southern accents, generating organic shares on social media and a massive influx of regional followers."
    },
    {
      img: guru4,
      title: "Global Viral Wisdom Surge",
      location: "San Francisco Dome",
      reach: "Universal Follower Reach",
      dialect: "English & Spanish",
      description: "Spiritual reflections synthesized dynamically in Spanish and English with pristine timbre, tripling the organization's follower base in western countries."
    },
    {
      img: guru5,
      title: "Personalized Viral Blessing Portal",
      location: "Vrindavan Sanctuary",
      reach: "Personalized Seeker Reach",
      dialect: "12 Global Accents",
      description: "An automated blessing engine delivering custom videos addressing devotees by their name, creating massive organic shares and viral growth on messaging apps."
    },
    {
      img: guru6,
      title: "Scripture Reels Social Dominance",
      location: "Kyoto Retreat Center",
      reach: "Widespread Visual Views",
      dialect: "Japanese & English",
      description: "Guided scriptural readings converted into daily studio-quality Japanese audio and video feeds, achieving absolute dominance across search queries and video feeds."
    }
  ];

  const devoteeTestimonials = [
    {
      initials: "AP",
      quote: "Our Sansthan's YouTube and Instagram channels were growing very slowly. With MagnifAI, we translated Swamiji's ancient discourses into Spanish and Portuguese. Our global reach exploded, and we gained 2 Million+ new international seekers within months!",
      author: "Acharya Priya Sharma",
      location: "Global Outreach Director, Eternal Light Foundation"
    },
    {
      initials: "SA",
      quote: "Managing daily scriptural broadcasts, translations, and morning WhatsApp blessings was physically exhausting for our Ashram. Now, MagnifAI's automated engine creates studio-quality video shorts instantly. Guruji has more time for Dhyana.",
      author: "Swami Anantananda",
      location: "Chief Trustee, Rishikesh Vedic Wisdom Trust"
    },
    {
      initials: "DN",
      quote: "Hearing the Guru address me by my name in Telugu and English with flawless voice timbre and serene breath pauses felt deeply spiritual. The personalized blessing video went instantly viral, bringing a massive wave of new youth followers.",
      author: "Devendra Nath",
      location: "President, Global Gita Satsang, Bangalore"
    }
  ];

  const faqs = [
    { q: "HOW DOES DYNAMIC CLONING MULTIPLY MY GLOBAL REACH AND FOLLOWERS?", a: "MagnifAI clones your exact warm voice timbre and authentic pauses. By translating your spiritual discourses into 12+ major dialects, it lets you connect directly with global audiences in their native language, making your wisdom highly shareable and viral." },
    { q: "WHICH PLATFORMS AND CHANNELS CAN WE DOMINATE?", a: "The synthesized audio and video assets are perfectly formatted to achieve virality on YouTube, Instagram, WhatsApp, Spotify, and Facebook. High-retention voice structures ensure maximum algorithm engagement." },
    { q: "HOW IS MY DIGITAL IDENTITY, REPUTATION, AND FAME SECURED?", a: "We establish a closed-loop biometric server system. Your voice models and virtual avatars are locked behind a cryptographic vault. No content can be generated or broadcasted without your direct multi-party biometric authorization, protecting you from deepfakes." },
    { q: "HOW DOES IT KEEP MY CONTENT VIRAL WITHOUT CREATIVE BURNOUT?", a: "With just one initial 15-minute voice calibration session, our system can continuously generate daily guided meditation clips, scripture readings, and video dispatches directly from text. Your physical vessel rests while your digital influence dominates the web." },
    { q: "CAN MAGNIFAI IDENTIFY AND STOP UNAUTHORIZED FAKE CLONES?", a: "Yes. Every asset created carries a cryptographic digital signature. Our 'Calm Sentinel' engine scans global social media channels continuously to identify, flag, and automatically report unauthorized clones siphoning your followers." }
  ];

  return (
    <div className="page-guru-luxury">
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar isPageReady={true} onBookAudit={() => setAuditModalOpen(true)} />

      {/* 1. HERO — Luxurious pink & violet cosmic aura background */}
      <section className="guru-hero-lux">
        {/* Serene Cosmic Video Background */}
        <div className="guru-hero-video-bg">
          <video 
            src={videoGuru} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="hero-video-el"
            poster={guru2}
          />
          <div className="hero-video-overlay" />
        </div>

        <div className="guru-hero-glows">
          <div className="glow-violet" />
          <div className="glow-pink" />
          <div className="glow-cyan" />
        </div>

        <div className="guru-container-lux hero-content-lux">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }} 
            className="hero-center-block"
          >
            <div className="serene-eyebrow centered-eyebrow">
              <Sparkles className="eyebrow-spark" size={12} />
              <span>AMPLIFY YOUR REACH GLOBALLY</span>
            </div>
            
            <h1 className="hero-title-lux text-center">
              Scale Your <br />
              <span className="glow-text-pink">Divine Influence</span> <br />
              <em>Globally</em>
            </h1>
            
            <p className="hero-sub-lux mx-auto">
              For revered spiritual leaders, global gurus, and sacred trusts. Project your authentic voice, serene pauses, and magnetic energy to your global followers. Go viral in 12+ dialects simultaneously while maintaining absolute identity sovereignty.
            </p>

            <div className="hero-ctas-lux centered-ctas">
              <button onClick={() => setAuditModalOpen(true)} className="btn-rose-gold">
                <span>SCALE YOUR SACRED INFLUENCE</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="hero-simple-stats-row centered-stats-row">
              <div className="simple-stat-box">
                <span className="simple-stat-num">10X+</span>
                <span className="simple-stat-lbl">Followers Gained</span>
              </div>
              <div className="simple-stat-divider" />
              <div className="simple-stat-box">
                <span className="simple-stat-num">12+</span>
                <span className="simple-stat-lbl">Viral Dialects</span>
              </div>
              <div className="simple-stat-divider" />
              <div className="simple-stat-box">
                <span className="simple-stat-num">100%</span>
                <span className="simple-stat-lbl">Secure Authority</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="scroll-indicator">
          <span className="scroll-line" />
          <span className="scroll-txt">SCROLL TO ASCEND</span>
        </div>
      </section>

      {/* 2. PHILOSOPHY — Majestic Arched Portal Darshan Gate */}
      <section className="guru-philosophy-lux">
        <div className="mandala-bg-rotating" />
        <div className="guru-container-lux">
          <div className="temple-darshan-gate">
            {/* Left Arch Gate - Discourse & Wisdom */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="temple-arch-gate left-gate"
            >
              <div className="arch-inner-container">
                <span className="tag-luxury cyan">GLOBAL IMPACT NARRATIVE</span>
                <h2 className="serif-title-lux">Scale Your Wisdom <br /><em>To Every Screen.</em></h2>
                
                <blockquote className="lux-blockquote">
                  "A true guide's message is meant for the entire world. In the digital age, pure wisdom must flow dynamically to scale global influence and reach countless souls."
                </blockquote>

                <div className="sacred-arch-emblem">
                  <div className="emblem-circle" />
                  <div className="emblem-lotus" />
                </div>
              </div>
            </motion.div>

            {/* Right Arch Gate - The Living Portal Visual & Text Split */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="temple-arch-gate right-gate"
            >
              <div className="arch-inner-container image-arch-container">
                <img src={guru1} alt="Peaceful Meditation Darshan" className="temple-darshan-img" />
                <div className="temple-glass-overlay">
                  <div className="temple-overlay-content">
                    <span className="overlay-badge">SACRED DIGITAL DEPLOYMENT</span>
                    <p className="body-lux-light">
                      Spiritual leaders are no longer confined by physical boundaries. Travel fatigue, recording schedules, and linguistic limits are replaced with infinite digital omnipresence.
                    </p>
                    <p className="body-lux-light">
                      MagnifAI captures your authentic voice and serene pauses to generate high-engagement assets. Broadcast your discourses, reels, and whatsapp blessings in 12+ dialects simultaneously—scaling your reach, multiplying followers, and expanding your spiritual authority without physical fatigue.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. GROWTH SHOWCASE — Elegant 3D Perspective Aura Gallery */}
      <section className="guru-showcase-lux">
        <div className="guru-container-lux">
          <div className="showcase-header">
            <span className="tag-luxury cyan">GROWTH SHOWCASE</span>
            <h2 className="light-title-lux">Sovereign <em>Viral Avatar Synthesis</em></h2>
            <p className="body-lux-light">
              Experience the majestic realization of your digital presence. We capture your authentic vocal timbre and serene pauses in a single, high-fidelity secure visual asset.
            </p>
          </div>

          <div className="single-gilded-showcase-container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="gilded-canvas-frame"
            >
              <div className="canvas-inner-border" />
              <img src={guru2} alt="Sovereign Synthesis Darshan" className="gilded-canvas-img" />
              <div className="canvas-caption-overlay">
                <span>SOVEREIGN AVATAR SYNTHESIS</span>
              </div>
            </motion.div>
          </div>

          <div className="showcase-metrics-grid">
            <div className="s-metric">
              <span className="s-metric-val">99.8%</span>
              <span className="s-metric-lbl">Voice Realism</span>
            </div>
            <div className="s-metric-line" />
            <div className="s-metric">
              <span className="s-metric-val">12+</span>
              <span className="s-metric-lbl">Viral Dialects</span>
            </div>
            <div className="s-metric-line" />
            <div className="s-metric">
              <span className="s-metric-val">&lt;15 Mins</span>
              <span className="s-metric-lbl">Calibration Time</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE SACRED BARRIERS — Splendid deep rose grids */}
      <section className="guru-barriers-lux">
        <div className="guru-container-lux">
          <div className="barriers-intro">
            <span className="tag-luxury violet">BEYOND PHYSICAL LIMITS</span>
            <h2 className="serif-title-lux">Dissolving <em>Growth Limitations</em></h2>
            <p className="body-lux-dark">
              Traditional broadcasting fails to capture the algorithms and viral patterns required for global fame. MagnifAI synthesizes pristine spiritual content optimized for rapid follower scaling.
            </p>
          </div>

          <div className="barriers-grid-list">
            {sacredChallenges.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.7, delay: idx * 0.1 }} 
                className="barrier-luxury-card"
              >
                <div className="card-top-glow" />
                <div className="card-index-lux">{item.id}</div>
                
                <div className="card-threat-section threat-section">
                  <span className="card-block-tag threat-tag">THE BARRIER (PROBLEM)</span>
                  <h4 className="card-subheading threat-title">{item.threat}</h4>
                  <p className="card-desc-lux threat-desc">{item.threatDesc}</p>
                </div>
                
                <div className="card-internal-divider" />
                
                <div className="card-resolution-section solution-section">
                  <span className="card-block-tag solution-tag">THE MAGNIFAI SOLUTION</span>
                  <h4 className="card-subheading solution-title">{item.solution}</h4>
                  <p className="card-desc-lux solution-desc">{item.solutionDesc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE PILLARS — High-contrast premium pink/violet cards */}
      <section className="guru-pillars-lux">
        <div className="pillars-glows-bg">
          <div className="glow-p-violet" />
          <div className="glow-p-pink" />
        </div>
        <div className="guru-container-lux">
          <div className="pillars-intro text-center">
            <span className="tag-luxury cyan">THE ARCHITECTURAL FRAMEWORK</span>
            <h2 className="light-title-lux">Sovereign Virality <em>Matrix</em></h2>
            <p className="body-lux-light max-w-720">
              Generative avatar systems and secure voice cloning engineered to multiply followers, expand global reach, and secure your digital reputation.
            </p>
          </div>

          <div className="pillars-luxury-grid">
            {pillars.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 35 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6, delay: index * 0.08 }} 
                className="pillar-luxury-card"
              >
                <div className="p-card-accent-line" />
                <div className="p-card-top">
                  <span className="p-card-num">{item.num}</span>
                  <div className="p-card-icon-box">{item.icon}</div>
                </div>
                <h4 className="p-card-heading">{item.title}</h4>
                <p className="p-card-body">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TRANSCENDENT DARSHAN CHRONOLOGY — Divided properly into spacious elegant cards (Not grouped together!) */}
      <section className="guru-chronology-lux">
        <div className="guru-container-lux">
          <div className="chronology-header">
            <span className="tag-luxury violet">WISDOM CHRONOLOGY</span>
            <h2 className="serif-title-lux">The Transcendent <em>Darshan Chronicle</em></h2>
            <p className="body-lux-dark max-w-640">
              Explore the continuous global reach of authorized, high-fidelity digital aura broadcasts across global spiritual sanctuaries.
            </p>
          </div>

          <div className="chronology-editorial-list">
            {archiveChronology.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`chronology-row-card ${idx % 2 === 1 ? 'row-reverse' : ''}`}
              >
                <div className="chronology-img-column">
                  <div className="editorial-img-frame">
                    <img src={item.img} alt={item.title} className="editorial-img" />
                    <div className="frame-overlay-glow" />
                    <div className="frame-gilded-line" />
                  </div>
                </div>

                <div className="chronology-details-column">
                  <div className="editorial-meta-box">
                    <div className="meta-badge-tag">{item.location}</div>
                    <div className="meta-dialect-tag">{item.dialect}</div>
                  </div>
                  
                  <h3 className="editorial-row-title">{item.title}</h3>
                  <p className="editorial-row-desc">{item.description}</p>
                  
                  <div className="editorial-stats-row">
                    <div className="e-stat-box">
                      <span className="e-stat-val">{item.reach}</span>
                      <span className="e-stat-lbl">Scaled Follower Impact</span>
                    </div>
                    <div className="e-stat-indicator">
                      <Zap size={14} className="flash-icon" />
                      <span>HIGH FIDELITY</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. THE DIGITAL INITIATION — Pristine 4-Column Editorial Grid (Simple & Premium) */}
      <section className="guru-initiation-chamber">
        <div className="guru-container-lux">
          <div className="initiation-header text-center">
            <span className="tag-luxury pink">THE DIGITAL INITIATION</span>
            <h2 className="light-title-lux">The Journey <em>To Global Fame</em></h2>
            <p className="body-lux-light max-w-720">
              Four strategic phases engineered to clone your authentic identity, automate video creation, and scale your reach globally without creative burnout.
            </p>
          </div>

          <div className="initiation-editorial-grid">
            {processStages.map((stage, idx) => (
              <div key={idx} className="editorial-step-card">
                <div className="editorial-step-top">
                  <span className="editorial-step-num">0{idx + 1}</span>
                  <span className="editorial-step-badge">{stage.badge}</span>
                </div>
                
                <h3 className="editorial-step-title">{stage.title}</h3>
                <div className="editorial-step-divider" />
                <p className="editorial-step-desc">{stage.desc}</p>
                
                <div className="editorial-step-detail-box">
                  <p className="editorial-step-detail">{stage.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7.5 WISDOM AMPLIFICATION MATRIX — High-Fidelity Seeker Reach Calculator */}
      <section className="guru-calculator-lux sec-dark">
        <div className="guru-container-lux">
          <div className="initiation-header text-center">
            <span className="tag-luxury pink">WISDOM AMPLIFICATION MATRIX</span>
            <h2 className="light-title-lux">Sovereign <em>Guru Reach Radar</em></h2>
            <p className="body-lux-light max-w-720">
              Configure your core target followers and dynamic weekly broadcast cadence to audit organic expansion, influencer partnerships, and global popularity in real-time.
            </p>
          </div>

          <div className="radar-grid">
            {/* Left Deck: Dynamic Calculator Inputs */}
            <div className="radar-input-deck glass-panel-dark">
              <div className="deck-glow" />
              <div className="deck-header">
                <h3>Fame Command Center</h3>
                <p>Configure reach metrics, followers, and social amplification</p>
              </div>

              {/* Slider for Devotee Base */}
              <div className="radar-slider-wrap">
                <div className="slider-meta">
                  <span className="slider-lbl">
                    <Users size={12} style={{ marginRight: '8px', color: 'var(--lux-pink-soft)' }} />
                    TARGET FOLLOWERS BASE
                  </span>
                  <span className="slider-val">{devoteeBase.toLocaleString()} Followers</span>
                </div>
                <div className="slider-control-bar">
                  <input 
                    type="range" 
                    min="50000" 
                    max="2000000" 
                    step="10000"
                    value={devoteeBase}
                    onChange={(e) => setDevoteeBase(Number(e.target.value))}
                    className="radar-input-range"
                  />
                  <div className="slider-progress" style={{ width: `${((devoteeBase - 50000) / 1950000) * 100}%` }} />
                </div>
                <div className="slider-limits">
                  <span>50K FOLLOWERS</span>
                  <span>2M GLOBAL REACH</span>
                </div>
              </div>

              {/* Selectors for Strategy */}
              <div className="radar-strategy-wrap">
                <span className="strategy-lbl">WISDOM BROADCAST FREQUENCY</span>
                <div className="strategy-buttons">
                  {amplificationStrategies.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setFlowStrategy(s.id)}
                      className={`strategy-btn ${flowStrategy === s.id ? 'active' : ''}`}
                    >
                      <span>{s.name}</span>
                    </button>
                  ))}
                </div>
                <p className="strategy-desc">{selectedStrat.desc}</p>
              </div>
            </div>

            {/* Right Deck: Dynamic Visual Matrix Outputs */}
            <div className="radar-output-deck glass-panel-dark">
              <div className="deck-glow" />
              <div className="deck-header">
                <h3>Fame & Popularity Projections</h3>
                <p>Live calculations of your global reach, popularity, and follower scaling</p>
              </div>

              <div className="radar-stats-list">
                
                {/* Total Reach (Major Hero Card) */}
                <div className="stat-hero-card">
                  <span className="hero-lbl">TOTAL PROJECTED REACH</span>
                  <div className="hero-val-wrap">
                    <span className="hero-val pink-glowing-text">
                      {totalReach.toLocaleString()}
                    </span>
                    <span className="hero-suffix">Impressions</span>
                  </div>
                </div>

                {/* Dynamic Compounding Wave Graph Visualizer (Rose Wave in Dark Deck) */}
                <div className="dynamic-graph-container pink-graph">
                  <span className="graph-label">FOLLOWER GROWTH & POPULARITY TRAJECTORY</span>
                  <div className="graph-canvas-wrap">
                    <svg className="growth-graph-svg" viewBox="0 0 310 115">
                      <defs>
                        <linearGradient id="pinkGraphFillDark" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(236, 72, 153, 0.22)" />
                          <stop offset="100%" stopColor="rgba(236, 72, 153, 0)" />
                        </linearGradient>
                        <filter id="neonPinkGlow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="2.5" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      
                      {/* Grid Lines (Horizontal) */}
                      <line x1="25" y1="20" x2="285" y2="20" stroke="rgba(236, 72, 153, 0.03)" strokeWidth="1" strokeDasharray="3 4" />
                      <line x1="25" y1="40" x2="285" y2="40" stroke="rgba(236, 72, 153, 0.05)" strokeWidth="1" strokeDasharray="3 4" />
                      <line x1="25" y1="60" x2="285" y2="60" stroke="rgba(236, 72, 153, 0.07)" strokeWidth="1" strokeDasharray="3 4" />

                      {/* Solid Y and X Axis Lines */}
                      <line x1="25" y1="10" x2="25" y2="80" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" />
                      <line x1="25" y1="80" x2="295" y2="80" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" />

                      {/* Axis Terminals (Arrows) */}
                      <path d="M 22,14 L 25,9 L 28,14" fill="none" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" />
                      <path d="M 290,77 L 295,80 L 290,83" fill="none" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" />

                      {/* Axis Titles / Milestones */}
                      <text x="18" y="23" textAnchor="end" fill="rgba(255, 255, 255, 0.4)" fontSize="7" fontFamily="monospace">MAX</text>
                      <text x="18" y="52" textAnchor="end" fill="rgba(255, 255, 255, 0.3)" fontSize="7" fontFamily="monospace">MID</text>
                      <text x="18" y="83" textAnchor="end" fill="rgba(255, 255, 255, 0.4)" fontSize="7" fontFamily="monospace">0</text>

                      {/* Premium Month Projections (Vertical Grid Lines aligned with Month points) */}
                      {graphData.points.map((pt, i) => (
                        <line 
                          key={`vgrid-${i}`} 
                          x1={pt.x} 
                          y1={15} 
                          x2={pt.x} 
                          y2={80} 
                          stroke="rgba(236, 72, 153, 0.06)" 
                          strokeWidth="1" 
                          strokeDasharray="2 3"
                        />
                      ))}
                      
                      {/* Dynamic filled area under the curve */}
                      <path 
                        d={`${graphData.path} L 285,80 L 25,80 Z`}
                        fill="url(#pinkGraphFillDark)"
                        className="graph-fill-path"
                      />
                      
                      {/* Dynamic line pathway (Glowing Pink with neon filter) */}
                      <path 
                        d={graphData.path}
                        fill="none"
                        stroke="var(--lux-pink-glow)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        filter="url(#neonPinkGlow)"
                        className="graph-stroke-path"
                      />
                      
                      {/* Nodes and Labels */}
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
                              fill={isLast ? "#FFFFFF" : "var(--lux-pink-soft)"} 
                              stroke={isLast ? "var(--lux-pink-glow)" : "#0d0806"} 
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
                      <span className="split-lbl">ORGANIC FOLLOWER REACH (85%)</span>
                      <span className="split-val">{organicReach.toLocaleString()}</span>
                    </div>
                    <div className="split-bar-wrap">
                      <div className="split-bar-fill organic-fill" style={{ width: '85%', background: 'linear-gradient(90deg, #f472b6, #ec4899)' }} />
                    </div>
                    <span className="split-desc">Direct seeker shares, viral devotee reels, and organic followers scaling</span>
                  </div>

                  <div className="split-card inorganic">
                    <div className="split-meta">
                      <span className="split-lbl">INFLUENCER & DIRECT BROADCAST (15%)</span>
                      <span className="split-val">{inorganicReach.toLocaleString()}</span>
                    </div>
                    <div className="split-bar-wrap">
                      <div className="split-bar-fill inorganic-fill" style={{ width: '15%', background: 'rgba(255, 255, 255, 0.25)' }} />
                    </div>
                    <span className="split-desc">Spiritual influencer collaborations, holiday broadcasts, and global dispatches</span>
                  </div>
                </div>

                {/* Grid for Target Audience & Video Posts */}
                <div className="details-outcome-grid">
                  <div className="outcome-item">
                    <div className="outcome-meta">
                      <span className="outcome-lbl">HIGH-ENGAGED FOLLOWER BASE (60%)</span>
                      <span className="outcome-val">{highlyEngaged.toLocaleString()} Followers</span>
                    </div>
                    <p className="outcome-desc">Dedicated daily seekers, active digital shares, and core spiritual community.</p>
                  </div>

                  <div className="outcome-item">
                    <div className="outcome-meta">
                      <span className="outcome-lbl">POPULARITY REELS VOLUME</span>
                      <span className="outcome-val">{selectedStrat.weeklyVideos} / Week ({monthlyReels} / Month)</span>
                    </div>
                    <p className="outcome-desc">Flawlessly synthesized scriptural reels and serene audio broadcasts released in your authentic voice.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS — Elegant Seekers' Voices Section (NEW) */}
      <section className="guru-testimonials-lux">
        <div className="guru-container-lux">
          <div className="testimonials-intro text-center">
            <span className="tag-luxury violet">VIRAL RESULTS & SUCCESS</span>
            <h2 className="serif-title-lux">Testimonials Of <em>Infinite Scaling</em></h2>
            <p className="body-lux-dark max-w-640">
              Read the authentic growth stories of global ashrams, spiritual organizations, and teachers who scaled their digital followers using MagnifAI.
            </p>
          </div>

          <div className="devotee-quotes-grid">
            {devoteeTestimonials.map((t, idx) => (
              <div key={idx} className="devotee-quote-card">
                <div className="quote-giant-bg">“</div>
                
                <div className="quote-card-header">
                  <span className="card-floral-icon">❀</span>
                  <span className="quote-card-index">0{idx + 1}</span>
                </div>
                
                <p className="quote-text">"{t.quote}"</p>
                <div className="quote-divider" />
                
                <div className="quote-author-profile">
                  <div className="author-avatar-glow">
                    <span>{t.initials}</span>
                  </div>
                  <div className="quote-author-meta">
                    <span className="author-name">{t.author}</span>
                    <span className="author-loc">{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION — Beautiful ivory panels */}
      <section className="guru-faq-lux">
        <div className="guru-container-lux">
          <div className="faq-layout-lux">
            <div className="faq-left-lux">
              <span className="tag-luxury violet">INQUIRIES</span>
              <h2 className="serif-title-lux">Viral Scaling & <em>IP Protection</em></h2>
              <p className="body-lux-dark">
                Addressing key questions regarding follower growth, algorithm engagement, translation quality, and brand safety parameters.
              </p>
            </div>
            <div className="faq-list-lux">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div 
                    key={index} 
                    className={`faq-luxury-card ${isOpen ? 'open' : ''}`}
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                  >
                    <div className="faq-q-bar">
                      <span className="faq-index-number">{String(index + 1).padStart(2, '0')}</span>
                      <span className="faq-question-text">{faq.q}</span>
                      <div className="faq-toggle-circle">
                        {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                      </div>
                    </div>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }} 
                          animate={{ height: 'auto', opacity: 1 }} 
                          exit={{ height: 0, opacity: 0 }} 
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} 
                          className="faq-answer-pane"
                        >
                          <p>{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA — Pure spiritual luxury call-to-action */}
      <section className="guru-cta-lux">
        <div className="cta-lux-glows">
          <div className="cta-glow-violet" />
          <div className="cta-glow-pink" />
        </div>
        <div className="cta-back-image">
          <img src={guru4} alt="" className="cta-img-blend" />
          <div className="cta-shading-overlay" />
        </div>

        <div className="guru-container-lux cta-inner-lux">
          <span className="tag-luxury cyan">EXCLUSIVE DIGITAL GROWTH AUDIT</span>
          <h2 className="cta-headline-lux">
            Scale Your <br />
            <span className="glow-text-cyan">Global Fame & Reach</span>
          </h2>
          <p className="cta-sub-lux">
            We partner with a selected circle of spiritual organizations, ashrams, and venerable teachers annually to automate content and explode reach. Secure your private fame consultation today.
          </p>
          <button onClick={() => setAuditModalOpen(true)} className="btn-rose-gold btn-large">
            <span>SECURE YOUR GROWTH AUDIT</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </section>

      <Footer />
      <AuditModal isOpen={auditModalOpen} onClose={() => setAuditModalOpen(false)} />
    </div>
  );
}
