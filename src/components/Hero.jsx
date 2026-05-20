import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import './Hero.css';

// Import our three luxury video assets
import video1 from '../assets/video/mp_ (1).mp4';
import video2 from '../assets/video/video_of_thismp_.mp4';
import video3 from '../assets/video/manTakingSelfi.mp4';

export default function Hero({ isPageReady, onBookAudit }) {
  const [activeVideo, setActiveVideo] = useState(0); // 0 = Video 1, 1 = Video 2, 2 = Video 3
  const [video2Loaded, setVideo2Loaded] = useState(false);
  const [video3Loaded, setVideo3Loaded] = useState(false);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const lastActiveVideo = useRef(null);

  // Play/control active video smoothly and sequential loading
  useEffect(() => {
    if (!isPageReady) {
      if (videoRef1.current) videoRef1.current.pause();
      if (videoRef2.current) videoRef2.current.pause();
      if (videoRef3.current) videoRef3.current.pause();
      lastActiveVideo.current = null;
      return;
    }

    if (lastActiveVideo.current === activeVideo) {
      return;
    }

    const playVideo = (ref) => {
      if (ref.current) {
        // Pause other videos
        if (ref !== videoRef1 && videoRef1.current) videoRef1.current.pause();
        if (ref !== videoRef2 && videoRef2.current) videoRef2.current.pause();
        if (ref !== videoRef3 && videoRef3.current) videoRef3.current.pause();

        ref.current.currentTime = 0;
        ref.current.play().catch(err => {
          console.log(`Video ${activeVideo + 1} play blocked:`, err);
        });
        lastActiveVideo.current = activeVideo;
      }
    };

    if (activeVideo === 0) {
      playVideo(videoRef1);
    } else if (activeVideo === 1) {
      if (video2Loaded) {
        playVideo(videoRef2);
      } else {
        setVideo2Loaded(true);
      }
    } else if (activeVideo === 2) {
      if (video3Loaded) {
        playVideo(videoRef3);
      } else {
        setVideo3Loaded(true);
      }
    }
  }, [activeVideo, isPageReady, video2Loaded, video3Loaded]);

  // Silky smooth cross-fading trigger handles
  const handleVideo1Ended = () => {
    setActiveVideo(1);
  };

  const handleVideo2Ended = () => {
    setActiveVideo(2);
  };

  const handleVideo3Ended = () => {
    setActiveVideo(0);
  };

  const tickerItems = [
    'Political Leaders',
    'Spiritual Gurus',
    'Founders & Executives',
    'Influencers & Creators',
    'AI Viral Engines',
    'Omnipresent Distribution',
    'Narrative Engineering',
    'Ambitious Brands',
  ];

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="hero" className="hero-section theme-dark">

      {/* 1. Fullscreen Triple-Video Crossfade Deck */}
      <motion.div
        className="hero-video-bg-container"
        initial={{ scale: 1.12, filter: 'brightness(0.3) blur(8px)', opacity: 0 }}
        animate={isPageReady ? { scale: 1, filter: 'brightness(1) blur(0px)', opacity: 1 } : { scale: 1.12, filter: 'brightness(0.3) blur(8px)', opacity: 0 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
      >

        {/* Video Player 1 */}
        <video
          ref={videoRef1}
          src={video1}
          className="hero-bg-video-element"
          muted
          playsInline
          preload="auto"
          style={{ opacity: activeVideo === 0 ? 0.65 : 0 }}
          onPlay={() => setVideo2Loaded(true)}
          onEnded={handleVideo1Ended}
        />

        {/* Video Player 2 */}
        <video
          ref={videoRef2}
          src={video2Loaded ? video2 : ''}
          className="hero-bg-video-element"
          muted
          playsInline
          preload={video2Loaded ? "auto" : "none"}
          style={{ opacity: activeVideo === 1 ? 0.65 : 0 }}
          onPlay={() => setVideo3Loaded(true)}
          onEnded={handleVideo2Ended}
        />

        {/* Video Player 3 */}
        <video
          ref={videoRef3}
          src={video3Loaded ? video3 : ''}
          className="hero-bg-video-element"
          muted
          playsInline
          preload={video3Loaded ? "auto" : "none"}
          style={{ opacity: activeVideo === 2 ? 0.65 : 0 }}
          onEnded={handleVideo3Ended}
        />

        {/* Dark velvet gradient shield over video to preserve text readability */}
        <div className="hero-video-overlay-shield" />
        {/* Tech-luxe grid alignment overlay */}
        <div className="hero-grid-pattern" />
      </motion.div>

      {/* 2. Centered Content Container */}
      <div className="luxury-container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-centered-content">

          {/* Custom block wrapper: centers the group, but aligns tagline left inside */}
          <div className="hero-title-wrapper-block">
            {/* Status Tagline Pill */}
            <motion.div
              initial={{ opacity: 0, y: -25, letterSpacing: '0.08em' }}
              animate={isPageReady ? { opacity: 1, y: 0, letterSpacing: '0.15em' } : { opacity: 0, y: -25, letterSpacing: '0.08em' }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="hero-status-pill"
            >
              <Sparkles size={11} />
              <span>AI-POWERED INFLUENCE AGENCY</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 65, clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={isPageReady ? { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' } : { opacity: 0, y: 65, clipPath: 'inset(100% 0% 0% 0%)' }}
              transition={{ duration: 1.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="hero-main-title"
            >
              From Unknown <br />
              <span className="gold-highlight">to Unforgettable</span>
            </motion.h1>
          </div>

          {/* Centered Original Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 40, clipPath: 'inset(100% 0% 0% 0%)' }}
            animate={isPageReady ? { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' } : { opacity: 0, y: 40, clipPath: 'inset(100% 0% 0% 0%)' }}
            transition={{ duration: 1.4, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="hero-subdescription"
          >
            We engineer absolute digital influence — building visibility, authority, and compounding audience growth for leaders and movements that refuse to remain unseen.
          </motion.p>

          {/* Centered Buttons Group */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPageReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1.4, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="hero-centered-buttons"
          >
            <a
              href="#contact"
              className="gold-btn interactive"
              onClick={(e) => {
                e.preventDefault();
                if (onBookAudit) onBookAudit();
              }}
            >
              <span>Book Audit <ArrowRight size={14} /></span>
            </a>
            <a
              href="#our-works"
              className="outline-btn interactive"
              onClick={(e) => handleScrollTo(e, '#our-works')}
            >
              Explore Our Work
            </a>
          </motion.div>

        </div>
      </div>

      {/* Infinite scrolling bottom ticker marquee */}
      <div className="hero-bottom-ticker">
        <marquee scrollamount="4" behavior="scroll" direction="left">
          <div className="hero-ticker-flex">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span key={index} className="hero-ticker-word">
                <span className="dot" /> {item}
              </span>
            ))}
          </div>
        </marquee>
      </div>

    </section>
  );
}
