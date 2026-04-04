import Link from 'next/link';
import { getPortfolioWhatsAppHref } from '@/lib/whatsapp';

const whatsappHref = getPortfolioWhatsAppHref();

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="font-mono text-base font-bold tracking-tight text-white transition-opacity duration-300 hover:opacity-90 md:text-lg"
        >
          MF<span className="text-emerald-500">/</span>DEV
        </Link>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-lg border border-emerald-500/50 bg-emerald-950/30 px-4 py-2.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-500 hover:text-neutral-950 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] md:px-5 md:text-base"
        >
          Falar no WhatsApp
        </a>
      </nav>
    </header>
  );
}
