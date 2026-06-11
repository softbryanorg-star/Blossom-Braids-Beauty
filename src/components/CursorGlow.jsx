import React, { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const el = ref.current
    if (!el) return

    let raf = null

    const onMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      el.style.display = 'block'
    }

    const onLeave = () => { if (el) el.style.display = 'none' }

    const lerp = (a, b, n) => (1 - n) * a + n * b

    const loop = () => {
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.12)
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.12)
      if (el) el.style.transform = `translate3d(${pos.current.x - 120}px, ${pos.current.y - 120}px, 0)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseout', onLeave)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div aria-hidden className="cursor-glow" ref={ref} />
  )
}
