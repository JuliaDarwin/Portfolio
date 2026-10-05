"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { name: "PROJECTS", href: "/projects" },
  { name: "ABOUT", href: "/about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.07] bg-[#08090e]/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-90"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 text-sm font-mono font-bold text-white shadow-md shadow-violet-500/25 ring-1 ring-white/20">
            J
          </span>
          <span className="font-semibold tracking-tight text-zinc-100">
            Julia
            <span className="text-violet-400 transition-colors group-hover:text-cyan-400">
              .
            </span>
          </span>
        </Link>

        {/* Top-Right Navigation Links (Desktop) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 sm:gap-2"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold tracking-widest transition-all duration-200 active:scale-95 ${
                  isActive
                    ? "bg-white/[0.1] text-white shadow-sm ring-1 ring-white/10"
                    : "text-zinc-300 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Let's Talk button serves as Contact */}
          <Link
            href="/contact"
            className={`ml-2 inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-200 active:scale-95 ${
              pathname === "/contact"
                ? "bg-gradient-to-r from-violet-500 to-indigo-500 ring-2 ring-violet-400/50 shadow-violet-500/35"
                : "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-violet-500/20 hover:shadow-violet-500/35"
            }`}
          >
            <span>Let&apos;s Talk</span>
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:bg-white/[0.08] hover:text-white md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/[0.07] bg-[#0c0d14]/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold tracking-wider transition ${
                    isActive
                      ? "bg-white/[0.1] text-white"
                      : "text-zinc-300 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md shadow-violet-500/20"
            >
              Let&apos;s Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
