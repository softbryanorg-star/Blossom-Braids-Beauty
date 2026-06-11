import React from 'react'
import { motion } from 'framer-motion'
import { FadeUp, Stagger } from '../utils/animations'

export default function About() {
  return (
    <section
      id="about"
      className="section container"
      aria-labelledby="about-heading"
    >
      <motion.div
        variants={Stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 variants={FadeUp} id="about-heading">
          About Blossom Braids & Beauty
        </motion.h2>

        <motion.p variants={FadeUp} className="lead">
          At Blossom Braids & Beauty, we believe every hairstyle is an
          opportunity to express confidence, beauty, and individuality.
          Our studio blends traditional technique with modern aesthetics
          to deliver bespoke, long-lasting styles.
        </motion.p>

        <motion.p variants={FadeUp} className="muted">
          Location: FUTO, Owerri, Imo State
        </motion.p>
      </motion.div>
    </section>
  )
}