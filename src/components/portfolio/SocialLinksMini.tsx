import { FaLinkedinIn } from 'react-icons/fa6'
import { SiGithub, SiGmail } from 'react-icons/si'

const githubUrl =
  process.env.NEXT_PUBLIC_GITHUB_URL ?? 'https://github.com/marcosfaquete'
const linkedinUrl =
  process.env.NEXT_PUBLIC_LINKEDIN_URL ?? 'https://www.linkedin.com'
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'seuemail@exemplo.com'

const mailtoHref = `mailto:${encodeURIComponent(contactEmail)}?subject=${encodeURIComponent('Contato via portfólio')}`

const LINKS = [
  {
    key: 'github',
    label: 'GitHub',
    Icon: SiGithub,
    href: githubUrl,
    delayClass: '',
    rowClass:
      'group/social-item flex flex-col items-center gap-2 motion-safe:animate-stack-float',
    iconClass:
      'h-9 w-9 text-white transition-[filter] duration-300 group-hover/social-item:drop-shadow-[0_0_14px_rgba(255,255,255,0.55)] md:h-10 md:w-10',
    captionClass:
      'text-xs font-semibold tracking-wide text-white/55',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    Icon: FaLinkedinIn,
    href: linkedinUrl,
    delayClass: 'motion-safe:delay-150',
    rowClass:
      'group/social-item flex flex-col items-center gap-2 motion-safe:animate-stack-float',
    iconClass:
      'h-9 w-9 text-sky-400 transition-[filter] duration-300 group-hover/social-item:drop-shadow-[0_0_14px_rgba(56,189,248,0.65)] md:h-10 md:w-10',
    captionClass:
      'text-xs font-semibold tracking-wide text-sky-400/80',
  },
  {
    key: 'email',
    label: 'E-mail',
    Icon: SiGmail,
    href: mailtoHref,
    delayClass: 'motion-safe:delay-300',
    rowClass:
      'group/social-item flex flex-col items-center gap-2 motion-safe:animate-stack-float',
    iconClass:
      'h-9 w-9 text-emerald-400 transition-[filter] duration-300 group-hover/social-item:drop-shadow-[0_0_14px_rgba(52,211,153,0.65)] md:h-10 md:w-10',
    captionClass:
      'text-xs font-semibold tracking-wide text-emerald-400/85',
  },
] as const

export function SocialLinksMini() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:justify-start md:gap-8">
      {LINKS.map(
        ({
          key,
          label,
          Icon,
          href,
          rowClass,
          iconClass,
          captionClass,
          delayClass,
        }) => {
          const external = !href.startsWith('mailto:')
          return (
            <a
              key={key}
              href={href}
              {...(external
                ? { target: '_blank' as const, rel: 'noopener noreferrer' }
                : {})}
              className={`${rowClass} ${delayClass} cursor-pointer rounded-lg outline-offset-4 transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500`.trim()}
              aria-label={label}
            >
              <Icon className={iconClass} aria-hidden />
              <span className={captionClass}>{label}</span>
            </a>
          )
        },
      )}
    </div>
  )
}
