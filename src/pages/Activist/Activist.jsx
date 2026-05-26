import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe, Shield, Activity, Eye, Lock, CheckCircle2, ChevronRight, Award,
  Users, Mic, Zap, Compass, Feather, HeartHandshake, BookOpen, ArrowRight,
  Plus, Minus, Play, Pause, Landmark, Sparkles, MessageSquare, Volume2
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AuditModal from '../../components/AuditModal';
import CustomCursor from '../../components/CustomCursor';
import './Activist.css';

// Import high-fidelity local assets for the activist archetype
import activistVideo from '../../assets/otherPagesAssests/activistVideo.mp4';
import activistCleaning from '../../assets/otherPagesAssests/activistCleaning.png';
import activistIndians from '../../assets/otherPagesAssests/Man_activist_with_Indians_202605210735.jpeg';
import activistProfess from '../../assets/otherPagesAssests/Man_activist_with_Indian_profess…_202605210736.jpeg';
import activistSpeech from '../../assets/otherPagesAssests/Man_as_activist_tells_people_202605221317.jpeg';
import activistWarming from '../../assets/otherPagesAssests/Man_with_banner_about_warming_202605221320.jpeg';
import activistTrees from '../../assets/otherPagesAssests/Man_with_banner_planting_trees_202605221319.jpeg';
import savePlanetActivis from '../../assets/otherPagesAssests/savePlanetActivis.jpeg';
import activistGroupSeat from '../../assets/otherPagesAssests/Man_seat_group_people_tell_202605222120.jpeg';

export default function ActivistPage() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [supporterBase, setSupporterBase] = useState(150000);
  const [campaignIntensity, setCampaignIntensity] = useState('rapid');
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

  // 1. Interactive Reach & Scale Radar calculations
  const strategies = [
    { id: 'advocacy', name: 'ORGANIC GROWTH BLUEPRINT', multiplier: 3.2, weeklyVideos: 3, desc: 'Optimized organic short-form videos and native WhatsApp dispatches to drive steady follower growth and local influencer shares.' },
    { id: 'rapid', name: 'MULTI-CHANNEL AD CAMPAIGNS', multiplier: 6.8, weeklyVideos: 7, desc: 'Daily automated native ads, regional dialect translation, and large-scale targeted digital ad campaigns to rapidly scale follower count.' },
    { id: 'saturation', name: 'HYPER-VIRAL SATURATION', multiplier: 11.8, weeklyVideos: 15, desc: 'Complete visual saturation across all networks, automated influencer outreach pitches, and massive global advertisement budgets.' }
  ];

  const selectedStrat = strategies.find(s => s.id === campaignIntensity) || strategies[1];
  const totalReach = Math.round(supporterBase * selectedStrat.multiplier);
  const organicReach = Math.round(totalReach * 0.80);
  const adsReach = Math.round(totalReach * 0.20);
  const engagedSupporters = Math.round(supporterBase * 0.55);
  const monthlyVideos = selectedStrat.weeklyVideos * 4;

  const getActivistGraphPath = () => {
    const ratio = (supporterBase - 10000) / 990000;
    const startX = 25;
    const endX = 285;
    const startY = 80;
    const peakY = 80 - ratio * 55;

    const pathPoints = [];
    const steps = 20;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const x = startX + t * (endX - startX);
      const compoundingFactor = Math.pow(t, 1.6); // smooth curve
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
      const compoundingFactor = Math.pow(t, 1.6);
      const y = startY - (startY - peakY) * compoundingFactor;
      return {
        x: Math.round(x * 10) / 10,
        y: Math.round(y * 10) / 10,
        label: `W${m}`
      };
    });

    return { path, points };
  };

  const graphData = getActivistGraphPath();

  // 2. Activist Systemic Challenges & Solutions Data
  const systemicBarriers = [
    {
      id: "01",
      barrier: "Low Follower Growth & Organic Stagnation",
      barrierDesc: "Advocacy reformists and grassroots social campaigns struggle to grow organic follower bases. Without professional viral hooks and optimized multi-platform formatting, your important message remains hidden in social media algorithms, making it impossible to gain public popularity.",
      solution: "Massive Follower Growth Accelerator",
      solutionDesc: "MagnifAI engineers custom high-fidelity organic video campaigns designed for rapid sharing. Explode your follower counts, gain public popularity, and command social media feeds instantly."
    },
    {
      id: "02",
      barrier: "Restricted Ad Reach & Low Campaign Scales",
      barrierDesc: "Running small-scale Facebook, Instagram, or YouTube ads results in high ad spend with minimal localized results. Traditional reformists lack the digital architecture to execute massive, highly coordinated digital advertising campaigns.",
      solution: "Elite Large-Scale Digital Ad Campaigns",
      solutionDesc: "Our platform creates high-performance advertisement variations mapped to regional demographics. Launch large-scale targeted digital ad campaigns with visual authority, maximizing reach and campaign scale at minimal cost."
    },
    {
      id: "03",
      barrier: "Influencer Isolation & Restricted Networks",
      barrierDesc: "Reaching out to top-tier global influencers or media celebrities to co-sign or amplify your campaign is extremely difficult. Most change-makers remain isolated within small local circles, unable to tap into established mass-audiences.",
      solution: "Premium Influencer Bridges",
      solutionDesc: "We synthesize high-fidelity co-branded visual assets and personalized video pitches tailored for key media influencers. Seamlessly establish powerful strategic partnerships that rocket your movement to viral popularity."
    },
    {
      id: "04",
      barrier: "Brand Safety & Reputational Sabotage",
      barrierDesc: "As you become famous and gain massive reach, opposing corporate lobbies or online trolls will try to sabotage your reputation using negative digital ads and altered deepfake statements.",
      solution: "Sovereign Fame Vault Shield",
      solutionDesc: "Secure your virtual persona, voice biometric keys, and official avatars under cryptographic identity locks. No digital ads, influencer collabs, or campaign videos can ever launch without direct authorization."
    }
  ];

  // 3. Core Architectural Framework Deployed Pillars
  const architecturalPillars = [
    { num: "01", icon: <Compass className="emerald-icon" />, title: "Voice Timbre Calibration", desc: "Clones your precise, warm convincing voice and micro-inflections to produce high-impact visual assets engineered to build immediate follower trust." },
    { num: "02", icon: <Globe className="emerald-icon" />, title: "Large-Scale Ad Architect", desc: "Instantly translate, perfectly lip-sync, and distribute targeted digital ads globally across 15+ sub-regional dialects for absolute conversion." },
    { num: "03", icon: <Shield className="emerald-icon" />, title: "Cryptographic Identity Vault", desc: "Military-grade cryptographic encryption that secures your virtual image, protecting your growing popularity from deepfake manipulation." },
    { num: "04", icon: <Users className="emerald-icon" />, title: "Influencer Outreach Bridge", desc: "Personalized visual pitches and co-branded content assets engineered to secure major influencer endorsements and media celebrity shares." },
    { num: "05", icon: <Feather className="emerald-icon" />, title: "Follower & Viral Multiplier", desc: "Convert written proposals and declarations into studio-quality short-form reels optimized to trigger rapid organic subscriber growth." },
    { num: "06", icon: <BookOpen className="emerald-icon" />, title: "Omnichannel Campaign Sync", desc: "Direct auto-publication across Spotify, YouTube, WhatsApp, and Instagram to saturate your target demographics simultaneously." }
  ];

  // 4. Deployed Digital Campaign Chronology (Case Studies / Portfolio Showcase)
  const caseChronology = [
    {
      img: activistCleaning,
      title: "Cleanup Campaign Digital Ad Drive",
      location: "Global Channels",
      reach: "25M+ Targeted Ad Views",
      focus: "Large-Scale Ad Campaign",
      description: "Successfully scaled a global cleanup movement's follower base by running multi-regional, highly optimized video ad campaigns with native dialect voice clones across three continents."
    },
    {
      img: activistTrees,
      title: "Eco-Alliance Influencer Bridge",
      location: "Social Networks",
      reach: "15M+ Follower Growth Surge",
      focus: "Influencer Integration",
      description: "Leveraged neural voice timbre cloning to synthesize hyper-personalized outreach videos for top-tier environmental celebrities and global media influencers, establishing co-signed partnerships that surged organic subscriptions by 300%."
    },
    {
      img: activistWarming,
      title: "Global Warming Protest Campaign",
      location: "Global Rallies",
      reach: "45M+ Video Impressions",
      focus: "Protest & Rally Ads Campaign",
      description: "Engineered high-performance targeted ad sets and viral organic reels for a major global warming protest. Our automated video variants drove massive public awareness, tripling ground-level rally turnout and follower counts."
    },
    {
      img: activistSpeech,
      title: "Sovereign Human Rights Rally",
      location: "Meta & YouTube Ads",
      reach: "12M+ Followers Gained",
      focus: "Influencer & Ad Amplification",
      description: "Launched a digital campaign and targeted ads to scale participation in human rights protest rallies. Cloned the lead spokesperson's warm voice to customize video pitches for top-tier global influencers, building rapid organic popularity."
    }
  ];

  // 5. The Campaign Initiation Chambers (Process Flow)
  const initiationPhases = [
    { roman: "I", badge: "CALIBRATION", title: "15-Minute Narrative Mapping", desc: "A secure, comfortable calibration session where we record your speech pacing, vocal cadence, and authentic tone of conviction.", detail: "Conducted in absolute privacy. No complicated recording gear or studio exhaustion required." },
    { roman: "II", badge: "TIMBRE CLONING", title: "Urgency Resonance Synthesis", desc: "Our neural model calibrates your clone, capturing the genuine emotional weight and authority in your voice rather than flat, synthetic text-to-speech.", detail: "Creates pristine voice models built to establish immediate credibility and drive supporters to action." },
    { roman: "III", badge: "DIALECT ADAPTATION", title: "Multilingual Solidarity Scale", desc: "Your authentic voice clone is mapped to 15+ major regional and global dialects, making your message fully localized and viral in minutes.", detail: "Instantly bridges cultural and language divides in urban, rural, and international sectors." },
    { roman: "IV", badge: "VAULT ENVELOPE", title: "Biometric Launch Protection", desc: "All generative models are sealed in your private sovereign vault. Campaign releases are triggered exclusively via multi-party cryptographic authorization keys.", detail: "Ensures complete control of your digital identity, voice, and campaign integrity at all times." }
  ];

  // 6. Digital Growth Testimonials
  const testimonials = [
    {
      initials: "RM",
      quote: "MagnifAI completely transformed our digital presence. Scaling our environmental videos with our founder's authentic voice and running highly targeted regional ads doubled our global donations and brought in 3 Million+ new followers in less than six months.",
      author: "Radhika Mehta",
      location: "Global Strategy Director, EarthRise Alliance"
    },
    {
      initials: "KM",
      quote: "Reaching out to mainstream celebrities was a struggle. MagnifAI synthesized high-fidelity co-branded pitch videos addressed directly to key media influencers, securing three major brand ambassadors who rocketed our public popularity.",
      author: "Klaus Mayer",
      location: "Executive Trustee, GreenSphere Trust"
    },
    {
      initials: "AS",
      quote: "We were struggling with organic shadowbans and stagnation. MagnifAI built our digital campaign architecture, launched large-scale targeted ads, and scaled our follower base by 800%, giving us complete mainstream dominance.",
      author: "Aditi Singh",
      location: "National Campaigns Officer, Jan Shakti Council"
    }
  ];

  // 7. Dialogue Inquiries (FAQs)
  const faqs = [
    { q: "HOW DOES DYNAMIC CLONING MULTIPLY MY FOLLOWERS AND PUBLIC POPULARITY?", a: "MagnifAI clones your exact warm voice timbre and persuasive rhythm. Translating your statements into 15+ dialects lets you reach global and sub-regional demographics natively, driving massive organic sharing and exponential follower scaling." },
    { q: "WHICH DIGITAL AD CHANNELS AND CAMPAIGNS DO YOU SATURATE?", a: "We optimize and execute large-scale targeted campaigns across Meta Ads, YouTube, TikTok, Spotify, and WhatsApp. High-fidelity automated video variants bypass ad fatigue and trigger maximum algorithm placement." },
    { q: "HOW DO WE BRIDGE TO TOP-TIER CELEBRITY INFLUENCERS?", a: "We produce hyper-customized, studio-grade co-branded video pitches addressed directly to targeted influencers. Hearing your authentic cloned voice pitching a custom collaboration establishes immediate trust, securing high-impact endorsements." },
    { q: "CAN MAGNIFAI EXECUTE LARGE-SCALE TARGETED DIGITAL ADS AUTOMATICALLY?", a: "Yes. Our engine automates the scripting, translation, lip-syncing, and performance testing of hundreds of local ad variations. This enables you to deploy massive advertising campaigns globally at a fraction of standard agency costs." },
    { q: "HOW DOES THE VAULT SECURE MY GROWING DIGITAL PERSONAL BRAND?", a: "We seal your visual avatars, verified accounts, and voice biometrics in your encrypted, closed-loop Biometric Identity Vault. No digital ad, influencer pitch, or statement can ever be launched without your biometric authorization, completely preventing deepfakes." }
  ];

  return (
    <div className="page-activist-luxury">
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar isPageReady={true} onBookAudit={() => setAuditModalOpen(true)} />

      {/* SECTION 1: HERO — Sleek Forest & Glowing Jade Cosmic Aura */}
      <section className="activist-hero-lux">
        <div className="activist-hero-video-bg">
          <video
            src={activistVideo}
            autoPlay
            loop
            muted
            playsInline
            ref={videoRef}
            className="hero-video-el"
          />
          <div className="hero-video-overlay" />
        </div>

        <div className="activist-hero-glows">
          <div className="glow-emerald" />
          <div className="glow-mint" />
          <div className="glow-gold" />
        </div>

        <div className="activist-container-lux hero-content-lux">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="hero-text-block"
          >
            <div className="serene-eyebrow">
              <Sparkles className="eyebrow-spark" size={12} />
              <span>SYSTEMIC AMPLIFICATION</span>
            </div>

            <h1 className="hero-title-lux">
              Scale Your <span className="glow-text-mint">Cause</span> <em>Sovereignly</em>
            </h1>

            <p className="hero-sub-lux">
              We do not do the physical activist work ourselves. We make those who do famous, popular, and globally influential. Explode your reach, scale your follower base, run massive targeted ad campaigns, and bridge directly to top-tier media influencers.
            </p>

            <div className="hero-ctas-lux">
              <button onClick={() => setAuditModalOpen(true)} className="btn-emerald-gold">
                <span>SCALE MOVEMENT</span>
                <ArrowRight size={14} />
              </button>
              <button onClick={toggleVideo} className="outline-btn-emerald">
                {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                <span>{isPlaying ? 'PAUSE AMBIENCE' : 'PLAY AMBIENCE'}</span>
              </button>
            </div>

            <div className="hero-simple-stats-row">
              <div className="simple-stat-box">
                <span className="simple-stat-num">10X+</span>
                <span className="simple-stat-lbl">Grassroots Reach</span>
              </div>
              <div className="simple-stat-divider" />
              <div className="simple-stat-box">
                <span className="simple-stat-num">15+</span>
                <span className="simple-stat-lbl">Regional Dialects</span>
              </div>
              <div className="simple-stat-divider" />
              <div className="simple-stat-box">
                <span className="simple-stat-num">100%</span>
                <span className="simple-stat-lbl">Identity Vault</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="scroll-indicator">
          <span className="scroll-line" />
          <span className="scroll-txt">SCROLL TO ASCEND</span>
        </div>
      </section>

      {/* SECTION 2: PHILOSOPHY — Majestic Split-Visual Portal */}
      <section className="activist-philosophy-lux">
        <div className="mandala-bg-rotating" />
        <div className="activist-container-lux">
          <div className="temple-darshan-gate">
            {/* Left Column: Bold conviction, narrative details */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="temple-arch-gate left-gate"
            >
              <div className="arch-inner-container">
                <span className="tag-luxury mint">SYSTEMIC CAMPAIGN DIRECTIVE</span>
                <h2 className="serif-title-lux">Reach Millions <br /><em>On Every Screen.</em></h2>

                <blockquote className="lux-blockquote">
                  "Ideas belong to the world, but impact belongs to the campaigns. In the digital epoch, systemic change requires pristine visual omnipresence to scale global conviction."
                </blockquote>

                <div className="sacred-arch-emblem">
                  <div className="emblem-circle" />
                  <div className="emblem-leaf" />
                </div>
              </div>
            </motion.div>

            {/* Right Column: Dynamic high-end glass image portal */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="temple-arch-gate right-gate"
            >
              <div className="arch-inner-container image-arch-container">
                <img src={savePlanetActivis} alt="Save Planet Activist Rally" className="temple-darshan-img" />
              </div>
              <div className="temple-content-below">
                <span className="overlay-badge">DECADENT NARRATIVE LEVERAGE</span>
                <p className="body-lux-light">
                  Reform leaders and advocates do not need to exhaustively travel to physical venues. Large-scale digital campaigns and targeted ads are the modern frontier of massive global change.
                </p>
                <p className="body-lux-light">
                  MagnifAI maps your authentic voice and conviction to produce high-impact, studio-quality videos. Release digital campaign assets, run high-converting ad sets, and collaborate with popular influencers in 15+ dialects natively—scaling your follower base and making your movement highly popular without physical burnout.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: VISUAL SHOWCASE — Gilded Gallery & Raw Stat Impact */}
      <section className="activist-showcase-lux">
        <div className="activist-container-lux">
          <div className="showcase-header">
            <span className="tag-luxury mint">SOVEREIGN ACTION CAMPAIGNS</span>
            <h2 className="light-title-lux">Campaigns Deployed <em>With Precision.</em></h2>
          </div>

          <div className="single-gilded-showcase-container">
            <div className="gilded-canvas-frame">
              <div className="canvas-inner-border" />
              <img src={activistGroupSeat} alt="Activist Group Collaboration" className="gilded-canvas-img" />
            </div>
          </div>

          <div className="showcase-metrics-grid">
            <div className="s-metric">
              <span className="s-metric-val">15M+</span>
              <span className="s-metric-lbl">Follower Growth Surge</span>
            </div>
            <div className="s-metric-line" />
            <div className="s-metric">
              <span className="s-metric-val">45M+</span>
              <span className="s-metric-lbl">Video Impressions</span>
            </div>
            <div className="s-metric-line" />
            <div className="s-metric">
              <span className="s-metric-val">25M+</span>
              <span className="s-metric-lbl">Targeted Ad Views</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: BARRIERS SECTION — High Contrast Systemic Challenges & Solutions */}
      <section className="activist-barriers-lux">
        <div className="activist-container-lux">
          <div className="barriers-intro">
            <span className="tag-luxury violet">THE FRONTIER OF CONVICTION</span>
            <h2 className="serif-title-lux">Systemic Barriers &amp; <em>High-Fidelity Catalysts.</em></h2>
            <p className="body-lux-dark">
              Grassroots social movements often fail due to standard digital limitations. We provide elite solutions to bypass algorithms and maximize campaign impact.
            </p>
          </div>

          <div className="barriers-grid-list">
            {systemicBarriers.map((item) => (
              <div key={item.id} className="barrier-luxury-card">
                <div className="card-top-glow" />
                <div className="card-index-lux">{item.id}</div>
                
                <div className="barrier-block">
                  <span className="card-block-tag threat-tag">SYSTEMIC BARRIER</span>
                  <h3 className="card-subheading">{item.barrier}</h3>
                  <p className="card-desc-lux">{item.barrierDesc}</p>
                </div>

                <div className="card-internal-divider" />

                <div className="solution-block">
                  <span className="card-block-tag solution-tag">MAGNIFAI SOLUTION</span>
                  <h3 className="card-subheading">{item.solution}</h3>
                  <p className="card-desc-lux">{item.solutionDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PILLARS SECTION — Core Architectural Framework */}
      <section className="activist-pillars-lux">
        <div className="pillars-glows-bg">
          <div className="glow-p-emerald" />
          <div className="glow-p-mint" />
        </div>

        <div className="activist-container-lux">
          <div className="pillars-intro max-w-720">
            <span className="tag-luxury pink">SOVEREIGN ARCHITECTURAL PILLARS</span>
            <h2 className="serif-title-lux">High-Performance <em>Advocacy Engine.</em></h2>
            <p className="body-lux-light">
              MagnifAI deploys a multi-dimensional, secure ecosystem specifically built for activist scale, preserving identity sovereignty while maximizing public reach.
            </p>
          </div>

          <div className="pillars-luxury-grid">
            {architecturalPillars.map((pillar) => (
              <div key={pillar.num} className="pillar-luxury-card">
                <div className="p-card-accent-line" />
                <div className="p-card-top">
                  <span className="p-card-num">{pillar.num}</span>
                  <div className="p-card-icon-box">
                    {pillar.icon}
                  </div>
                </div>
                <h3 className="p-card-heading">{pillar.title}</h3>
                <p className="p-card-body">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CHRONOLOGY SECTION — Deployed Movement Chronology */}
      <section className="activist-chronology-lux">
        <div className="activist-container-lux">
          <div className="chronology-header max-w-640">
            <span className="tag-luxury mint">DEPLOYED MOVEMENT CHRONOLOGY</span>
            <h2 className="serif-title-lux">Sovereign <em>Campaign Case Studies.</em></h2>
            <p className="body-lux-light">
              Analyze how our high-converting video syndication and targeted ad models rocketed grassroots movements to mainstream popularity.
            </p>
          </div>

          <div className="chronology-editorial-list">
            {caseChronology.map((caseItem, idx) => (
              <div key={idx} className={`chronology-row-card ${idx % 2 === 1 ? 'row-reverse' : ''}`}>
                <div className="chronology-img-column">
                  <div className="editorial-img-frame">
                    <img src={caseItem.img} alt={caseItem.title} className="editorial-img" />
                    <div className="frame-overlay-glow" />
                    <div className="frame-gilded-line" />
                  </div>
                </div>

                <div className="chronology-details-column">
                  <div className="editorial-meta-box">
                    <span className="meta-badge-tag">{caseItem.focus}</span>
                    <span className="meta-dialect-tag">{caseItem.location}</span>
                  </div>
                  <h3 className="editorial-row-title">{caseItem.title}</h3>
                  <p className="editorial-row-desc">{caseItem.description}</p>
                  
                  <div className="editorial-stats-row">
                    <div className="e-stat-box">
                      <span className="e-stat-val">{caseItem.reach}</span>
                      <span className="e-stat-lbl">Projected Campaign Impact</span>
                    </div>
                    <div className="e-stat-indicator">
                      <Zap size={14} className="flash-icon" />
                      <span>HIGH IMPACT SCALE</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: INITIATION SECTION — Chamber Stages Process */}
      <section className="activist-initiation-chamber">
        <div className="activist-container-lux">
          <div className="initiation-header max-w-640">
            <span className="tag-luxury gold">CAMPAIGN INITIATION PROTOCOL</span>
            <h2 className="serif-title-lux">Movement <em>Chamber Stages.</em></h2>
            <p className="body-lux-light">
              Our structured workflow transforms authentic conviction into a global voice clones pipeline in four stages.
            </p>
          </div>

          <div className="initiation-editorial-grid">
            {initiationPhases.map((phase) => (
              <div key={phase.roman} className="editorial-step-card">
                <div className="editorial-step-top">
                  <span className="editorial-step-num">{phase.roman}</span>
                  <span className="editorial-step-badge">{phase.badge}</span>
                </div>
                <h3 className="editorial-step-title">{phase.title}</h3>
                <div className="editorial-step-divider" />
                <p className="editorial-step-desc">{phase.desc}</p>
                
                <div className="editorial-step-detail-box">
                  <p className="editorial-step-detail">{phase.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7.5: REACH & SCALE RADAR CALCULATOR — Interactive Projections Deck */}
      <section className="activist-calculator-lux sec-dark">
        <div className="activist-container-lux">
          <div className="initiation-header max-w-640">
            <span className="tag-luxury mint">CAMPAIGN REACH SIMULATOR</span>
            <h2 className="serif-title-lux">Reach &amp; <em>Scale Radar.</em></h2>
            <p className="body-lux-light">
              Configure your movement's initial supporter base and dynamic campaign intensity to view real-time projections.
            </p>
          </div>

          <div className="radar-grid">
            {/* Input Deck */}
            <div className="radar-input-deck glass-panel-dark">
              <div className="deck-glow" />
              <div className="deck-header">
                <h3>Campaign Command Center</h3>
                <p>Configure initial core community and video ad intensity</p>
              </div>

              {/* Slider */}
              <div className="radar-slider-wrap">
                <div className="slider-meta">
                  <span className="slider-lbl">
                    <Activity size={12} style={{ marginRight: '8px', color: 'var(--lux-mint-glow)' }} />
                    INITIAL SUPPORTER BASE
                  </span>
                  <span className="slider-val">{supporterBase.toLocaleString()} Members</span>
                </div>
                <div className="slider-control-bar">
                  <input
                    type="range"
                    min="10000"
                    max="1000000"
                    step="10000"
                    value={supporterBase}
                    onChange={(e) => setSupporterBase(Number(e.target.value))}
                    className="radar-input-range"
                  />
                  <div className="slider-progress" style={{ width: `${((supporterBase - 10000) / 990000) * 100}%` }} />
                </div>
                <div className="slider-limits">
                  <span>10,000 SEED</span>
                  <span>1,000,000 CRITICAL MASS</span>
                </div>
              </div>

              {/* Strategy Selector */}
              <div className="radar-strategy-wrap">
                <span className="strategy-lbl">CAMPAIGN INTENSITY PROTOCOL</span>
                <div className="strategy-buttons">
                  {strategies.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setCampaignIntensity(s.id)}
                      className={`strategy-btn ${campaignIntensity === s.id ? 'active' : ''}`}
                    >
                      <span>{s.name}</span>
                    </button>
                  ))}
                </div>
                <p className="strategy-desc">{selectedStrat.desc}</p>
              </div>
            </div>

            {/* Output Deck */}
            <div className="radar-output-deck glass-panel-dark">
              <div className="deck-glow" />
              <div className="deck-header">
                <h3>Outreach &amp; Scaling Projections</h3>
                <p>Live compiled reach calculations and growth graphs</p>
              </div>

              <div className="radar-stats-list">
                {/* Hero Reach Card */}
                <div className="stat-hero-card">
                  <span className="hero-lbl">PROJECTED MOVEMENT REACH</span>
                  <div className="hero-val-wrap">
                    <span className="hero-val mint-glowing-text">
                      {totalReach.toLocaleString()}
                    </span>
                    <span className="hero-suffix">Total Active Reach</span>
                  </div>
                </div>

                {/* SVG neon curve */}
                <div className="dynamic-graph-container">
                  <span className="graph-label">DYNAMIC MOVEMENT GROWTH TRAJECTORY (12 WEEKS)</span>
                  <div className="graph-canvas-wrap">
                    <svg className="growth-graph-svg" viewBox="0 0 310 115">
                      <defs>
                        <linearGradient id="jadeGraphFillDark" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(52, 211, 153, 0.22)" />
                          <stop offset="100%" stopColor="rgba(52, 211, 153, 0)" />
                        </linearGradient>
                        <filter id="neonJadeGlow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="2.5" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Horizontal Dotted Grids */}
                      <line x1="25" y1="20" x2="285" y2="20" stroke="rgba(52, 211, 153, 0.03)" strokeWidth="1" strokeDasharray="3 4" />
                      <line x1="25" y1="40" x2="285" y2="40" stroke="rgba(52, 211, 153, 0.05)" strokeWidth="1" strokeDasharray="3 4" />
                      <line x1="25" y1="60" x2="285" y2="60" stroke="rgba(52, 211, 153, 0.07)" strokeWidth="1" strokeDasharray="3 4" />

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
                          key={`avg-${i}`}
                          x1={pt.x}
                          y1={15}
                          x2={pt.x}
                          y2={80}
                          stroke="rgba(52, 211, 153, 0.05)"
                          strokeWidth="1"
                          strokeDasharray="2 3"
                        />
                      ))}

                      {/* Fill Area */}
                      <path
                        d={`${graphData.path} L 285,80 L 25,80 Z`}
                        fill="url(#jadeGraphFillDark)"
                      />

                      {/* Stroke Path */}
                      <path
                        d={graphData.path}
                        fill="none"
                        stroke="var(--lux-mint-glow)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        filter="url(#neonJadeGlow)"
                        className="graph-stroke-path"
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
                              fill={isLast ? "#FFFFFF" : "var(--lux-mint-glow)"}
                              stroke={isLast ? "var(--lux-mint-glow)" : "#020705"}
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

                {/* splits grid */}
                <div className="reach-split-grid">
                  <div className="split-card organic">
                    <div className="split-meta">
                      <span className="split-lbl">ORGANIC REACH (80%)</span>
                      <span className="split-val">{organicReach.toLocaleString()}</span>
                    </div>
                    <div className="split-bar-wrap">
                      <div className="split-bar-fill" style={{ width: '80%', background: 'var(--lux-mint-glow)' }} />
                    </div>
                    <span className="split-desc">Viral short-form content, sub-regional translated feeds, and organic shares.</span>
                  </div>

                  <div className="split-card inorganic">
                    <div className="split-meta">
                      <span className="split-lbl">TARGETED PAID ADS (20%)</span>
                      <span className="split-val">{adsReach.toLocaleString()}</span>
                    </div>
                    <div className="split-bar-wrap">
                      <div className="split-bar-fill" style={{ width: '20%', background: 'var(--lux-gold)' }} />
                    </div>
                    <span className="split-desc">Localized digital campaign ad pushes and automated influencer collab outreach.</span>
                  </div>
                </div>

                {/* Outcome Grid */}
                <div className="details-outcome-grid">
                  <div className="outcome-item">
                    <div className="outcome-meta">
                      <span className="outcome-lbl">PROJECTED ACTIVE ADVOCATES</span>
                      <span className="outcome-val">{engagedSupporters.toLocaleString()} Advocates</span>
                    </div>
                    <p className="outcome-desc">High-affinity change makers directly participating in campaigns and sharing declared updates.</p>
                  </div>

                  <div className="outcome-item">
                    <div className="outcome-meta">
                      <span className="outcome-lbl">STUDIO SHORTS &amp; AD OUTPUT</span>
                      <span className="outcome-val">{selectedStrat.weeklyVideos} / Week ({monthlyVideos} / Month)</span>
                    </div>
                    <p className="outcome-desc">Automated visual content releases fully produced inside your closed-loop Biometric Identity Vault.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: DEVOTEE TESTIMONIALS — Digital Growth Testimonials */}
      <section className="activist-testimonials-lux">
        <div className="activist-container-lux">
          <div className="testimonials-intro max-w-640">
            <span className="tag-luxury mint">ADVOCATE RESONANCE TESTIMONIALS</span>
            <h2 className="serif-title-lux">Campaign <em>Solidarity.</em></h2>
            <p className="body-lux-light">
              Discover how leading change makers and global trust directories expanded their reach and command absolute mainstream authority.
            </p>
          </div>

          <div className="devotee-quotes-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="devotee-quote-card">
                <div className="quote-giant-bg">“</div>
                <div className="quote-card-header">
                  <Award className="card-floral-icon" size={16} />
                  <span className="quote-card-index">0{idx + 1}</span>
                </div>
                <p className="quote-text">"{t.quote}"</p>
                <div className="quote-divider" />
                <div className="quote-author-profile">
                  <div className="author-avatar-glow">{t.initials}</div>
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

      {/* SECTION 9: DIALOGUE INQUIRIES — FAQ Accordion Section */}
      <section className="activist-faq-lux">
        <div className="activist-container-lux">
          <div className="faq-layout-lux">
            <div className="faq-left-lux">
              <span className="tag-luxury gold">SYSTEMIC KNOWLEDGE DECK</span>
              <h2 className="serif-title-lux">Dialogue &amp; <em>Inquiries.</em></h2>
              <p className="body-lux-light">
                Common inquiries regarding organic growth calibration, translation safety, sovereign watermarking, and biometric access codes.
              </p>
            </div>

            <div className="faq-list-lux">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`faq-luxury-card ${isOpen ? 'open' : ''}`}
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  >
                    <div className="faq-q-bar">
                      <span className="faq-index-number">0{idx + 1}</span>
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

      {/* SECTION 10: SOVEREIGN INVITATION — CTA Section */}
      <section className="activist-cta-lux">
        <div className="cta-lux-glows">
          <div className="cta-glow-emerald" />
          <div className="cta-glow-mint" />
        </div>

        <div className="cta-back-image">
          <img src={savePlanetActivis} alt="Movement Blend Background" className="cta-img-blend" />
          <div className="cta-shading-overlay" />
        </div>

        <div className="cta-inner-lux">
          <h2 className="cta-headline-lux">
            Amplify Your <span className="glow-text-mint">Cause</span> <em>Today.</em>
          </h2>
          <p className="cta-sub-lux">
            Establish absolute visual authority. Duplicate your voice clones, launch massive targeted digital ad campaigns, and engage global influencer networks biometrically.
          </p>
          <button onClick={() => setAuditModalOpen(true)} className="btn-emerald-gold btn-large">
            <span>REQUEST MOVEMENT CALIBRATION</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </section>

      <Footer />
      <AuditModal isOpen={auditModalOpen} onClose={() => setAuditModalOpen(false)} />
    </div>
  );
}
