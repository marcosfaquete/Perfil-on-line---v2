import Image from 'next/image'
import { Activity, GraduationCap, Timer } from 'lucide-react'
import { TechStackMini } from '@/components/portfolio/TechStackMini'

type Props = {
  visitCount: number
}

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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-3 md:gap-5">
          {/* Card 1 — destaque experiência + foto */}
          <div className="group relative flex min-h-[200px] flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] md:col-span-2 md:row-span-2 md:row-start-1 md:col-start-1 md:min-h-0 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="relative shrink-0">
                <div
                  className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-amber-300 via-rose-500 to-violet-600 opacity-30 blur-xl transition-all duration-500 motion-safe:animate-pulse group-hover:opacity-50 group-hover:blur-2xl group-hover:scale-125"
                  aria-hidden
                />
                <div className="relative rounded-full bg-gradient-to-tr from-amber-300 via-rose-500 to-violet-600 p-[3px] shadow-sm">
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
              <Timer
                className="h-8 w-8 shrink-0 text-[#10b981]"
                strokeWidth={1.75}
                aria-hidden
              />
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

          {/* Card 2 — acadêmico */}
          <div className="flex min-h-[160px] flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] md:col-span-2 md:row-start-1 md:col-start-3 md:min-h-0 md:p-7">
            <GraduationCap
              className="h-8 w-8 text-[#10b981]"
              strokeWidth={1.75}
              aria-hidden
            />
            <div>
              <p className="font-sans text-lg font-bold text-white md:text-xl">
                Cursando ADS na Uninter
              </p>
              <p className="mt-2 text-sm text-white/50">
                Análise e Desenvolvimento de Sistemas — base acadêmica alinhada à prática.
              </p>
            </div>
          </div>

          {/* Card 3 — visitas */}
          <div className="flex min-h-[160px] flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] md:col-span-2 md:row-start-2 md:col-start-3 md:min-h-0 md:p-7">
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

          {/* Card 4 — stack */}
          <div className="group/stack relative flex min-h-[180px] flex-col justify-center gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-transform duration-300 hover:scale-[1.02] md:col-span-4 md:row-start-3 md:flex-row md:items-center md:justify-between md:px-10 md:py-8">
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl bg-[#10b981] opacity-0 blur-3xl transition-opacity duration-300 group-hover/stack:opacity-20"
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
        </div>
      </div>
    </section>
  )
}
