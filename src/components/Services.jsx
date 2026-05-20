import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

// Importing all 8 premium assets from the artitechImages directory
import img1 from '../assets/artitechImages/Indian_entrepreneur_on_screens_202605181340.jpeg';
import img2 from '../assets/artitechImages/AI_workspace_generating_content_202605181335.jpeg';
import img3 from '../assets/artitechImages/AI_media_agency_futuristic_reel_202605181331 (1).jpeg';
import img4 from '../assets/artitechImages/Indian_man_creating_AI_avatar_202605181346.jpeg';
import img5 from '../assets/artitechImages/Global_AI_communication_Indian_team_202605181336.jpeg';
import img7 from '../assets/artitechImages/Indian_team_running_AI_campaigns_202605181338.jpeg';
import img6 from '../assets/artitechImages/Indian_leader_talking_to_people_202605181334.jpeg';
import img8 from '../assets/artitechImages/Indian_businessman_in_front_screens_202605181336.jpeg';

export default function Services() {
  const ecosystemNodes = [
    {
      num: '01',
      title: 'Personal Brand Building',
      tagline: 'OMNIPRESENT NARRATIVE',
      desc: 'Crafting distinct, high-authority personal identity and narrative structures that capture elite global markets and build absolute trust.',
      image: img1,
      tags: ['Authority Strategy', 'Narrative Design', 'Executive Brand']
    },
    {
      num: '02',
      title: 'AI Content Automation',
      tagline: 'AI-POWERED PIPELINES',
      desc: 'Highly optimized intelligent content engines producing, adapting, and posting high-impact assets across digital nodes 24/7.',
      image: img2,
      tags: ['Automated Editing', 'Cross-Platform Sync', 'Smart Schedule']
    },
    {
      num: '03',
      title: 'AI Viral Reels & Short Video',
      tagline: 'ALGORITHMIC ATTRACTION',
      desc: 'Platform-native short-form video engineered with algorithmic hooks, pacing, and retention spikes for exponential organic reach.',
      image: img3,
      tags: ['Viral Loops', 'Retention Spikes', 'Trend Prediction']
    },
    {
      num: '04',
      title: 'AI Voice & Avatar Systems',
      tagline: 'PRESENCE CLONING',
      desc: 'Advanced speech synthesis and virtual avatar cloning that multiply your face and vocal footprint across formats effortlessly.',
      image: img4,
      tags: ['Voice Prints', 'Avatar Cloning', 'Presence Clone']
    },
    {
      num: '05',
      title: 'Multi-Language Distribution',
      tagline: 'GLOBAL LOCALIZATION',
      desc: 'Breaking borders with intelligent real-time translation and localized cultural dialect mapping to dominate diverse regional demographics.',
      image: img5,
      tags: ['Cadence Alignment', 'Dialect Synthesis', 'Cultural Markers']
    },
    {
      num: '06',
      title: 'Political Digital Campaigns',
      tagline: 'MASS MOBILIZATION',
      desc: 'Direct constituency engagement campaigns, driving personalized, hyper-targeted mobilization and data-backed outreach at absolute scale.',
      image: img6,
      tags: ['Voter Audiences', 'Targeted Broadcast', 'Mobilization Loops']
    },
    {
      num: '07',
      title: 'Digital PR & Media Amplification',
      tagline: 'HIGH-PRESTIGE PRESS',
      desc: 'Curated placements, press channels, and earned digital attention that build undisputed credibility and accelerate market authority.',
      image: img7,
      tags: ['Press Placement', 'Prestige Networks', 'Media Coverage']
    },
    {
      num: '08',
      title: 'Public Perception Management',
      tagline: 'REPUTATION DIAGNOSTICS',
      desc: 'Active narrative monitoring, sentiment extraction, and reputation command rooms that proactively shape public opinion on your terms.',
      image: img8,
      tags: ['Sentiment Engines', 'Perception Safeguard', 'Crisis Control']
    }
  ];

  return (
    <section id="services" className="services-section theme-gold">
      {/* Structural golden blueprint matrix overlay */}
      <div className="services-grid-overlay" />

      <div className="luxury-container">

        {/* Simple & Premium Header */}
        <div className="services-premium-header">
          
          <motion.span 
            initial={{ opacity: 0, letterSpacing: '0.05em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.2em' }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="services-mono-tag"
          >
            OUR ECOSYSTEM
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 40, clipPath: 'inset(100% 0% 0% 0%)' }}
            whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="services-large-title"
          >
            Complete <span className="gold-accent">Influence</span> Architecture
          </motion.h2>

          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="services-header-line" 
          />

          <motion.p 
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.4, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="services-description"
          >
            Every asset, voice, and system is structurally designed to synchronize, forming an omnipresent digital identity that captures and converts attention.
          </motion.p>
        </div>

        {/* 2-Column Premium Glassmorphic Gallery Grid */}
        <div className="services-portfolio-grid">
          {ecosystemNodes.map((node, index) => (
            <motion.div
              key={node.num}
              initial={{ 
                opacity: 0, 
                y: 50
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0
              }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                duration: 1.2,
                delay: (index % 2) * 0.12, // Alternating column stagger
                ease: [0.16, 1, 0.3, 1]
              }}
              className="ecosystem-gallery-card interactive"
            >
              {/* Photo print window with Gold bezel and subtle light-leak */}
              <div className="gallery-image-wrap">
                <img
                  src={node.image}
                  alt={node.title}
                  className="gallery-card-image"
                />
                
                {/* Dynamic Warm Golden Light Leak Overlay - triggers on view */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 0.8, 0.15] }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="gallery-image-light-leak" 
                />

                {/* Thin inner gold hairline frame */}
                <div className="gallery-frame-hairline" />
              </div>

              {/* Museum card mat margin label content */}
              <div className="gallery-card-label-area">

                {/* Gold double hairline divider inside label area */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="gallery-label-border-accent" 
                />

                <div className="gallery-label-meta-row">
                  <span className="gallery-label-num">{node.num}</span>
                  <span className="gallery-label-tagline">{node.tagline}</span>
                </div>

                <h3 className="gallery-label-title">{node.title}</h3>

                <p className="gallery-label-desc">
                  {node.desc}
                </p>

                {/* Subtly matted deliverable capsules */}
                <div className="gallery-label-pills">
                  {node.tags.map((tag, idx) => (
                    <span key={idx} className="gallery-label-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
