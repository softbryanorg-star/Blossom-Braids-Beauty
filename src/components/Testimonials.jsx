import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  { name: 'Amanda', img: '/images/client1.png', quote: 'Exceptional service — my braids lasted weeks!' },
  { name: 'Bryan', img: '/images/client2.png', quote: 'Professional and stylish. Highly recommend.' },
  { name: 'Chioma', img: '/images/client3.png', quote: 'Lovely atmosphere and flawless technique.' },
  { name: 'David', img: '/images/client4.png', quote: 'Quick, clean, and an eye for detail.' },
  { name: 'Esther', img: '/images/client5.png', quote: 'I felt beautiful and confident after my appointment.' },
  { name: 'Jack', img: '/images/client6.png', quote: 'Friendly staff and premium results.' },
]

const card = (t) => (
  <motion.div
    className="testimonial-card"
    whileHover={{ y: -6, boxShadow: '0 15px 35px rgba(183,110,121,0.08)' }}
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
  >
    <div className="testimonial-media">
      <img src={t.img} alt={`${t.name} photo`} loading="lazy" />
    </div>
    <div className="testimonial-body">
      <FaQuoteLeft className="quote-icon" />
      <p className="quote">{t.quote}</p>
      <p className="client">— {t.name}</p>
    </div>
  </motion.div>
)

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container narrow">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          What Clients Say
        </motion.h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="testimonials-swiper"
          aria-label="Client testimonials carousel"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>{card(t)}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
