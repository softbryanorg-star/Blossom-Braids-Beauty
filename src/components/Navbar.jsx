import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header" role="banner">
      <nav className="nav container" aria-label="Primary Navigation">
        <a className="brand" href="/" style={{display:'flex',alignItems:'center',gap:12,textDecoration:'none'}}>
          <img src="/logo.png" alt="Blossom Braids & Beauty logo" width="110" height="32" style={{display:'block'}} />
          <span style={{fontFamily:'Playfair Display, serif',color:'var(--color-charcoal)',fontSize:16}}>Blossom Braids & Beauty</span>
        </a>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(v => !v)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <ul id="primary-navigation" className={`nav-list ${open ? 'open' : ''}`}>
          {[
            ['Home', 'hero'],
            ['Female', 'female-styles'],
            ['Male', 'male-styles'],
            ['Gallery', 'gallery'],
            ['Testimonials', 'testimonials'],
            ['About', 'about'],
            ['Book', 'book']
          ].map(([label, to]) => (
            <li key={to} className="nav-item">
              <ScrollLink
                to={to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setOpen(false)}
                className="nav-link"
                activeClass="active"
                tabIndex={0}
              >
                {label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
