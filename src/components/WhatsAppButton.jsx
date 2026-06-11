import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-btn"
      href="https://wa.me/2348164349452"
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={20} style={{ color: '#ffffff' }} />
      <span className="sr-only">WhatsApp</span>
    </a>
  )
}
