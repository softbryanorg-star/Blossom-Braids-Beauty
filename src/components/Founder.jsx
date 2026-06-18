import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../utils/animations'

export default function Founder() {
  return (
    <section id="founder" className="section" aria-labelledby="founder-heading">
      <div className="container" style={{textAlign:'center'}}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 id="founder-heading">Meet Your Luxury Hair Stylist</h2>
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:18,marginTop:18}}>
            <div style={{borderRadius:12,padding:6,background:'linear-gradient(180deg, rgba(212,180,131,0.12), transparent)'}}>
              <img src="/images/founder.png" alt="Founder portrait" loading="lazy" style={{width:220,height:220,objectFit:'cover',borderRadius:12,display:'block'}} />
            </div>
            <div style={{maxWidth:720}}>
              <h3 style={{fontFamily:'Playfair Display, serif'}}>Blossom</h3>
              <p className="lead">Blossom is dedicated to providing beautiful, neat, and long-lasting hairstyles while ensuring every client feels valued, appreciated, and confident.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
