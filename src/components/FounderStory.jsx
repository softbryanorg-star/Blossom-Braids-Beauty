import React from 'react'
import { motion } from 'framer-motion'

export default function FounderStory() {
  return (
    <section id="founder-story" className="section">
      <div className="container narrow">
        <motion.h3 className="section-title" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ textAlign: 'center', textTransform: 'uppercase', fontWeight: 700 }}>
          A NOTE FROM BLOSSOM
        </motion.h3>

        <motion.blockquote initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ fontSize: 18, lineHeight: 1.6, position: 'relative', marginTop: 12 }}>
          <span style={{ fontSize: 72, lineHeight: 0.6, position: 'absolute', left: -12, top: -18, color: 'rgba(183,110,121,0.12)', fontFamily: 'Cormorant Garamond, serif' }}>
            “
          </span>
          <div style={{ marginLeft: 24 }}>
            <p>Every great journey begins with a simple passion, and mine started with a love for helping people feel beautiful, confident, and comfortable in their own skin.</p>
            <p>When I first started braiding hair, I never imagined it would grow into something so meaningful. What began as a skill I enjoyed gradually became a passion, and that passion eventually blossomed into <strong>Blossom Braids & Beauty</strong>.</p>
            <p>For me, hairstyling is about so much more than creating beautiful braids. It's about the confidence you feel when you look in the mirror and love what you see. It's about helping someone walk away feeling happier, more confident, and ready to take on the world.</p>
            <p>Over the years, I have continued to learn, improve, and perfect my craft because I believe every client deserves my very best. Every braid, every hairstyle, and every appointment is an opportunity to create something special.</p>
            <p style={{ marginTop: 12 }}>— Blossom</p>
          </div>
        </motion.blockquote>
      </div>
    </section>
  )
}
