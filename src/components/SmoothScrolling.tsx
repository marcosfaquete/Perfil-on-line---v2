'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

/**
 * Scroll suave (roda no desktop + toque com inércia no mobile).
 * Mantido sem scroll-snap na página para não brigar com o gesto.
 */
export default function SmoothScrolling() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      lerp: 0.085,
      syncTouch: true,
      syncTouchLerp: 0.065,
      touchInertiaExponent: 1.55,
      wheelMultiplier: 0.92,
      touchMultiplier: 1,
    })

    return () => lenis.destroy()
  }, [])

  return null
}
