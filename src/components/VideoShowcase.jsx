import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../utils/animations'

export default function VideoShowcase() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    const v = videoRef.current
    if (!v) return
    v.play()
    setPlaying(true)
  }

  return (
    <section id="video" className="section container" aria-labelledby="video-heading">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2 id="video-heading">View our Work</h2>
        <div className="video-wrap">
          <div className="video-inner" style={{position:'relative'}}>
            <video
              ref={videoRef}
              src="/images/blossom-video.mp4"
              poster="/images/founder.png"
              controls={playing}
              preload="metadata"
              playsInline
              style={{width:'100%',height:'100%',borderRadius:8,objectFit:'cover'}}
            />
            {!playing && (
              <button className="video-play" aria-label="Play video" onClick={handlePlay}>
                <span className="play-icon">▶</span>
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
