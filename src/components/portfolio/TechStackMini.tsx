import {
  SiNextdotjs,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'

const STACK = [
  {
    key: 'next',
    label: 'Next.js',
    Icon: SiNextdotjs,
    delayClass: '',
    rowClass:
      'group/stack-item flex cursor-default flex-col items-center gap-2 motion-safe:animate-stack-float',
    iconClass:
      'h-9 w-9 text-white transition-[filter] duration-300 group-hover/stack-item:drop-shadow-[0_0_14px_rgba(255,255,255,0.55)] md:h-10 md:w-10',
    captionClass:
      'text-xs font-semibold tracking-wide text-white/55',
  },
  {
    key: 'tailwind',
    label: 'Tailwind',
    Icon: SiTailwindcss,
    delayClass: 'motion-safe:delay-150',
    rowClass:
      'group/stack-item flex cursor-default flex-col items-center gap-2 motion-safe:animate-stack-float',
    iconClass:
      'h-9 w-9 text-sky-400 transition-[filter] duration-300 group-hover/stack-item:drop-shadow-[0_0_14px_rgba(56,189,248,0.65)] md:h-10 md:w-10',
    captionClass:
      'text-xs font-semibold tracking-wide text-sky-400/75',
  },
  {
    key: 'typescript',
    label: 'TypeScript',
    Icon: SiTypescript,
    delayClass: 'motion-safe:delay-300',
    rowClass:
      'group/stack-item flex cursor-default flex-col items-center gap-2 motion-safe:animate-stack-float',
    iconClass:
      'h-9 w-9 text-blue-500 transition-[filter] duration-300 group-hover/stack-item:drop-shadow-[0_0_14px_rgba(59,130,246,0.65)] md:h-10 md:w-10',
    captionClass:
      'text-xs font-semibold tracking-wide text-blue-400/80',
  },
  {
    key: 'supabase',
    label: 'Supabase',
    Icon: SiSupabase,
    delayClass: 'motion-safe:delay-500',
    rowClass:
      'group/stack-item flex cursor-default flex-col items-center gap-2 motion-safe:animate-stack-float',
    iconClass:
      'h-9 w-9 text-emerald-500 transition-[filter] duration-300 group-hover/stack-item:drop-shadow-[0_0_14px_rgba(16,185,129,0.65)] md:h-10 md:w-10',
    captionClass:
      'text-xs font-semibold tracking-wide text-emerald-400/85',
  },
  {
    key: 'vercel',
    label: 'Vercel',
    Icon: SiVercel,
    delayClass: 'motion-safe:delay-700',
    rowClass:
      'group/stack-item flex cursor-default flex-col items-center gap-2 motion-safe:animate-stack-float',
    iconClass:
      'h-9 w-9 text-white transition-[filter] duration-300 group-hover/stack-item:drop-shadow-[0_0_14px_rgba(255,255,255,0.55)] md:h-10 md:w-10',
    captionClass:
      'text-xs font-semibold tracking-wide text-white/55',
  },
] as const

export function TechStackMini() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:justify-start md:gap-8">
      {STACK.map(({ key, label, Icon, rowClass, iconClass, captionClass, delayClass }) => (
        <div key={key} className={`${rowClass} ${delayClass}`.trim()}>
          <Icon className={iconClass} aria-hidden />
          <span className={captionClass}>{label}</span>
        </div>
      ))}
    </div>
  )
}
