'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, Home, LogOut, UserRound } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface HeaderUser {
  email: string;
  name?: string;
  nick?: string;
}

export default function Header() {
  const router = useRouter();
  const [user, setUser] = useState<HeaderUser | null>(null);

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setUser(null);
        return;
      }

      setUser({
        email: user.email ?? '',
        name: (user.user_metadata as any)?.name,
        nick: (user.user_metadata as any)?.nick,
      });
    }

    loadUser();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    setUser(null);
    router.push('/login');
  }

  const displayName =
    user?.nick || user?.name || (user?.email ? user.email.split('@')[0] : '');

  return (
    <header className="fixed top-0 z-[60] w-full border-b border-white/10 bg-black/50 shadow-[0_8px_32px_rgba(0,0,0,0.65)] backdrop-blur-md">
      <nav className="px-4 py-4 md:px-8 md:py-5">
        <div className="flex items-center justify-between gap-3">
          <ul className="flex flex-wrap items-center gap-4 md:gap-8 lg:gap-12">
            <li>
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:text-[#10b981] hover:drop-shadow-[0_0_12px_rgba(16,185,129,0.5)] md:text-base"
              >
                <Home className="h-4 w-4 text-[#10b981] md:h-5 md:w-5" aria-hidden />
                Ínicio
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="flex items-center gap-2 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:text-[#10b981] hover:drop-shadow-[0_0_12px_rgba(16,185,129,0.5)] md:text-base"
              >
                <UserRound className="h-4 w-4 text-[#10b981] md:h-5 md:w-5" aria-hidden />
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="flex items-center gap-2 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:text-[#10b981] hover:drop-shadow-[0_0_12px_rgba(16,185,129,0.5)] md:text-base"
              >
                <BookOpen className="h-4 w-4 text-[#10b981] md:h-5 md:w-5" aria-hidden />
                Blog
              </Link>
            </li>
          </ul>

          {user ? (
            <div className="flex items-center gap-2 text-sm text-white md:gap-3">
              <div className="max-w-[140px] rounded-xl border border-white/10 bg-white/5 px-2 py-2 text-right backdrop-blur-md sm:max-w-[200px] md:max-w-none md:px-3">
                <p className="truncate text-xs font-bold text-[#10b981] md:text-sm">
                  {displayName || 'Usuário'}
                </p>
                <p className="truncate text-[10px] text-white/50 md:text-xs">
                  {user.email}
                </p>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-[10px] font-bold text-white/80 transition-all duration-300 hover:scale-105 hover:border-red-500/40 hover:text-red-400 md:px-3 md:text-xs"
              >
                <LogOut className="h-3.5 w-3.5" aria-hidden />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          ) : (
            <ul className="flex items-center gap-2 md:gap-3">
              <li>
                <Link
                  href="/login"
                  className="rounded-lg px-2 py-1.5 text-xs font-bold text-white transition-all duration-300 hover:scale-105 hover:text-[#10b981] hover:drop-shadow-[0_0_12px_rgba(16,185,129,0.45)] md:px-3 md:text-sm"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="inline-block rounded-lg border border-[#10b981]/50 bg-transparent px-3 py-1.5 text-xs font-bold text-[#10b981] transition-all duration-300 hover:scale-105 hover:bg-[#10b981]/10 hover:shadow-[0_0_24px_rgba(16,185,129,0.35)] md:px-4 md:py-2 md:text-sm"
                >
                  Cadastrar
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
