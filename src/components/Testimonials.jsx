import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      initials: 'SS',
      name: 'Siddharth Sharma',
      role: 'Founding General Secretary',
      tag: 'Political Sovereignty',
      quote: "Before partnering with MagnifAI, our digital outreach was highly fragmented. Their multi-lingual speech cloning engine alone expanded our constituency connection by 10x within three months.",
      styleType: 'classic'
    },
    {
      initials: 'AN',
      name: 'Acharya Nityananda',
      role: 'Spiritual Heritage Trust',
      tag: 'Spiritual Heritage',
      quote: "To reach modern seekers, we needed ancient wisdom localized globally. MagnifAI built a customized digital archive that broadcasts our messages in four languages synchronously with absolute cultural integrity.",
      styleType: 'spiritual'
    },
    {
      initials: 'VK',
      name: 'Vikram Kalra',
      role: 'CEO, Kalra Tech Ventures',
      tag: 'Venture Capital',
      quote: "Establishing a strong personal brand was critical for our upcoming Series B funding round. MagnifAI automated my thought-leadership pipeline, giving me high authority while saving me 30+ hours a week.",
      styleType: 'venture'
    },
    {
      initials: 'MA',
      name: 'Meera Al-Mansoori',
      role: 'Director, Heritage & Cultural Arts',
      tag: 'Royal Narrative Office',
      quote: "Our mission is to pass down historic legacy to the digital generation. MagnifAI treated our archive with sacred respect, crafting multi-format content that captured the absolute depth of our culture.",
      styleType: 'royal'
    },
    {
      initials: 'RH',
      name: 'Dr. Ronald Harris',
      role: 'NYT Bestselling Philosopher & Mentor',
      tag: 'Global Thought Leader',
      quote: "In the attention economy, noise is cheap. MagnifAI did not just build reach; they engineered intellectual gravity. My ideas are now studied globally by leaders of influence.",
      styleType: 'intellect'
    },
    {
      initials: 'EP',
      name: 'Elena Petrova',
      role: 'Managing Partner, Elite Equity',
      tag: 'Executive Influence',
      quote: "The strategic leverage MagnifAI delivers is unparalleled. They turned my sparse digital footprints into a structured, highly authoritative narrative ledger that attracted top-tier founders organically.",
      styleType: 'contemporary'
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section theme-white">
      {/* Grid pattern overlay */}
      <div className="grid-overlay" style={{ opacity: 0.08 }} />

      {/* Narrative Concentric Ripples in background of title */}
      <div className="testimonials-ripples">
        <div className="t-ripple t-ripple-1" />
        <div className="t-ripple t-ripple-2" />
      </div>

      <div className="luxury-container">
        
        {/* Title */}
        <div className="luxury-title-wrap text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="section-label"
          >
            <Sparkles size={12} style={{ color: 'var(--gold-dark)' }} />
            VERIFIED AUTHORITY & REACH
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-h2"
          >
            Client <em>Testimonials</em>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="section-subtitle"
          >
            Read from leaders, creators, and spiritual directors who compressed years of brand growth into months using our systems.
          </motion.p>

          {/* Luxury Divider Ornament */}
          <div className="luxury-divider">
            <span className="divider-line" />
            <Star size={10} className="divider-icon" />
            <span className="divider-line" />
          </div>
        </div>

        {/* Testimonials List Grid - Staggered elegant cards in bespoke styles */}
        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ 
                opacity: 0, 
                y: 40,
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 1.0, 
                delay: idx * 0.12, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className={`client-quote-card card-style-${t.styleType} interactive`}
            >
              {/* Bottom decorative gold hover strip (Classic & Venture styles) */}
              {(t.styleType === 'classic' || t.styleType === 'venture') && (
                <div className="card-hover-strip" />
              )}

              {/* Contemporary style top bar indicator */}
              {t.styleType === 'contemporary' && (
                <div className="contemporary-top-bar" />
              )}

              {/* Card Header Info */}
              <div className="card-top-ledger">
                <span className="card-ledger-index">[ 0{idx + 1} ]</span>
                <span className="client-quote-tag">{t.tag}</span>
              </div>

              {/* Custom styled Quote block */}
              <div className="client-quote-body">
                {/* Custom layout quotes indicator for intellect style */}
                {t.styleType === 'intellect' && (
                  <span className="intellect-quote-emblem">“</span>
                )}

                {/* Stars row (Except for contemporary style to keep it clean) */}
                {t.styleType !== 'contemporary' && (
                  <div className="client-stars-row">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} fill={t.styleType === 'royal' ? "var(--gold)" : "var(--gold-dark)"} stroke="none" className="star-icon" />
                    ))}
                  </div>
                )}

                <p className="client-quote-text">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="client-author-info">
                <div className="client-author-avatar-wrap">
                  <div className="avatar-ring-outer" />
                  <div className="client-author-avatar">
                    {t.initials}
                  </div>
                </div>
                <div className="client-author-texts">
                  <span className="client-author-name">
                    {t.name}
                  </span>
                  <span className="client-author-role">
                    {t.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
