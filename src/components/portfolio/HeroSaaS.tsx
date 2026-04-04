'use client'

import Link from 'next/link'
import { TypewriterRoles } from '@/components/portfolio/TypewriterRoles'

export function HeroSaaS() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] snap-start snap-always flex-col items-center justify-center px-5 pb-16 pt-28 md:px-10 md:pb-24 md:pt-32"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center md:items-start md:text-left">
        <h1 className="max-w-5xl font-sans text-[clamp(1.75rem,6vw,4.25rem)] font-black leading-[1.05] tracking-tight text-white">
          A experiência do hardware com a potência do código.
        </h1>

        <div className="mt-8 w-full max-w-2xl md:mt-10">
          <TypewriterRoles />
        </div>

        <div className="mt-6 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 backdrop-blur-md md:justify-start">
          <span>📍 Araras - SP</span>
        </div>

        <div className="relative mt-10 md:mt-12">
          <span
            className="absolute -inset-1 rounded-2xl bg-[#10b981]/25 blur-md motion-safe:animate-pulse"
            aria-hidden
          />
          <Link
            href="mailto:seuemail@exemplo.com?subject=Solicita%C3%A7%C3%A3o%20de%20or%C3%A7amento"
            className="relative inline-flex scale-100 rounded-xl border border-[#10b981]/60 bg-[#10b981] px-8 py-4 text-base font-bold text-black shadow-[0_0_32px_rgba(16,185,129,0.45)] transition-all duration-300 hover:scale-105 hover:border-[#10b981] hover:bg-[#34d399] hover:shadow-[0_0_48px_rgba(16,185,129,0.65)] active:scale-[1.02]"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </div>
    </section>
  )
}
