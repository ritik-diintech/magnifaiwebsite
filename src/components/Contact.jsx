import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Check, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    niche: 'founder',
    currentReach: 'under-10k',
    challenge: ''
  });

  const [loading, setLoading] = useState(false);
  const [statusText, setStatusText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) {
      alert("Please provide your name and contact details.");
      return;
    }
    setLoading(true);

    // Advanced diagnostic sequence
    const loadingStates = [
      "Establishing secure audiential link...",
      "Cloning digital footprint parameters...",
      "Running predictive trend diagnostics...",
      "Securing calendar slot..."
    ];

    let i = 0;
    setStatusText(loadingStates[0]);
    const timer = setInterval(() => {
      i++;
      if (i < loadingStates.length) {
        setStatusText(loadingStates[i]);
      } else {
        clearInterval(timer);
        setLoading(false);
        setSubmitted(true);
      }
    }, 850);
  };

  // Staggered form items variants
  const fieldContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4
      }
    }
  };

  const fieldItemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="contact" className="contact-section theme-dark">
      {/* Mesh grid pattern overlay */}
      <div className="grid-overlay" style={{ opacity: 0.28 }} />

      {/* Large luxury background watermark branding - slow letter-spacing track expand */}
      <motion.div
        initial={{ letterSpacing: '0.05em', opacity: 0, scale: 1.08 }}
        whileInView={{ letterSpacing: '0.18em', opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 2.8, ease: [0.16, 1, 0.3, 1] }}
        className="contact-watermark"
      >
        MAGNIFY
      </motion.div>

      <div className="luxury-container">

        {/* Title */}
        <div className="luxury-title-wrap">
          <span className="section-label">
            <Calendar size={12} />
            SECURE YOUR DOMINANCE
          </span>

          <h2 className="section-h2">
            Connect with <em>Us</em>
          </h2>

          <p className="section-subtitle">
            The attention economy does not tolerate invisibility. Book an exclusive strategy consultation to audit and scale your omnipresence.
          </p>
        </div>

        {/* Grid Split Layout — Connect Form Left, Address + Map Right */}
        <div className="contact-grid-layout">

          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="contact-left-form-panel"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  variants={fieldContainerVariants}
                  initial="hidden"
                  animate="show"
                  onSubmit={handleSubmit}
                  className="glass-panel contact-glass-form"
                >

                  {/* 1. Name */}
                  <motion.div variants={fieldItemVariants}>
                    <label className="contact-input-label">
                      Full Name / Identity
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name or brand identity"
                      className="contact-text-input interactive"
                      required
                    />
                  </motion.div>

                  {/* 2. Contact Details */}
                  <motion.div variants={fieldItemVariants}>
                    <label className="contact-input-label">
                      Email Address / WhatsApp number
                    </label>
                    <input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      placeholder="hello@domain.com or WhatsApp number"
                      className="contact-text-input interactive"
                      required
                    />
                  </motion.div>

                  {/* 3. Niche Category Selector */}
                  <motion.div variants={fieldItemVariants}>
                    <label className="contact-input-label">
                      Niche Profile Category
                    </label>
                    <div className="contact-select-wrap">
                      <select
                        name="niche"
                        value={formData.niche}
                        onChange={handleInputChange}
                        className="contact-select interactive"
                      >
                        <option value="founder">Startup Founder / Exec</option>
                        <option value="politics">Political Candidate / Party</option>
                        <option value="guru">Spiritual Guru / Ashram</option>
                        <option value="creator">Creator / Influencer</option>
                        <option value="brand">Corporate Niche Brand</option>
                      </select>
                    </div>
                  </motion.div>

                  {/* 4. Vision challenges */}
                  <motion.div variants={fieldItemVariants}>
                    <label className="contact-input-label">
                      What is your primary visibility challenge?
                    </label>
                    <textarea
                      name="challenge"
                      rows={4}
                      value={formData.challenge}
                      onChange={handleInputChange}
                      placeholder="Describe your current struggle (e.g. Inconsistent reels content, zero multilingual presence, weak PR footprint)"
                      className="contact-textarea interactive"
                    />
                  </motion.div>

                  {/* Submit button */}
                  <motion.button
                    variants={fieldItemVariants}
                    type="submit"
                    className="gold-btn interactive"
                    disabled={loading}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {loading ? (
                      <span>{statusText}</span>
                    ) : (
                      <span>Request Strategic Audit <ArrowRight size={14} /></span>
                    )}
                  </motion.button>

                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.94, rotateY: 10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 18 }}
                  className="glass-panel contact-success-card"
                >
                  <div className="success-badge-circle">
                    <Check size={32} style={{ color: '#050506' }} />
                  </div>

                  <h3 className="success-card-title">
                    Audit Secured
                  </h3>

                  <p className="success-card-desc">
                    Congratulations, <strong>{formData.name}</strong>. Our AI engines have initiated a digital signature audit of your brand presence. Our principal narrative architect will reach out to you at <strong>{formData.contact}</strong> within 24 hours.
                  </p>

                  {/* Secure bar with gold pulse loop */}
                  <motion.div
                    animate={{ boxShadow: ['0 0 0px rgba(197,160,89,0)', '0 0 8px rgba(197,160,89,0.35)', '0 0 0px rgba(197,160,89,0)'] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                    className="success-secure-bar"
                  >
                    <ShieldCheck size={14} /> 256-BIT ENCRYPTED AUDIT MATRIX ACTIVE
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Column: HQ Address & Embedded Dark-luxe Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="contact-right-hq-panel"
          >
            <div className="glass-panel hq-address-card">
              <span className="mono-tag">GLOBAL HEADQUARTERS</span>
              <h3 className="hq-card-title">C-116, Sector-2, Noida</h3>
              <p className="hq-card-desc">Uttar Pradesh &mdash; 201301, India</p>

              {/* Quick Contact options */}
              <div className="hq-quick-contact">
                <div className="hq-contact-item">
                  <span className="hq-contact-label">Voice / WhatsApp</span>
                  <a href="tel:+918147540362" className="hq-contact-value interactive">+91 81475 40362</a>
                </div>
                <div className="hq-contact-item">
                  <span className="hq-contact-label">Email Channels</span>
                  <a href="mailto:contact@magnifai.in" className="hq-contact-value interactive">contact@magnifai.in</a>
                </div>
              </div>

              {/* Customized Luxury Dark Google Map iframe */}
              <div className="hq-map-wrapper">
                <iframe
                  src="https://maps.google.com/maps?q=C-116,%20Sector-2,%20Noida,%20Uttar%20Pradesh%20%E2%80%93%20201301,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MagnifAI HQ Location Map"
                  className="hq-map-iframe interactive"
                />
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
