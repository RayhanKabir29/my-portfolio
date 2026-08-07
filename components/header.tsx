'use client';

import { User, Mail, Moon, Sun, FolderGit2 } from 'lucide-react';
import Image from 'next/image';
import Logo from '@/assets/images/logo.png';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export function Header({ isDark, onToggleTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d96f3d]/30 bg-[#fff8ef]/95 shadow-sm shadow-[#1c1a17]/8 backdrop-blur-xl dark:border-[#d96f3d]/35 dark:bg-[#fff8ef]/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2.5" aria-label="Home">
          <div className="flex min-h-14 items-center justify-center rounded-xl border border-[#e3cdb2] bg-[#fffaf2] px-3 py-1.5 shadow-sm shadow-[#1c1a17]/10">
            <Image
              src={Logo}
              alt="Rayhan Kabir Software Engineer"
              width={230}
              height={61}
              priority
              className="h-12 w-auto object-contain sm:h-14"
            />
          </div>
        </a>
        <nav className="hidden items-center gap-1 text-sm font-semibold text-[#2a2925]/75 dark:text-[#2a2925]/75 sm:flex">
          <a
            href="#about"
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-colors hover:bg-[#d96f3d]/10 hover:text-[#d96f3d] dark:hover:bg-[#d96f3d]/10 dark:hover:text-[#d96f3d]"
          >
            <User className="h-3.5 w-3.5" />
            About
          </a>
          <a
            href="#projects"
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-colors hover:bg-[#c59a00]/10 hover:text-[#a67d00] dark:hover:bg-[#c59a00]/10 dark:hover:text-[#a67d00]"
          >
            <FolderGit2 className="h-3.5 w-3.5" />
            Projects
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-colors hover:bg-[#2a2925]/10 hover:text-[#2a2925] dark:hover:bg-[#2a2925]/10 dark:hover:text-[#2a2925]"
          >
            <Mail className="h-3.5 w-3.5" />
            Contact
          </a>
        </nav>
        <button
          onClick={onToggleTheme}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#d96f3d]/25 bg-white/80 text-[#2a2925]/75 shadow-sm transition-colors hover:bg-[#d96f3d]/10 hover:text-[#d96f3d] dark:border-[#d96f3d]/25 dark:bg-white/80 dark:text-[#2a2925]/75 dark:hover:bg-[#d96f3d]/10 dark:hover:text-[#d96f3d]"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </div>
    </header>
  );
}
