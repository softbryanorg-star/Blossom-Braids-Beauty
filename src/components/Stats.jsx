import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Happy Clients', value: 500, suffix: '+' },
  { label: 'Years Experience', value: 4, suffix: '+' },
  { label: 'Services Delivered', value: 1000, suffix: '+' },
]

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  return (
    <section id="stats" className="section">
      <div className="container">
        <div ref={ref} className="stats-grid">
          {stats.map((s, i) => (
            <motion.div className="stat" key={i} initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.12, duration: 0.6 }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 28 }}>
                {inView ? <CountUp end={s.value} duration={1.8} /> : 0}{s.suffix}
              </h3>
              <p className="muted">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
