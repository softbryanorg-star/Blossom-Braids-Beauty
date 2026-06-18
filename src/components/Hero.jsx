import React, { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'

const line1 = 'Blossom Braids'
const line2 = '& Beauty'

export default function Hero({ onOpenBooking }) {
  const reduce = useReducedMotion()

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
  }

  const line = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2,0.8,0.2,1] } }
  }

  return (
    <section id="hero" className="hero container" aria-label="Hero">
      <div className="hero-inner">
        <motion.h1 className="hero-title" aria-label={`${line1} ${line2}`} initial={reduce ? 'visible' : 'hidden'} animate="visible" variants={container} role="heading" style={{lineHeight:1.02}}>
          <motion.div variants={line} style={{display:'block'}}>{line1}</motion.div>
          <motion.div variants={line} style={{display:'block', fontSize:'0.9em', marginTop:6}}>{line2}</motion.div>
        </motion.h1>

        <motion.p className="hero-sub" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>
          Where creativity, beauty, and expert craftsmanship come together to create unforgettable looks.
        </motion.p>

        <div className="hero-actions">
          <motion.button
            className="btn primary"
            onClick={onOpenBooking}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.45 }}
            aria-haspopup="dialog"
          >
            Book Appointment
          </motion.button>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: 0.45 }}>
            <ScrollLink to="gallery" smooth offset={-80} duration={600} className="btn ghost">View Our Work</ScrollLink>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
