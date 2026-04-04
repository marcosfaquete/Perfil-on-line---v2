import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  { slug: '1', title: 'Projeto 1', href: '#' },
  { slug: '2', title: 'Projeto 2', href: '#' },
  { slug: '3', title: 'Projeto 3', href: '#' },
] as const

export function ProjectsFeed() {
  return (
    <section
      id="projetos"
      className="flex min-h-[100dvh] snap-start snap-always flex-col justify-center px-5 py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-10 font-sans text-2xl font-black tracking-tight text-white md:mb-12 md:text-3xl">
          Projetos selecionados
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={p.href}
              className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-none backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#10b981]/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-black to-neutral-900 grayscale transition-all duration-500 group-hover:grayscale-0"
                  aria-hidden
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-100 transition-opacity duration-300 group-hover:bg-black/20">
                  <span className="flex items-center gap-2 rounded-xl border border-white/20 bg-black/60 px-4 py-2.5 text-sm font-bold text-white opacity-0 shadow-[0_0_24px_rgba(16,185,129,0.35)] backdrop-blur-sm transition-all duration-300 group-hover:border-[#10b981]/60 group-hover:text-[#10b981] group-hover:opacity-100">
                    Ver Detalhes
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>
              </div>
              <div className="border-t border-white/10 p-5">
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-1 font-mono text-xs text-white/45">Em construção</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
