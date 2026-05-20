import React, { useState, useEffect, useRef } from 'react';
import './Preloader.css';

export default function Preloader({ onComplete, onStartReveal }) {
  const [progress, setProgress] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isUnmounting, setIsUnmounting] = useState(false);

  const logoRef = useRef(null);

  // Smooth loading progress and high-performance rotation speed acceleration
  useEffect(() => {
    // Disable automatic browser scroll restoration on refresh and lock at top (0, 0)
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Prevent scroll while preloader is active
    document.body.style.overflow = 'hidden';

    let currentProgress = 0;
    let currentRotation = 0;
    let progressInterval;
    let rotationFrameId;

    // 1. Rotation animation loop (runs outside React state updates for buttery 60fps/120fps performance)
    const animateRotation = () => {
      // Calculate speed based on current progress using a smooth cubic acceleration curve.
      // Starts slow (0.8 degree/frame) and smoothly ramps to fast (25.0 degrees/frame) at 100% progress.
      const progressRatio = currentProgress / 100;
      const speed = 0.8 + Math.pow(progressRatio, 3.0) * 24.2;

      // Increment rotation and cap/wrap at 360
      currentRotation = (currentRotation + speed) % 360;

      if (logoRef.current) {
        logoRef.current.style.transform = `rotate(${currentRotation}deg)`;
      }

      rotationFrameId = requestAnimationFrame(animateRotation);
    };

    // Begin rotation animation loop
    rotationFrameId = requestAnimationFrame(animateRotation);

    // 2. Linear loading progress logic
    progressInterval = setInterval(() => {
      // Fluid increments that slow down slightly at key luxury thresholds for anticipation
      let increment = 1;
      if (currentProgress < 30) {
        increment = Math.floor(Math.random() * 4) + 2; // Fast start
      } else if (currentProgress < 75) {
        increment = Math.floor(Math.random() * 2) + 1; // Easing mid-section
      } else if (currentProgress < 90) {
        increment = Math.floor(Math.random() * 3) + 1; // Rapid buildup
      } else {
        increment = 1; // Precision final steps
      }

      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);

      if (currentProgress === 100) {
        clearInterval(progressInterval);
        
        // Phase 3: Trigger the luxury cosmic zoom-in transition (slow, elegant speed)
        setTimeout(() => {
          setIsZooming(true);
        }, 300);

        // Phase 4: Stagger the backdrop fade-out *only after* the logo starts massive scaling
        setTimeout(() => {
          setIsFading(true);
          if (onStartReveal) onStartReveal();
        }, 1100); // Gives time for the logo to zoom and fill the screen before showing Hero

        // Completely unmount preloader and restore scroll after the zoom transition completes
        setTimeout(() => {
          setIsUnmounting(true);
          document.body.style.overflow = 'unset';
          if (onComplete) onComplete();
        }, 2600); // Full transition sync
      }
    }, 35); // Approx. 3-4 seconds total loader run

    return () => {
      clearInterval(progressInterval);
      cancelAnimationFrame(rotationFrameId);
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  // Format progress as a double-digit luxury number (e.g. 05, 42, 99)
  const formatProgress = (val) => {
    if (val === 100) return '100';
    return val < 10 ? `0${val}` : `${val}`;
  };

  if (isUnmounting) return null;

  return (
    <div 
      className={`preloader-overlay ${isZooming ? 'zoom-active' : ''} ${
        isFading ? 'fade-active' : ''
      }`}
    >
      {/* 1. Deep Space Velvet Grid Background */}
      <div className="preloader-bg-grid" />
      <div className="preloader-bg-glow" />

      {/* 2. Luxury Cosmic Astrolabe Ring Orbits */}
      <div className="orbital-ring orbital-outer" />
      <div className="orbital-ring orbital-middle" />
      <div className="orbital-ring orbital-inner" />

      {/* 3. Spinning Logo Container & Frame */}
      <div className={`preloader-logo-wrapper ${isZooming ? 'zoom-out' : ''}`}>
        <div 
          ref={logoRef}
          className="preloader-logo-circle"
        >
          <img src="/logo.jpg" alt="MagnifAI Logo" />
        </div>
        {/* Futuristic glowing orbit dot tracking logo */}
        <div className="logo-spark-glow" />
      </div>

      {/* 4. Loader Elements (Only Centered Double-Digit Counter) */}
      <div className="preloader-footer">
        <div className="preloader-counter-container">
          <span className="preloader-counter">{formatProgress(progress)}</span>
          <span className="preloader-percent">%</span>
        </div>
      </div>

      {/* 5. Full-Length Minimalist Horizontal Loading Progress Bar at absolute screen bottom */}
      <div className="preloader-bar-track">
        <div 
          className="preloader-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
