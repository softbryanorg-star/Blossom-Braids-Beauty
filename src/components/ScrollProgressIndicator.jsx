import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const SECTIONS = [
  { id: 'hero', label: 'HOME' },
  { id: 'female-styles', label: 'FEMALE' },
  { id: 'male-styles', label: 'MALE' },
  { id: 'gallery', label: 'GALLERY' },
  { id: 'about', label: 'ABOUT' },
  { id: 'book', label: 'CONTACT' }
]

export default function ScrollProgressIndicator() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observers = []
    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id)
      if (!el) return
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(en => {
          if (en.isIntersecting) setActive(s.id)
        })
      }, { root: null, threshold: 0.45 })
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <aside className="scroll-indicator" aria-hidden>
      <ul>
        {SECTIONS.map(s => (
          <li key={s.id} className="scroll-indicator-item">
            <motion.span className={`dot ${active === s.id ? 'active' : ''}`} layout transition={{ type: 'spring', stiffness: 120, damping: 18 }} />
            <span className={`label ${active === s.id ? 'active' : ''}`}>{s.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
