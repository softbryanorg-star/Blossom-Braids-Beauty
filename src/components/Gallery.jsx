import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../utils/animations'
import Lightbox from './Lightbox'

// generate arrays of image paths for women and men galleries
const makeRange = (prefix, count) => Array.from({ length: count }, (_, i) => `${prefix}${i + 1}.png`)

const women = makeRange('/images/women', 40)
const men = makeRange('/images/men', 40)

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [activeSet, setActiveSet] = useState('women')

  const images = useMemo(() => (activeSet === 'women' ? women : men), [activeSet])

  const openAt = (i) => {
    setIndex(i)
    setLightboxOpen(true)
  }

  return (
    <section id="gallery" className="section container" aria-labelledby="gallery-heading">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2 id="gallery-heading">View Our Work</h2>
        <p className="lead">A curated gallery of women's and men's looks — exquisitely styled and captured.</p>

        <div className="gallery-toggle" style={{ marginBottom: 18 }}>
          <button className={`btn ${activeSet === 'women' ? 'primary' : 'ghost'}`} onClick={() => setActiveSet('women')} aria-pressed={activeSet === 'women'}>Women's Gallery</button>
          <button className={`btn ${activeSet === 'men' ? 'primary' : 'ghost'}`} onClick={() => setActiveSet('men')} aria-pressed={activeSet === 'men'} style={{ marginLeft: 12 }}>Men's Gallery</button>
        </div>

        <div className="responsive-grid">
          {images.map((src, i) => (
            <button key={src} className="image-button" onClick={() => openAt(i)} aria-label={`Open image ${i + 1}`}>
              <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
            </button>
          ))}
        </div>

        {lightboxOpen && (
          <Lightbox images={images} startIndex={index} onClose={() => setLightboxOpen(false)} />
        )}
      </motion.div>
    </section>
  )
}
