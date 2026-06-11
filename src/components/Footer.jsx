import React from 'react'
import { FaInstagram, FaTiktok } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong style={{ fontFamily: 'Playfair Display, serif' }}>Blossom Braids & Beauty</strong>
          <div className="muted">📍 FUTO, Owerri, Imo State</div>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <a className="social-icon" href="#" aria-label="Instagram"><FaInstagram /></a>
          <a className="social-icon" href="#" aria-label="TikTok"><FaTiktok /></a>
          <a className="social-icon" href="mailto:hello@blossombraids.com" aria-label="Email"><FiMail /></a>
        </div>
      </div>
    </footer>
  )
}
