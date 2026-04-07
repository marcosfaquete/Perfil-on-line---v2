'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Code, GraduationCap, Rocket, Timer } from 'lucide-react'
import { SocialLinksMini } from '@/components/portfolio/SocialLinksMini'
import { TechStackMini } from '@/components/portfolio/TechStackMini'

const cardHoverGlow =
  'transition-all duration-300 hover:scale-[1.02] hover:border-emerald-500 hover:shadow-[0_0_20px_10px_rgba(16,185,129,0.15)]'

const cardEmeraldWash =
  'pointer-events-none absolute inset-0 rounded-2xl bg-[#10b981] opacity-0 blur-3xl transition-opacity duration-300'

export function BentoAuthority() {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const ratiosRef = useRef(new Map<number, number>())

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(min-width: 1024px)').matches) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const index = Number((entry.target as HTMLDivElement).dataset.cardIndex)
          if (Number.isNaN(index)) continue
          ratiosRef.current.set(index, entry.isIntersecting ? entry.intersectionRatio : 0)
        }

        let nextActive: number | null = null
        let highestRatio = 0

        for (const [index, ratio] of ratiosRef.current.entries()) {
          if (ratio > highestRatio) {
            highestRatio = ratio
            nextActive = index
          }
        }

        setActiveCardIndex(highestRatio > 0 ? nextActive : null)
      },
      {
        rootMargin: '-30% 0px -30% 0px',
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    )

    for (const card of cardRefs.current) {
      if (card) observer.observe(card)
    }

    return () => {
      observer.disconnect()
      ratiosRef.current.clear()
    }
  }, [])

  return (
    <section
      id="autoridade"
      className="flex min-h-[100dvh] flex-col justify-center px-5 py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-10 text-center font-sans text-2xl font-black tracking-tight text-white md:mb-12 md:text-left md:text-3xl">
          Autoridade técnica
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-4 md:gap-5">
          {/* Card 1 — destaque experiência + foto */}
          <div
            ref={(el) => {
              cardRefs.current[0] = el
            }}
            data-card-index={0}
            className={`group relative flex min-h-[200px] flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md ${cardHoverGlow} md:col-span-2 md:row-span-2 md:row-start-1 md:col-start-1 md:min-h-0 md:p-8 ${
              activeCardIndex === 0 ? 'active-mobile-glow' : ''
            }`}
          >
            <div
              className={`${cardEmeraldWash} group-hover:opacity-20`}
              aria-hidden
            />
            <div className="relative z-10 flex min-h-0 flex-1 flex-col">
              <Timer
                className="absolute right-0 top-0 z-20 h-8 w-8 shrink-0 text-[#10b981]"
                strokeWidth={1.75}
                aria-hidden
              />
              <div className="flex flex-1 flex-col items-center justify-center gap-6 px-2 text-center">
                <div className="relative shrink-0">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400 via-teal-400 to-emerald-600 opacity-35 blur-xl transition-all duration-500 motion-safe:animate-pulse group-hover:opacity-55 group-hover:blur-2xl group-hover:scale-125"
                    aria-hidden
                  />
                  <div className="relative rounded-full bg-gradient-to-tr from-emerald-600 via-teal-600 to-emerald-600 p-[3px] shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                    <div className="overflow-hidden rounded-full bg-black p-0.5">
                      <Image
                        src="/perfil.jpg"
                        alt="Marcos Faquete"
                        width={128}
                        height={128}
                        sizes="(max-width: 768px) 96px, 128px"
                        className="h-24 w-24 rounded-full object-cover md:h-32 md:w-32"
                        priority
                      />
                    </div>
                  </div>
                </div>
                <div className="max-w-lg">
                  <p className="font-sans text-4xl font-black tracking-tight text-[#10b981] md:text-5xl">
                    Marcos Faquete - 17 Anos de Experiência
                  </p>
                  <p className="mt-2 text-sm text-zinc-400">
                    De Araras para o mundo: Base sólida em hardware unida à
                    engenharia de software moderna.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — acadêmico + visitas (altura alinhada ao card da esquerda) */}
          <div
            ref={(el) => {
              cardRefs.current[1] = el
            }}
            data-card-index={1}
            className={`group/right relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md ${cardHoverGlow} md:col-span-2 md:row-span-2 md:row-start-1 md:col-start-3 md:min-h-0 md:p-7 ${
              activeCardIndex === 1 ? 'active-mobile-glow' : ''
            }`}
          >
            <div
              className={`${cardEmeraldWash} group-hover/right:opacity-20`}
              aria-hidden
            />
            <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center text-center">
              <div className="flex min-h-0 flex-1 flex-col items-center justify-center">
                <div className="flex flex-col items-center text-center">
                  <GraduationCap
                    className="mx-auto h-8 w-8 shrink-0 text-[#10b981]"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <p className="mt-3 font-sans text-lg font-black text-white md:text-xl">
                    Formação & Especialização
                  </p>
                  <p className="mt-2 font-sans font-bold text-lg text-white">
                    Técnico em Informática (Senac)
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    Base sólida em hardware e infraestrutura unida à evolução
                    contínua em engenharia de software.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <a
                      href="https://cursos.alura.com.br/user/MarcosFaquete"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50"
                    >
                      <Code
                        className="h-3.5 w-3.5 shrink-0 transition-[color,filter] duration-300 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]"
                        strokeWidth={2}
                        aria-hidden
                      />
                      <span className="transition-[color,filter] duration-300 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">
                        Alura
                      </span>
                    </a>
                    <a
                      href="https://app.rocketseat.com.br/me/marcosfaquete"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50"
                    >
                      <Rocket
                        className="h-3.5 w-3.5 shrink-0 transition-[color,filter] duration-300 group-hover:text-purple-400 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                        strokeWidth={2}
                        aria-hidden
                      />
                      <span className="transition-[color,filter] duration-300 group-hover:text-purple-400 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
                        Rocketseat
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 — stack */}
          <div
            ref={(el) => {
              cardRefs.current[2] = el
            }}
            data-card-index={2}
            className={`group/stack relative flex min-h-[180px] flex-col justify-center gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md ${cardHoverGlow} md:col-span-4 md:row-start-3 md:flex-row md:items-center md:justify-between md:px-10 md:py-8 ${
              activeCardIndex === 2 ? 'active-mobile-glow' : ''
            }`}
          >
            <div
              className={`${cardEmeraldWash} group-hover/stack:opacity-20`}
              aria-hidden
            />
            <div className="relative z-10 md:max-w-md">
              <p className="font-sans text-lg font-black text-white md:text-xl">
                Tech stack
              </p>
              <p className="mt-1 text-sm text-white/50">
                Stack principal para produtos web rápidos e escaláveis.
              </p>
            </div>
            <div className="relative z-10 w-full md:w-auto">
              <TechStackMini />
            </div>
          </div>

          {/* Card 5 — redes e contato */}
          <div
            ref={(el) => {
              cardRefs.current[3] = el
            }}
            data-card-index={3}
            className={`group/social relative flex min-h-[180px] flex-col justify-center gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md ${cardHoverGlow} md:col-span-4 md:row-start-4 md:flex-row md:items-center md:justify-between md:px-10 md:py-8 ${
              activeCardIndex === 3 ? 'active-mobile-glow' : ''
            }`}
          >
            <div
              className={`${cardEmeraldWash} group-hover/social:opacity-20`}
              aria-hidden
            />
            <div className="relative z-10 md:max-w-xl lg:max-w-2xl">
              <p className="font-sans text-lg font-black text-white md:text-xl">
                Conectar
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Aberto a projetos, freelas e parcerias em produto digital. Se
                quiser falar de código, carreira ou uma ideia em mente — chama
                no LinkedIn, GitHub ou por e-mail.
              </p>
            </div>
            <div className="relative z-10 w-full md:w-auto">
              <SocialLinksMini />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
