import React from 'react'
import { motion } from 'framer-motion'

export default function CTA({ onBook }) {
  const handleClick = () => {
    if (typeof onBook === 'function') {
      onBook()
      return
    }
    // fallback: dispatch a global event so pages without prop still open modal
    window.dispatchEvent(new CustomEvent('openBooking'))
  }

  return (
    <section className="cta" id="book">
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Ready for Your Next Look?
        </motion.h2>

        <motion.p className="lead" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }} style={{ margin: '12px auto 18px', maxWidth: 720 }}>
          Book your appointment today and let Blossom Braids & Beauty create a hairstyle you'll love and wear with confidence.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.12 }}>
          <button className="btn luxury" onClick={handleClick} aria-label="Book Appointment">Book Appointment</button>
        </motion.div>
      </div>
    </section>
  )
}
