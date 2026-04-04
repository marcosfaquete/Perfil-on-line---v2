import { getSiteVisitCount } from '@/lib/site-visits'

export const revalidate = 0

export default async function VisitorCounterDisplay() {
  const count = await getSiteVisitCount()

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white shadow-[0_0_32px_rgba(0,0,0,0.6)] backdrop-blur-md transition-transform duration-300 hover:scale-105 md:px-4">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10b981]" />
      </span>
      <span className="font-mono text-[#10b981] tabular-nums">{count}</span>
      <span className="hidden text-white/50 sm:inline">Visualizações</span>
    </div>
  )
}