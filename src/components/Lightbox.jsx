import React, { useEffect, useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const imgVar = {
  enter: { opacity: 0, scale: 0.98 },
  center: { opacity: 1, scale: 1, transition: { duration: 0.42, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.98 }
}

function LightboxInner({ images, startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex)

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, prev, next])

  // swipe handling via pan on motion.img
  const onDragEnd = (e, info) => {
    const offset = info.offset.x
    const velocity = info.velocity.x
    if (offset < -80 || velocity < -500) next()
    if (offset > 80 || velocity > 500) prev()
  }

  return (
    <AnimatePresence>
      <motion.div className="modal-backdrop" key="lightbox-backdrop" initial="hidden" animate="visible" exit="hidden" variants={backdrop} onClick={onClose} style={{ backdropFilter: 'blur(6px)' }}>
        <div aria-modal="true" role="dialog" onClick={(e) => e.stopPropagation()} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div style={{ maxWidth: 1200, width: '100%', position: 'relative' }}>
            <button aria-label="Close" className="modal-close" onClick={onClose}>×</button>

            <motion.div key={images[index]} initial="enter" animate="center" exit="exit" variants={imgVar} style={{ display: 'grid', placeItems: 'center' }}>
              <motion.img
                src={images[index]}
                alt={`Lightbox ${index + 1}`}
                loading="eager"
                style={{ maxWidth: '100%', maxHeight: '80vh', borderRadius: 8, objectFit: 'contain', display: 'block' }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={onDragEnd}
              />
            </motion.div>

            <button aria-label="Previous" onClick={prev} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 0, fontSize: 28 }}>‹</button>
            <button aria-label="Next" onClick={next} style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 0, fontSize: 28 }}>›</button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Lightbox({ images = [], startIndex = 0, onClose }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return createPortal(<LightboxInner images={images} startIndex={startIndex} onClose={onClose} />, document.body)
}
