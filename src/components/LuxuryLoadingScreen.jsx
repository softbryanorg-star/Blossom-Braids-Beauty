import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'

export default function LuxuryLoadingScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof onFinish === 'function') {
        onFinish()
      }
    }, 2800)

    return () => clearTimeout(timer)
  }, [onFinish])

  return createPortal(
    <motion.div
      className="luxury-loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      aria-hidden="true"
    >
      <div className="luxury-loader-inner">

        <motion.img
          src="/logo.png"
          alt="Blossom Braids & Beauty"
          className="luxury-logo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.8
          }}
        />

        <motion.div
          className="luxury-title"
          initial="hidden"
          animate="visible"
        >
          {'BLOSSOM BRAIDS & BEAUTY'.split('').map((ch, i) => (
            <motion.span
              key={i}
              className="luxury-letter"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20
                },
                visible: {
                  opacity: 1,
                  y: 0
                }
              }}
              transition={{
                delay: i * 0.05,
                duration: 0.4
              }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="luxury-line"
          initial={{ width: 0 }}
          animate={{ width: '60%' }}
          transition={{
            delay: 1,
            duration: 1
          }}
        />

      </div>
    </motion.div>,
    document.body
  )
}