import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Compass, Shield, Feather, Target } from 'lucide-react';
import './Metrics.css';

function CountUp({ value }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Extract numeric part and suffix
    const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    const suffix = value.replace(/[0-9]/g, '');
    
    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(numericValue / (duration / 16));
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value]);

  const suffix = value.replace(/[0-9]/g, '');
  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function Metrics() {
  const [followerGoal, setFollowerGoal] = useState(300000);
  const [selectedNiche, setSelectedNiche] = useState('founder');

  const niches = [
    { 
      id: 'founder', 
      name: 'THE VISIONARY', 
      icon: Compass, 
      desc: 'Founders, VCs, and elite executive brands seeking market capitalization leverage.' 
    },
    { 
      id: 'politics', 
      name: 'THE SOVEREIGN', 
      icon: Shield, 
      desc: 'Diplomats, public figures, and leaders commanding national narrative authority.' 
    },
    { 
      id: 'guru', 
      name: 'THE SAGE', 
      icon: Feather, 
      desc: 'Philosophers, authors, and spiritual directors broadcasting ancient cultural values.' 
    }
  ];

  const calculateProjections = () => {
    let multiplier = 5.2;
    let hoursSavedPerWeek = 28;
    
    if (selectedNiche === 'politics') {
      multiplier = 8.5;
      hoursSavedPerWeek = 45;
    } else if (selectedNiche === 'guru') {
      multiplier = 10.0;
      hoursSavedPerWeek = 32;
    }

    const calculatedWeeklyClips = Math.round((followerGoal / 10000) * 1.2) + 2;
    const finalReachMultiplier = (multiplier).toFixed(1) + 'x';
    const estimatedTotalReach = Math.round(followerGoal * multiplier);

    return {
      weeklyClips: calculatedWeeklyClips,
      multiplier: finalReachMultiplier,
      reach: estimatedTotalReach.toLocaleString(),
      hours: hoursSavedPerWeek,
      rawMultiplier: multiplier
    };
  };

  const projections = calculateProjections();

  // Dynamic SVG Compounding Wave Graph Calculations
  const getGraphPath = () => {
    const ratio = (followerGoal - 10000) / 990000;
    
    const startX = 20;
    const endX = 280;
    const startY = 85;
    const peakY = 80 - ratio * 60; 
    
    // 1. Generate a smooth high-density path
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
    
    // 2. Generate specific node points for labels (Month 1, 4, 6, 8, 12)
    const selectedMonths = [1, 4, 6, 8, 12];
    const points = selectedMonths.map(m => {
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
    
    return {
      path,
      points
    };
  };

  const graphData = getGraphPath();

  const statsList = [
    {
      num: '10x',
      label: 'CONTENT VELOCITY',
      desc: 'Our AI engines adapt, schedule, and optimize premium content pipelines 10x faster than traditional marketing departments.'
    },
    {
      num: '94%',
      label: 'IMPRESSION RETENTION',
      desc: 'Audiences digest and remember message parameters at double the rate of standard digital media due to semantic scoring.'
    },
    {
      num: '8.2x',
      label: 'STRATEGIC CONVERSION',
      desc: 'Authority-mapped narratives translate passive viewers into devoted equity investors, voters, and stakeholders.'
    },
    {
      num: '99.9%',
      label: 'NARRATIVE RESILIENCE',
      desc: 'Predictive speech synthesis secures brand presence against coordinate cancellation attempts and algorithmic filters.'
    }
  ];

  return (
    <section id="metrics" className="metrics-section theme-gold">
      
      {/* Mesh grid overlay */}
      <div className="grid-overlay" style={{ opacity: 0.12 }} />

      <div className="luxury-container">
        
        {/* Title */}
        <div className="luxury-title-wrap">
          {/* Narrative Concentric Ripples Background */}
          <div className="narrative-ripples">
            <div className="ripple ripple-1" />
            <div className="ripple ripple-2" />
            <div className="ripple ripple-3" />
          </div>

          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="section-label"
          >
            <Sparkles size={12} style={{ color: '#4A330B' }} />
            ROI & PROJECTION MATRIX
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-h2"
          >
            Compounding <em>Impact</em>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="section-subtitle"
          >
            Attention is a measurable financial asset. Audit the reach and strategic leverage our narrative architecture delivers.
          </motion.p>

          {/* Luxury Divider Ornament */}
          <div className="luxury-divider">
            <span className="divider-line" />
            <Sparkles size={10} className="divider-icon" />
            <span className="divider-line" />
          </div>
        </div>

        {/* Layout Grid - 3D Perspective Columns */}
        <div className="metrics-grid">
          
          {/* Left Column: 3D Floating Glass Plates */}
          <div className="metrics-editorial-column">
            {statsList.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -60, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="metrics-editorial-row interactive"
              >
                <div className="row-hover-highlight" />
                <div className="metrics-editorial-header">
                  <span className="metrics-editorial-index">[ 0{idx + 1} ]</span>
                  <span className="metrics-editorial-num">
                    <CountUp value={stat.num} />
                  </span>
                </div>
                <div className="metrics-editorial-body">
                  <span className="metrics-editorial-label">{stat.label}</span>
                  <p className="metrics-editorial-desc">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Dynamic Calculator Vessel (Charcoal Black Obsidian Deck) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel metric-calculator-vessel calculator-vessel-dark"
          >
            <div className="vessel-border-glow" />
            
            <div className="vessel-header">
              <h3 className="calculator-vessel-title">Influence Projection Matrix</h3>
              <p className="calculator-vessel-subtitle">Configure your strategic trajectory below</p>
            </div>

            {/* Niche Persona selectors */}
            <div className="calculator-niche-wrap">
              <span className="calculator-niche-label">Narrative Persona Vertical</span>
              <div className="calculator-niche-row">
                {niches.map((n) => {
                  const IconComponent = n.icon;
                  return (
                    <button
                      key={n.id}
                      onClick={() => setSelectedNiche(n.id)}
                      className={`niche-select-btn interactive ${selectedNiche === n.id ? 'active' : ''}`}
                    >
                      <IconComponent size={13} className="niche-icon" />
                      <span>{n.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Scale of Presence Slider */}
            <div className="calculator-slider-wrap">
              <div className="calculator-slider-header">
                <span className="slider-label">
                  <Target size={12} className="slider-label-icon" />
                  TARGET IMPRESSION BASE
                </span>
                <span className="calculator-slider-val">{followerGoal.toLocaleString()} Reach</span>
              </div>
              
              <div className="slider-track-container">
                <input
                  type="range"
                  min="10000"
                  max="1000000"
                  step="10000"
                  className="calculator-slider"
                  value={followerGoal}
                  onChange={(e) => setFollowerGoal(Number(e.target.value))}
                />
                <div 
                  className="slider-active-bar" 
                  style={{ width: `${((followerGoal - 10000) / 990000) * 100}%` }}
                />
              </div>

              <div className="calculator-slider-limits">
                <span>10K BASE</span>
                <span>1M BASE</span>
              </div>
            </div>

            {/* Dynamic Compounding Wave Graph Visualizer (Golden Wave in Dark Deck) */}
            <div className="dynamic-graph-container">
              <span className="graph-label">NARRATIVE ACCUMULATION TRAJECTORY</span>
              <div className="graph-canvas-wrap">
                <svg className="growth-graph-svg" viewBox="0 0 300 100">
                  <defs>
                    <linearGradient id="goldGraphFillDark" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(212, 175, 55, 0.22)" />
                      <stop offset="100%" stopColor="rgba(212, 175, 55, 0)" />
                    </linearGradient>
                  </defs>
                  
                  {/* Dynamic filled area under the curve */}
                  <path 
                    d={`${graphData.path} L 280,95 L 20,95 Z`}
                    fill="url(#goldGraphFillDark)"
                    className="graph-fill-path"
                  />
                  
                  {/* Dynamic line pathway (Glowing Gold) */}
                  <path 
                    d={graphData.path}
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="graph-stroke-path"
                  />
                  
                  {/* Nodes and Labels */}
                  {graphData.points.map((pt, i) => (
                    <g key={i} className="graph-node-group">
                      <circle 
                        cx={pt.x} 
                        cy={pt.y} 
                        r="3.5" 
                        fill="var(--gold)" 
                        stroke="#0C0C0B" 
                        strokeWidth="1.5" 
                        className="graph-node-circle"
                      />
                      <text 
                        x={pt.x} 
                        y="95" 
                        textAnchor="middle" 
                        className="graph-node-text"
                      >
                        {pt.label}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>

            {/* Projections Matrix Outcomes */}
            <div className="calculator-results-vessel">
              <div className="calc-row">
                <span className="calc-label">Suggested Weekly Production</span>
                <span className="calc-val-medium">{projections.weeklyClips} Broadcasts</span>
              </div>
              <div className="calc-divider" />
              <div className="calc-row">
                <span className="calc-label">Narrative Leverage Multiplier</span>
                <span className="calc-val-medium">{projections.multiplier} Leverage</span>
              </div>
              <div className="calc-divider" />
              <div className="calc-row">
                <span className="calc-label">Est. Content Hours Saved / wk</span>
                <span className="calc-val-highlight">{projections.hours} Hours</span>
              </div>

              {/* Prestigious Focal Result Block (Slightly Lighter Contrast Charcoal Card) */}
              <div className="final-result-card final-result-dark">
                <div className="final-result-border" />
                <div className="final-result-label-wrap">
                  <TrendingUp size={13} className="final-label-icon" />
                  <span className="final-result-label">TOTAL 12-MONTH PROJECTED REACH</span>
                </div>
                <div className="final-result-value-wrap">
                  <span className="final-result-value font-gold-gradient">
                    {projections.reach}
                  </span>
                  <span className="final-result-suffix">Impressions</span>
                </div>
              </div>
            </div>

            <p className="calc-disclaimer">
              *Calculated using predictive narrative intelligence growth parameters and market multiplier standards.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
