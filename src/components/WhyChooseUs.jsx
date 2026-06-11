import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../utils/animations'

const features = [
  {
    title: 'Neat and long-lasting hairstyles',
    desc: 'Meticulous technique and premium products for enduring, elegant results.'
  },
  { title: 'Professional service', desc: 'Polished, respectful, and punctual service from trained stylists.' },
  { title: 'Personalized attention', desc: 'Tailored consultations and styles crafted for you.' },
  { title: 'Home service available', desc: 'Convenient mobile service for comfort and privacy.' }
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section container" aria-labelledby="why-heading">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2 id="why-heading">Why Choose Us</h2>
        <div className="why-grid">
          {features.map((f) => (
            <motion.article
              key={f.title}
              className="why-card card"
              whileHover={{ y: -8, scale: 1.02, boxShadow: '0 26px 80px rgba(183,110,121,0.12)' }}
              transition={{ type: 'spring', stiffness: 220, damping: 22 }}
            >
              <h3>{f.title}</h3>
              <p className="muted">{f.desc}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
