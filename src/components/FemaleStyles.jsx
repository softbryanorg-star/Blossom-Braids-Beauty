import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { fadeUp } from '../utils/animations'

const styles = [
  { key: 'Passion Twists', img: '/images/womenservice1.png' },
  { key: 'Butterfly Locs', img: '/images/womenservice2.png' },
  { key: 'Stitch Braids', img: '/images/womenservice3.png' },
  { key: 'Knotless Braids', img: '/images/womenservice4.png' },
  { key: 'Boho Braids', img: '/images/womenservice5.png' },
  { key: 'All Back', img: '/images/womenservice6.png' },
  { key: "Kids' Braids", img: '/images/womenservice7.png' }
]

export default function FemaleStyles() {
  return (
    <section
      id="female-styles"
      className="section container"
      aria-labelledby="female-heading"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 id="female-heading">Explore Our Female Styles</h2>

        <p className="lead">
          Crafted to enhance your beauty, confidence, and individuality.
        </p>

        <div style={{ marginTop: 20 }}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView="auto"
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2800,
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
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 18,
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