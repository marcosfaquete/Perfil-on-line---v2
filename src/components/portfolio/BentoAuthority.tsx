import Image from 'next/image'
import { Activity, Code, GraduationCap, Rocket, Timer } from 'lucide-react'
import { SocialLinksMini } from '@/components/portfolio/SocialLinksMini'
import { TechStackMini } from '@/components/portfolio/TechStackMini'

type Props = {
  visitCount: number
}

const cardHoverGlow =
  'transition-all duration-300 hover:scale-[1.02] hover:border-emerald-500 hover:shadow-[0_0_20px_10px_rgba(16,185,129,0.15)]'

const cardEmeraldWash =
  'pointer-events-none absolute inset-0 rounded-2xl bg-[#10b981] opacity-0 blur-3xl transition-opacity duration-300'

export function BentoAuthority({ visitCount }: Props) {
  return (
    <section
      id="autoridade"
      className="flex min-h-[100dvh] snap-start snap-always flex-col justify-center px-5 py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-10 text-center font-sans text-2xl font-black tracking-tight text-white md:mb-12 md:text-left md:text-3xl">
          Autoridade técnica
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-4 md:gap-5">
          {/* Card 1 — destaque experiência + foto */}
          <div
            className={`group relative flex min-h-[200px] flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md ${cardHoverGlow} md:col-span-2 md:row-span-2 md:row-start-1 md:col-start-1 md:min-h-0 md:p-8`}
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
                <div>
                  <p className="font-sans text-6xl font-black tabular-nums tracking-tight text-[#10b981] md:text-7xl lg:text-8xl">
                    34
                  </p>
                  <p className="mt-2 font-sans text-lg font-bold text-white md:text-xl">
                    Anos de Experiência
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — acadêmico + visitas (altura alinhada ao card da esquerda) */}
          <div
            className={`group/right relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md ${cardHoverGlow} md:col-span-2 md:row-span-2 md:row-start-1 md:col-start-3 md:min-h-0 md:p-7`}
          >
            <div
              className={`${cardEmeraldWash} group-hover/right:opacity-20`}
              aria-hidden
            />
            <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-between gap-8">
              <div className="flex min-h-0 flex-1 flex-col justify-start">
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
                    Base sólida em infraestrutura unida à evolução contínua em
                    software.
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-3">
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
                  </div>
                </div>
              </div>
              <div className="flex min-h-0 flex-1 flex-col justify-between">
                <Activity
                  className="h-8 w-8 text-[#10b981]"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-white/45">
                    Visitas em tempo real
                  </p>
                  <p className="mt-2 font-mono text-4xl font-black tabular-nums text-[#10b981] md:text-5xl">
                    {visitCount.toLocaleString('pt-BR')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 — stack */}
          <div
            className={`group/stack relative flex min-h-[180px] flex-col justify-center gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md ${cardHoverGlow} md:col-span-4 md:row-start-3 md:flex-row md:items-center md:justify-between md:px-10 md:py-8`}
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
            className={`group/social relative flex min-h-[180px] flex-col justify-center gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md ${cardHoverGlow} md:col-span-4 md:row-start-4 md:flex-row md:items-center md:justify-between md:px-10 md:py-8`}
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
                no GitHub, LinkedIn ou por e-mail.
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
