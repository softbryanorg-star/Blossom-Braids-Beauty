import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { fadeUp } from '../utils/animations'

const styles = [
  { key: 'Two-Strand Twists', img: '/images/menservice1.png' },
  { key: 'Box Braids', img: '/images/menservice2.png' },
  { key: 'Twists & Fade', img: '/images/menservice3.png' },
  { key: 'Cornrows', img: '/images/menservice4.png' },
  { key: 'Zig-Zag Weaving', img: '/images/menservice5.png' },
  { key: 'Pop Smoke Braids', img: '/images/menservice6.png' },
  { key: 'Freestyle Weaving', img: '/images/menservice7.png' },
  { key: "Men's All Back", img: '/images/menservice8.png' }
]

export default function MaleStyles() {
  return (
    <section
      id="male-styles"
      className="section container"
      aria-labelledby="male-heading"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 id="male-heading">Explore Our Male Styles</h2>

        <p className="lead">
          Clean, stylish, and modern looks designed to stand out.
        </p>

        <div style={{ marginTop: 20 }}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView="auto"
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            style={{ paddingBottom: 24 }}
          >
            {styles.map((s) => (
              <SwiperSlide
                key={s.key}
                style={{ width: 320 }}
                aria-label={s.key}
              >
                <motion.div
                  className="style-card"
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                    boxShadow: '0 18px 40px rgba(0,0,0,0.10)',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 220,
                    damping: 20,
                  }}
                >
                  <div className="style-media">
                    <img
                      src={s.img}
                      alt={s.key}
                      loading="lazy"
                    />
                  </div>

                  <div className="style-body">
                    <h3>{s.key}</h3>
                    <p className="muted">{s.key}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  )
}