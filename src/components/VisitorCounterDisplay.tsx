import { Eye } from 'lucide-react'
import { getSiteVisitCount } from '@/lib/site-visits'

export const revalidate = 0

export default async function VisitorCounterDisplay() {
  const count = await getSiteVisitCount()

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-white shadow-[0_0_32px_rgba(0,0,0,0.6)] backdrop-blur-md transition-transform duration-300 hover:scale-105 md:px-3">
      <span className="relative flex h-7 w-7 shrink-0 items-center justify-center">
        <span
          className="absolute h-5 w-5 rounded-full bg-[#10b981]/35 blur-md motion-safe:animate-neon-eye-halo motion-reduce:animate-none motion-reduce:opacity-35"
          aria-hidden
        />
        <span
          className="absolute h-4 w-4 rounded-full border border-[#10b981]/50 motion-safe:animate-ping motion-reduce:animate-none"
          style={{ animationDuration: '2.4s' }}
          aria-hidden
        />
        <Eye
          className="relative z-10 h-[15px] w-[15px] text-[#10b981] motion-safe:animate-neon-eye-glow motion-reduce:animate-none motion-reduce:drop-shadow-[0_0_5px_rgba(16,185,129,0.55)]"
          strokeWidth={2}
          aria-hidden
        />
      </span>
      <div className="flex min-w-0 flex-col gap-px leading-tight">
        <span className="text-[9px] font-semibold uppercase tracking-wider text-white/55">
          Visitas
        </span>
        <span className="font-mono text-xs font-bold tabular-nums text-white md:text-sm">
          {count.toLocaleString('pt-BR')}
        </span>
      </div>
    </div>
  )
}