'use client'

import { useEffect, useState } from 'react'

const PHRASES = [
  'Técnico em Informática Sênior',
  'Desenvolvedor Full Stack',
  'Especialista em Next.js & Supabase',
] as const

export function TypewriterRoles() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = PHRASES[phraseIndex]

    if (!deleting && display === full) {
      const pause = window.setTimeout(() => setDeleting(true), 2200)
      return () => window.clearTimeout(pause)
    }

    if (deleting && display.length === 0) {
      setDeleting(false)
      setPhraseIndex((i) => (i + 1) % PHRASES.length)
      return
    }

    const speed = deleting ? 28 : 42
    const tick = window.setTimeout(() => {
      if (!deleting) {
        setDisplay(full.slice(0, display.length + 1))
      } else {
        setDisplay(full.slice(0, Math.max(0, display.length - 1)))
      }
    }, speed)

    return () => window.clearTimeout(tick)
  }, [display, deleting, phraseIndex])

  return (
    <p className="min-h-[1.35em] text-center font-sans text-base font-medium text-white/80 md:text-left md:text-lg lg:text-xl">
      <span className="text-[#10b981]">{display}</span>
      <span
        className="ml-0.5 inline-block h-[1.1em] w-0.5 translate-y-0.5 animate-pulse bg-[#10b981]"
        aria-hidden
      />
    </p>
  )
}
