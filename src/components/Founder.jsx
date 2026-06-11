import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../utils/animations'

export default function Founder() {
  return (
    <section id="founder" className="section container" aria-labelledby="founder-heading">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2 id="founder-heading">Meet The Founder</h2>
        <div className="founder-grid">
          <div style={{borderRadius:12,padding:6,background:'linear-gradient(180deg, rgba(183,110,121,0.12), transparent)'}}>
            <img src="/images/founder.png" alt="Founder portrait" loading="lazy" style={{width:220,height:220,objectFit:'cover',borderRadius:12,display:'block'}} />
          </div>
          <div>
            <h3>Blossom</h3>
            <p className="lead">Blossom is dedicated to providing beautiful, neat, and long-lasting hairstyles while ensuring every client feels valued</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
