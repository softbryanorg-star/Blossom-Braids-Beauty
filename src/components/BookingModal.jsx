import React, { useEffect, useRef, useState } from 'react'

const WA_NUMBER = '2347025404516'

export default function BookingModal({ open, onClose }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('Knotless Braids')
  const [appointment, setAppointment] = useState('Shop Visit')
  const ref = useRef(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => { ref.current?.focus() }, 80)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Hello Blossom Braids & Beauty,%0A%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0AAppointment: ${appointment}%0A%0AI would like to book an appointment.`
    const url = `https://wa.me/${WA_NUMBER}?text=${message}`
    // close modal then redirect
    onClose()
    window.location.href = url
  }

  if (!open) return null

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label="Book an appointment" onMouseDown={(e)=>e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <h3 className="modal-title">Book Appointment</h3>
        <form onSubmit={handleSubmit} className="modal-form">
          <label>
            Name
            <input ref={ref} required value={name} onChange={(e)=>setName(e.target.value)} />
          </label>

          <label>
            Phone Number
            <input required value={phone} onChange={(e)=>setPhone(e.target.value)} inputMode="tel" />
          </label>

          <label>
            Desired Style
            <input value={service} onChange={(e)=>setService(e.target.value)} placeholder="e.g. Knotless Braids" />
          </label>

          <fieldset className="appt-type">
            <legend>Appointment Type</legend>
            <label><input type="radio" name="appt" checked={appointment==='Shop Visit'} onChange={()=>setAppointment('Shop Visit')} /> Shop Visit</label>
            <label><input type="radio" name="appt" checked={appointment==='Home Service'} onChange={()=>setAppointment('Home Service')} /> Home Service</label>
          </fieldset>

          <div className="modal-actions">
            <button type="button" className="btn ghost" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn primary">Confirm & Continue</button>
          </div>
        </form>
      </div>
    </div>
  )
}
