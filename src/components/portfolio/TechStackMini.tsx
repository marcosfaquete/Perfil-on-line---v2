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
    rowClass:
      'group/next flex cursor-default flex-col items-center gap-2 transition-transform duration-300 group-hover/next:-translate-y-2',
    iconClass:
      'h-9 w-9 text-zinc-600 transition-colors duration-300 group-hover/next:text-white md:h-10 md:w-10',
    captionClass:
      'text-xs font-semibold tracking-wide text-white/45 transition-colors duration-300 group-hover/next:text-white/70',
  },
  {
    key: 'tailwind',
    label: 'Tailwind',
    Icon: SiTailwindcss,
    rowClass:
      'group/tailwind flex cursor-default flex-col items-center gap-2 transition-transform duration-300 group-hover/tailwind:-translate-y-2',
    iconClass:
      'h-9 w-9 text-zinc-600 transition-colors duration-300 group-hover/tailwind:text-sky-400 md:h-10 md:w-10',
    captionClass:
      'text-xs font-semibold tracking-wide text-white/45 transition-colors duration-300 group-hover/tailwind:text-sky-300/80',
  },
  {
    key: 'typescript',
    label: 'TypeScript',
    Icon: SiTypescript,
    rowClass:
      'group/typescript flex cursor-default flex-col items-center gap-2 transition-transform duration-300 group-hover/typescript:-translate-y-2',
    iconClass:
      'h-9 w-9 text-zinc-600 transition-colors duration-300 group-hover/typescript:text-blue-600 md:h-10 md:w-10',
    captionClass:
      'text-xs font-semibold tracking-wide text-white/45 transition-colors duration-300 group-hover/typescript:text-blue-400/90',
  },
  {
    key: 'supabase',
    label: 'Supabase',
    Icon: SiSupabase,
    rowClass:
      'group/supabase flex cursor-default flex-col items-center gap-2 transition-transform duration-300 group-hover/supabase:-translate-y-2',
    iconClass:
      'h-9 w-9 text-zinc-600 transition-colors duration-300 group-hover/supabase:text-emerald-500 md:h-10 md:w-10',
    captionClass:
      'text-xs font-semibold tracking-wide text-white/45 transition-colors duration-300 group-hover/supabase:text-emerald-400/90',
  },
  {
    key: 'vercel',
    label: 'Vercel',
    Icon: SiVercel,
    rowClass:
      'group/vercel flex cursor-default flex-col items-center gap-2 transition-transform duration-300 group-hover/vercel:-translate-y-2',
    iconClass:
      'h-9 w-9 text-zinc-600 transition-colors duration-300 group-hover/vercel:text-white md:h-10 md:w-10',
    captionClass:
      'text-xs font-semibold tracking-wide text-white/45 transition-colors duration-300 group-hover/vercel:text-white/70',
  },
] as const

export function TechStackMini() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:justify-start md:gap-8">
      {STACK.map(({ key, label, Icon, rowClass, iconClass, captionClass }) => (
        <div key={key} className={rowClass}>
          <Icon className={iconClass} aria-hidden />
          <span className={captionClass}>{label}</span>
        </div>
      ))}
    </div>
  )
}
