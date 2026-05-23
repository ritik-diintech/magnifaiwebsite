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


      <AuditModal isOpen={auditModalOpen} onClose={() => setAuditModalOpen(false)} />
    </div>
  );
}
