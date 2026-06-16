
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
  <title>
    Blossom Braids & Beauty | Premium Hair Braiding & Beauty Salon in Owerri,
    Imo State
  </title>

  {/* Basic SEO */}
  <meta
    name="description"
    content="Blossom Braids & Beauty is Owerri's destination for stunning braids, luxury hairstyles, and professional beauty services. From knotless braids and cornrows to twists and beauty treatments, we create confidence-boosting transformations with expert care and creativity."
  />

  <meta
    name="keywords"
    content="Owerri salon, beauty salon Owerri, hairstylist Owerri, braids in Owerri, knotless braids Owerri, cornrows Owerri, twists Owerri, beauty salon Imo State, hair braiding Nigeria, Blossom Braids and Beauty, African hairstyles, luxury salon Owerri, beauty services Nigeria"
  />

  <meta
    name="author"
    content="Blossom Braids & Beauty"
  />

  <meta
    name="robots"
    content="index, follow"
  />

  <meta
    name="googlebot"
    content="index, follow"
  />

  <link
    rel="canonical"
    href="https://blossom-braids-beauty.vercel.app/"
  />

  {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:site_name"
    content="Blossom Braids & Beauty"
  />

  <meta
    property="og:title"
    content="Blossom Braids & Beauty | Premium Beauty Salon in Owerri"
  />

  <meta
    property="og:description"
    content="Experience premium braiding, luxury hairstyles, and professional beauty services in Owerri, Imo State. Discover why clients trust Blossom Braids & Beauty for elegant, long-lasting transformations."
  />

  <meta
    property="og:url"
    content="https://blossom-braids-beauty.vercel.app/"
  />

  <meta
    property="og:image"
    content="https://blossom-braids-beauty.vercel.app/logo.png"
  />

  {/* Twitter / X */}
  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content="Blossom Braids & Beauty | Premium Beauty Salon in Owerri"
  />

  <meta
    name="twitter:description"
    content="Luxury braiding, beauty services, knotless braids, cornrows, twists and more in Owerri, Imo State."
  />

  <meta
    name="twitter:image"
    content="https://blossom-braids-beauty.vercel.app/logo.png"
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
    paddingTop: "var(--section-gap)",
    paddingBottom: "var(--section-gap)",
  }}
>
  <CTA onBook={() => setBookingOpen(true)} />
</section>

<section
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
    textAlign: "center",
  }}
>
  <h2>
    Premium Hair Braiding & Beauty Services in Owerri
  </h2>

  <p
    style={{
      maxWidth: "900px",
      margin: "0 auto",
      lineHeight: "1.8",
    }}
  >
    Blossom Braids & Beauty proudly serves clients in
    Owerri, Imo State, offering premium knotless braids,
    cornrows, twists, protective styles, beauty treatments,
    and professional hairstyling services.

    Our mission is to provide luxury beauty experiences
    that help every client look and feel their absolute
    best.

    Whether you're preparing for a special occasion or
    looking for a fresh everyday style, our experienced
    team is dedicated to delivering beautiful,
    long-lasting results with exceptional customer care.
  </p>
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
