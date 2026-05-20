import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, X } from 'lucide-react';
import './AuditModal.css';

// Pixel-perfect official WhatsApp Brand SVG Icon
const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    className={className}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function AuditModal({ isOpen, onClose }) {
  // Prevent clicks inside the modal content from closing the modal
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="audit-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={onClose}
        >
          <motion.div
            className="audit-modal-content glass-panel"
            initial={{ scale: 0.92, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 30, opacity: 0 }}
            transition={{ duration: 0.5, type: 'spring', damping: 25, stiffness: 350 }}
            onClick={handleContentClick}
          >
            {/* Close Button */}
            <button className="audit-modal-close-btn interactive" onClick={onClose}>
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="audit-modal-header">
              <span className="mono-tag">INFLUENCE ENGINE</span>
              <h2 className="audit-modal-title">
                Book An <span className="gold">Audit</span>
              </h2>
              <p className="audit-modal-subtitle">
                Connect directly with our narrative engineers to audit and scale your digital presence.
              </p>
            </div>

            {/* Contact Channels Grid */}
            <div className="audit-modal-channels">
              
              {/* Channel 1: WhatsApp Chat */}
              <a
                href="https://wa.me/918147540362?text=Hi%20MagnifAI,%20I%20would%20like%20to%20book%20an%20influence%20audit."
                target="_blank"
                rel="noopener noreferrer"
                className="audit-channel-card interactive"
              >
                <div className="audit-channel-icon-wrap whatsapp-accent">
                  <WhatsAppIcon size={24} />
                </div>
                <div className="audit-channel-info">
                  <span className="audit-channel-label">WHATSAPP CHAT</span>
                  <span className="audit-channel-value">Instant Connect</span>
                  <span className="audit-channel-subtext">Click to message us directly</span>
                </div>
              </a>

              {/* Channel 2: Voice Call */}
              <a
                href="tel:+918147540362"
                className="audit-channel-card interactive"
              >
                <div className="audit-channel-icon-wrap call-accent">
                  <Phone size={22} />
                </div>
                <div className="audit-channel-info">
                  <span className="audit-channel-label">PHONE CALL</span>
                  <span className="audit-channel-value">+91 81475 40362</span>
                  <span className="audit-channel-subtext">Call us for a direct consult</span>
                </div>
              </a>

              {/* Channel 3: Email */}
              <a
                href="mailto:contact@magnifai.in?subject=Influence%20Audit%20Booking%20Request"
                className="audit-channel-card interactive"
              >
                <div className="audit-channel-icon-wrap email-accent">
                  <Mail size={22} />
                </div>
                <div className="audit-channel-info">
                  <span className="audit-channel-label">EMAIL CHANNEL</span>
                  <span className="audit-channel-value">contact@magnifai.in</span>
                  <span className="audit-channel-subtext">Send us an audit request</span>
                </div>
              </a>

            </div>

            {/* Modal Footer Decorative Border/Text */}
            <div className="audit-modal-footer">
              <span className="footer-tagline">MagnifAI &copy; {new Date().getFullYear()} — Cultivating Omnipresent Influence</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
