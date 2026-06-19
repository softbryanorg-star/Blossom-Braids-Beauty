import React from 'react'
import { FaInstagram, FaTiktok } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner" style={{alignItems: 'flex-start'}}>
        <div style={{maxWidth: 520}}>
          <strong style={{ fontFamily: 'Playfair Display, serif', display: 'block', fontSize: 18 }}>Blossom Braids & Beauty</strong>
          <p className="muted" style={{marginTop:8}}>Where creativity, beauty, and expert craftsmanship come together to create unforgettable looks.</p>

          <div style={{marginTop:12}}>
            <div className="muted">📍 FUTO, Owerri, Imo State</div>
            <div className="muted" style={{marginTop:6}}>📞 +234 816 434 9452</div>
            <div className="muted" style={{marginTop:6}}>📧 Josephblossom68@gmail.com</div>
            <div className="muted" style={{marginTop:6}}>🕒 Mon–Sat: 9:00 AM – 6:00 PM</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <a className="social-icon" href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a className="social-icon" href="https://www.tiktok.com/@josephblossom6" aria-label="TikTok" target="_blank" rel="noreferrer"><FaTiktok /></a>
          <a className="social-icon" href="Josephblossom68@gmail.com" aria-label="Email"><FiMail /></a>
        </div>
      </div>
    </footer>
  )
}
