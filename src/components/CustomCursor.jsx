import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setHidden(false);
    };

    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    // High-performance event delegation: detect hovers globally without query loops or duplicate leaks!
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isClickable = target.closest(
        'a, button, input, select, textarea, [role="button"], .interactive-card, .service-card, .client-card, .process-step, .interactive, .process-tab-btn, .problems-accordion-row'
      );

      setHovered(!!isClickable);
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (hidden) return null;

  return (
    <motion.div
      className={`custom-cursor-glow ${hovered ? 'hovered' : ''}`}
      style={{
        x: ringX,
        y: ringY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    />
  );
}
