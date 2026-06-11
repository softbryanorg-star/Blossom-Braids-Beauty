
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FemaleStyles from '../components/FemaleStyles'
import MaleStyles from '../components/MaleStyles'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import Stats from '../components/Stats'
import VideoShowcase from '../components/VideoShowcase'
import Founder from '../components/Founder'
import FounderStory from '../components/FounderStory'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import LuxuryLoadingScreen from '../components/LuxuryLoadingScreen'
import CursorGlow from '../components/CursorGlow'
import ScrollProgressIndicator from '../components/ScrollProgressIndicator'
import BookingModal from '../components/BookingModal'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>BLOSSOM BRAIDS &amp; BEAUTY — Luxury Salon</title>

        <meta
          name="description"
          content="Blossom Braids & Beauty — Luxury braids and beauty studio. Book online for premium service."
        />

        <link rel="canonical" href="/" />

        <meta
          property="og:title"
          content="BLOSSOM BRAIDS & BEAUTY"
        />

        <meta
          property="og:description"
          content="Luxury braids and beauty studio. Book online for premium service."
        />

        <meta
          property="og:image"
          content="/logo.png"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Helmet>

      <Navbar />

      {loading && (
        <LuxuryLoadingScreen
          onFinish={() => setLoading(false)}
        />
      )}

      <main
        style={{
          visibility: loading ? 'hidden' : 'visible',
        }}
      >
        <CursorGlow />
        <ScrollProgressIndicator />

        <Hero
          onOpenBooking={() => setBookingOpen(true)}
        />

        <section style={{ paddingTop: 'var(--section-gap)' }}>
          <FemaleStyles />
        </section>

        <section style={{ paddingTop: 'var(--section-gap)' }}>
          <MaleStyles />
        </section>

        <section style={{ paddingTop: 'var(--section-gap)' }}>
          <Gallery />
        </section>

        <section style={{ paddingTop: 'var(--section-gap)' }}>
          <Testimonials />
        </section>

        <section style={{ paddingTop: 'var(--section-gap)' }}>
          <About />
        </section>

        <section style={{ paddingTop: 'var(--section-gap)' }}>
          <WhyChooseUs />
        </section>

        <section style={{ paddingTop: 'var(--section-gap)' }}>
          <Stats />
        </section>

        <section style={{ paddingTop: 'var(--section-gap)' }}>
          <VideoShowcase />
        </section>

        <section style={{ paddingTop: 'var(--section-gap)' }}>
          <Founder />
        </section>

        <section style={{ paddingTop: 'var(--section-gap)' }}>
          <FounderStory />
        </section>

        <section
          style={{
            paddingTop: 'var(--section-gap)',
            paddingBottom: 'var(--section-gap)',
          }}
        >
          <CTA onBook={() => setBookingOpen(true)} />
        </section>
      </main>

      <Footer />

      <WhatsAppButton />

      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </>
  )
}
